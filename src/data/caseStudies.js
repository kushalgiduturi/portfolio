import heroShot from '../assets/hastra/hero.png';
import ringsLogo from '../assets/hastra/hastra-rings-logo.svg';

// Each case study renders on its own page (#/case-study/<slug>).
export const LIVE_URL = 'https://hastra.onrender.com/';

export const caseStudies = [
  {
    slug: 'hastra',
    eyebrow: 'Case Study · Full-Stack Security Platform',
    title: 'Hastra',
    summary:
      'A secure delivery workspace for software companies and their clients. Requirements, tasks, approvals, billing and credential handover live in one place, with encryption, a tamper-evident audit trail and layered access control built in from the first line of code.',
    liveUrl: LIVE_URL,
    banner: heroShot,
    meta: [
      { label: 'Role', value: 'Designer and sole developer' },
      { label: 'Stack', value: 'PHP 8, MySQL / MariaDB' },
      { label: 'Hosting', value: 'Docker, Caddy HTTPS, Render' },
      { label: 'Status', value: 'Live' },
    ],
    overview: [
      'Software delivery companies usually juggle many separate tools: a project tracker, a spreadsheet for requirements, email threads for approvals, a password manager for client credentials and another tool for invoices. Important details get lost between them, and sensitive information such as passwords ends up sitting unencrypted in a chat message or a spreadsheet.',
      'Hastra gives a company one connected workspace instead. Every requirement, task and approval is recorded and dated. Every credential handed to a client is encrypted and can be viewed only once. Every important action is logged in a way that cannot be quietly changed afterwards. Client companies, solo developers and full organizations all use the same system with the access level that fits them.',
      'It is written in plain PHP and MySQL with no framework and no build step, which keeps the code easy to read, host and audit. Security is the default behaviour of the platform, not an extra step people forget to do.',
    ],
    targetUsers: [
      'Software agencies and studios that deliver projects to paying clients.',
      'Solo developers and freelancers who need a professional handover process.',
      'Client companies and individual clients who must review requirements, approve work and receive deliveries.',
      'Sysadmins who need proof that the system has not been tampered with.',
    ],
    designGoals: [
      'One workspace for requirements, work, approvals, money, credentials and the paper trail.',
      'Secure by default: no unencrypted secrets and no unlogged actions.',
      'Simple to host and inspect: no framework, no build step.',
      'Accessible to everyone: built to WCAG 2.1 AA.',
    ],
    goalsTitle: 'Design goals',
    flow: [
      'A client submits or updates requirements. Every change is stored as its own version, so the team can show exactly what changed and when.',
      'The company creates tasks, tracks bugs and manages testing inside the project.',
      'When a milestone is ready, both the project manager and the client must approve it. This dual key sign-off stops one side from marking work finished alone.',
      'Once the invoice tied to that milestone is settled, the deliverable is released to the client automatically.',
      'Any logins or credentials are placed in a one-time encrypted dossier. The client opens it once, the details appear, and they are permanently wiped.',
    ],
    flowTitle: 'How work moves through Hastra',
    tracks: {
      title: 'Four account paths and role-based portals',
      intro:
        'On sign-up a person picks the path that fits them. Each account is placed in a role (sysadmin, admin, employee or client) and every page and action checks that role before anything happens.',
      items: [
        { name: 'Full organization', text: 'A company with sysadmins, admins, employees and clients working together, with team rosters, attendance, leave requests and a leave calendar.' },
        { name: 'Solo developer or studio', text: 'A single person or small team without a large staff structure.' },
        { name: 'Client company', text: 'A business that hired a Hastra-using company and needs to review requirements, approve work and receive deliveries.' },
        { name: 'Individual client', text: 'A single person on the client side, with the same isolation guarantees.' },
      ],
    },
    features: {
      title: 'What it can do',
      items: [
        { name: 'Versioned requirements', text: 'Every edit is a new version, with a side-by-side view of what changed.' },
        { name: 'Projects, tasks and bugs', text: 'Tracking, testing and deployment approval steps before anything goes live.' },
        { name: 'Dual key milestone sign-off', text: 'The project manager and the client must both approve a milestone.' },
        { name: 'Invoice-gated release', text: 'Finished work is released automatically once its invoice is settled.' },
        { name: 'Self-destructing dossiers', text: 'One-time encrypted credential handovers that wipe after viewing.' },
        { name: 'Security Scan Center', text: 'Scans uploaded source archives and imports OWASP ZAP reports.' },
        { name: 'Legal and consent', text: 'Privacy, terms, cookie and refund pages, a cookie banner and recorded terms acceptance per user.' },
        { name: 'Dark and light themes', text: 'An animated three.js landing page and sign-in scene, with both themes.' },
      ],
    },
    labs: {
      title: 'Hastra Labs',
      intro: 'A free area of the same site that needs no account. Anything sensitive stays in the visitor\'s own browser.',
      items: [
        { name: 'Crypto toolkit', text: 'Encrypts text or files with AES-256-GCM, ChaCha20-Poly1305, RSA-4096-OAEP, X25519, ML-KEM-768/1024, the X-Wing hybrid and ML-DSA-65/87 signatures. A hashing tool covers Argon2id, bcrypt, HMAC-SHA256, PBKDF2-SHA512 and keyed BLAKE3. It all runs client-side, so nothing secret is sent to a server.' },
        { name: 'SIEM and threat intel', text: 'Feed normalizing tools, risk scoring, and a calculator for sizing large scale log processing systems.' },
        { name: 'Syllabus Accelerator', text: 'Reads an uploaded course outline (PDF, Word or text), splits it into topics, finds well-ranked video tutorials for each and tracks progress toward a target date.' },
      ],
    },
    architecture: {
      title: 'Architecture and deployment',
      paragraphs: [
        'Every page is rendered by the server at the moment it is requested: PHP checks who the user is, decides what they may see and builds the page. There is no separate frontend framework, which makes the whole system easy to inspect and reason about.',
        'In development Hastra runs on a simple XAMPP stack. In production it is packaged with Docker: PHP 8.2 with Apache, MariaDB and Caddy for automatic HTTPS, started with a couple of commands on almost any server. The public instance runs on Render behind a TLS-terminating proxy, and the app is written to trust that proxy correctly for redirects and secure cookies.',
      ],
      stack: ['PHP 8', 'MySQL / MariaDB', 'Apache', 'Docker', 'Caddy', 'Render', 'three.js', 'WebCrypto', 'OAuth 2.0'],
    },
    security: {
      title: 'Security features',
      intro:
        'Every control below is implemented in the Hastra codebase. They are grouped by the layer they protect, from the login screen down to the database and the audit trail.',
      groups: [
        {
          name: 'Identity and sign-in',
          items: [
            { name: 'Argon2id password hashing', text: 'Passwords are never stored. Only a slow, memory-hard Argon2id hash is kept, so a stolen database cannot reveal them.' },
            { name: 'Emailed one-time codes (OTP)', text: 'After a correct password, a code is emailed and must be entered to finish signing in, so a stolen password alone is not enough.' },
            { name: 'Google sign-in with PKCE', text: 'OAuth 2.0 authorization code flow with PKCE, so intercepted codes are useless.' },
            { name: 'reCAPTCHA v2', text: 'Challenges automated clients on the public forms.' },
            { name: 'Account lockouts and rate limits', text: 'Repeated failures lock the account, and attempts are limited per network in a short window to stop password guessing.' },
            { name: 'VPN and proxy detection', text: 'Sign-in attempts routed through anonymizing VPNs or proxies are detected and blocked.' },
          ],
        },
        {
          name: 'Sessions and access control',
          items: [
            { name: 'Session binding', text: 'A session is tied to the device and network that created it. Reusing a stolen session elsewhere ends it.' },
            { name: 'Session ID regeneration', text: 'A fresh session ID is issued at privilege changes to prevent fixation.' },
            { name: 'Secure cookies', text: 'HttpOnly, SameSite and Secure flags on cookies served over HTTPS. The Labs session cookie is scoped to /labs/ only.' },
            { name: 'CSRF tokens', text: 'State-changing forms carry per-session tokens compared in constant time.' },
            { name: 'Role checks on every page and action', text: 'Sysadmin, admin, employee and client roles are enforced server-side on every request.' },
            { name: 'Client company isolation', text: 'A client can never see another client company\'s requirements, files or invoices.' },
          ],
        },
        {
          name: 'Data protection',
          items: [
            { name: 'AES-256-GCM column encryption', text: 'Names, emails, phone numbers and other sensitive fields are encrypted before they are saved, with authenticated encryption.' },
            { name: 'Versioned, rotatable keys', text: 'Keys can be rotated over time without breaking older encrypted data.' },
            { name: 'HMAC blind indexes', text: 'Fields such as email can still be looked up without ever being stored in readable form.' },
            { name: 'Prepared statements', text: 'Database access uses parameterized queries throughout, which blocks SQL injection.' },
            { name: 'Secrets kept out of the web root', text: 'Keys live in git-ignored config/*.key files that the web server refuses to serve.' },
            { name: 'MIME-validated uploads', text: 'Uploaded files are checked by their real content type, not just their extension.' },
            { name: 'Ephemeral credential dossiers', text: 'Credentials are encrypted, shown once and then wiped, even from administrators.' },
          ],
        },
        {
          name: 'Integrity and accountability',
          items: [
            { name: 'Hash-chained audit log', text: 'Each entry is linked to the previous one with HMAC, so editing or deleting history breaks the chain.' },
            { name: 'In-app chain verifier and anchor file', text: 'Sysadmins can verify the whole chain at any time, and an anchor file helps detect truncation of the log.' },
            { name: 'Company-scoped CSV audit export', text: 'Each company can export its own audit trail for review.' },
            { name: 'Dual key milestone sign-off', text: 'Both the project manager and the client must approve before work counts as done.' },
            { name: 'Invoice-gated escrow release', text: 'Deliverables are released only after the linked invoice is settled.' },
            { name: 'Versioned requirements', text: 'Every change to a requirement is preserved as its own version.' },
          ],
        },
        {
          name: 'Detection and response',
          items: [
            { name: 'Honeytokens and decoy accounts', text: 'Fake accounts and secrets that no real user touches. Any contact is a strong signal, and Hastra can lock down automatically.' },
            { name: 'Security Scan Center', text: 'Static analysis of uploaded source archives plus import of OWASP ZAP reports.' },
            { name: 'Sysadmin transparency dashboard', text: 'Shows the security controls with live checks, so claims are verified rather than assumed.' },
            { name: 'One-time restricted view for clients', text: 'Clients can be shown a summary of the security measures protecting their project.' },
          ],
        },
        {
          name: 'Web hardening and privacy',
          items: [
            { name: 'Content-Security-Policy headers', text: 'A strict CSP on the app, with a wider policy applied only under /labs/ where in-browser crypto needs it.' },
            { name: 'Security headers', text: 'X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy and HSTS.' },
            { name: 'Blocked internal paths', text: 'Dotfiles, version control folders, backups and the test suite return 404, and directory listing is off.' },
            { name: 'Cookie consent and embed guard', text: 'Consent banner plus protection against unwanted third-party embeds.' },
            { name: 'Versioned terms acceptance', text: 'Records which version of the terms each user agreed to, and when.' },
            { name: 'WCAG 2.1 AA accessibility', text: 'Visible focus, labelled controls, full keyboard support and compliant contrast.' },
            { name: 'End-to-end tests on a cloned database', text: 'The security behaviour is tested against a copy of the database, never production data.' },
          ],
        },
      ],
    },
    gallery: {
      title: 'Visuals',
      items: [
        { src: heroShot, caption: 'Brand and social preview', text: 'The Hastra identity: a bold H mark in red on a dark grid, with the pixel-style wordmark and the three pillars of the platform, Crypto, SOC and Study.' },
        { src: ringsLogo, caption: 'Rings logo mark', text: 'The alternate vector mark used on the sign-in scene and loader. Everything in the product uses this red-on-dark palette, in both dark and light themes.', contain: true },
      ],
    },
    learnings: [
      'Security is easiest to get right when it is the default path. Encryption, logging and role checks live in shared core files, so no page can forget them.',
      'A tamper-evident log changes how a team behaves, because everyone knows history cannot be edited quietly.',
      'Plain PHP with no build step made the system far easier to audit, and deployment became a single repeatable Docker stack.',
      'Running behind a TLS-terminating proxy needs care. Redirects, secure cookies and client IP detection all have to trust the proxy deliberately and only in the right places.',
    ],
  },
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
