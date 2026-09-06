const POSTS = [
    {
        id: "bec-simulation-osint",
        title: "Simulating a BEC Attack Using Only OSINT",
        date: "2026-08-07",
        featured: true,
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
      excerpt: "Adding a data-driven blog to Portfolio v3, and choosing to slow down and learn the architecture properly instead of just copying working code.",
      body: `
    <p>I spent this session adding a blog section to Portfolio v3 — but the more interesting part wasn't what got built, it was how I built it.</p>

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
      featured: true,
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
      featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
      
    `
  },

  {
    id: "access-control-completing-the-topic",
    title: "Completing Access Control: Escalation Chains, IDOR, and Multi-Step Bypasses",
    date: "2026-08-21",
    excerpt: "Wrapping up the access control topic on PortSwigger's Web Security Academy: turning horizontal escalation into vertical, IDOR as a formal category, multi-step process flaws, and the actual defense-in-depth principles that prevent all of it.",
    body: `
      <p>Finished the access control topic today — the last stretch covering how smaller flaws chain into bigger ones, a couple of overlooked enforcement patterns, and the actual principles that prevent this entire category of vulnerability in the first place.</p>

      <h2>Horizontal Becoming Vertical</h2>
      <p>One of the more important ideas today: horizontal and vertical privilege escalation aren't always separate outcomes — a horizontal flaw can become a vertical one, depending entirely on whose account gets compromised. The exact same parameter-tampering technique from horizontal escalation (changing an <code>id</code> value to access someone else's account) becomes vertical escalation the moment the targeted account happens to belong to an administrator. Same bug, same exploit method — the severity is decided entirely by whose data you land on.</p>

      <h2>IDOR as Its Own Category</h2>
      <p>Insecure direct object references got named explicitly today — a pattern that's been running underneath most of this week's labs without being formally labeled. An IDOR happens whenever an application uses input supplied directly by the user to access an object, with no check confirming that user is actually allowed to access that specific object. It's been a recognized category since it appeared in OWASP's 2007 Top Ten, and it's less a single vulnerability than a description of a whole family of implementation mistakes that all lead to the same outcome: access control bypassed through unchecked, user-controlled input.</p>

      <h2>Multi-Step Processes</h2>
      <p>A genuinely easy mistake to make: some sensitive actions happen across several steps — load a form, submit changes, review and confirm. It's common for access control to be enforced properly on the earlier steps but forgotten on the final one, because the application assumes nobody reaches step three without having correctly passed through steps one and two first. An attacker doesn't need to honor that assumption — they can skip straight to submitting the final step's request directly, with the right parameters, and bypass every check that only lived on the earlier steps.</p>

      <h2>Referer-Based and Location-Based Access Control</h2>
      <p>Two more patterns worth knowing, mainly because both are built on trusting things a client can freely fake. Referer-based access control checks the HTTP <code>Referer</code> header to confirm a request "came from" an authorized page — but that header is just something the browser sends along, and it can be forged in a direct request with no real page navigation behind it at all. Location-based access control tries to restrict access by geography, which sounds more physical and harder to fake, but is routinely bypassed with VPNs, proxies, or by manipulating client-side geolocation directly.</p>

      <h2>The Actual Fix, In Principle</h2>
      <p>What ties every lab this week together is the same handful of prevention principles: never rely on obfuscation as a substitute for real access control, deny access by default unless a resource is explicitly meant to be public, enforce access control through one consistent application-wide mechanism rather than scattered checks, require developers to explicitly declare what access is allowed for every resource, and actually audit those controls instead of assuming they work as designed.</p>

      <p>Access control topic complete. Every lab this week traced back to the same root cause in different disguises: trusting something the client controls, instead of verifying properly, every time, by default.</p>
    `
  },

  {
    id: "mcsi-google-dorking-osint",
    title: "Google Hacking for OSINT — Search Operators as a Reconnaissance Skill",
    date: "2026-08-22",
    excerpt: "An MCSI MICS exercise on Google dorking — using targeted search operators to perform OSINT reconnaissance, and why this is one of the most accessible entry points into understanding real-world information exposure.",
    body: `
      <p>Completed a Google Hacking exercise in MCSI's MICS program today — practicing how to construct targeted search queries, often called "Google dorks," to perform reconnaissance using nothing but Google's own search operators.</p>

      <h2>What Google Dorking Actually Is</h2>
      <p>Google indexes an enormous amount of content that site owners never intended to be easily discoverable — exposed documents, forgotten pages, misconfigured directories. Google's built-in search operators let you construct precise, targeted queries instead of relying on generic keyword searches, effectively turning a search engine into a reconnaissance tool. None of this involves hacking in the technical sense — it's entirely built on Google's own public indexing, using search syntax that's openly documented and available to anyone.</p>

      <h2>The Operators Behind It</h2>
      <p>A few of the core building blocks: <code>site:</code> restricts results to a single domain, <code>intitle:</code> and <code>intext:</code> search a page's title versus its visible content specifically, and <code>filetype:</code> narrows results down to a specific file format like PDF, DOC, or XLS. Combined with quoted exact-phrase searches and logical operators (AND, OR, NOT), these turn into precise, deliberate queries rather than a scattershot search.</p>

      <h2>Why It's Worth Practicing</h2>
      <p>The exercise reinforced something that's easy to underestimate: a huge amount of exposed information isn't hidden behind any real security control at all — it's simply sitting in a search engine's index, waiting for the right query. No credentials required, no exploit, just knowing how to ask the right question. That makes this as valuable defensively as it is offensively. Understanding what a well-constructed search can surface about an organization is the first real step toward auditing and closing that exposure before someone else finds it first.</p>
    `
  },

  {
    id: "mcsi-network-protocols-research",
    title: "Researching Common Network Protocols",
    date: "2026-08-23",
    excerpt: "An MCSI MICS exercise researching the network protocols that run enterprise networks, and why understanding them matters for spotting where they can be exploited.",
    body: `
      <h2>Situation</h2>
      <p>Enterprise networks depend on a small set of protocols to let very different devices communicate with each other. Protocols like HTTP, DNS, FTP, SSH, SMB, and several others aren't inherently insecure on their own — but because they're so widely used, they're also constantly researched and targeted by attackers looking for weaknesses in how they're implemented or configured.</p>

      <h2>Task</h2>
      <p>Today's MCSI exercise was to research and document the most common network protocols used in enterprise environments — understanding not just what each one does, but where it sits within the OSI model, what kind of data it handles, and when it's actually used in practice.</p>

      <h2>Action</h2>
      <p>I went through fourteen core protocols — including ARP, DNS, FTP, HTTP, Telnet, SSH, IMAP, POP3, RDP, SIP, SMB, SMTP, SNMP, and VNC — researching each one individually: what it does, which OSI layer it operates at, and a realistic scenario where it would actually be used. Compiling this into a single reference made the differences between protocols that are easy to lump together — like FTP vs SMB for file handling, or IMAP vs POP3 for email — much clearer than treating them as a vague, interchangeable list.</p>

      <h2>Result</h2>
      <p>A solid working reference for how enterprise networks actually communicate under the hood, and a much clearer sense of why certain protocols — Telnet and SNMP in particular, given their age and historically weak security defaults — come up so often in real-world vulnerability research. Understanding what a protocol is built to do is the first step in understanding how it can be misused.</p>
    `
  },

  {
    id: "recon-setoolkit-site-cloner-payload-listener",
    title: "SEToolkit's Site Cloner, and an Introduction to Payloads and Listeners",
    date: "2026-08-24",
    excerpt: "Continuing SEToolkit exploration with the site cloner feature, and a first look into payload and listener creation — the mechanics behind gaining remote access after an initial compromise.",
    body: `
      <p>Continued working through SEToolkit today, picking up from the website attack vectors covered previously. Today's focus was the site cloner feature specifically, plus a first look into a different module entirely: creating a payload and listener.</p>

      <h2>Site Cloner</h2>
      <p>The site cloner takes an existing, legitimate website and produces a visual copy of it, which is the underlying mechanism behind the credential harvester module explored earlier — a convincing replica is what makes the deception work in the first place. Seeing this in more depth reinforced the same conclusion from before: how a page looks says nothing about whether it's genuine, and the defense against this class of attack has almost nothing to do with spotting bad design. It's checking the actual domain, using tools like password managers that won't autofill on a spoofed URL, and having multi-factor authentication in place so a captured password alone isn't enough.</p>

      <h2>Payload and Listener — First Look</h2>
      <p>I also started on a separate module: creating a payload and setting up a listener. At a conceptual level, a payload is code delivered to and executed on a target system, and a listener is the process on the attacker's side that waits for that payload to establish a connection back, enabling remote access. This is a meaningfully different stage of an attack chain than recon or credential harvesting — it's what happens *after* an attacker has already gained some form of initial access or delivery method, not before. I'm still early into this module and haven't gone deep into the mechanics yet — more to come as this develops.</p>

      <h2>Why This Sequencing Matters</h2>
      <p>Seeing these modules in order is clarifying in itself: recon gathers information, credential harvesting or a similar technique gets initial access, and payloads/listeners are what turn that initial access into something persistent and controllable. Understanding the shape of a full attack chain — not just isolated techniques — is what actually makes the defensive side of this meaningful.</p>
    `
  },

  {
    id: "recon-setoolkit-payloads-qr-mass-mailer",
    title: "Payloads, QR Code Attacks, Mass Mailer, and the One Rule That Actually Protects You",
    date: "2026-08-25",
    excerpt: "Continuing SEToolkit: how payloads work, the QR code generator attack vector, mass mailer campaigns, and why the single most effective defense against social engineering has almost nothing to do with technology.",
    body: `
      <p>Continued with SEToolkit and social engineering today, covering how payloads actually work, the QR code generator attack vector, and the mass mailer module.</p>

      <h2>Payloads, Revisited</h2>
      <p>Following on from Day 8's introduction, today went deeper into how a payload actually functions once delivered — code planted on a target system, built to execute and establish a connection back to whoever's waiting on the other end. Understanding this mechanism is what makes the earlier stages of an attack chain — recon, credential harvesting, delivery — make sense as a whole rather than as disconnected techniques.</p>

      <h2>QR Code Generator Attack Vector</h2>
      <p>A genuinely underappreciated one: QR codes carry the same fundamental risk as a malicious link, just with the destination hidden behind an image instead of visible text. A person who'd think twice about clicking a suspicious link will often scan a QR code without a second thought, since there's no URL to read or scrutinize beforehand — the trust is misplaced onto the format itself rather than what it actually points to.</p>

      <h2>Mass Mailer</h2>
      <p>The mass mailer module demonstrates how phishing scales — the same deceptive email sent to many targets at once, rather than a single, individually crafted attempt. It's a reminder that most phishing isn't highly targeted or sophisticated; it succeeds on volume and probability, not precision.</p>

      <h2>The Actual Rule That Matters</h2>
      <p>The single most useful takeaway from today isn't technical at all: treat every unknown link or file as malicious by default, unless there's undoubtable reason to trust it. Not "probably fine" — undoubtable. The reasoning is simple and unforgiving: once a link is clicked or a file is opened, the moment of choice has already passed. There's no partial undo. Everything after that point is damage control, not prevention.</p>

      <h2>Why This Matters Beyond Individual Awareness</h2>
      <p>This is also exactly what social engineering campaigns are for at an organizational level — not to trick staff for its own sake, but to test, in a controlled and safe way, whether that default-distrust instinct is actually in place. Running these campaigns deliberately helps organizations identify where human-based entry points exist before a real threat actor finds them, and gives staff practical, repeated exposure to what these attempts actually look like, rather than relying on a one-time training slide they've long since forgotten.</p>
    `
  },

  {
    id: "access-control-day10-auditing-clatter-firestore-rules",
    title: "Day 10 — Applying What I've Learned: Auditing and Fixing Clatter's Own Firestore Security Rules",
    date: "2026-08-26",
    featured: true,
    excerpt: "Taking a week of access control and privilege escalation lessons and pointing them at my own project — auditing Clatter's live Firestore security rules, finding a real privilege-escalation gap, and fixing it.",
    body: `
      <h2>Situation</h2>
      <p>This week's cybersecurity learning has centered on access control — IDOR, horizontal and vertical privilege escalation, and how easily an application can trust something it shouldn't. I wanted today's entry to be less about a lab environment and more about applying that thinking somewhere real: Clatter, the group chat web app I built this past week.</p>

      <h2>Task</h2>
      <p>Audit Clatter's actual Firestore security rules — the rules deciding who can read, write, update, or delete data across user profiles, groups, and group messages — looking specifically for the same class of issues covered this week: broad reads exposing data that shouldn't be visible, and writes that let a user modify more than they should be able to.</p>

      <h2>Action</h2>
      <p>Went rule by rule across three collections:</p>
      <ul>
        <li><strong>User profiles</strong> — reads are open to any signed-in user, while creating, updating, or deleting a profile is correctly restricted to that user's own document. A deliberate trade-off for username discoverability, but worth flagging: every signed-in user can currently read every other user's full profile, including their email.</li>
        <li><strong>Group messages</strong> — reads and writes are correctly scoped to group membership, and creating a message requires the sender field to match the actual authenticated user, preventing impersonation. Editing or deleting is restricted to the original sender. This section held up well.</li>
        <li><strong>Groups themselves</strong> — this is where I found a genuine issue. Updating a group was allowed for <em>any current member</em>, with no restriction on which fields could change. That meant a regular, non-admin member could technically rewrite the group document's <code>admins</code> field and grant themselves admin status — the same underlying flaw as the "user role can be modified in user profile" pattern studied earlier this week, just relocated from an individual account into a group's membership structure.</li>
      </ul>

      <h2>The Fix</h2>
      <p>Changed the group update rule from "any member can update" to "only current admins can update":</p>
      <pre><code>allow update: if request.auth != null && request.auth.uid in resource.data.admins;</code></pre>
      <p>This fully closes the privilege-escalation path. The trade-off: Clatter doesn't have a "leave group" feature yet, which would normally require a member to update the document to remove themselves — so restricting updates to admins-only has no downside today. Once a leave-group feature exists, this rule will need to be split further: members should be able to update specific fields like their own membership, while the <code>admins</code> field itself stays admin-only. Noted for when that feature gets built, not fixed prematurely.</p>

      <h2>Result</h2>
      <p>One real, concrete vulnerability found and fixed in a project I built myself, not a deliberately vulnerable lab. The user-profile read scope remains a separate, lower-severity design question worth revisiting later. Genuinely the most useful exercise of the week — a lab teaches you to recognize a pattern; auditing and fixing your own live rules is what actually tests whether you can find and correct it without someone pointing you at it first.</p>
    `
  },

  {
    id: "clatter-web-app-project-writeup",
    title: "Clatter — Building My First Web App in a Week, and Being Honest About Where It Falls Short",
    date: "2026-08-26",
    excerpt: "A full look at Clatter, a group chat web app I built in about a week — what it actually does, how it's put together, and a genuinely honest account of what's missing or unfinished, because it's a personal project, not a production product.",
    body: `
      <p>Clatter is a group chat web app I built in about a week — "Your loudest chat deserves its own app." One line, deliberately narrow scope: group conversations, done properly, without trying to be a full messaging platform. I want to be upfront before anything else: this is a personal learning project, built quickly and not a production-ready product, and I'd rather show it honestly, flaws included, than oversell it.</p>

      <h2>What It Actually Does</h2>
      <p>Authentication is handled through Firebase Auth, supporting both email/password sign-up and Google sign-in. After signing up, a new user is routed through a profile completion step — first name, last name, a permanent username, and a short bio — before ever reaching the dashboard. Usernames are checked for uniqueness against existing accounts and restricted to lowercase letters and numbers only, enforced both on input and again on submission.</p>

      <p>Once a profile exists, new users are automatically joined into a small set of default groups, so the app isn't an empty room the moment someone signs up. From there, the dashboard and profile pages pull a user's data from Firestore, cache a working copy locally for quick access across pages, and support editing your name, bio, and profile photo, plus a full account deletion flow that removes the user from every group they belonged to before deleting their profile document and their authentication record.</p>

      <h2>How It's Actually Built</h2>
      <p>User profiles, groups, and group messages live in Firestore, structured with messages as a subcollection under each group document — a shift from an earlier version of the project, which used Firebase's Realtime Database with a much flatter, single-collection chat structure. Group membership and admin status are tracked as arrays on each group document, checked by a Firestore security rules layer that decides who can read, write, or manage a given group — rules I built, then went back and actually audited properly once I had a week of access control fundamentals behind me (more on that in a separate post).</p>

      <h2>Where It Genuinely Falls Short</h2>
      <p>This is the part I want to be direct about, since it's easy to only show the polished angle:</p>
      <ul>
        <li><strong>Profile photos are stored as base64 data directly inside Firestore documents</strong>, not uploaded to proper file storage. Simple to implement, but inefficient, bloats document size, and Firestore has a hard 1MB-per-document limit — a large enough image could break this outright.</li>
        <li><strong>No image compression or resizing</strong> before a photo gets stored, which compounds the problem above.</li>
        <li><strong>Deleted accounts leave orphaned messages behind.</strong> The deletion flow removes a user from their groups and deletes their profile, but any messages they sent remain in group subcollections, now pointing to a sender that no longer exists.</li>
        <li><strong>No email verification step</strong> — an account is usable immediately after sign-up, with no confirmation the email address is real or owned by the person signing up.</li>
        <li><strong>No "leave group" feature yet</strong> — a deliberate gap for now, and one that actually shapes how strict the group security rules can be until it's built (again, more in the access-control post).</li>
        <li><strong>Client-side data caching via localStorage</strong> can go stale if a profile is updated elsewhere, since it isn't kept in sync in real time.</li>
        <li><strong>No pagination, typing indicators, or read receipts</strong> — the chat functionality itself is intentionally minimal, closer to a working proof of concept than a feature-complete messaging app.</li>
      </ul>

      <h2>Why I'm Building It Anyway</h2>
      <p>Every project before this one has been a static site — finished once it looks and works right in the browser. Clatter is the first thing I've built with real state, real persistence, and real security boundaries to actually reason about — sessions, a live database, and the real question of who's allowed to see or change what. A week in, that's exactly the kind of problem I wanted to be sitting with.</p>
      <p><img class="post-image" src="assets/blog/img/clatter.png" alt="Clatter"></p>
      <p><img class="post-image" src="assets/blog/img/clatterDash.png" alt="Clatter"></p>
    `
  },
  
  {
    id: "payload-listener-day11-meterpreter-exfiltration-lab",
    title: "Day 11 — Completing a Full Exploitation Chain: Payload, Listener, and File Exfiltration with Meterpreter",
    date: "2026-08-27",
    excerpt: "Building on earlier payload and listener fundamentals, I set up an isolated Windows VM lab and completed a full local exploitation workflow — from establishing a reverse Meterpreter session to pulling a file off the compromised host with the download command.",
    body: `
      <p>Today tied together everything explored earlier in payload and listener fundamentals into one complete, working exercise — set up entirely inside an isolated virtual lab, not against anything real or external.</p>

      <h2>Lab Setup</h2>
      <p>Configured a VMware shared folder between a Zorin OS host and a Windows VM, and used Python's built-in HTTP server (<code>python3 -m http.server</code>) to move files between host and guest as an alternative transfer method. Confirmed the Windows VM's IP address with <code>ipconfig</code> and verified connectivity between the two machines before proceeding — attack machine at 172.16.136.130, target VM at 172.16.136.131, both isolated within the lab's host-only network.</p>

      <h2>Establishing the Session</h2>
      <p>A reverse Meterpreter session was generated and delivered to the Windows VM. Once triggered, it connected back to the attack machine, landing as session 4. Interacted with it directly using <code>sessions -i 4</code>, then worked through core Meterpreter commands to enumerate and navigate the target system.</p>

      <h2>Cross-Platform Command Mapping</h2>
      <p>Reviewed the practical differences between Linux and Windows commands while operating from the Meterpreter shell on the target — since a Meterpreter session runs its own command set on top of the compromised OS, some commands map close to their Linux equivalents (<code>ls</code>, <code>cd</code>, <code>pwd</code>), while others need Windows-specific handling (<code>getuid</code>, <code>sysinfo</code>, <code>hashdump</code> for credential material, though this session focused on file access rather than credential extraction).</p>

      <h2>File Exfiltration</h2>
      <p>Used Meterpreter's <code>download</code> command to pull a target document from the compromised Windows VM directly onto the attack machine's local filesystem, closing out the full chain: payload delivery, session establishment, target enumeration, and successful data exfiltration.</p>

      <h2>Why This Matters</h2>
      <p>Running this chain end to end in a fully isolated environment makes the individual pieces — payloads, listeners, session interaction, the <code>download</code> primitive — click as one coherent workflow rather than isolated concepts. It's also a direct illustration of why endpoint detection, egress monitoring, and least-privilege file access controls matter operationally: every stage here — payload execution, the reverse connection, and the file transfer itself — is a distinct point where a properly instrumented environment should generate a detectable signal.</p>
    `
  },

  {
    id: "cors-origin-reflection-vulnerability",
    title: "Cross-Origin Resource Sharing (CORS) and Origin Reflection",
    date: "2026-08-28",
    excerpt: "Starting a new topic on PortSwigger's Web Security Academy: CORS misconfigurations, how the same-origin policy works, and exploiting a basic origin-reflection vulnerability to steal data across domains.",
    body: `
      <p>Started a new topic today: Cross-Origin Resource Sharing (CORS), and specifically how a poorly configured CORS policy can turn a browser security mechanism into a data-theft vector.</p>

      <h2>The Same-Origin Policy, First</h2>
      <p>To understand CORS, the same-origin policy (SOP) has to come first. SOP is the browser's default, restrictive rule that limits how a website can interact with resources on a different domain. It generally allows one domain to *send* a request to another, but blocks it from actually *reading the response* — which is exactly what stops a malicious site from silently pulling private data from a site a user happens to be logged into.</p>

      <h2>What CORS Actually Is</h2>
      <p>CORS is the controlled mechanism that relaxes SOP on purpose, for legitimate cases — a site that needs to serve data to a trusted subdomain or a known third party. It works through a set of HTTP headers exchanged between browser and server, most importantly <code>Access-Control-Allow-Origin</code>, which tells the browser which origins are permitted to actually read a response, not just send the request. It's worth being clear that CORS is not a defense against CSRF — it's a separate mechanism solving a separate problem, and conflating the two is a common mistake.</p>

      <h2>Where It Breaks: Origin Reflection</h2>
      <p>Maintaining an explicit allow-list of trusted domains takes ongoing effort, and it's easy to get wrong. Some applications take a shortcut instead: they read whatever <code>Origin</code> header the incoming request sends, and simply reflect that exact value back in the <code>Access-Control-Allow-Origin</code> response header — effectively trusting any origin that asks. Combined with <code>Access-Control-Allow-Credentials: true</code>, this means a request from literally any attacker-controlled domain, sent while the victim is authenticated, gets processed in-session and its response becomes readable cross-origin.</p>

      <p>The exploitation pattern is straightforward once that gap exists: a script on an attacker's own domain issues a credentialed request to the vulnerable site's sensitive endpoint. Because the server reflects the attacker's origin as trusted, the browser allows the script to read the response — including anything sensitive returned, like an API key or CSRF token — and exfiltrate it back to the attacker's own server.</p>

      <h2>Lab Solved</h2>
      <p>CORS vulnerability with basic origin reflection.</p>

      <h2>Why This Is Worth Understanding</h2>
      <p>CORS misconfigurations are a good example of a security control that looks correctly implemented at a glance — headers are present, credentials are handled, everything "works" — while actually providing no real restriction at all. The lesson isn't "don't use CORS," it's that reflecting user-controlled input directly into a trust decision, which is exactly what happens when the <code>Origin</code> header dictates the <code>Access-Control-Allow-Origin</code> response, defeats the entire point of having an allow-list in the first place.</p>
    `
  },

  {
    id: "cors-whitelist-parsing-null-origin",
    title: "CORS Whitelist Parsing Mistakes and the Null Origin Trap",
    date: "2026-08-29",
    excerpt: "Continuing CORS on PortSwigger's Web Security Academy: how origin whitelist implementations get broken by careless prefix/suffix matching, and why trusting the null origin value opens a genuine, exploitable gap.",
    body: `
      <p>Continued the CORS topic today, moving from basic origin reflection into two more subtle failure modes: mistakes in how a whitelist actually gets checked, and the specific danger of trusting the null origin value.</p>

      <h2>Whitelists Aren't Automatically Safe</h2>
      <p>Yesterday's post covered origin reflection with no real check at all. A whitelist looks like the fix — compare the incoming <code>Origin</code> header against a known list of trusted domains, and only reflect it back if there's a match. But a whitelist is only as good as how it's actually implemented, and that's where today's labs focused.</p>

      <h2>Prefix and Suffix Matching Gone Wrong</h2>
      <p>Some applications try to trust an entire family of domains at once — every subdomain of their own site, or every domain belonging to a partner organization — implemented through prefix or suffix string matching, or regular expressions. Both directions can be exploited if the matching logic isn't precise:</p>
      <ul>
        <li>If an app trusts anything <em>ending in</em> <code>normal-website.com</code>, an attacker can simply register <code>hackersnormal-website.com</code> — same suffix, completely different, attacker-controlled domain.</li>
        <li>If an app trusts anything <em>starting with</em> <code>normal-website.com</code>, an attacker can register <code>normal-website.com.evil-user.net</code> — the real domain sits at the start of the string, but the actual domain being registered and controlled is <code>evil-user.net</code>.</li>
      </ul>
      <p>Both cases come down to the same root problem: matching against a substring of a domain name is not the same as matching against the actual, structurally correct domain — and an attacker only needs to find where that distinction breaks down.</p>

      <h2>The Null Origin Trap</h2>
      <p>The second, more subtle issue: browsers legitimately send <code>Origin: null</code> in several ordinary situations — cross-origin redirects, requests from serialized data, <code>file:</code> protocol requests, and sandboxed cross-origin requests. Some applications whitelist <code>null</code> specifically to make local development easier, without realizing that <code>null</code> isn't a value only their own dev environment can produce.</p>
      <p>An attacker can deliberately generate a request carrying <code>Origin: null</code> using a sandboxed iframe — for example, an iframe with a restrictive sandbox attribute pointed at inline, data-URI-based script. That script issues a credentialed cross-origin request to the vulnerable endpoint. Because the server trusts <code>null</code>, and the sandboxed iframe genuinely sends <code>Origin: null</code>, the request passes the whitelist check and the response becomes readable, cookies and all, exactly like yesterday's reflection vulnerability.</p>

      <h2>Labs Solved</h2>
      <p>CORS vulnerability with trusted null origin.</p>

      <h2>The Common Thread</h2>
      <p>Both of today's issues are really the same underlying lesson from a different angle: a whitelist is only a real control if the comparison logic is exact and the values being trusted are genuinely impossible for an attacker to produce. String matching that's slightly too loose, or a special-case value that's more universally reachable than it looks, both quietly turn an intended restriction into no restriction at all.</p>
    `
  },

  {
    id: "cors-intranet-attacks-and-prevention",
    title: "Intranet CORS Attacks and How to Actually Prevent CORS Vulnerabilities",
    date: "2026-08-31",
    excerpt: "Closing out CORS on PortSwigger's Web Security Academy: how attacks work even without credentials against internal networks, and the concrete configuration principles that actually prevent this entire vulnerability class.",
    body: `
      <p>Wrapped up CORS today — the final case, which doesn't even need credentials to be dangerous, and the actual prevention principles that tie the whole topic together.</p>

      <h2>Most CORS Attacks Need Credentials — This One Doesn't</h2>
      <p>Every case covered so far in this topic depended on <code>Access-Control-Allow-Credentials: true</code> — without it, a victim's browser won't send cookies along with a cross-origin request, so an attacker only gets unauthenticated content, which they could just browse to directly anyway. That's normally where the attack surface ends.</p>
      <p>The exception is intranets. Internal websites sitting on private IP address space aren't directly reachable by an external attacker at all — and are often held to a noticeably lower security standard than public-facing sites, precisely because they were never expected to face external traffic. If an internal application responds to cross-origin requests with <code>Access-Control-Allow-Origin: *</code>, it's trusting literally any origin, no credentials required. If a user inside that private network also browses the public internet, their browser becomes an unwitting proxy: an external attacker's site can issue requests that get sent from inside the network, reaching intranet resources the attacker could never access directly themselves.</p>

      <h2>Actual Prevention, Not Just Avoiding Mistakes</h2>
      <p>The topic closed with concrete defensive principles, which read as a clean summary of everything gone wrong across the last four days:</p>
      <ul>
        <li><strong>Specify real, explicit trusted origins</strong> for any resource containing sensitive data — no shortcuts.</li>
        <li><strong>Never dynamically reflect the Origin header</strong> without real validation against an allow-list — the exact flaw from Day 12.</li>
        <li><strong>Never whitelist the null origin</strong> — sandboxed and internal-document requests can produce it legitimately, which an attacker can also reproduce, as covered on Day 13.</li>
        <li><strong>Avoid wildcard origins on internal networks</strong> specifically — network isolation alone isn't sufficient once internal browsers can reach untrusted external sites, which is exactly today's intranet case.</li>
        <li><strong>CORS is never a substitute for real server-side security</strong> — authentication and session management still have to do their job independently, because an attacker can always forge a direct request claiming to be from a trusted origin. CORS governs browser behavior; it says nothing about what a server should accept from a raw, non-browser request.</li>
      </ul>

      <h2>CORS, Start to Finish</h2>
      <p>Across all five days: CORS breaks through blind origin reflection, sloppy whitelist matching, trusting the null origin, trust extended to an origin with its own weaknesses (XSS or plain HTTP), and — today — trusting any origin at all on an internal network. Every single case reduces to the same idea: CORS is a trust decision, and every trust decision is only as sound as what it's actually verifying, not what it appears to be checking on the surface.</p>
    `
  },

  {
    id: "bug-bounty-pivot-idor-methodology",
    title: "Pivoting to Bug Bounty Hunting, and How IDOR Actually Gets Found",
    date: "2026-09-02",
    excerpt: "Stepping away from structured labs for a day to find where hands-on, real-world practice actually happens — breaking down how IDOR and access control vulnerabilities genuinely arise and get discovered, then signing up for my first bug bounty platform.",
    body: `
      <h2>Situation</h2>
      <p>Seventeen days into structured learning — PortSwigger labs, MCSI exercises, SEToolkit — and today was the first day that structure alone didn't feel like the right next step. Labs are good for building technique, but they're not the same as testing a real, live system with real consequences behind it.</p>

      <h2>Task</h2>
      <p>Figure out where genuinely hands-on, real-world security practice actually happens outside of a lab environment, understand properly how the vulnerability class I've spent the most time on — access control and IDOR — actually gets found in practice, and take the first real step toward doing it for real.</p>

      <h2>Action</h2>
      <p>Broke down IDOR and access control vulnerabilities at the root: they exist whenever an application confirms who a user is, but doesn't separately verify what that specific user is authorized to touch. In practice this shows up as predictable object IDs in URLs, functionality hidden in the UI but unprotected on the backend, multi-step processes that only enforce checks on the earlier steps, and role or permission data trusted from the client instead of verified server-side.</p>

      <p>The actual real-world methodology is more systematic than clever: set up two test accounts on a target, map every request containing an identifier, then deliberately swap IDs between accounts and see what comes back — using Burp Suite's Repeater for the actual swap-and-replay work. APIs specifically tend to leak more than the UI displays, since a JSON response often includes fields the frontend just chooses not to render.</p>

      <p>With that understanding in hand, signed up on Bugcrowd — a bug bounty platform where researchers test real, live production systems belonging to real companies, working within a defined scope and rules of engagement instead of a sandboxed lab. Set up a profile calibrated honestly to where I actually am: Beginner track, Developer background, Web and Backend/Server platforms, with skills and industries selected to match real experience rather than aspiration.</p>

      <h2>Result</h2>
      <p>A genuine shift in direction — from "complete another lab" to "test something real, with real scope and real consequences." No submissions yet, but a real account, a real profile, and a clear, repeatable methodology for the exact vulnerability class I already have the most practiced eye for. Next step: pick an actual target, read its scope properly, and start mapping requests for real.</p>
    `
  },

  {
    id: "vibed",
    title: "Building Vibed as a Web App — Where Things Stand",
    date: "2026-09-03",
    featured: true,
    excerpt: "Progress notes on building Vibed as a responsive web app — vanilla JS and Firebase, built with an actual launch in mind, not just a portfolio piece.",
    body: `
      <p>I'm building Vibed from the ground up as a responsive web app — vanilla JavaScript and Firebase, working across both desktop and mobile layouts — with the intention of actually launching and growing it in a real city, not just shipping it as a portfolio piece.</p>

      <h2>What's Fully Built and Working</h2>
      <ul>
        <li>A polished landing page, with attention paid to small correctness details like using <code>&lt;a&gt;</code> versus <code>&lt;button&gt;</code> appropriately depending on whether an element navigates or performs an action</li>
        <li>Full signup flow — email/password and Google Sign-In, writing a Firestore profile on account creation, sending email verification, and caching a lightweight user object to localStorage for fast access across pages</li>
        <li>Full login flow — same dual auth methods, gated on email verification status, with a self-healing fallback that creates a minimal profile if one is unexpectedly missing from Firestore</li>
        <li>An email verification screen with a resend button that disables itself while sending and gives toast feedback, auto-redirecting once verification completes</li>
        <li>A dashboard shell with sidebar navigation, view-switching between sections, and a working auth guard</li>
        <li>A fully editable profile view — bio editing, compressed photo upload stored in Firestore, synced back to local cache, plus a dedicated Safety Center and sign-out</li>
      </ul>

      <h2>What's Still Stubbed Out</h2>
      <p>The core interactive views are still placeholders — this is genuinely the next real phase of the build, moving from account infrastructure into the actual product experience. Also on the list: wiring up account deletion, which currently has a button but no handler behind it yet.</p>

      <h2>What's Next</h2>
      <p>The next real milestone is building out the live feed — pulling real-time data into the app using Firestore's <code>onSnapshot</code> listeners, so the experience actually feels live rather than requiring a manual refresh. More updates as that takes shape.</p>
      <p><img class="post-image" src="assets/blog/img/vibed.png" alt="Vibed"></p>
    `
  },

  {
    id: "vibed-create-event-and-home-feed",
    title: "Vibed: Event Creation Live, Home Feed Underway",
    date: "2026-09-04",
    excerpt: "A lighter day, but real progress on Vibed: a fully functional Create Event page writing to Firestore, and the first steps toward the Home feed that will actually display those events.",
    body: `
      <h2>Situation</h2>
      <p>Not a full day today, but still made real forward progress on Vibed rather than losing the day entirely.</p>

      <h2>Task</h2>
      <p>Get event creation fully working end to end, and begin wiring up the Home feed to actually surface those events once created.</p>

      <h2>Action</h2>
      <p>Built out the Create Event page so it properly writes event data to Firestore — title, description, location, and capacity all captured and stored correctly. This follows directly on from last session's fully working Profile page, which now draws and updates live data between Firestore and local cache in both directions.</p>

      <p>With event creation confirmed working, moved into the Home page — the view responsible for pulling those events back out of Firestore and actually displaying them. This is currently in progress rather than finished.</p>

      <h2>Result</h2>
      <p>Two of the app's core pieces are now genuinely connected: events can be created and persisted, and the feed meant to surface them is underway. Auth, profile, and event creation are now all real, working infrastructure rather than placeholders — the Home feed is the next piece to land, and the one that will make the app actually feel usable end to end.</p>
    `
  },

  {
    id: "vibed-security-controls-client-vs-server",
    title: "Vibed: Input Validation, Session Guards, and the Client-Side Trap",
    date: "2026-09-05",
    featured: true,
    excerpt: "A security-focused look at what's actually been built into Vibed so far — input validation, logic control, session guards — and the important distinction between validation that protects UX and validation that actually protects data.",
    body: `
      <p>Today's session on Vibed was less about new features and more about looking at what's already been built through a security lens — specifically the event creation and joining flow.</p>

      <h2>Input Validation</h2>
      <p>Every form field in event creation has real constraints, not just placeholder text: event titles capped at 40 characters, descriptions at 170, location at 120, profile bios at 90 — all enforced via <code>maxlength</code>, alongside <code>required</code> attributes and native <code>date</code>/<code>time</code> input types rather than free-text fields prone to malformed input.</p>

      <h2>Logic Control</h2>
      <p>Beyond basic field validation, there's real business-logic enforcement in the create flow: an event date can't be set in the past — checked by comparing the selected date against today's date and rejecting it with user feedback if it fails. Participant capacity is bounded between 2 and 50, enforced through the stepper controls rather than allowing an arbitrary number. On the join side, a user can't join an event twice (checked against the existing participant array) and can't join a full event (checked against the capacity limit) — both surfaced with clear feedback rather than failing silently.</p>

      <h2>Session Management</h2>
      <p>Every sensitive action — creating an event, joining an event, saving a bio update — checks for a valid authenticated user (<code>USER?.uid</code>) before proceeding, rather than assuming a signed-in state. If that check fails, the action stops immediately with an explicit message rather than attempting the write and failing confusingly later.</p>

      <h2>The Honest Part: Client-Side Isn't the Same as Secure</h2>
      <p>Here's the part worth being direct about, since it's the actual security lesson today surfaced. Every control described above — the date check, the capacity cap, the duplicate-join guard — currently lives entirely in client-side JavaScript. That's genuinely valuable for user experience: it gives immediate feedback and prevents accidental mistakes. But none of it is real security on its own, because client-side code can always be bypassed. Anyone could open browser dev tools, or call Firestore directly with their own script, and submit an event with a capacity of 500, a date in 2020, or join a full event — completely skipping every check described above, since nothing on the server is currently verifying any of it.</p>

      <p>This is the exact same lesson underneath everything covered in the access control module weeks ago: a check that only exists on the client is a suggestion, not a boundary. The real fix is matching Firestore security rules that independently enforce these same constraints server-side — capacity limits, valid dates, no duplicate joins — the same way rules already govern who can read or write group and message data on Clatter. That's the next real security task for Vibed, not a new feature: closing the gap between "the UI won't let you do this" and "the server won't let you do this."</p>
    `
  },

  {
    id: "clatter-launch-web-dev-and-security-showcase",
    title: "Clatter Is Live — A Web App, Not Just an Idea",
    date: "2026-09-06",
    featured: true,
    excerpt: "Clatter, my group chat web app, is now live and shareable. A full breakdown of what was actually built — the frontend, the data model, the real-time chat — and the security work behind it, including a genuine privilege-escalation flaw I found and fixed in my own code.",
    body: `
      <p>"Demonstration is the proof of knowledge. You can say that you can do it, but until you have done it and we have seen it, do we know that you know it?"</p>

      <p>That's the whole reason this post exists. I've written a lot about learning — labs, courses, certificates — but Clatter is different. It's not a lab. It's a real, working, live application, and it's time to actually show it rather than just talk about it.</p>

      <p><strong>Try it here: </strong> <a id="link-to-git" href="https://augustfire26-8463d.web.app/" target="_blank"> Clatter →</a></p>

      <h2>What Clatter Actually Is</h2>
      <p>Clatter is a group chat web app — "Your loudest chat deserves its own app." Sign up, complete a profile with a permanent username, get automatically dropped into a few default groups, and start chatting in real time. You can create your own groups, invite people by username, reply to specific messages, edit or delete your own messages, react with emoji, and manage your account, including full deletion if you want out.</p>

      <h2>The Web Development Side</h2>
      <p>Built entirely in vanilla JavaScript on top of Firebase — no frameworks. A few things worth pointing out specifically:</p>
      <ul>
        <li><strong>Real-time everything.</strong> Groups and messages update live using Firestore's <code>onSnapshot</code> listeners — no refresh button, no polling. Send a message, and it appears instantly for everyone in that group.</li>
        <li><strong>A genuinely structured data model.</strong> Messages live as a subcollection nested under each group document, rather than one flat collection — a deliberate redesign from an earlier version that used a much simpler structure. Group documents track their own members and admins as arrays, which the app reads to render membership, and which the backend independently verifies (more on that below).</li>
        <li><strong>Full account lifecycle.</strong> Email/password and Google sign-in, a guided profile-completion step with live username-uniqueness checking, editable profile details with photo upload, and a delete-account flow that properly removes you from every group you belonged to before deleting your profile and login credentials — not just a surface-level "delete" that leaves orphaned data behind.</li>
        <li><strong>Small UX details that add up:</strong> reply-to-message threading, an emoji picker, debounced username search when adding members to a group, and local caching of profile data so the app feels fast without hammering Firestore on every page load.</li>
      </ul>

      <h2>The Security Side</h2>
      <p>This is the part I actually want to highlight, because it's not something bolted on after the fact — it's something I went back and deliberately tested, the same way I'd approach any real target.</p>
      <p>Once I started learning access control and privilege escalation concepts properly, I turned that lens on my own project instead of only practicing on labs. Auditing Clatter's actual backend rules surfaced a genuine, real vulnerability: a regular, non-admin member of a group could technically rewrite the group's admin list and grant themselves elevated permissions — including the ability to delete a group they were never supposed to control. Same category of bug as things I'd been studying, just found in my own code instead of someone else's deliberately vulnerable app.</p>
      <p>I fixed it properly rather than papering over it — members can still join and leave groups freely, but only actual admins can touch anything admin-related. I also confirmed message impersonation is blocked (nobody can send a message that appears to come from someone else), and that access to any group or its messages is verified server-side against real membership, not just trusted from whatever the app's interface displays.</p>

      <h2>Where It Genuinely Falls Short</h2>
      <p>I'd rather say this plainly than have someone discover it and wonder if I knew. This is a personal project — a demonstration that I can build and secure a real, working application — not a production product, and not something I'm claiming is bulletproof:</p>
      <ul>
        <li>No email verification on signup — an account is usable immediately, with nothing confirming the email address is real.</li>
        <li>Profile photos are stored as base64 data directly in the database rather than proper file storage — simple, but inefficient and capped by document size limits.</li>
        <li>Any signed-in user can currently read any other user's full profile, including their email — a deliberate tradeoff for username discovery that a real product would need to reconsider.</li>
        <li>No pagination, typing indicators, or read receipts — the chat itself is intentionally minimal, a working proof of concept rather than a feature-complete messaging platform.</li>
      </ul>

      <h2>Why This Matters More Than Another Lab Completion</h2>
      <p>Every course, certificate, and lab I've documented has been valuable — but they all come with the answer key nearby, in some form. Clatter didn't. I built it, found a real flaw in my own work without anyone pointing me at it, and fixed it properly. That's the difference between knowing the theory and actually being able to apply it — and it's exactly why this one gets a live link instead of just a writeup.</p>
    `
  }
]

window.POSTS = POSTS