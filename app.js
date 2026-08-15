const STORAGE_KEY = "gtm-academy-progress-v2";
const SUPABASE_CONFIG = window.GTM_SUPABASE_CONFIG || {};

const icons = {
  arrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>`,
  check: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12l4 4L19 6" /></svg>`,
  external: `<svg class="external-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M10 14L19 5M19 13v6H5V5h6" /></svg>`,
};

const chapters = [
  {
    id: "targeting",
    number: 1,
    kicker: "Targeting",
    minutes: 15,
    title: "Know the client and the buyer",
    outcome: "Understand what the client sells, what it can prove, and who has a reason to care.",
    intro:
      "The client supplies the ICP. Your job is to turn it into targeting rules another operator can apply and defend—not to quietly invent a different market.",
    lessons: [
      {
        title: "Turn the ICP into a decision",
        body: `
          <p>Write down the client's product, target buyer, current problem, promised change, approved proof, and financial value. Then translate the supplied ICP into observable account requirements, target roles, and explicit exclusions.</p>
          <div class="callout"><strong>The four questions</strong>Why this account? Why this person? Why now? Why this client?</div>
          <p>Contact the person who owns the problem, not merely the most senior title. If the ICP is contradictory or incomplete, escalate it to the client. Campaign evidence can support a recommendation, but it never authorizes the operator to redefine the ICP.</p>
        `,
      },
      {
        title: "Control every claim",
        body: `
          <p>Label each claim as <strong>verified</strong>, <strong>supplied by the client</strong>, <strong>hypothesis</strong>, or <strong>unknown</strong>. Unknown claims stay out of the email and become questions for the client.</p>
          <div class="example"><strong>Good targeting</strong>Series A B2B SaaS firms hiring implementation staff; the COO owns delivery capacity.</div>
          <div class="warning"><strong>Weak targeting</strong>Fast-growing companies that want better results.</div>
        `,
      },
    ],
    exercise:
      "Translate the client-supplied ICP into a one-page brief: the offer, approved proof, five account requirements, three exclusions, likely problem owner, one testable idea, and every point that needs client clarification.",
    checklist: [
      "The offer is written in plain language.",
      "Every proof claim has an approved source.",
      "Account must-haves are observable.",
      "Exclusions are explicit.",
      "The recipient owns or influences the problem.",
      "ICP ambiguity is escalated to the client.",
    ],
    quiz: [
      {
        q: "Who owns the ICP used by the campaign?",
        options: ["The operator", "The client", "Clay", "The email recipient"],
        answer: 1,
        explanation: "The client supplies the ICP. The operator makes it usable and escalates ambiguity.",
      },
      {
        q: "What should happen to an unknown claim?",
        options: ["Use it cautiously", "Ask Clay to rewrite it", "Keep it out and ask the client", "Add a disclaimer"],
        answer: 2,
        explanation: "Unknowns become questions. They do not belong in live outreach.",
      },
      {
        q: "Which ICP is operational?",
        options: [
          "Ambitious companies",
          "Fast-growing brands",
          "Series A B2B SaaS firms hiring implementation staff",
          "Businesses that want efficiency",
        ],
        answer: 2,
        explanation: "Operational criteria can be observed, checked, included, or excluded.",
      },
      {
        q: "Who should receive the first outreach?",
        options: ["The CEO every time", "The most active LinkedIn user", "The problem owner", "Any available email"],
        answer: 2,
        explanation: "Problem ownership matters more than seniority alone.",
      },
      {
        q: "Campaign results suggest an ICP change. What may the operator do?",
        options: ["Change it silently", "Recommend a change to the client", "Ignore the results", "Broaden the list automatically"],
        answer: 1,
        explanation: "Results inform a recommendation; the client decides the ICP change.",
      },
    ],
  },
  {
    id: "research",
    number: 2,
    kicker: "Lead sourcing",
    minutes: 17,
    title: "Build the lead list",
    outcome: "Use the ICP to find people, work contact details, and useful research—then decide what still needs work.",
    intro:
      "Tools may find leads and evidence. The human operator owns the keep-or-reject decision and the quality of every fact used.",
    lessons: [
      {
        title: "Use tools as research assistants",
        body: `
          <p>Give Clay or Origami the approved requirements, exclusions, geography, company type, and target roles. Request the person's name, current role, company, work email, contact source, source date, and research that could explain why the person may care.</p>
          <p>Check company fit, current role, address ownership, source quality, freshness, and relevance. Mark each record <code>USE</code>, <code>REFINE</code>, <code>OUTSIDE</code>, or <code>MIX</code>.</p>
        `,
      },
      {
        title: "Fact before inference",
        body: `
          <p>Record the observed fact separately from what you think it may mean. A hiring post is a fact. “They have a broken handoff” is an inference until the buyer confirms it.</p>
          <div class="callout"><strong>Research chain</strong>Source and date → observed fact → cautious inference → relevance to the client's offer.</div>
          <p>Recheck time-sensitive evidence immediately before sending. If deleting the personalized line does not change the reason for contact, it is decoration rather than useful personalization.</p>
        `,
      },
      {
        title: "Apply the creep test",
        body: `
          <p>Use necessary business data. Reject sensitive, intimate, family, medical, political, or obscure personal details merely found by a tool. Public availability does not automatically make information appropriate—or lawful—to use in outreach.</p>
        `,
      },
    ],
    exercise:
      "Review ten people and their research packets. For each, record the source, date, observed fact, inferred priority, offer relevance, and USE / REFINE / OUTSIDE / MIX decision. Reject at least two leads and every item that fails the relevance, freshness, or creep test.",
    checklist: [
      "The client-approved ICP was used.",
      "Current role and work email were checked.",
      "Every fact has a source and date.",
      "Facts are separated from inferences.",
      "Sensitive or creepy details are excluded.",
      "A human made the final keep-or-reject decision.",
    ],
    quiz: [
      {
        q: "What may Clay or Origami provide?",
        options: ["A final email", "Possible leads, contacts, and research", "Campaign approval", "A legal decision"],
        answer: 1,
        explanation: "Tools find possibilities. They do not own the final targeting or send decision.",
      },
      {
        q: "Who decides whether provider research is sufficient?",
        options: ["The provider", "The recipient", "The human operator", "The inbox"],
        answer: 2,
        explanation: "The operator verifies, refines, supplements, or rejects the research.",
      },
      {
        q: "Which is an observed fact?",
        options: ["Their handoff is broken", "They need our service", "They posted two implementation roles Tuesday", "They will buy this quarter"],
        answer: 2,
        explanation: "A dated job posting can be checked. The others are unconfirmed inferences.",
      },
      {
        q: "A tool finds a prospect's family medical detail. What should you do?",
        options: ["Use it subtly", "Reject it", "Ask the client to approve it", "Mention it only on LinkedIn"],
        answer: 1,
        explanation: "Sensitive personal information fails the creep test regardless of availability.",
      },
      {
        q: "What does REFINE mean?",
        options: ["Send immediately", "The record is unusable forever", "Improve the supplied research before deciding", "Rewrite the ICP"],
        answer: 2,
        explanation: "REFINE means the direction may be useful but the evidence needs more work.",
      },
    ],
  },
  {
    id: "writing",
    number: 3,
    kicker: "Writing",
    minutes: 20,
    title: "Write an email worth answering",
    outcome: "Write a short, relevant email that gives the recipient a real reason to reply.",
    intro:
      "The first email earns a response. It is not a product tour, a surveillance report, or a demand for calendar time.",
    lessons: [
      {
        title: "One email, one idea",
        body: `
          <p>Use a plain one-to-four-word subject, one checked observation, one cautious problem hypothesis, one comparable proof point, and one CTA. Keep the message under 110 words and short enough for a phone screen.</p>
          <p>Personalize the business reason, not the biography. Remove fake familiarity, fake <code>Re:</code>, clickbait, flattery, jargon, pressure, and unsupported certainty.</p>
        `,
      },
      {
        title: "Use the CTA hierarchy",
        body: `
          <ol>
            <li>Offer something useful even if the prospect never buys: a benchmark, teardown, comparison, sample, or observation.</li>
            <li>Test interest in that outcome or offer.</li>
            <li>Ask one short problem question when the evidence supports it.</li>
            <li>Ask for a meeting in the first touch only when the trigger or relationship makes it proportionate.</li>
          </ol>
          <div class="callout"><strong>Strong default</strong>“I have a short handoff checklist drawn from similar SaaS teams—useful if I send it?”</div>
        `,
      },
      {
        title: "Control proof and price",
        body: `
          <p>Use proof from a genuinely comparable customer, problem, and result. Never imply causation that the evidence cannot support.</p>
          <p>Do not volunteer price in the cold email or before a demo. If asked, use the founder-approved response or pass the thread to the account owner. Never invent, negotiate, discount, or promise pricing.</p>
          <div class="example"><strong>Good opening</strong>Saw the two implementation roles posted Tuesday. Is reducing sales-to-delivery handoff work on your side?</div>
          <div class="warning"><strong>Weak opening</strong>Loved your leadership post. We have an amazing AI-powered platform. Free for 30 minutes tomorrow?</div>
        `,
      },
    ],
    exercise:
      "Choose ten reviewed leads. Decide whether each packet is enough, needs refinement, needs outside research, or should be combined. Write ten original emails under 110 words. Cite the source and date for each angle and label every CTA OFFER, INTEREST, PROBLEM, or MEETING.",
    checklist: [
      "The message fits on one phone screen.",
      "It uses one verified reason and one problem.",
      "The hypothesis uses proportional language.",
      "The proof is bounded and comparable.",
      "There is one justified CTA.",
      "Price is not volunteered before the demo.",
    ],
    quiz: [
      {
        q: "What is the first email's job?",
        options: ["Close the sale", "Explain every feature", "Earn a response", "Negotiate price"],
        answer: 2,
        explanation: "The first touch earns enough interest for a useful next step.",
      },
      {
        q: "Which is the strongest default cold CTA?",
        options: ["A meeting demand", "A useful offer or interest test", "Three calendar times", "A pricing question"],
        answer: 1,
        explanation: "A useful offer gives the buyer a reason to respond before committing to a meeting.",
      },
      {
        q: "Which subject line should be rejected?",
        options: ["handoff delays", "implementation hiring", "Re: Our Exciting AI Platform!!!", "delivery capacity"],
        answer: 2,
        explanation: "Fake reply framing, hype, and punctuation undermine trust.",
      },
      {
        q: "How should uncertainty appear?",
        options: ["As a firm diagnosis", "With words such as may or often", "It should be hidden", "As a guaranteed ROI"],
        answer: 1,
        explanation: "The strength of the language must match the strength of the evidence.",
      },
      {
        q: "A prospect asks for price. What may the operator do?",
        options: ["Invent a range", "Negotiate by email", "Use the approved response or hand off", "Ignore the question"],
        answer: 2,
        explanation: "Only founder-approved information may be sent; negotiation belongs to the account owner.",
      },
    ],
  },
  {
    id: "replies",
    number: 4,
    kicker: "Replies",
    minutes: 15,
    title: "Handle replies well",
    outcome: "Classify replies, move interested prospects toward a call quickly, and turn campaign results into controlled learning.",
    intro:
      "A positive reply is not a reason to add friction. Answer approved questions, offer the shortest useful next step, and hand real opportunities to the founder or account owner.",
    lessons: [
      {
        title: "Count what happened",
        body: `
          <p>A human reply is one reply from a real person to a delivered email. Exclude autoresponders, bounces, duplicates, delivery notices, and obvious wrong-person noise. Separate positive replies, referrals, objections, negative replies, opt-outs, qualified conversations, and qualified meetings.</p>
          <p>Do not optimize for opens. Privacy protections and remote-content loading make them unreliable. Track delivered → positive reply → meeting booked → meeting held → qualified opportunity.</p>
        `,
      },
      {
        title: "Move to the smallest useful commitment",
        body: `
          <p>After a positive reply, send the approved booking link with specific time windows rather than asking an extra scheduling question. If the person prefers direct coordination, offer two or three times and send the invite.</p>
          <div class="example"><strong>Useful next message</strong>You can choose a time here: [client booking link]. I am free from 5:00 to 6:00 p.m. today too. Would either work?</div>
          <p>Use a live call when diagnosis, trust, coordination, or negotiation benefits from dialogue. Never withhold approved information merely to force a meeting.</p>
        `,
      },
      {
        title: "Follow up and multithread with discipline",
        body: `
          <p>Plan up to nine useful follow-up attempts. Space them out, give each a new reason, and close the loop after the sequence. Stop immediately after a no, opt-out, wrong-person correction, complaint, or channel-specific stop request.</p>
          <p>Contact a second stakeholder only when the role creates a distinct reason to care. Adapt the problem hypothesis, proof, and CTA. Never send identical messages to several people at one account.</p>
        `,
      },
      {
        title: "Run controlled tests",
        body: `
          <p>Report by client-defined segment, campaign, offer, and writer. Change one client-approved variable at a time: segment, trigger, offer, proof, subject, or CTA.</p>
          <div class="callout"><strong>Test record</strong>Variable → cohort and delivered volume → downstream result → interpretation → recommended client decision.</div>
        `,
      },
    ],
    exercise:
      "Classify twelve sample replies and write the next action. Draft a nine-touch plan with dates, channels, new reasons, and stop conditions. Add one role-specific second stakeholder only if justified. Then design one controlled test with a single approved variable, cohort, downstream success metric, and client decision.",
    checklist: [
      "Automated noise is excluded.",
      "A positive reply gets a direct next step.",
      "The booking link is paired with human time windows.",
      "The sequence has clear stop conditions.",
      "A second stakeholder receives role-specific copy.",
      "Open rate is not the primary KPI.",
      "The campaign test changes one approved variable.",
    ],
    quiz: [
      {
        q: "Does an autoresponder count as a human reply?",
        options: ["Yes", "Only during office hours", "No", "Only if it contains a date"],
        answer: 2,
        explanation: "Automated replies are excluded from the human reply metric.",
      },
      {
        q: "What follows a positive reply?",
        options: ["Another qualification email", "A direct approved next step", "A price negotiation", "Nine more touches"],
        answer: 1,
        explanation: "Reduce friction and move to the shortest useful next step.",
      },
      {
        q: "When may a second stakeholder be contacted?",
        options: ["Immediately with the same copy", "Only with a distinct role-specific reason", "Whenever replies are low", "Never"],
        answer: 1,
        explanation: "Multithreading is role-specific, not duplicated volume.",
      },
      {
        q: "Which metric should not be the primary campaign KPI?",
        options: ["Positive replies", "Meetings held", "Qualified opportunities", "Open rate"],
        answer: 3,
        explanation: "Privacy features make open behavior unreliable.",
      },
      {
        q: "A controlled test changes how many variables at once?",
        options: ["One", "Two", "All weak variables", "As many as the writer wants"],
        answer: 0,
        explanation: "Changing one variable makes the learning interpretable.",
      },
    ],
  },
  {
    id: "safety",
    number: 5,
    kicker: "Safety",
    minutes: 12,
    title: "Protect the inbox",
    outcome: "Check identity, infrastructure, consent rules, opt-outs, and suppression before every campaign.",
    intro:
      "A well-written email is still a bad send if the recipient, data, infrastructure, or jurisdiction check fails.",
    lessons: [
      {
        title: "Authenticate and protect reputation",
        body: `
          <p>Use a real sender name, honest subject, working reply path, clear opt-out, and a client-owned approved inbox. Confirm SPF, DKIM, DMARC alignment, TLS, valid DNS, and replies before a campaign. Raise volume slowly and use only small, manually reviewed batches.</p>
          <p>Support one-click unsubscribe where provider or local rules require it. For Gmail, aim to keep the complaint rate below 0.1% and never allow it to reach 0.3% or higher. Do not use fake warm-up conversations or manufactured engagement.</p>
        `,
      },
      {
        title: "Use the jurisdiction gate",
        body: `
          <ul>
            <li><strong>United States:</strong> truthful identity and content, physical address, opt-out instructions, and timely suppression.</li>
            <li><strong>United Kingdom:</strong> distinguish corporate subscribers from sole traders and some partnerships; personal data rules still apply.</li>
            <li><strong>Canada:</strong> generally requires express consent or a valid implied-consent basis, subject to exemptions.</li>
            <li><strong>Australia:</strong> generally requires express or inferred consent, sender identification, and unsubscribe.</li>
            <li><strong>Hong Kong:</strong> identifiable personal data used in direct marketing generally requires prescribed notice and informed consent.</li>
          </ul>
          <div class="warning"><strong>Pause when uncertain</strong>The check follows the recipient's location and subscriber type—not only the agency or client location. Escalate unclear consent, data-source, prior-relationship, or channel questions.</div>
        `,
      },
      {
        title: "Score before sending",
        body: `
          <ul>
            <li>Targeting: 25%</li>
            <li>Evidence quality: 20%</li>
            <li>Business relevance: 20%</li>
            <li>Clarity and brevity: 15%</li>
            <li>Proof: 10%</li>
            <li>CTA: 10%</li>
          </ul>
          <p>A false fact, wrong recipient, unapproved claim, opt-out violation, or compliance failure is an automatic <strong>STOP</strong> regardless of score. Suppression must work across every writer, inbox, channel, and client-approved system.</p>
        `,
      },
      {
        title: "Keep the first touch clean",
        body: `
          <p>Keep the first email mostly plain text. Avoid tracking links, shorteners, redirects, piles of links, and unsolicited files. Use one relevant, trustworthy link only when it helps. Attach a file only when it is expected.</p>
        `,
      },
    ],
    exercise:
      "For five sample emails, check jurisdiction and subscriber type, identity, inbox alignment, data source, consent basis, opt-out process, cross-channel suppression, complaint monitoring, links, and attachments. Score each email and issue a signed SEND or STOP decision.",
    checklist: [
      "Recipient jurisdiction and subscriber type are checked.",
      "Sender identity and reply path are truthful.",
      "SPF, DKIM, DMARC alignment, TLS, and DNS are valid.",
      "Opt-out and one-click requirements are ready.",
      "Suppression works across channels.",
      "Complaint thresholds are monitored.",
      "No fake warm-up or manufactured engagement is used.",
    ],
    quiz: [
      {
        q: "The recipient's jurisdiction is unclear. What should happen?",
        options: ["Use US rules", "Send one test email", "Pause and escalate", "Ask Clay"],
        answer: 2,
        explanation: "Unclear jurisdiction or subscriber type is a stop condition.",
      },
      {
        q: "Which control checks domain alignment?",
        options: ["A subject line", "DMARC", "A booking link", "An autoresponder"],
        answer: 1,
        explanation: "DMARC evaluates alignment with authenticated sending domains.",
      },
      {
        q: "What happens after an opt-out?",
        options: ["Wait for a second request", "Suppress immediately across channels", "Move to LinkedIn", "Delete the only record"],
        answer: 1,
        explanation: "Keep a suppression record so future lists can be screened.",
      },
      {
        q: "Which is an automatic pre-send failure?",
        options: ["A 72-word email", "A plain subject", "A wrong recipient", "A single relevant link"],
        answer: 2,
        explanation: "Wrong recipient, false fact, unapproved claim, suppression breach, or compliance failure means STOP.",
      },
      {
        q: "What is the safest first-touch file approach?",
        options: ["Attach a deck", "Use several tracked links", "Mostly plain text; files only when expected", "Use a URL shortener"],
        answer: 2,
        explanation: "Minimize links and send files only when the recipient expects them.",
      },
    ],
  },
  {
    id: "linkedin",
    number: 6,
    kicker: "LinkedIn",
    minutes: 20,
    title: "Send LinkedIn messages worth answering",
    outcome: "Use LinkedIn manually and professionally without risking the account or ignoring recipient preferences.",
    intro:
      "LinkedIn is a professional network, not a second inbox for duplicated pitches. Choose the right motion, establish trust, and coordinate every touch with the rest of the account plan.",
    lessons: [
      {
        title: "Profile trust comes first",
        body: `
          <p>Use a real person, current photo, accurate role, clear headline, credible About section, relevant proof, and recent professional activity. A recipient should understand who you are, why you are credible, and what will happen if they reply.</p>
          <p>Never use fake profiles, share accounts, or impersonate client employees.</p>
        `,
      },
      {
        title: "Choose the right motion",
        body: `
          <ol>
            <li>Prefer a credible warm introduction when one exists.</li>
            <li>Use a connection request when there is genuine professional context.</li>
            <li>Use InMail for relevant out-of-network outreach when settings allow it.</li>
            <li>Follow or comment first only when you have something substantive to contribute.</li>
          </ol>
          <p>Do not place a sales pitch, booking link, feature list, deck, price, fake compliment, or disguised promotion in a connection request.</p>
        `,
      },
      {
        title: "Write for conversation",
        body: `
          <p>Do not paste the cold email into chat. Use a relevant observation, cautious business hypothesis, and one useful offer or easy question. Keep InMail under roughly 500 characters or 100 words as a practical default. Use a direct subject and state the real reason for writing.</p>
          <div class="example"><strong>Good first DM</strong>Noticed the implementation hiring push. Teams at that stage often find sales-to-delivery context gets lost. I have a short handoff checklist from similar SaaS teams—useful if I send it here?</div>
          <div class="warning"><strong>Weak first DM</strong>Thanks for connecting! We are an AI-powered industry-leading platform. Are you free for a demo tomorrow?</div>
          <p>Do not send a calendar link until the person shows interest or asks to schedule.</p>
        `,
      },
      {
        title: "Follow up without becoming noise",
        body: `
          <p>Use a small, finite number of follow-ups. Each must add context, evidence, or a simpler question. Do not message immediately after every profile view, like, or connection acceptance.</p>
          <p>Coordinate LinkedIn, email, and calls so the buyer does not receive duplicated pitches on the same day. Once interest is clear, use the buyer's preferred next step and hand selling questions to the founder or account owner.</p>
        `,
      },
      {
        title: "Protect the person and the account",
        body: `
          <p>No bots, scraping extensions, automated invitations, automated DMs, fake engagement, or account sharing. LinkedIn may restrict accounts for unauthorized tools, repeated invitations, ignored invitations, or spam reports.</p>
          <p>Treat DMs as potentially regulated electronic marketing. Apply the same jurisdiction, identity, data-minimization, opt-out, and suppression checks used for email. A stop on LinkedIn applies across every channel.</p>
          <div class="callout"><strong>Measure quality</strong>Track acceptance, human replies, positive replies, referrals, meetings held, qualified opportunities, opt-outs or reports, and account warnings—not raw DM volume.</div>
        `,
      },
    ],
    exercise:
      "For one approved lead, choose the correct motion and write a connection note, first DM, InMail, and two value-adding follow-ups without duplicating the email. Include the source and date, stop conditions, and handoff point.",
    checklist: [
      "The profile is real, accurate, and credible.",
      "The outreach motion matches the relationship.",
      "The message uses relevant professional context.",
      "There is one useful offer or easy question.",
      "No booking link appears before interest.",
      "Follow-up is finite and coordinated across channels.",
      "No automation, scraping, fake engagement, or account sharing is used.",
      "Jurisdiction and shared suppression are checked.",
    ],
    quiz: [
      {
        q: "A credible mutual connection exists. What is the best first path?",
        options: ["Automated DM", "Warm introduction", "Connection request with a pitch", "Cold calendar link"],
        answer: 1,
        explanation: "A credible warm introduction is the strongest available context.",
      },
      {
        q: "What belongs in a connection request?",
        options: ["A deck", "A calendar link", "The real professional context", "A feature list"],
        answer: 2,
        explanation: "The invitation establishes context; it is not the place for a pitch.",
      },
      {
        q: "What is a practical InMail length default?",
        options: ["500 words", "Roughly 500 characters or 100 words", "One full sales deck", "No limit"],
        answer: 1,
        explanation: "Brief, direct messages are easier to understand and answer.",
      },
      {
        q: "May an operator use a browser extension to automate invitations?",
        options: ["Yes, if volume is low", "Yes, if the client agrees", "No", "Only on weekends"],
        answer: 2,
        explanation: "Unauthorized scraping and automation violate LinkedIn rules and the Academy's manual-only model.",
      },
      {
        q: "A prospect opts out on LinkedIn. What happens to email outreach?",
        options: ["It continues", "It pauses for one day", "The person is suppressed across channels", "It moves to a colleague"],
        answer: 2,
        explanation: "A stop request applies across LinkedIn, email, calls, and approved client systems.",
      },
    ],
  },
];

