'use strict';
const content = window.PORTFOLIO;
const $ = (id) => document.getElementById(id);
const make = (tag, text, className) => {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
};
function safeUrl(value) {
  try {
    const url = new URL(value, location.href);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
  } catch { return ''; }
}
function externalLink(url, text) {
  const node = make('a', text);
  node.href = safeUrl(url) || '#';
  node.target = '_blank';
  node.rel = 'noopener noreferrer';
  return node;
}
function tags(items = []) {
  const list = make('ul', '', 'tags');
  list.setAttribute('aria-label', 'Tools used');
  items.forEach(item => list.append(make('li', item)));
  return list;
}
function thumbnail(src, alt) {
  const img = make('img', '', 'thumbnail');
  img.src = safeUrl(src);
  img.alt = alt;
  img.loading = 'lazy';
  img.width = 640;
  img.height = 360;
  return img;
}
function empty(container, text) { container.append(make('div', text, 'empty-state')); }
const site = content.site;
$('name').textContent = site.name;
$('job-title').textContent = site.title;
$('tagline').textContent = site.tagline;
site.about.forEach(text => $('about-content').append(make('p', text)));
$('contact-copy').textContent = site.contact;
$('email-button').href = `mailto:${site.email}`;
$('email-button').textContent = site.email;
$('copyright').textContent = `© ${new Date().getFullYear()} ${site.name}`;
document.title = `${site.name} | ${site.title}`;
for (const [selector, value] of [
  ['meta[name="description"]', site.description],
  ['meta[property="og:title"]', document.title],
  ['meta[property="og:description"]', site.description],
  ['meta[property="og:url"]', site.url],
  ['meta[name="twitter:title"]', document.title],
  ['meta[name="twitter:description"]', site.description]
]) document.querySelector(selector).content = value;
const schema = make('script');
schema.type = 'application/ld+json';
schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: site.name, jobTitle: site.title, url: site.url, sameAs: [site.linkedin, ...site.socials.map(s => s.url)].filter(Boolean) });
document.head.append(schema);
const iconPaths = {
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4"/>',
  email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>'
};
for (const social of [{ label: 'LinkedIn', url: site.linkedin, icon: 'linkedin' }, { label: 'Email', url: `mailto:${site.email}`, icon: 'email' }, ...site.socials]) {
  const link = social.icon === 'email' ? make('a') : externalLink(social.url, '');
  if (social.icon === 'email') link.href = social.url;
  link.setAttribute('aria-label', social.label);
  link.title = social.label;
  if (iconPaths[social.icon]) link.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[social.icon]}</svg>`;
  else link.textContent = social.label;
  $('socials').append(link);
}
if (!content.experience.length) empty($('experience-content'), 'Experience coming soon');
content.experience.forEach(item => {
  const entry = make('article', '', 'entry');
  entry.append(make('p', item.dates, 'entry-meta'), make('h3', `${item.title} · ${item.company}`), make('p', item.description), tags(item.tools));
  $('experience-content').append(entry);
});
// A missing PDF stays disabled; uploading a real PDF enables it on the next visit.
async function checkResume() {
  try {
    const response = await fetch('resume.pdf', { cache: 'no-store' });
    if (!response.ok) return;
    const reader = response.body.getReader();
    const first = await reader.read();
    await reader.cancel();
    if (!first.value || new TextDecoder().decode(first.value.slice(0, 5)) !== '%PDF-') return;
    const link = externalLink('resume.pdf', 'View Full Résumé ↗');
    $('resume').replaceChildren(link);
  } catch { /* Keep the accessible disabled state when no PDF is available. */ }
}
checkResume();
// Keep the visitor's message in place if delivery fails.
$('contact-form').addEventListener('submit', async event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity() || $('send-message').disabled) return;
  if ($('contact-website').value) return;
  const button = $('send-message');
  const status = $('contact-status');
  button.disabled = true;
  button.textContent = 'Sending…';
  status.textContent = '';
  status.removeAttribute('data-error');
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
      signal: AbortSignal.timeout(15000)
    });
    const result = await response.json();
    if (!response.ok || result.errors) throw new Error('Message not accepted');
    status.textContent = 'Thanks—your message has been sent. I’ll reply by email.';
    form.reset();
  } catch {
    status.dataset.error = 'true';
    status.textContent = 'Your message could not be sent. Please try again or copy my email address below. Your message is still here.';
  } finally {
    button.disabled = false;
    button.textContent = 'Send message ↗';
  }
});
$('copy-email').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(site.email);
    $('copy-status').textContent = 'Email address copied.';
  } catch {
    $('copy-status').textContent = 'Select and copy the email address above.';
  }
});
function loomEmbed(value) {
  try {
    const url = new URL(value);
    if (!['loom.com', 'www.loom.com'].includes(url.hostname)) return '';
    const match = url.pathname.match(/^\/(?:share|embed)\/([a-zA-Z0-9]+)\/?$/);
    return match ? `https://www.loom.com/embed/${match[1]}?hide_owner=true&hide_share=true&hide_title=true` : '';
  } catch { return ''; }
}
let projectTrigger;
const projectDialog = $('project-dialog');
const imageDialog = $('image-dialog');
function openProject(project, trigger) {
  projectTrigger = trigger;
  const detail = $('project-detail');
  detail.replaceChildren();
  const title = make('h2', project.title);
  title.id = 'project-title';
  detail.append(title, make('p', project.summary));
  if (project.videos?.length) {
    detail.append(make('p', 'Watch the walkthrough here, then explore the case study below.', 'entry-meta'));
    detail.append(make('h3', 'Watch Demo'));
    project.videos.forEach((video, index) => {
      const url = loomEmbed(video);
      if (!url) { detail.append(make('p', 'This video is unavailable.')); return; }
      const iframe = make('iframe', '', 'video-frame');
      iframe.src = url;
      iframe.title = `${project.title} — demo ${index + 1}`;
      iframe.allow = 'fullscreen; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';
      detail.append(iframe);
    });
  } else {
    detail.append(make('p', 'Demo coming soon. Read the case study below.'));
  }
  for (const [heading, text] of [
    ['The Challenge', project.challenge],
    ['My Approach', project.approach || project.how],
    ['Key Integrations', project.integrations],
    ['The Outcome', project.outcome],
    ['What it does', project.what]
  ]) {
    if (text) detail.append(make('h3', heading), make('p', text));
  }
  if (project.tools?.length) detail.append(make('h3', 'Tools used'), tags(project.tools));
  if (project.images?.length) {
    detail.append(make('h3', 'Gallery'));
    const gallery = make('div', '', 'gallery');
    project.images.forEach(image => {
      const button = make('button');
      button.type = 'button';
      button.setAttribute('aria-label', `Enlarge: ${image.alt}`);
      button.append(thumbnail(image.src, image.alt));
      button.addEventListener('click', () => {
        $('enlarged-image').src = safeUrl(image.src);
        $('enlarged-image').alt = image.alt;
        imageDialog.showModal();
      });
      gallery.append(button);
    });
    detail.append(gallery);
  }
  projectDialog.showModal();
  projectDialog.scrollTop = 0;
}
if (!content.projects.length) empty($('projects-content'), 'Projects coming soon');
content.projects.forEach(project => {
  const button = make('button', '', 'project-card entry');
  button.type = 'button';
  button.setAttribute('aria-haspopup', 'dialog');
  if (project.thumbnail) button.append(thumbnail(project.thumbnail, project.thumbnailAlt || project.title));
  button.append(make('h3', project.title), make('p', project.summary), tags(project.tools));
  const hasDemo = project.videos?.some(video => loomEmbed(video));
  button.append(make('span', hasDemo ? 'Watch demo & read case study →' : 'Read case study →', 'project-action'));
  if (!hasDemo) button.append(make('span', 'Demo coming soon', 'demo-status'));
  button.setAttribute('aria-label', hasDemo ? `Watch demo and read case study: ${project.title}` : `Read case study: ${project.title}`);
  button.addEventListener('click', () => openProject(project, button));
  $('projects-content').append(button);
});
$('close-project').addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('close', () => {
  $('project-detail').replaceChildren(); // Stop playback when the view closes.
  projectTrigger?.focus();
});
$('close-image').addEventListener('click', () => imageDialog.close());
for (const dialog of [projectDialog, imageDialog]) dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
if (!content.writing.length) empty($('writing-content'), 'Writing coming soon');
content.writing.forEach(item => {
  const link = externalLink(item.url, '');
  link.className = 'entry writing-link';
  if (item.thumbnail) link.append(thumbnail(item.thumbnail, item.thumbnailAlt || item.title));
  link.append(make('p', `${item.year} · ${item.platform}`, 'entry-meta'), make('h3', `${item.title} ↗`));
  $('writing-content').append(link);
});
const sections = [...document.querySelectorAll('main > section')];
const navLinks = [...document.querySelectorAll('nav a')];
let queued = false;
function updateNavigation() {
  const marker = window.innerHeight * 0.3;
  let current = sections[0];
  for (const section of sections) if (section.getBoundingClientRect().top <= marker) current = section;
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = sections.at(-1);
  navLinks.forEach(link => { if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  queued = false;
}
window.addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(updateNavigation); } }, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();
