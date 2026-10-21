// Approved portfolio content. Edit this file to update the website.
window.PORTFOLIO = {
  "site": {
    "name": "Mustapha Musdhaliph Mofe",
    "title": "Business Automation & AI Implementation Specialist",
    "tagline": "I turn manual business processes into intelligent, automated systems.",
    "email": "MMusdhaliph@gmail.com",
    "linkedin": "https://www.linkedin.com/in/mustapha-musdhaliph",
    "socials": [],
    "url": "https://mofe-ai.vercel.app",
    "description": "AI automation, workflow automation and business process automation by Mustapha Musdhaliph Mofe. Practical AI integration for reliable business operations.",
    "about": [
      "I’m a Business Automation & AI Implementation Specialist. I help businesses replace slow, manual processes with reliable automated systems, giving their teams more time to focus on growth. My work spans sales and marketing operations, including lead handling, follow-ups and campaign workflows, as well as customer onboarding, finance and back-office processes.",
      "I design and implement these systems end to end. I map how the work gets done, identify what should be automated, and build the connections between the tools involved. I integrate AI where it adds practical value and make sure the finished system is something the team can rely on day to day."
    ],
    "contact": "Have a process that takes more time than it should? Let’s talk about how to make it work better."
  },
  "experience": [
    {
      "dates": "2023–Present",
      "title": "Automation Specialist",
      "company": "Innovation Hub",
      "description": "I designed and implemented workflows across internal operations, sales, marketing, and customer support, saving teams an estimated 10–15 hours of manual work per week. I connected business tools to automate data handoffs, built AI-assisted onboarding and support systems, and developed dashboards that cut weekly reporting effort by an estimated 4–6 hours.",
      "tools": [
        "n8n",
        "Zapier",
        "Make",
        "Salesforce",
        "Supabase",
        "OpenAI",
        "Anthropic",
        "Claude Code",
        "Codex"
      ]
    },
    {
      "dates": "2022",
      "title": "Business Operations and Automation Specialist",
      "company": "Digital Planet Solutions",
      "description": "I coordinated automation requirements and cross-functional delivery for marketing and internal operations across e-commerce and technology clients. I maintained CRM workflows for lead handoffs, follow-ups, and segmentation, saving an estimated 6–8 hours per week, and built workflows for influencer sourcing, email content, and social scheduling.",
      "tools": [
        "HubSpot",
        "Zoho",
        "Salesforce",
        "OpenAI",
        "Google Sheets",
        "CRM automation",
        "Process mapping"
      ]
    },
    {
      "dates": "2021–2022",
      "title": "Junior Software Engineer",
      "company": "Medical and Dental Council",
      "description": "I built booking systems and quote forms to support business processes. I also developed responsive web interfaces, dashboards, and reporting features using JavaScript, TypeScript, and REST APIs.",
      "tools": [
        "JavaScript",
        "TypeScript",
        "REST APIs"
      ]
    }
  ],
  "projects": [
    {
      "title": "NovaCore — Lead Handling",
      "summary": "Give sales more than a name and an email address. NovaCore turns website enquiries into researched lead briefings, helping the team decide what deserves attention next.",
      "thumbnail": "images/novacore-thumbnail.png",
      "thumbnailAlt": "Website enquiry, AI research, Slack human review, and Salesforce lead handoff.",
      "tools": [
        "n8n",
        "Supabase",
        "Apollo",
        "OpenAI",
        "Salesforce",
        "Slack"
      ],
      "videos": [
        "https://www.loom.com/share/76d5dcaf63a74fb3bcc03e6d2affd72b"
      ],
      "challenge": "Website enquiries could leave sales with another round of copying details, researching companies, and checking whether a submission had already been handled. I wanted to bring those steps together so the team could focus on the conversation.",
      "approach": "I built a workflow that validated and saved each enquiry before gathering company context and preparing an AI assessment. Fixed rules routed clear cases forward and sent uncertain enquiries to Slack for review. Approved enquiries were recorded in Salesforce, with duplicate protection and internal error alerts supporting the handoff.",
      "integrations": "I used n8n to coordinate the workflow, Supabase for enquiry records, Apollo for company research, OpenAI for assessment, Salesforce for lead handling, and Slack for review and notifications. The recording used a fictional enquiry; its example email skipped the live Apollo lookup, leaving unverified company details unknown.",
      "outcome": "I brought enquiry capture, research, review, and CRM entry into one connected process. I designed it to reduce manual lead entry and give sales a useful briefing before the next conversation, while keeping uncertain cases visible for review."
    },
    {
      "title": "Post-Call Revenue Intelligence",
      "summary": "The call ends, but the admin keeps going. I built a workflow that turns transcripts into Salesforce Tasks and reviewable follow-up drafts, keeping commitments and next steps visible.",
      "thumbnail": "images/postcall-thumbnail.png",
      "thumbnailAlt": "Sales transcript becomes AI insights, a Salesforce Task, and a reviewable Gmail draft.",
      "tools": [
        "n8n",
        "Supabase",
        "Salesforce",
        "OpenAI",
        "Gmail",
        "Slack"
      ],
      "videos": [
        "https://www.loom.com/share/8c11d2564d024b2cac6a1037b499ea4e"
      ],
      "challenge": "A sales call could end with useful commitments still buried in notes or a transcript. I wanted to capture the important details, connect them to the right CRM record, and make follow-up easier to prepare.",
      "approach": "I built a workflow that archived the transcript, matched the attendee in Salesforce, and extracted a summary, action items, objections, and next steps. It logged a Salesforce Task for matched records, created a Gmail draft, and notified the team in Slack. Duplicate checks prevented repeat processing, while a separate error workflow recorded failures and alerted an administrator.",
      "integrations": "I used n8n for orchestration, Supabase for transcripts and structured call intelligence, Salesforce for record matching and Tasks, OpenAI for analysis, Gmail for drafts, and Slack for internal notifications. The walkthrough used an invented conversation and a prepared Salesforce record to show the flow without exposing customer conversations.",
      "outcome": "I brought call notes, agreed actions, and follow-up preparation into the tools the sales team already used. The workflow was designed to reduce repeated data entry and make commitments easier to act on, with the final email kept ready for human review and sending."
    },
    {
      "title": "Meeting Prep AI Agent",
      "summary": "Stop searching across CRM records and old call notes before every meeting. I built an agent that gathers relevant history and prepares a briefing directly in Slack.",
      "thumbnail": "images/meeting-prep-thumbnail.png",
      "thumbnailAlt": "Slack request brings CRM and call history into a meeting briefing.",
      "tools": [
        "n8n",
        "Salesforce",
        "Supabase",
        "OpenAI",
        "Slack"
      ],
      "videos": [],
      "challenge": "Meeting preparation meant searching CRM records, recent activity, and earlier conversations to rebuild the customer relationship. I wanted a quicker way to find outstanding commitments and prepare useful questions before the call.",
      "approach": "I built a Slack-based agent that researched a person or deal after the workflow matched the request in Salesforce. It checked recent Tasks and past-call intelligence, adding contacts, open deals, or earlier briefings when relevant. The workflow checked and saved the briefing before returning it to the requester; ambiguous matches prompted clarification, and failures triggered internal error handling.",
      "integrations": "I used Slack for requests and delivery, Salesforce for customer and deal context, Supabase for past-call intelligence and saved briefings, and OpenAI for research and writing. n8n coordinated the workflow and kept research tied to the matched person or account.",
      "outcome": "I brought commitments, relationship history, risks, and suggested questions into a single saved briefing. The result gave reps a focused starting point for preparation, with missing information clearly identified and customer records left unchanged."
    },
    {
      "title": "Marketing Data Watchtower",
      "summary": "Your ads show conversions, but where are the leads? I built a daily check that compares advertising, website, and CRM numbers and flags gaps for investigation.",
      "thumbnail": "images/marketing-watchtower-thumbnail.png",
      "thumbnailAlt": "Ad conversions, website leads, and CRM receipts compared to detect gaps.",
      "tools": [
        "n8n",
        "Supabase",
        "OpenAI",
        "Slack"
      ],
      "videos": [],
      "challenge": "Marketing numbers could look healthy in one tool while leads disappeared between the website and CRM. I wanted to flag those gaps alongside unusual spend, conversion drops, missing campaign tags, and stale data.",
      "approach": "I built daily checks that compared marketing activity against fixed thresholds and recent performance. An AI agent investigated flagged findings using history and recent changes, then prepared an internal Slack report with evidence and next steps. If AI analysis failed, the workflow kept the detected facts and reported the cause as unknown; separate error handling covered unexpected failures.",
      "integrations": "I used n8n for scheduling, Supabase for source data and findings, OpenAI for investigation, and Slack for reports. This portfolio version used sample data representing Google Ads, Meta Ads, LinkedIn Ads, website forms, and Salesforce; the source layer was designed to accept live feeds.",
      "outcome": "I turned disconnected marketing signals into one report the team could review. The workflow was designed to make potential lead-handoff and tracking problems easier to spot, while giving people the evidence to decide what to investigate or change."
    },
    {
      "title": "Shipment Exception Agent",
      "summary": "A delayed shipment needs more than a tracking alert. I built a workflow that investigates the problem and prepares next steps, plus customer and carrier drafts for review.",
      "thumbnail": "images/shipment-exception-thumbnail.png",
      "thumbnailAlt": "Shipment tracking update becomes an investigation and owner review with message drafts.",
      "tools": [
        "n8n",
        "Supabase",
        "OpenAI",
        "Slack"
      ],
      "videos": [],
      "challenge": "A customs hold, failed delivery, damage report, or delay could leave the shipment owner searching for context before responding. I wanted to connect the tracking history, delivery promise, and possible next steps in one place.",
      "approach": "I built a workflow that validated incoming tracking updates, matched the shipment, and detected events needing attention using fixed priority rules. An AI agent investigated the history and delivery risk, then prepared a recommendation and separate customer and carrier drafts in Slack. Invalid AI output fell back to recorded facts, while a separate error workflow handled processing failures.",
      "integrations": "I used n8n for processing, Supabase for shipment records and history, OpenAI for investigation and drafts, and Slack for internal handoffs. The portfolio version used fictional shipment records representing DHL Express, FedEx, UPS, and Maersk; its webhook intake was designed to receive standardized events from a carrier connection.",
      "outcome": "I brought the delivery issue, relevant history, recommended response, and communication drafts into one handoff. This gave the shipment owner a clearer starting point for action and kept routine tracking updates separate from the problems that needed attention."
    },
    {
      "title": "AP Invoice Investigation Agent",
      "summary": "Catch duplicate invoices and mismatched details before they move forward. This workflow connects incoming PDFs with vendor, purchase-order, and delivery records, giving finance a clear investigation summary.",
      "thumbnail": "images/ap-invoice-thumbnail.png",
      "thumbnailAlt": "Invoice PDF checked against reference records and reported as validated, duplicate, or needing review.",
      "tools": [
        "n8n",
        "Gmail",
        "Google Drive",
        "Supabase",
        "OpenAI",
        "Slack"
      ],
      "videos": [],
      "challenge": "Checking supplier invoices meant comparing PDFs with vendor details, purchase orders, delivery receipts, and internal policy. I wanted to reduce that repeated work while making duplicates, mismatches, and missing information easier to spot.",
      "approach": "I built a workflow that collected labelled invoice PDFs from Gmail, archived the originals in Google Drive, and used an AI agent to extract and investigate their contents. Fixed rules checked totals, prices, quantities, terms, and vendor references before recording validated invoices. Duplicates and uncertain cases received clear outcomes, with audit records, Slack reports, and separate error alerts.",
      "integrations": "I used Gmail for invoice intake, Google Drive for original documents, Supabase for reference and investigation records, OpenAI for extraction and analysis, and Slack for internal reports. n8n connected these steps; selectable-text PDFs were processed, while unreadable documents required review.",
      "outcome": "I brought the original document, reference checks, and investigation outcome into one traceable process. The workflow was designed to reduce manual checking and help finance focus on exceptions, while approval and payment remained with the team."
    }
  ],
  "writing": []
};
