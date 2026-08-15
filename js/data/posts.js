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
  }
]

window.POSTS = POSTS