const resources = [
  ["How to Get Your First Customers", "Y Combinator", "https://www.youtube.com/watch?v=hyYCn_kAngI", "customers sales"],
  ["The complete outbound guide", "Origami", "https://origami.chat/guide", "research outbound"],
  ["GTM guide library", "Clay", "https://www.clay.com/guides", "research leads"],
  ["How To Convert Customers With Cold Emails", "Y Combinator", "https://www.youtube.com/watch?v=7Kh_fpxP1yY", "writing email"],
  ["Founding Sales", "Pete Kazanjy", "https://www.foundingsales.com/", "sales fundamentals"],
  ["Email sender guidelines", "Google", "https://support.google.com/mail/answer/81126", "deliverability authentication"],
  ["CAN-SPAM compliance guide", "FTC", "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business", "legal united states"],
  ["B2B marketing guidance", "UK ICO", "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing/", "legal united kingdom linkedin"],
  ["CASL guidance", "CRTC", "https://crtc.gc.ca/eng/com500/guide.htm", "legal canada"],
  ["Avoid sending spam", "ACMA", "https://www.acma.gov.au/avoid-sending-spam", "legal australia"],
  ["Direct-marketing case guidance", "Hong Kong PCPD", "https://www.pcpd.org.hk/english/enforcement/case_notes/casenotes_2.php?content_nature=&content_type=5&id=2023E03&msg_id2=575", "legal hong kong"],
  ["Professional Community Policies", "LinkedIn", "https://www.linkedin.com/legal/professional-community-policies", "linkedin policy"],
  ["Prohibited software and extensions", "LinkedIn", "https://www.linkedin.com/help/linkedin/answer/a1341387/prohibited-software-and-extensions", "linkedin automation"],
  ["Invitation restrictions", "LinkedIn", "https://www.linkedin.com/help/linkedin/answer/a551012/types-of-restrictions-for-sending-invitations", "linkedin invitations"],
  ["Strong InMail guidance", "LinkedIn", "https://www.linkedin.com/business/sales/blog/inmail/what-a-strong-linkedin-inmail-template-looks-like", "linkedin messages"],
  ["Mail Privacy Protection", "Apple", "https://www.apple.com/legal/privacy/data/en/mail-privacy-protection/", "open rate privacy"],
];

