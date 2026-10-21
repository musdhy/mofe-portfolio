# Mofe — personal portfolio

A plain HTML, CSS and JavaScript portfolio for Mustapha Musdhaliph Mofe. No installation, build step, backend or database is needed. All personal content is in **content.js**. Colors are at the top of **styles.css**. No third-party code, assets or libraries are included; the layout is original, with Brittany Chiang's portfolio used only as visual inspiration. The icons and favicon were drawn for this site. The font uses your device's clean sans-serif font (Inter when installed).

## Updating from GitHub

1. Open your **mofe-portfolio** repository in your browser.
2. Click **content.js**, then the pencil button (**Edit this file**).
3. Find the relevant section, make your change, and click **Commit changes**. Write a short description, then confirm the commit to the main branch.
4. Once GitHub is connected to Vercel, each commit starts a deployment automatically. Wait for it to finish, then refresh your site.

Keep `experience`, `projects` and `writing` as `[]` until you have real content. The site shows a clean coming-soon message. The examples below are editing templates only; replace every example value with your real information before saving. Do not paste Markdown fences (the three backticks) into content.js.

## About, contact, tagline and social links

Edit the matching values inside `site` in content.js. Keep each paragraph in `about` as a separate quoted string. Change `tagline` to update the sidebar. Change `contact` for the contact message. `email`, `name`, `title` and `linkedin` update their related parts automatically. If your deployed address changes, update `url` too.

To add a social link later, replace `socials: []` with:

```js
socials: [
  { label: 'GitHub', url: 'https://github.com/YOUR-USERNAME' }
],
```

## Add your first work experience

Replace `experience: []` with this, using your own facts:

```js
experience: [
  {
    dates: '2025 — Present',
    title: 'Your role',
    company: 'Company name',
    description: 'Describe your responsibilities and the work you actually did.',
    tools: ['Tool one', 'Tool two']
  }
],
```

For more entries, add a comma after the closing `}` of an entry, then paste another object before the closing `]`. Entries appear in the order you write them; put the newest first.

## Upload your résumé

1. Return to the main repository folder (beside index.html).
2. Click **Add file → Upload files**.
3. Upload your actual PDF with the exact lowercase name **resume.pdf**.
4. Commit your change. After deployment, reload the site.

The site checks the actual PDF signature. Until a valid file exists, it displays disabled text, **Résumé coming soon**. Once uploaded, **View Full Résumé** opens the PDF in a new tab. A missing file never becomes a broken visitor link. A missing-file check may appear as a 404 network request in browser developer tools; it is handled by the site.

## Add a project

Replace `projects: []` with:

```js
projects: [
  {
    title: 'Your project title',
    summary: 'A short, factual description of the project.',
    challenge: 'Explain the problem this project addressed.',
    approach: 'Explain how you built it. Use \\n for paragraph breaks.',
    integrations: 'Name the integrations and distinguish demo data from live connections.',
    outcome: 'Describe the result without inventing metrics.',
    tools: ['Tool one', 'Tool two'],
    thumbnail: '',
    thumbnailAlt: '',
    videos: [],
    images: []
  }
],
```

There is no project limit. To go from 8 projects to 10 or beyond, paste more project objects inside the same array, separated by commas. Cards with a supported Loom video show **Watch Demo** and open a recorded demonstration, followed by The Challenge, Our Approach, Key Integrations and The Outcome. They do not open a usable live application. Cards without a recording show **Demo coming soon** and still open the case study. Older `what` and `how` fields remain supported. The Back button and Escape key close the dialog.

### Edit an existing project

Find its title in content.js and change only the text or tools you need. Keep the surrounding quotes, braces and commas. Add or remove quoted tool names inside `tools`.

### Add or change Loom videos

Make sure your Loom videos permit visitors to watch them and allow embedding. Replace the project's `videos: []` with:

```js
videos: [
  'https://www.loom.com/share/YOUR-FIRST-VIDEO-ID',
  'https://www.loom.com/share/YOUR-SECOND-VIDEO-ID'
],
```

