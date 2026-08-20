const POSTS = [
    {
        id: "bec-simulation-osint",
        title: "Simulating a BEC Attack Using Only OSINT",
        date: "2026-08-07",
        excerpt: "A social engineering demonstration targeting ProbablyMonsters, built entirely from open-source intelligence.",
        body: `
  <p>I recently ran a simulated cyberattack on a real company — using nothing but public information.</p>

  <p>No hacking. No malware. Just a search engine, a people-search tool, and one terminal command. Here's what I found, and why it should worry every business, not just tech ones.</p>

  <h2>The Setup</h2>
  <p>I picked a mid-sized company and asked: how much could an attacker learn without ever touching their systems? Turns out — a lot.</p>

  <h2>What Public Info Revealed</h2>
  <ul>
    <li>Their exact email format (firstname.lastname@company.com)</li>
    <li>A full org chart, down to who runs Finance and how many people report to them</li>
    <li>Hiring trends across Publishing, Marketing, and Finance — a signal the company was scaling toward a major commercial launch</li>
  </ul>
  <p>That last point mattered most. It told me why someone there might urgently need to move money — which is the entire game in a Business Email Compromise (BEC) scam.</p>

  <h2>The Attack (Simulated — Never Sent)</h2>
  <p>Using all of this, I drafted an email impersonating the CEO, addressed directly to the CFO: an "urgent, confidential" wire transfer for a time-sensitive deal, with the CEO conveniently "unreachable by phone" for the next few hours.</p>
  <p>Every classic pressure tactic was there: <strong>authority, urgency, and isolation</strong> from anyone who could say "wait, let me double check." This is exactly how real BEC scams cost companies billions each year — and it rarely involves any actual hacking.</p>

  <h2>Checking Their Defenses</h2>
  <p>I also ran a quick DNS check on their domain and found they do have DMARC protection in place (technology that helps block spoofed emails) — a good baseline, though not set to its strongest possible setting.</p>

  <h2>The Real Takeaway</h2>
  <p>The scariest part of this exercise wasn't technical. It was how easy it is to build a genuinely believable story using only what a company already publishes about itself.</p>
  <p>Firewalls and email filters matter. But the strongest defense against this kind of attack is boring and human: a mandatory phone callback to verify any large payment request, no matter how urgent it sounds.</p>

  <p id="link-to-git"><a href="https://github.com/EgbewaleToluwani/Social-Engineering-Demonstration/blob/main/Human%20Layer%20Assessment.md" target="_blank">Read the full technical writeup on GitHub →</a></p>
`
    },

    {
      id: "mcsi-first-certificate-documentation-template",
      title: "First Certificate Down: Starting MCSI's Introduction to Cyber Security",
      date: "2026-08-09",
      excerpt: "Completing the first exercise of MCSI's Introduction to Cyber Security course, as part of the broader MICS program — and why something as unglamorous as a document template is actually a real security skill.",
      body: `
    <p>Today I completed the first exercise of the Mossé Cyber Security Institute's (MCSI) Introduction to Cyber Security course, part of their MICS program. The task itself was simple on paper: create a template for a professional document.</p>

    <p>It's not a flashy exercise. There's no exploit, no terminal output, nothing that looks dramatic in a screenshot. But it's a good early reminder of something people outside the field often miss about cybersecurity work: a huge amount of it lives in documentation, not just in breaking or defending systems.</p>

    <h2>Why Documentation Matters Here</h2>
    <p>An incident report that's unclear can slow down a response by hours. An audit finding that isn't formatted consistently can get missed by a stakeholder skimming a 40-page report. A security assessment that reads well is one that actually gets acted on — one that doesn't is often filed away and ignored, no matter how good the findings inside it are. Professional templates exist to make sure critical information survives the handoff between the person who found it and the person who has to act on it.</p>

    <p>Certificate #1 from MCSI is down. More writeups on this program to come as I move through it.</p>
    <p><img class="post-image" src="assets/blog/img/mcsi-1.png" alt="MCSI Certificate"></p>
  `
    },

    {
       id: "portfolio-v3-blog-build-process",
      title: "Building My Portfolio's Blog Section — And Actually Understanding Every Line",
      date: "2026-08-15",
      excerpt: "Adding a data-driven blog and CV section to Portfolio v3, and choosing to slow down and learn the architecture properly instead of just copying working code.",
      body: `
    <p>I spent this session adding a blog section and downloadable CV to Portfolio v3 — but the more interesting part wasn't what got built, it was how I built it.</p>

    <h2>The Decision That Shaped Everything</h2>
    <p>I didn't want a blog where publishing a new post meant creating a new HTML file every time. That doesn't scale, and it doesn't match how the rest of my site already works — my projects section is already data-driven, pulling from a single <code>PROJECTS</code> array instead of being hardcoded into the page. The blog needed to follow that same pattern: one reusable page template, and a data file that holds every post as an object inside an array.</p>

    <h2>Learning It Instead of Just Using It</h2>
    <p>The easy path here would have been to just get working code and move on. I chose the slower path instead — going through the architecture piece by piece, writing every line myself, and understanding exactly why each decision was made: why post IDs need to be unique and URL-safe, why dates need a specific format to sort correctly, why a template literal is different from a normal string, why a filter comparison can fail silently instead of throwing an error.</p>

    <p>That distinction matters more than it sounds. Code that works and code that you understand are not the same thing — only one of them means I can maintain, debug, and extend this myself six months from now without needing to relearn my own site.</p>
  `
    },

    {
      id: "domain-exposure-audit-bash-tool",
      title: "Built a Bash Tool to Help Domain Owners See What Phishers Already See",
      date: "2026-07-30",
      excerpt: "domain-exposure-audit.sh — a defensive OSINT tool that surfaces what's publicly discoverable about a domain, so the owner can close the gaps before an attacker finds them.",
      body: `
    <p>I've been deepening my cybersecurity skills alongside my frontend work, and I wanted a project that genuinely combined both. The result is <strong>domain-exposure-audit.sh</strong> — a defensive OSINT (open-source intelligence) tool that surfaces what's publicly discoverable about a domain, before an attacker finds it first.</p>

    <p>OSINT, in plain terms, just means information that's already public — no hacking, no unauthorized access. An attacker doesn't need to break into your systems if your own public footprint already hands them everything they need.</p>

    <h2>What It Checks</h2>
    <p>The tool checks three things a real attacker would check before targeting a domain:</p>
    <ul>
      <li><strong>Subdomains</strong> via Certificate Transparency logs (crt.sh) — a public ledger that every SSL certificate is legally required to be logged in, which often reveals subdomains nobody meant to expose.</li>
      <li><strong>WHOIS contact exposure</strong> — checking whether a real registrant email is sitting publicly on a domain record, or whether it's been properly hidden behind privacy protection.</li>
      <li><strong>Breach history</strong> via Have I Been Pwned — whether an associated email address has already leaked in a prior data breach, which primes it for credential-based attacks.</li>
    </ul>
    <p>Every result compiles into a saved, timestamped audit report. The tool also won't run against any domain until the user explicitly confirms they're authorized to test it — a deliberate constraint, not an afterthought.</p>

    <h2>What I Actually Wrestled With</h2>
    <p>A few things stood out while building this:</p>
    <ul>
      <li>Handling a live crt.sh outage mid-build — the service returned 502 errors while I was testing, which forced me to design for graceful degradation instead of letting the whole script crash on one failed request.</li>
      <li>Bash's sharp edges: quoting, word-splitting, and function-scoped arguments each taught me a rule the hard way, usually by breaking something first.</li>
      <li>Designing output that's honest by default — distinguishing "no email exposed" from "an email exists, but it's just a contact-form placeholder," instead of flattening both into one misleading result.</li>
    </ul>

    <p>Built entirely in bash — curl, jq, grep, sed — and a lot of tracing through exactly what each line does before trusting it with real domains.</p>
    <p id="link-to-git"><a href="https://github.com/EgbewaleToluwani/Kali/blob/main/Domain%20Exposure%20Audit/domain-exposure-audit.sh" target="_blank">Check out the script on GitHub →</a></p>
  `
    },

    {
      id: "portswigger-ssrf-path-traversal",
      title: "Completed SSRF and Path Traversal on PortSwigger — Every Lab, Both Paths",
      date: "2026-07-24",
      excerpt: "Finished all labs across PortSwigger's SSRF and path traversal learning paths — two vulnerability classes that sound abstract until you see how much damage they actually enable.",
      body: `
    <p>I completed the SSRF and path traversal learning paths on PortSwigger's Web Security Academy, working through every lab in both.</p>

    <h2>What These Actually Are</h2>
    <p><strong>Server-Side Request Forgery (SSRF)</strong> happens when an attacker tricks a server into making requests it never should have made — on the attacker's behalf, using the server's own trusted position on the network. In practice, this can mean reaching internal systems that were never meant to be exposed to the internet at all, simply because the request appears to come from inside the network's own trusted server.</p>

    <p><strong>Path traversal</strong> happens when an application takes a filename or file path from user input without properly restricting it, letting an attacker navigate outside the intended folder — using sequences like <code>../</code> — to read files they were never authorized to access, sometimes including sensitive configuration files or credentials.</p>

    <h2>Why Labs, Not Just Theory</h2>
    <p>Reading about a vulnerability class and actually exploiting one in a controlled lab are very different experiences. The labs force you to think the way an attacker actually thinks — testing assumptions, chaining small findings together, and learning exactly where an application's input validation breaks down in practice, not just in principle.</p>
    <p><img class="post-image" src="assets/blog/img/ssrf.png" alt="SSRF"></p>
    <p><img class="post-image" src="assets/blog/img/pt.png" alt="Path Traversal"></p>
    <p><img class="post-image" src="assets/blog/img/portswigger-progress.png" alt="PortSwigger Progress"></p>
  `
    },

    {
      id: "dalians-cafe-unsolicited-redesign",
      title: "I Rebuilt Dalian's Café's Website — Nobody Asked, I Did It Anyway",
      date: "2026-07-15",
      excerpt: "An unsolicited redesign pitch for Dalian's Café, a European-inspired coffee shop in Downtown LA — because their site wasn't telling their story as well as their coffee does.",
      body: `
    <p>I don't always wait to be asked.</p>

    <p>Dalian's Café is a European-inspired specialty coffee shop in Downtown Los Angeles, founded by Dali, who crossed seven countries before opening one door on Grand Avenue. Great story. Great coffee. A website that wasn't telling either of those things properly.</p>

    <p>So I rebuilt it — unsolicited, as a pitch.</p>

    <h2>What Changed</h2>
    <ul>
      <li>One smooth-scrolling page instead of five separate ones</li>
      <li>The founder's journey laid out as a visual timeline</li>
      <li>A menu that actually reads like a menu, instead of an afterthought</li>
      <li>New sections that didn't exist before: a brand-pillar section, an animated CSS location map, and a newsletter signup</li>
      <li>A warm espresso-and-gold visual identity, built with Cormorant Garamond and Jost, aimed at feeling like a European café rather than a generic template site</li>
    </ul>

    <p>Pure HTML and CSS. No frameworks.</p>

    <h2>Why I Do This</h2>
    <p>This is what I look for: businesses whose digital presence doesn't match the quality of what they actually offer. Dalian's had the harder part — a real product, a real story — already figured out. The website just wasn't carrying its weight.</p>
    <p><a href="https://dalians-cafe.vercel.app/" target="_blank">View the live site →</a></p>
  `
  },

  {
    id: "bash-file-encryption-tool",
    title: "Built a File Encryption Tool Using Bash Scripting",
    date: "2026-05-10",
    excerpt: "A command-line file encryption and compression tool, built entirely in Bash, supporting gzip, bzip2, tar, and zip formats — and a first real exercise in Linux fundamentals.",
    body: `
    <p>I built a command-line file encryption tool, written entirely in Bash — no GUI, just the terminal.</p>

    <h2>What It Does</h2>
    <ul>
      <li>Creates new files directly from the terminal</li>
      <li>Imports existing local files from your computer</li>
      <li>Compresses and encrypts using gzip, bzip2, tar, or zip</li>
    </ul>

    <h2>What It Actually Taught Me</h2>
    <p>This wasn't just "write a script that works." It was a genuine exercise in Bash scripting and automation, file compression and archiving formats, handling and validating user input properly, and structuring conditional logic and control flow cleanly enough that the script doesn't silently do the wrong thing on bad input.</p>

    <p>A solid, hands-on push into Linux fundamentals and shell scripting — and a deliberate first half of a two-part project. The decryption tool, built to restore anything compressed in these formats, came next.</p>
    <p id="link-to-git"><a href="https://github.com/EgbewaleToluwani/Kali/blob/main/File-Encryption.sh" target="_blank">Check out the script on GitHub →</a></p>
  `
  },

  {
    id: "bash-file-decompressor",
    title: "File Decompressor — The Follow-Up I Promised",
    date: "2026-05-15",
    excerpt: "The counterpart to my Bash encryption tool: a format-agnostic decompressor that detects gzip, bzip2, tar, and zip files automatically, without relying on the filename.",
    body: `
    <p>After building my file encryption tool in Bash, I said the decryptor was coming. Here it is.</p>

    <p>This one pushed me further than the first. Decompression meant dealing with four different formats — gzip, bzip2, tar, and zip — each with its own commands, options, and quirks in how it behaves on extraction.</p>

    <h2>What I Built</h2>
    <ul>
      <li><strong>Magic byte detection</strong> using the <code>file</code> command — identifying the real format of a file by reading its actual binary signature, reliably, regardless of what the filename or extension claims it is</li>
      <li>Format confirmation before decompressing, so the tool never guesses silently</li>
      <li>Clean output to a target directory, with the resulting filepath displayed on completion</li>
    </ul>

    <p>The encryption project taught me how to protect data. This one taught me how to read it back out — and how much you have to trust the actual content of a file over what its name claims it to be.</p>
    <p id="link-to-git"><a href="https://github.com/EgbewaleToluwani/Kali/blob/main/File-Decryption.sh" target="_blank">Check out the script on GitHub →</a></p>
  `
  },

  {
  id: "mcsi-second-certificate-screen-recording-setup",
  title: "Second Certificate Down: Setting Up for Screen Recording in MCSI's MICS Program",
  date: "2026-08-16",
  excerpt: "Configuring a proper screen recording setup as part of MCSI's Introduction to Cyber Security course — a small exercise with a bigger point behind it.",
  body: `
    <p>I completed the second exercise in MCSI's Introduction to Cyber Security course, part of the MICS program. This one wasn't about a technical exploit or a vulnerability class — it was about setting up my PC properly for screen recording, and producing a professional video submission.</p>

    <h2>Why This Is Actually a Cybersecurity Skill</h2>
    <p>It's easy to assume screen recording is just a logistics step, but in this field it's closer to a core competency than it looks. Being able to clearly document and demonstrate an exploit, a lab walkthrough, or a finding is often what separates a report that gets acted on from one that gets skimmed and shelved. A screen recording is frequently the artifact that actually proves a skill was performed, not just claimed.</p>

    <p>The exercise itself was straightforward: research and set up free screen recording software — options like TinyTake or OBS (Open Broadcaster Software) — and produce a clean recording under MCSI's required time limit, which meant getting comfortable with a pause feature to keep submissions concise and professional.</p>

    <h2>What It's Actually For</h2>
    <p>Beyond the exercise itself, this sets up something I'll be relying on repeatedly going forward: building a library of recorded artifacts for my cybersecurity portfolio, and giving MCSI instructors something concrete to review and give accurate feedback on — rather than just a written description of what I did.</p>

    <p>Certificate #2 from MCSI down. Small exercise, but one that quietly underpins a lot of what comes next in this program.</p>
    <p><img class="post-image" src="assets/blog/img/mcsi-2.png" alt="MCSI Certificate"></p>
  `
  },
  {
    id: "mcsi-quillbot-writing-improvement",
    title: "Using Quillbot to Improve Writing Quality — Another MCSI MICS Exercise",
    date: "2026-08-17",
    excerpt: "Completed another MCSI exercise, this time using Quillbot's AI-powered writing assistant to sharpen clarity, tone, and grammar in professional writing.",
    body: `
      <p>Another exercise down in MCSI's MICS program — this one focused on Quillbot, an AI-powered writing assistant built specifically to help produce better content, faster.</p>

      <h2>What Quillbot Actually Does</h2>
      <p>Quillbot uses natural language processing to understand the context of a piece of writing and suggest improvements — better phrasing, tone adjustments, and clearer structure. Beyond just rewriting sentences, it also handles grammar and spelling checks automatically, offers synonym suggestions, and supports several different writing styles depending on what the content needs.</p>

      <h2>The Exercise</h2>
      <p>The task was straightforward: take a piece of text and use Quillbot to improve its overall quality — checking for clarity, correctness, and professionalism, the same way a human editor would, but faster and available on demand.</p>

      <h2>Why This Is Worth Knowing, Practically</h2>
      <p>This isn't just a writing exercise for its own sake. In a professional setting, tools like this directly affect how emails, reports, and assessments come across to the people reading them. A report written for a manager or client needs to be concise and clear to actually land — the same content, poorly phrased, can undercut how it's received regardless of how solid the underlying work is. Being deliberate about writing quality, and knowing how to use AI tools to support that rather than replace the thinking behind it, is a genuinely transferable skill — in cybersecurity and well beyond it.</p>
      <p><img class="post-image" src="assets/blog/img/mcsi-4.png" alt="MCSI Certificate"></p>
    `
  },

  {
    id: "cybersecurity-recon-fundamentals",
    title: "Starting Reconnaissance — Username, Phone, Email, and Subdomain Recon",
    date: "2026-08-17",
    excerpt: "An introduction to reconnaissance — the information-gathering stage that comes before any real attack — covering username, phone number, email, and subdomain recon.",
    body: `
      <p>Started learning reconnaissance today — commonly shortened to "recon" — which is the very first stage of how most real attacks actually begin, long before anything resembling hacking takes place.</p>

      <h2>What Recon Actually Is</h2>
      <p>Recon is the process of gathering information about a target before attempting anything against it. None of it involves breaking into systems — it's built almost entirely on publicly available information. That's exactly what makes it worth understanding from a defensive angle: if information is sitting in the open, an attacker doesn't need to be skilled to find it, they just need to know where to look.</p>

      <h2>The Four Types I Covered</h2>
      <ul>
        <li><strong>Username recon</strong> — tracing the same username across multiple platforms to map out someone's digital footprint. People frequently reuse usernames across accounts without realizing how much that connects otherwise-separate parts of their online presence.</li>
        <li><strong>Phone number recon</strong> — pulling associated information from a phone number, such as carrier details, general location, and linked accounts.</li>
        <li><strong>Email recon</strong> — checking whether an email address has appeared in a prior data breach, and identifying what other accounts or services it's tied to.</li>
        <li><strong>Subdomain recon</strong> — mapping out the full extent of a company's web presence, including subdomains that were forgotten about or never meant to be publicly discoverable.</li>
      </ul>

      <h2>Why This Matters for Defense</h2>
      <p>Understanding recon isn't about learning to attack — it's about understanding what an attacker sees before they ever make a move, so that exposure can be closed off in advance. This is the same thinking behind projects I've built before, like domain-exposure-audit.sh — seeing your own footprint the way an attacker would, before they get the chance to use it.</p>
    `
  },

  {
    id: "mcsi-ai-assisted-professional-writing",
    title: "Using AI to Sharpen Professional Writing — MCSI MICS Exercise",
    date: "2026-08-17",
    excerpt: "Another MCSI exercise completed — this one on using AI tools to improve grammar, tone, and clarity in professional writing, and why that skill matters more in cybersecurity than it first appears.",
    body: `
      <p>Completed another exercise in MCSI's MICS program, this one focused on something that doesn't look technical at first glance: using AI tools to polish professional writing.</p>

      <h2>Why This Belongs in a Cybersecurity Course</h2>
      <p>It's tempting to file this under "soft skill" and move on, but clear writing is genuinely load-bearing in this field. An incident report that's vague or poorly structured can slow down a response, get misread by a stakeholder, or simply get ignored. A well-written report with the exact same findings tends to get acted on. The content isn't what changes — the clarity does.</p>

      <p>The exercise itself involved using an AI writing tool — options like ChatGPT, OpenAI Playground, or similar platforms — to review a piece of text and improve its grammar, tone, and overall professionalism. The actual skill being tested wasn't "can AI fix your writing" — it was learning to identify what's actually wrong with a piece of writing in the first place, and using AI as a tool to correct it deliberately, rather than blindly accepting whatever it suggests.</p>

      <h2>The Practical Takeaway</h2>
      <p>Client emails, security assessments, audit findings, incident reports — all of it depends on the reader trusting that the person who wrote it knows what they're talking about. Sloppy writing undermines that trust before the content even gets evaluated. A small exercise, but a real one.</p>
      <p><img class="post-image" src="assets/blog/img/mcsi-3.png" alt="MCSI Certificate"></p>
    `
  },

  {
    id: "recon-day2-setoolkit-website-attack-vectors",
    title: "Recon, Continued — Exploring SEToolkit and the Credential Harvester Attack Vector",
    date: "2026-08-18",
    excerpt: "Day 2 of learning reconnaissance: an introduction to the Social-Engineering Toolkit (SEToolkit), its website attack vector module, and how credential harvesting attacks actually work.",
    body: `
      <p>Continuing on from reconnaissance, today's focus shifted to a new tool: SEToolkit — the Social-Engineering Toolkit — specifically its website attack vectors and the credential harvester module.</p>

      <h2>What SEToolkit Is</h2>
      <p>SEToolkit is an open-source framework built around social engineering attack simulations — the human-manipulation side of security, rather than purely technical exploits. It's widely used in authorized penetration testing and security awareness training to demonstrate, in a controlled setting, how easily people can be tricked into handing over sensitive information.</p>

      <h2>Website Attack Vectors, Conceptually</h2>
      <p>One of its core modules focuses on website-based attacks — essentially, cloning the look of a legitimate website to trick a target into believing they're on the real thing. The credential harvester specifically refers to a page designed to capture whatever a victim types into it, most commonly a username and password, at the exact moment they believe they're logging into a genuine service.</p>

      <p>The mechanics matter less here than the underlying lesson: a login page's visual legitimacy says nothing about its actual legitimacy. Anyone can replicate a familiar interface convincingly. The only real defenses are things like checking the actual URL and domain carefully, using a password manager (which won't autofill credentials on a spoofed domain), and enabling multi-factor authentication so a stolen password alone isn't enough to compromise an account.</p>

      <h2>Why This Matters for Defense</h2>
      <p>Understanding how credential harvesting attacks are built is what makes it possible to actually recognize and defend against them — the same principle behind the recon work from Day 1. Attacks like this succeed on convincing appearance and misplaced trust, not technical sophistication, which is exactly why awareness of the mechanism is itself a meaningful defense.</p>
      <p><img class="post-image" src="assets/blog/img/set.png" alt="SEToolkit"></p>
    `
  },

  {
    id: "access-control-privilege-escalation",
    title: "Access Control Vulnerabilities and Privilege Escalation",
    date: "2026-08-19",
    excerpt: "Covering access control fundamentals and privilege escalation on PortSwigger's Web Security Academy, and solving four labs on unprotected admin functionality and parameter-based access control.",
    body: `
      <p>Today's focus was access control — specifically, how it breaks, and what privilege escalation actually looks like in practice. Worked through the theory on PortSwigger's Web Security Academy and solved four labs to go with it.</p>

      <h2>What Access Control Actually Means</h2>
      <p>Access control depends on two things working correctly together: authentication (confirming a user is who they claim to be) and session management (tracking that it's still the same user on subsequent requests). Access control itself is the layer on top of both — deciding whether that authenticated user is actually allowed to do the specific thing they're attempting. When any one of these three pieces is designed poorly, the whole chain can fail, sometimes without anything looking obviously broken on the surface.</p>

      <h2>Vertical vs Horizontal Access Control</h2>
      <p><strong>Vertical access controls</strong> restrict entire categories of functionality to certain user types — an admin can delete accounts, an ordinary user can't. <strong>Horizontal access controls</strong> restrict access to a subset of resources of the same type — you can see your own bank transactions, not someone else's. Both fail in different ways, but the underlying cause is often the same: the application assumes a user won't attempt something outside their intended role, instead of actually verifying it every time.</p>

      <h2>Vertical Privilege Escalation, In Practice</h2>
      <p>Vertical privilege escalation happens when a user reaches functionality they were never meant to access — most simply, when sensitive pages are only hidden from the interface rather than actually protected. If an admin page just isn't linked anywhere for regular users, but the URL itself has no real access check behind it, anyone who finds or guesses that URL gets in. Sometimes the URL is even accidentally exposed through a <code>robots.txt</code> file or in front-end JavaScript that only conditionally displays a link, while shipping the actual URL to every user regardless of role.</p>

      <h2>Labs Solved Today</h2>
      <ul>
        <li><strong>Unprotected admin functionality</strong> — an admin panel reachable simply by knowing or guessing its URL, with no real access check behind it.</li>
        <li><strong>Unprotected admin functionality with unpredictable URL</strong> — same core issue, but the URL was obfuscated rather than guessable. The catch: the URL was still leaked to every user through front-end JavaScript, proving that hiding a URL is not the same as actually protecting it.</li>
        <li><strong>User role controlled by request parameter</strong> — the application decided a user's role based on a value like <code>?admin=true</code> in the request itself, trusting the client to report its own permission level instead of verifying it server-side.</li>
        <li><strong>User role can be modified in user profile</strong> — a variation on the same flaw, where role data stored client-side could be tampered with to escalate privileges.</li>
      </ul>

      <h2>The Common Thread</h2>
      <p>Every one of these labs traces back to the same root problem: trusting something the client controls — a URL's obscurity, a hidden field, a query parameter — instead of verifying permissions properly on the server, every time, for every request. Hectic day, but a genuinely useful one to sit with.</p>
    `
  },

  {
    id: "access-control-idor-url-matching",
    title: "IDOR, URL-Matching Discrepancies, and Platform Misconfiguration",
    date: "2026-08-20",
    excerpt: "Continuing access control on PortSwigger's Web Security Academy: how platform-level misconfigurations and URL-matching quirks lead to bypasses, and a deep dive into horizontal privilege escalation via IDOR.",
    body: `
      <p>Continued the access control track today, moving into how access controls fail when they're enforced at the platform layer instead of properly inside the application itself — and into horizontal privilege escalation, which turned out to be one of the more subtle categories so far.</p>

      <h2>Platform Misconfiguration</h2>
      <p>Some applications enforce access rules at the platform layer — a rule like "deny POST requests to /admin/deleteUser for anyone outside the managers group." The problem is that this kind of rule can be bypassed without ever touching the intended endpoint directly. Some frameworks support non-standard headers like <code>X-Original-URL</code> or <code>X-Rewrite-URL</code> that let a request override which URL it's actually treated as targeting — meaning a request that looks harmless on the surface can still reach a restricted endpoint underneath. A second variant: if the platform only restricts specific HTTP methods (say, blocking POST but not GET) on a sensitive URL, and the application itself doesn't care which method performs the action, an attacker can simply switch methods to walk straight around the restriction.</p>

      <h2>URL-Matching Discrepancies</h2>
      <p>Just as interesting: access control can fail purely from inconsistency in how a URL gets matched. If the front-end restriction is case-sensitive but the back-end route isn't, requesting <code>/ADMIN/DELETEUSER</code> instead of <code>/admin/deleteUser</code> might slip past the check while still hitting the real endpoint. Similar issues show up with trailing slashes, or in frameworks that map file extensions loosely — a request to <code>/admin/deleteUser.anything</code> matching the same route as the protected one, without the access rule accounting for it.</p>

      <h2>Horizontal Privilege Escalation and IDOR</h2>
      <p>The second half of today was horizontal privilege escalation — where a user reaches another user's resources, not elevated permissions, just someone else's data. The clearest form of this is an insecure direct object reference (IDOR): a URL like <code>/myaccount?id=123</code>, where simply changing the <code>id</code> value grants access to someone else's account page. Some applications try to defend against this by using unguessable identifiers like GUIDs instead of sequential numbers — but that only holds up if the GUID never leaks elsewhere in the app, such as inside another user's messages or public reviews. Even a proper redirect-to-login response isn't automatically safe, either — if that redirect response still contains fragments of the targeted user's data before redirecting away, the leak already happened.</p>

      <h2>Labs Solved</h2>
      <ul>
        <li>URL-based access control can be circumvented</li>
        <li>Method-based access control can be circumvented</li>
        <li>User ID controlled by request parameter</li>
        <li>User ID controlled by request parameter, with unpredictable user IDs</li>
        <li>User ID controlled by request parameter with data leakage in redirect</li>
      </ul>

      <p>The theme across all of today's labs: access control that lives at the edges — headers, URL formatting, request methods, client-supplied IDs — is only as strong as every single edge case it fails to account for.</p>
    `
  },

  {
    id: "clatter-first-web-app-kickoff",
    title: "Starting My First Web App: Clatter",
    date: "2026-08-20",
    excerpt: "Every site I've built before was a static website. Today I started my first real web app — Clatter, a group chat app with authentication and real-time messaging.",
    body: `
      <p>Every project I've built up to this point has been a website — static or mostly static, no accounts, no persistent user data, nothing that behaves differently depending on who's using it. Today that changed. I started building Clatter, a group chat web app, and my first genuine step into web app territory rather than just web development.</p>

      <h2>What Clatter Is</h2>
      <p>Clatter is built around one deliberately narrow idea: group chat, and nothing else competing for attention. "Your loudest chat deserves its own app" is the whole pitch — no DMs, no feeds, no unrelated features bolted on. Just a place for one group conversation to happen properly.</p>

      <h2>What's Working So Far</h2>
      <p>The authentication flow is functional end to end: sign-up and sign-in with email and password, plus Google sign-in as an alternative, both handled through Firebase Authentication. After sign-up, users land on a profile completion step — first name, last name, a short bio, and a profile photo with a live preview before it's ever uploaded. From there, the dashboard pulls in the signed-in user's info and connects to a Firebase Realtime Database, letting users send messages that appear for everyone in the chat, distinguishing between the current user's own messages and everyone else's in the display.</p>

      <h2>Why This Felt Different to Build</h2>
      <p>A static site is finished once it looks right and works right in the browser. A web app like this has state that outlives a single page load — a signed-in user, a stored session, data flowing in and out of a real database in real time. Today was genuinely about wiring that foundation up correctly: auth working reliably, the profile step actually gating access to the dashboard, and messages persisting and syncing rather than just appearing locally.</p>

      <p>Early days for Clatter, but the core loop already works: sign up, complete a profile, land in your dashboard. More to come as it develops.</p>
      <p><img class="post-image" src="assets/blog/img/clatter.png" alt="Clatter"></p>
    `
  }
]

window.POSTS = POSTS