const practicumFields = [
  ["targeting-brief", "Targeting brief", "Offer, approved proof, account requirements, exclusions, problem owner, and client questions."],
  ["reviewed-leads", "Ten reviewed leads", "Sources, dates, observed facts, cautious inferences, operator decisions, and rejected records."],
  ["original-emails", "Ten original emails", "Human-written messages with evidence, source dates, and CTA types."],
  ["reply-learning", "Reply handling and learning", "Reply classification, next responses, stop conditions, multithreading, and one controlled test."],
  ["pre-send", "Pre-send checks", "Identity, authentication, jurisdiction, subscriber type, data source, opt-outs, suppression, and scored review."],
  ["linkedin-set", "LinkedIn outreach set", "Chosen motion, connection note, first DM, InMail, two follow-ups, stop conditions, and handoff."],
];

const defaultState = {
  passed: {},
  scores: {},
  answers: {},
  drafts: {},
  tabs: {},
  practicum: {},
  learnerName: "",
  bookmarks: [],
};

let state = loadState();
let toastTimer;
let supabaseClient = null;
let activeUser = null;
let currentProfile = null;
let userIsAdmin = false;
let syncTimer;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultState, ...saved };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateHeaderProgress();
  queueCloudSync();
}

function saveLocalState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateHeaderProgress();
}