Paste normal Loom share links; the site automatically converts them to embedded players. You do not need iframe code. Replace a URL to change a video. Add another quoted URL with a comma to add a video. Each player stays in the project view; closing the view stops playback. Loom's own player controls and playback availability are controlled by Loom. Private, deleted or embedding-restricted recordings will not play for visitors.

### Upload project images

1. Use lowercase names without spaces, such as `workflow-overview.webp`.
2. From the main repository, choose **Add file → Create new file**. Name it `images/your-project/.gitkeep`, leave the file empty, and commit. This creates the folder.
3. Open `images/your-project`, choose **Add file → Upload files**, upload your pictures and commit.
4. Edit the matching project in content.js:

```js
thumbnail: 'images/your-project/workflow-overview.webp',
thumbnailAlt: 'Describe the project thumbnail',
videos: [],
images: [
  {
    src: 'images/your-project/workflow-overview.webp',
    alt: 'Describe what this image shows'
  },
  {
    src: 'images/your-project/second-image.webp',
    alt: 'Describe the second image'
  }
]
```

Each gallery image opens larger when clicked. Escape or Close returns to the project. Use compressed WebP or JPG where possible. Keep `thumbnail: ''` and `images: []` when you do not have images.

### Delete a project

Remove its entire object, from its opening `{` through its closing `}`, and remove an adjacent comma if needed. Leave other entries intact. If you remove every project, leave `projects: []`. Image files can remain; they do not show unless referenced.

## Add or edit Writing

Replace `writing: []` with:

```js
writing: [
  {
    year: '2026',
    title: 'Your article title',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/your-article-link',
    thumbnail: '',
    thumbnailAlt: ''
  }
]
```

Paste the full article URL, including `https://`. All articles open in a new tab. Add more objects with commas. Thumbnails are optional; use an uploaded image path and meaningful alternative text if you add one.

## Change the colors

At the very top of styles.css, edit only the four palette variables:

```css
--background: #0b0d10;
--text: #e6e8eb;
--muted: #8b93a1;
--accent: #7aa2ff;
```

Borders and surfaces derive from these colors. Keep text readable against the background. The favicon is a separate SVG asset, so edit its fill colors as well if you want its colors to match a new palette.

## Contact form

The contact form posts to Formspree's Mofe Portfolio Contact form and delivers notifications to mmusdhaliph@gmail.com. Visitors see an on-page success or error message. Failed requests preserve their text. The email link and copy-email button remain available as alternatives. See CONTACT-SETUP.md for the endpoint and verification record. No private API key is required.

## Common mistakes

- Separate entries and fields with commas. Use straight quotes, not curly word-processor quotes.
- Keep brackets `[]` around lists and braces `{}` around each entry.
- For apostrophes inside single-quoted text, use `\'` or put the entire text in double quotes.
- Image paths and filenames must match exactly, including lowercase spelling and file extensions. Avoid spaces.
- Paste full Loom share URLs, not the browser's recording editor address.
- Do not rename content.js or remove `window.PORTFOLIO =`.
- If the page looks unchanged, check that the Vercel deployment finished, then refresh.

## Undo a bad edit using GitHub History

1. Open the affected file in GitHub and click **History**.
2. Find the last version that worked, open that commit, and use **View file** to see that version.
3. Copy the old file contents (use **Raw** if helpful).
4. Return to the latest file on the main branch, click the pencil, replace its contents with that working version, and commit with a message such as “Restore working content.”
5. Vercel will deploy the restored version. This creates a new commit and preserves your history.

## Deployment and your own domain

The public repository is https://github.com/musdhy/mofe-portfolio and the Vercel project is **mofe**, connected to its **main** branch. The selected live address is https://mofe-ai.vercel.app because the requested mofe.vercel.app address was unavailable. Commits to main deploy automatically. The framework preset is **Other**, with no build command and the repository root as the output directory. The repository root is the complete static site.

To connect a domain later: open the Vercel project → **Settings → Domains → Add**, enter your domain, and follow Vercel's displayed DNS instructions at your domain registrar. Once verified, update `site.url` in content.js to the new address. Keep GitHub connected so edits continue to deploy automatically.

## Local preview

Serve this folder using any static HTTP server, then open its localhost URL. No package installation or build is necessary. Use an HTTP server rather than opening index.html directly so the résumé check works correctly.