function completedCount() {
  return chapters.filter((chapter) => state.passed[chapter.id]).length;
}

function updateHeaderProgress() {
  const count = completedCount();
  const percent = (count / chapters.length) * 100;
  document.getElementById("header-progress-label").textContent = `${count} of ${chapters.length} complete`;
  document.getElementById("header-progress-bar").style.width = `${percent}%`;
  document.getElementById("header-progress").setAttribute("aria-valuenow", String(count));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function route() {
  const hash = window.location.hash.replace(/^#/, "");
  if (hash === "admin") {
    renderAdminDashboard();
  } else if (hash.startsWith("chapter-")) {
    const chapter = chapters.find((item) => `chapter-${item.id}` === hash);
    renderChapter(chapter || chapters[0]);
  } else {
    renderHome();
  }
  updateHeaderProgress();
  window.scrollTo({ top: 0, behavior: "auto" });
  document.getElementById("main-content").focus({ preventScroll: true });
}

function isSupabaseConfigured() {
  return Boolean(SUPABASE_CONFIG.url && SUPABASE_CONFIG.publishableKey && window.supabase);
}

async function initializeAuth() {
  if (!isSupabaseConfigured()) {
    updateAccountControl();
    return;
  }

  supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.publishableKey, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
  });
  const { data } = await supabaseClient.auth.getSession();
  await setAuthSession(data.session);
  supabaseClient.auth.onAuthStateChange((_event, session) => {
    window.setTimeout(() => setAuthSession(session), 0);
  });
}

async function setAuthSession(session) {
  activeUser = session?.user || null;
  currentProfile = null;
  userIsAdmin = false;

  if (activeUser && supabaseClient) {
    const [{ data: profile }, { data: isAdmin }] = await Promise.all([
      supabaseClient.from("learner_profiles").select("user_id, username").eq("user_id", activeUser.id).maybeSingle(),
      supabaseClient.rpc("is_current_user_admin"),
    ]);
    currentProfile = profile;
    userIsAdmin = Boolean(isAdmin);
    await hydrateCloudProgress();
  }

  updateAccountControl();
  if (window.location.hash === "#admin") route();
}

async function hydrateCloudProgress() {
  const { data, error } = await supabaseClient
    .from("learner_progress")
    .select("state")
    .eq("user_id", activeUser.id)
    .maybeSingle();

  if (error) {
    showToast("Signed in, but progress could not load");
    return;
  }

  if (data?.state && Object.keys(data.state).length) {
    state = { ...defaultState, ...data.state };
    saveLocalState();
    route();
    return;
  }

  queueCloudSync(true);
}

function queueCloudSync(immediate = false) {
  if (!supabaseClient || !activeUser) return;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(syncCloudProgress, immediate ? 0 : 700);
}

async function syncCloudProgress() {
  if (!supabaseClient || !activeUser) return;
  const { error } = await supabaseClient.from("learner_progress").upsert(
    {
      user_id: activeUser.id,
      state,
      completed_chapters: completedCount(),
      chapter_scores: state.scores,
      practicum_complete: isPracticumComplete(),
    },
    { onConflict: "user_id" },
  );

  if (error) {
    console.warn("Progress sync failed", error.message);
    return;
  }

}

function updateAccountControl() {
  const button = document.getElementById("account-button");
  if (!button) return;
  button.textContent = activeUser ? (userIsAdmin ? "Admin" : "Account") : "Sign in";
  document.getElementById("auth-form").hidden = Boolean(activeUser);
  document.getElementById("account-summary").hidden = !activeUser;
  if (activeUser) {
    document.getElementById("account-email").textContent = currentProfile?.username || "Signed in";
    document.getElementById("account-role").textContent = userIsAdmin
      ? "Administrator · learner progress is available in the dashboard."
      : "Progress sync is on for this account.";
    document.getElementById("admin-dashboard-link").hidden = !userIsAdmin;
  }
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  if (!isSupabaseConfigured()) {
    document.getElementById("auth-status").textContent = "Account setup is still being connected. Please try again shortly.";
    return;
  }

  const username = document.getElementById("auth-name").value.trim().toLowerCase();
  const password = document.getElementById("auth-password").value;
  const action = event.submitter?.dataset.authAction || "signin";
  if (!/^[a-z0-9_-]{3,32}$/.test(username)) {
    document.getElementById("auth-status").textContent = "Use 3–32 letters, numbers, underscores, or hyphens for your name.";
    return;
  }
  const email = `${username}@users.gtm-academy.invalid`;
  const result = action === "signup"
    ? await supabaseClient.auth.signUp({ email, password, options: { data: { username } } })
    : await supabaseClient.auth.signInWithPassword({ email, password });

  if (result.error) {
    document.getElementById("auth-status").textContent = result.error.message;
    return;
  }
  document.getElementById("auth-status").textContent = action === "signup"
    ? "Account created. You can now sign in with your name and password."
    : "Signed in. Your progress is syncing.";
  if (result.data.session) document.getElementById("auth-dialog").close();
}

async function signOut() {
  if (supabaseClient) await supabaseClient.auth.signOut();
  document.getElementById("auth-dialog").close();
  showToast("Signed out. Local progress remains in this browser.");
}

async function renderAdminDashboard() {
  const app = document.getElementById("app");
  if (!activeUser) {
    app.innerHTML = `<section class="home-section"><div class="empty-state">Sign in with an administrator account to view learner progress.</div></section>`;
    return;
  }
  if (!userIsAdmin) {
    app.innerHTML = `<section class="home-section"><div class="empty-state">This account can sync its own progress, but does not have administrator access.</div></section>`;
    return;
  }

  app.innerHTML = `<section class="home-section"><div class="admin-loading">Loading learner progress…</div></section>`;
  const [{ data: profiles, error: profileError }, { data: progress, error: progressError }] = await Promise.all([
    supabaseClient.from("learner_profiles").select("user_id, username").order("created_at", { ascending: false }),
    supabaseClient.from("learner_progress").select("user_id, completed_chapters, chapter_scores, practicum_complete, updated_at").order("updated_at", { ascending: false }),
  ]);

  if (profileError || progressError) {
    app.innerHTML = `<section class="home-section"><div class="empty-state">Learner progress could not be loaded. Check the Supabase access policies, then refresh.</div></section>`;
    return;
  }

  const progressByUser = new Map((progress || []).map((item) => [item.user_id, item]));
  const learners = (profiles || []).map((profile) => ({ ...profile, progress: progressByUser.get(profile.user_id) }));
  const complete = learners.filter((learner) => learner.progress?.completed_chapters === chapters.length).length;
  const practicumReady = learners.filter((learner) => learner.progress?.practicum_complete).length;
  app.innerHTML = `
    <section class="admin-hero">
      <div><p class="eyebrow">Administrator view</p><h1>Learner progress</h1><p>Live course progress for authenticated learners. Draft content stays private to the learner; this view reports completion only.</p></div>
      <a class="secondary-button" href="#home">Back to course</a>
    </section>
    <section class="home-section admin-section">
      <div class="admin-metrics">
        <div><strong>${learners.length}</strong><span>learners</span></div>
        <div><strong>${complete}</strong><span>all chapters passed</span></div>
        <div><strong>${practicumReady}</strong><span>practicum complete</span></div>
      </div>
      <div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Learner</th><th>Chapters</th><th>Practicum</th><th>Last activity</th></tr></thead><tbody>
        ${learners.length ? learners.map((learner) => {
          const item = learner.progress;
          return `<tr><td>${escapeHtml(learner.username || "Not provided")}</td><td>${item?.completed_chapters || 0} / ${chapters.length}</td><td>${item?.practicum_complete ? "Ready" : "In progress"}</td><td>${item?.updated_at ? new Date(item.updated_at).toLocaleString() : "Not started"}</td></tr>`;
        }).join("") : `<tr><td colspan="4">No learner accounts yet.</td></tr>`}
      </tbody></table></div>
    </section>
  `;
}

function renderHome() {
  const count = completedCount();
  const next = chapters.find((chapter) => !state.passed[chapter.id]) || chapters[0];
  const app = document.getElementById("app");
  app.innerHTML = `
    <section class="hero">
      <div class="hero-inner">
        <div>
          <p class="eyebrow">Manual, evidence-led outbound</p>
          <h1>Research like software. Write like a human.</h1>
          <p class="hero-copy">Learn to turn a client-supplied ICP into relevant cold emails and LinkedIn messages—without automated writing, sequencers, bulk sends, or fake personalization.</p>
          <div class="hero-actions">
            <a class="primary-button" href="#chapter-${next.id}">${count ? "Continue course" : "Start the course"}</a>
            <button class="secondary-button" id="open-completion" type="button">Completion packet</button>
          </div>
        </div>
        <aside class="hero-note" aria-label="Course standard">
          <strong>${count === chapters.length ? "Course checks passed" : `${count} of ${chapters.length} chapters passed`}</strong>
          <p>Complete every chapter check at 80% or higher, finish the practicum, and send the downloaded packet to your manager.</p>
        </aside>
      </div>
    </section>

    <section class="home-section" aria-labelledby="chapter-heading">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Six chapters · about 100 minutes</p>
          <h2 id="chapter-heading">The field curriculum</h2>
        </div>
        <p>Every chapter combines a concise lesson, a saved working exercise, and a scored knowledge check.</p>
      </div>
      <div class="chapter-grid">
        ${chapters.map(renderChapterCard).join("")}
      </div>
    </section>

    <section class="principles-band" aria-labelledby="principles-heading">
      <div class="principles-grid">
        <div><p class="eyebrow">Hard operating rules</p><h2 id="principles-heading">Human judgment stays in the loop.</h2></div>
        <div class="principle"><strong>The client owns the ICP.</strong><p>Operators apply it, test it, and recommend changes. They do not rewrite it silently.</p></div>
        <div class="principle"><strong>Tools gather evidence.</strong><p>Clay and Origami can find leads and research. A human decides what is true, useful, and appropriate.</p></div>
        <div class="principle"><strong>Every send is manual.</strong><p>No automated writing, personalization, LinkedIn activity, sequencers, or bulk sending.</p></div>
      </div>
    </section>

    <section class="home-section">
      <div class="formula-card">
        <div>
          <p class="eyebrow">Measurement that matters</p>
          <h2>Count people, not tracking pixels.</h2>
          <p>Separate positive replies, referrals, qualified conversations, held meetings, bounces, opt-outs, and complaints. Open rate is not a primary KPI.</p>
        </div>
        <div class="formula">Human reply rate = human replies ÷ delivered emails<small>Always show delivered volume and cohort definition. A 10–40% response range is a goal, never a guarantee.</small></div>
      </div>
    </section>

    <section class="home-section" id="completion-section" aria-labelledby="completion-heading">
      ${renderPracticum(count === chapters.length)}
    </section>
  `;
  bindHomeEvents();
}

function renderChapterCard(chapter) {
  const passed = Boolean(state.passed[chapter.id]);
  return `
    <a class="chapter-card ${passed ? "complete" : ""}" href="#chapter-${chapter.id}">
      <span class="card-topline"><span>${chapter.kicker} · ${chapter.minutes} min</span><span class="status-chip">${passed ? "Passed" : "Open"}</span></span>
      <h3>${chapter.number}. ${chapter.title}</h3>
      <p>${chapter.outcome}</p>
      <span class="card-arrow">${passed ? "Review chapter" : "Open chapter"} ${icons.arrow}</span>
    </a>
  `;
}

function renderChapter(chapter) {
  const activeTab = state.tabs[chapter.id] || "learn";
  const count = completedCount();
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="course-shell">
      <aside class="course-sidebar" aria-label="Course chapters">
        <p class="sidebar-label">Course chapters</p>
        <nav class="chapter-nav">
          ${chapters.map((item) => renderChapterNav(item, chapter.id)).join("")}
        </nav>
        <div class="sidebar-progress">
          <strong>${count} of ${chapters.length} passed</strong>
          <div class="progress-track" aria-hidden="true"><span style="width:${(count / chapters.length) * 100}%"></span></div>
          <small>80% required per chapter</small>
        </div>
      </aside>
      <article class="course-main">
        <div class="mobile-chapter-picker">
          <label class="field-label" for="mobile-chapter-select">Chapter</label>
          <select id="mobile-chapter-select">
            ${chapters.map((item) => `<option value="${item.id}" ${item.id === chapter.id ? "selected" : ""}>${item.number}. ${item.title}</option>`).join("")}
          </select>
        </div>
        <header class="chapter-header">
          <div class="chapter-meta"><span>Chapter ${chapter.number} of ${chapters.length}</span><span>${chapter.minutes} minutes</span>${state.passed[chapter.id] ? "<span>Passed</span>" : ""}</div>
          <p class="eyebrow">${chapter.kicker}</p>
          <h1>${chapter.title}</h1>
          <p class="chapter-outcome">${chapter.outcome}</p>
        </header>

        <div class="tab-list" role="tablist" aria-label="Chapter sections">
          ${["learn", "apply", "prove"].map((tab) => `<button type="button" role="tab" data-tab="${tab}" aria-selected="${activeTab === tab}" aria-controls="${tab}-panel">${tab === "learn" ? "Learn" : tab === "apply" ? "Apply" : "Prove"}</button>`).join("")}
        </div>

        <section class="tab-panel" id="${activeTab}-panel" role="tabpanel">
          ${activeTab === "learn" ? renderLearn(chapter) : activeTab === "apply" ? renderApply(chapter) : renderProve(chapter)}
        </section>

        <nav class="chapter-footer-nav" aria-label="Chapter navigation">
          ${chapter.number > 1 ? `<a class="secondary-button" href="#chapter-${chapters[chapter.number - 2].id}">Previous chapter</a>` : `<a class="secondary-button" href="#home">Course home</a>`}
          ${chapter.number < chapters.length ? `<a class="primary-button" href="#chapter-${chapters[chapter.number].id}">Next chapter</a>` : `<a class="primary-button" href="#home">Completion packet</a>`}
        </nav>
      </article>
    </div>
  `;
  bindChapterEvents(chapter);
}

function renderChapterNav(chapter, activeId) {
  return `
    <button type="button" data-chapter="${chapter.id}" class="${chapter.id === activeId ? "active" : ""}" ${chapter.id === activeId ? 'aria-current="page"' : ""}>
      <span class="nav-number">${chapter.number}</span>
      <span class="nav-title">${chapter.title}</span>
      <span class="nav-check" aria-label="${state.passed[chapter.id] ? "Passed" : "Not passed"}">${state.passed[chapter.id] ? icons.check : ""}</span>
    </button>
  `;
}

function renderLearn(chapter) {
  return `
    <section class="lesson-section">
      <p class="chapter-outcome">${chapter.intro}</p>
    </section>
    ${chapter.lessons.map((lesson) => `<section class="lesson-section"><h2>${lesson.title}</h2>${lesson.body}</section>`).join("")}
  `;
}

function renderApply(chapter) {
  const draft = state.drafts[chapter.id] || "";
  return `
    <div class="practice-card">
      <p class="eyebrow">Working exercise</p>
      <h2>Apply the chapter</h2>
      <p>${chapter.exercise}</p>
      <label class="field-label" for="exercise-${chapter.id}">Your working draft</label>
      <textarea class="work-area" id="exercise-${chapter.id}" placeholder="Write your work here. It saves in this browser.">${escapeHtml(draft)}</textarea>
      <div class="autosave-note"><span>Saved locally in this browser</span><span id="draft-count">${draft.length} characters</span></div>
      <h3>Review checklist</h3>
      <ul class="checklist">${chapter.checklist.map((item) => `<li>${icons.check}<span>${item}</span></li>`).join("")}</ul>
      <button class="quiet-button" id="copy-draft" type="button">Copy draft</button>
    </div>
  `;
}

function renderProve(chapter) {
  const previousScore = state.scores[chapter.id];
  return `
    <form class="quiz-card" id="quiz-form">
      <p class="eyebrow">Knowledge check</p>
      <h2>Prove the standard</h2>
      <p>Score 80% or higher to pass. Retries are unlimited, and feedback appears after submission.</p>
      ${chapter.quiz.map((question, questionIndex) => `
        <fieldset class="question">
          <legend>${questionIndex + 1}. ${question.q}</legend>
          ${question.options.map((option, optionIndex) => `
            <label class="answer-option">
              <input type="radio" name="question-${questionIndex}" value="${optionIndex}" ${Number(state.answers[chapter.id]?.[questionIndex]) === optionIndex ? "checked" : ""} />
              <span>${option}</span>
            </label>
          `).join("")}
        </fieldset>
      `).join("")}
      <button class="primary-button" type="submit">Submit answers</button>
      ${typeof previousScore === "number" ? `<div class="quiz-result ${previousScore >= 80 ? "pass" : "retry"}">${previousScore}% · ${previousScore >= 80 ? "Chapter passed" : "Review the lesson and retry"}</div>` : ""}
      <div id="quiz-feedback"></div>
    </form>
  `;
}

function bindHomeEvents() {
  document.getElementById("open-completion")?.addEventListener("click", () => {
    document.getElementById("completion-section")?.scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("learner-name")?.addEventListener("input", (event) => {
    state.learnerName = event.target.value;
    saveState();
    refreshCompletionButton();
  });
  document.querySelectorAll("[data-practicum]").forEach((field) => {
    field.addEventListener("input", (event) => {
      state.practicum[event.target.dataset.practicum] = event.target.value;
      saveState();
      refreshCompletionButton();
    });
  });
  document.getElementById("download-packet")?.addEventListener("click", downloadCompletionPacket);
}

function bindChapterEvents(chapter) {
  document.querySelectorAll("[data-chapter]").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.hash = `chapter-${button.dataset.chapter}`;
    });
  });
  document.getElementById("mobile-chapter-select")?.addEventListener("change", (event) => {
    window.location.hash = `chapter-${event.target.value}`;
  });
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tabs[chapter.id] = button.dataset.tab;
      saveState();
      renderChapter(chapter);
    });
  });

  const textarea = document.getElementById(`exercise-${chapter.id}`);
  textarea?.addEventListener("input", (event) => {
    state.drafts[chapter.id] = event.target.value;
    document.getElementById("draft-count").textContent = `${event.target.value.length} characters`;
    saveState();
  });
  document.getElementById("copy-draft")?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(textarea?.value || "");
      showToast("Draft copied");
    } catch {
      showToast("Copy was blocked by the browser");
    }
  });
  document.getElementById("quiz-form")?.addEventListener("submit", (event) => gradeQuiz(event, chapter));
}

function gradeQuiz(event, chapter) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const answers = chapter.quiz.map((_, index) => formData.get(`question-${index}`));
  if (answers.some((answer) => answer === null)) {
    showToast("Answer every question before submitting");
    return;
  }
  const correct = answers.filter((answer, index) => Number(answer) === chapter.quiz[index].answer).length;
  const score = Math.round((correct / chapter.quiz.length) * 100);
  state.answers[chapter.id] = answers;
  state.scores[chapter.id] = score;
  state.passed[chapter.id] = score >= 80;
  saveState();
  const feedback = chapter.quiz
    .map((question, index) => `<div class="${Number(answers[index]) === question.answer ? "callout" : "warning"}"><strong>Question ${index + 1}: ${Number(answers[index]) === question.answer ? "Correct" : "Review"}</strong>${question.explanation}</div>`)
    .join("");
  document.getElementById("quiz-feedback").innerHTML = `<div class="quiz-result ${score >= 80 ? "pass" : "retry"}">${score}% · ${score >= 80 ? "Chapter passed" : "Review and retry"}</div>${feedback}`;
  showToast(score >= 80 ? "Chapter passed" : "Review the feedback and try again");
}

function renderPracticum(unlocked) {
  const complete = isPracticumComplete();
  return `
    <div class="section-heading">
      <div><p class="eyebrow">Completion standard</p><h2 id="completion-heading">Manager review packet</h2></div>
      <p>Pass all chapters and complete every field. Download the packet and send it to your manager for review.</p>
    </div>
    <div class="practicum-card">
      ${!unlocked ? `<div class="completion-banner"><h3>Complete all six checks to unlock download</h3><p>Your drafts remain available while you progress through the course.</p></div>` : `<div class="completion-banner"><h3>Chapter checks complete</h3><p>Finish the practicum fields below to unlock your named packet.</p></div>`}
      <label class="field-label" for="learner-name">Learner name</label>
      <input class="name-input" id="learner-name" value="${escapeHtml(state.learnerName)}" placeholder="Your full name" />
      <div class="practicum-grid">
        ${practicumFields.map(([id, title, description]) => `
          <section class="practicum-item">
            <h3>${title}</h3>
            <p>${description}</p>
            <label class="field-label" for="practicum-${id}">Evidence</label>
            <textarea class="practicum-field" id="practicum-${id}" data-practicum="${id}" placeholder="Paste or summarize your completed work.">${escapeHtml(state.practicum[id] || "")}</textarea>
          </section>
        `).join("")}
      </div>
      <div class="button-row" style="margin-top:24px">
        <button class="primary-button" id="download-packet" type="button" ${!unlocked || !complete ? "disabled" : ""}>Download completion packet</button>
        <button class="quiet-button" id="reset-progress" type="button">Reset local progress</button>
      </div>
    </div>
  `;
}

function isPracticumComplete() {
  return Boolean(state.learnerName.trim()) && practicumFields.every(([id]) => Boolean((state.practicum[id] || "").trim()));
}

function refreshCompletionButton() {
  const button = document.getElementById("download-packet");
  if (button) button.disabled = completedCount() !== chapters.length || !isPracticumComplete();
}

function downloadCompletionPacket() {
  if (completedCount() !== chapters.length || !isPracticumComplete()) return;
  const lines = [
    "# GTM Academy Completion Packet",
    "",
    `Learner: ${state.learnerName.trim()}`,
    `Completed: ${new Date().toLocaleDateString()}`,
    "",
    "## Chapter scores",
    ...chapters.map((chapter) => `- ${chapter.number}. ${chapter.title}: ${state.scores[chapter.id]}%`),
    "",
    ...practicumFields.flatMap(([id, title]) => [`## ${title}`, "", state.practicum[id].trim(), ""]),
    "> Completion means ready for supervised field outreach, not independent authorization to run live campaigns.",
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const safeName = state.learnerName.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  link.href = url;
  link.download = `${safeName || "learner"}-gtm-academy-completion.md`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("Completion packet downloaded");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderResources(filter = "") {
  const normalized = filter.trim().toLowerCase();
  const matches = resources.filter((item) => item.join(" ").toLowerCase().includes(normalized));
  const list = document.getElementById("resource-list");
  list.innerHTML = matches.length
    ? matches.map(([title, source, url], index) => {
        const resourceIndex = resources.findIndex((resource) => resource[2] === url);
        const bookmarked = state.bookmarks.includes(resourceIndex);
        return `
          <div class="resource-item">
            <a href="${url}" target="_blank" rel="noreferrer"><strong>${title}</strong><small>${source}</small></a>
            <div style="display:flex;align-items:center;gap:8px">
              <button class="icon-button bookmark-button" type="button" data-resource="${resourceIndex}" aria-label="${bookmarked ? "Remove bookmark" : "Bookmark"} ${title}" title="${bookmarked ? "Remove bookmark" : "Bookmark"}">
                <svg viewBox="0 0 24 24" aria-hidden="true" style="fill:${bookmarked ? "currentColor" : "none"};stroke:currentColor;stroke-width:2"><path d="M6 4h12v17l-6-4-6 4z" /></svg>
              </button>
              <a href="${url}" target="_blank" rel="noreferrer" aria-label="Open ${title} in a new tab">${icons.external}</a>
            </div>
          </div>`;
      }).join("")
    : `<div class="empty-state">No resources match that search.</div>`;
  document.querySelectorAll(".bookmark-button").forEach((button) => {
    button.addEventListener("click", () => {
      const resourceIndex = Number(button.dataset.resource);
      state.bookmarks = state.bookmarks.includes(resourceIndex)
        ? state.bookmarks.filter((index) => index !== resourceIndex)
        : [...state.bookmarks, resourceIndex];
      saveState();
      renderResources(document.getElementById("resource-search").value);
    });
  });
}

function bindGlobalEvents() {
  const dialog = document.getElementById("resource-dialog");
  const authDialog = document.getElementById("auth-dialog");
  document.getElementById("resources-button").addEventListener("click", () => {
    renderResources();
    dialog.showModal();
    document.getElementById("resource-search").focus();
  });
  document.getElementById("close-resources").addEventListener("click", () => dialog.close());
  document.getElementById("resource-search").addEventListener("input", (event) => renderResources(event.target.value));
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  document.getElementById("account-button").addEventListener("click", () => {
    updateAccountControl();
    authDialog.showModal();
  });
  document.getElementById("close-auth").addEventListener("click", () => authDialog.close());
  document.getElementById("auth-form").addEventListener("submit", handleAuthSubmit);
  document.getElementById("signout-button").addEventListener("click", signOut);
  authDialog.addEventListener("click", (event) => {
    if (event.target === authDialog) authDialog.close();
  });
  document.addEventListener("click", (event) => {
    if (event.target.id === "reset-progress") {
      const confirmed = window.confirm("Reset all locally saved scores, drafts, and practicum work?");
      if (confirmed) {
        localStorage.removeItem(STORAGE_KEY);
        state = { ...defaultState, passed: {}, scores: {}, answers: {}, drafts: {}, tabs: {}, practicum: {}, bookmarks: [] };
        renderHome();
        updateHeaderProgress();
        showToast("Local progress reset");
      }
    }
  });
}

bindGlobalEvents();
window.addEventListener("hashchange", route);
route();
initializeAuth();
