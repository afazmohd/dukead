(() => {
  const body = document.body, page = body.dataset.page, prefix = body.dataset.prefix || '';
  const main = document.getElementById('main');
  const A = (path) => prefix + path;

  const arrow = '<span class="arrow-plain" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 17 17 7M7 7h10v10"/></svg></span>';

  const label = t => `<div class="section-label"><span class="label-square"></span>${t}</div>`;

  const cta = (text = 'Start a Project', href = 'contact.html', outline = false) =>
    `<a class="agency-button ${outline ? 'agency-button-outline' : 'agency-button-primary'}" href="${A(href)}">${text}${arrow}</a>`;

  const heading = (tag, title, desc) =>
    `<section class="page-hero container">${label(tag)}<h1>${title.split('\n').map(x => `${x}<br>`).join('')}</h1><p>${desc}</p></section>`;

  const closeCta = () =>
    `<section class="closing-cta"><div class="container reveal">${label('GOOD THINGS START WITH A CONVERSATION')}<div class="closing-row"><h2>HAVE AN IDEA?<br><span>LET'S BUILD IT.</span></h2><a class="big-arrow" href="${A('contact.html')}" aria-label="Start a project">${arrow}</a></div><p>Your next chapter deserves a creative partner. Let's make it happen.</p></div></section>`;

  const services = [
    {
      slug: 'website',
      name: 'Website Creation',
      short: 'Digital experiences designed to make your brand clear, credible and memorable.',
      tag: 'DIGITAL EXPERIENCE',
      headline: 'A DIGITAL HOME.\nBUILT TO MOVE.',
      intro: 'Thoughtful, responsive websites that bring your brand to life and make the next step clear.',
      benefits: ['A clearer first impression', 'A considered user journey', 'Designed for every screen'],
      includes: ['Website strategy and structure', 'Responsive page design', 'Content layout and visual direction', 'Contact forms and key interactions', 'Launch-ready handover'],
      workflow: ['Discover your goals and audience', 'Shape the structure and visual direction', 'Build, test and refine across devices'],
      use: 'For businesses that need a professional online presence that feels considered and works smoothly.'
    },
    {
      slug: 'branding',
      name: 'Branding',
      short: 'Distinctive visual identities with consistency, character and purpose.',
      tag: 'BRAND IDENTITY',
      headline: 'MAKE YOUR BRAND\nUNMISTAKABLE.',
      intro: 'A connected identity system that gives your business a recognisable point of view.',
      benefits: ['A distinct visual direction', 'Consistency across touchpoints', 'A stronger brand impression'],
      includes: ['Creative direction and moodboards', 'Logo and identity design', 'Colour and typography system', 'Brand assets for digital use', 'Practical brand guidelines'],
      workflow: ['Understand the business and audience', 'Explore and define the visual direction', 'Refine the identity and prepare assets'],
      use: 'For new businesses and growing brands ready for a more confident, consistent identity.'
    },
    {
      slug: 'meta-ads',
      name: 'Meta Ads',
      short: 'Purposeful ad creative and campaign direction for reaching the right audience.',
      tag: 'PAID SOCIAL',
      headline: 'CAMPAIGNS WITH\nA CLEAR PURPOSE.',
      intro: 'Creative-led Meta advertising built around your audience, offer and business goals.',
      benefits: ['Clearer campaign messaging', 'Creative made for the feed', 'A purposeful testing approach'],
      includes: ['Campaign creative direction', 'Ad graphics and short-form concepts', 'Audience and offer planning', 'Creative variations for testing', 'Performance review recommendations'],
      workflow: ['Clarify goals, audience and offer', 'Create campaign messages and assets', 'Review performance and refine direction'],
      use: 'For businesses ready to promote an offer, build awareness or support a focused campaign.'
    },
    {
      slug: 'social-media',
      name: 'Social Media',
      short: 'A consistent content direction that helps your brand show up with purpose.',
      tag: 'CONTENT & SOCIAL',
      headline: 'SHOW UP WITH\nA POINT OF VIEW.',
      intro: 'Social content that connects your visual identity, message and everyday communication.',
      benefits: ['A consistent visual language', 'Content with a clear role', 'A more recognisable presence'],
      includes: ['Content direction and planning', 'Post and story design', 'Campaign and promotional assets', 'Content calendar support', 'Reusable visual templates'],
      workflow: ['Set content priorities and tone', 'Build a consistent creative system', 'Plan, publish and learn from the response'],
      use: 'For businesses that want a clearer, more consistent social presence without losing their personality.'
    },
    {
      slug: 'poster-design',
      name: 'Poster Design',
      short: 'Bold, clear promotional designs that get the message noticed.',
      tag: 'CAMPAIGN DESIGN',
      headline: 'BIG IDEAS.\nCLEAR MESSAGES.',
      intro: 'Purposeful poster and promotional design for launches, offers, events and everyday campaigns.',
      benefits: ['A message people can scan', 'Design that fits your brand', 'Flexible formats for sharing'],
      includes: ['Promotional poster design', 'Event and launch artwork', 'Offer and campaign graphics', 'Digital and print-ready layouts', 'Adaptations for social formats'],
      workflow: ['Define the message and placement', 'Create a clear visual hierarchy', 'Prepare final sizes and deliverables'],
      use: 'For businesses and organisations with an offer, event or announcement worth noticing.'
    },
    {
      slug: 'video-creation',
      name: 'Video Creation',
      short: 'Short-form visual storytelling made to capture attention and communicate quickly.',
      tag: 'MOTION & VIDEO',
      headline: 'MAKE YOUR STORY\nMOVE.',
      intro: 'Purposeful video concepts and short-form content that bring your brand message to life.',
      benefits: ['A stronger opening moment', 'A story with a clear focus', 'Content shaped for the platform'],
      includes: ['Short-form video concepts', 'Reels and promotional edits', 'Titles and motion graphics', 'Brand-led visual treatment', 'Platform-ready exports'],
      workflow: ['Find the story and key message', 'Shape the edit and visual direction', 'Refine timing, details and exports'],
      use: 'For brands that want to communicate through short-form video, launches or promotional storytelling.'
    }
  ];

  const projectData = [
    { name: 'MONO Studio', category: 'Branding', desc: 'A restrained identity direction for a contemporary creative studio.', kind: 'identity', tone: '#d9d5ce' },
    { name: 'NOIRÉ Coffee', category: 'Website', desc: 'A dark editorial digital concept for coffee, kitchen and desserts.', kind: 'NOIRÉ', tone: '#6d5746' },
    { name: 'FORMA Living', category: 'Campaign', desc: 'A campaign concept built around considered everyday spaces.', kind: 'FORMA', tone: '#b7ad9c' },
    { name: 'After Hours', category: 'Video', desc: 'A motion-led concept for an evening hospitality campaign.', kind: 'AFTER\nHOURS', tone: '#5b4648' },
    { name: 'Northline', category: 'Website', desc: 'A clean digital direction for a modern service brand.', kind: 'NORTHLINE', tone: '#8a9395' },
    { name: 'Common Ground', category: 'Branding', desc: 'A warm, approachable identity concept for a neighbourhood brand.', kind: 'COMMON\nGROUND', tone: '#9c8667' }
  ];

  const projectCard = p =>
    `<article class="project-card reveal"><a href="${A('contact.html')}" aria-label="Discuss a project like ${p.name}"><div class="project-image concept-art" style="--art-tone:${p.tone}"><span class="concept-word">${p.kind.replace('\n', '<br>')}</span><span class="concept-tag">DEMONSTRATION CONCEPT</span><span class="project-overlay"><span class="arrow-circle">${arrow}</span></span></div><div class="project-meta"><div><span>${p.category} / Concept project</span><h3>${p.name}</h3></div>${arrow}</div></a><p class="project-description">${p.desc}</p></article>`;

  const serviceRows = () =>
    `<div class="service-list">${services.map((s, i) =>
      `<a class="service-row reveal" href="${A('services/' + s.slug + '.html')}"><span class="service-number">0${i + 1}</span><h3>${s.name}</h3><p>${s.short}</p><span class="arrow-circle">${arrow}</span></a>`
    ).join('')}</div>`;

  const process = [
    { name: 'Discover', text: 'We learn about your business, audience, priorities and what success should look like.' },
    { name: 'Define', text: 'We agree on the scope, direction, deliverables and a clear path forward.' },
    { name: 'Create', text: 'We turn the direction into considered creative work, sharing progress along the way.' },
    { name: 'Deliver', text: 'We refine the final details, prepare your agreed files and hand over the finished work clearly.' }
  ];

  const processCards = () =>
    `<div class="process-grid">${process.map((s, i) =>
      `<article class="process-card reveal"><span>0${i + 1}</span><h3>${s.name}</h3><p>${s.text}</p></article>`
    ).join('')}</div>`;

  function home() {
    return `<section class="home-hero"><div class="container hero-inner"><div class="hero-copy"><div class="hero-eyebrow"><span class="status-dot"></span>CREATIVE • DIGITAL • GROWTH</div><h1>WE MAKE<br>BRANDS<br><span class="outline-text">IMPOSSIBLE</span><br>TO IGNORE.</h1><p>We bring strategy, design, and digital together to build brands that stand out — and move forward.</p><div class="button-row">${cta()}${cta('Explore Our Work', 'work.html', true)}</div></div><div class="hero-visual" aria-label="DUKE AD creative brand composition"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit orbit-three"></div><span class="orbit-point"></span><div class="hero-cross cross-one">+</div><div class="hero-cross cross-two">+</div><div class="floating-caption"><span></span>CREATE DIFFERENT.</div><div class="brand-card"><div class="brand-card-top"><span>INDEPENDENT CREATIVE STUDIO</span>${arrow}</div><div class="brand-card-word">DUKE<br>AD<span>®</span></div><div class="brand-card-bottom"><span>IDEAS INTO IMPACT.</span><span>EST. FOR WHAT'S NEXT</span></div></div><div class="visual-coordinate">DESIGN WITHOUT LIMITS<br>STRATEGY WITH PURPOSE</div><span class="visual-star">✳</span></div></div><div class="hero-bottom"><div class="scroll-hint"><span>↓</span><span>SCROLL TO EXPLORE</span></div><span>INDEPENDENT THINKING. EXTRAORDINARY POSSIBILITIES.</span></div></section><section class="section container">${label('01 — WHO WE ARE')}<div class="intro-grid reveal"><h2>ONE CREATIVE PARTNER.<br>EVERYTHING YOUR<br>BRAND NEEDS.</h2><div><p>We're DUKE AD. A creative digital agency connecting the dots between brands and people. From your first impression to your next big move, we make every touchpoint count.</p><a class="text-link" href="${A('about.html')}">Get to know us <span aria-hidden="true">+</span></a></div></div></section><div class="marquee"><div class="marquee-track"><span>WEBSITES <b>✳</b> BRANDING <b>✳</b> META ADS <b>✳</b> SOCIAL MEDIA <b>✳</b> POSTERS <b>✳</b> VIDEO <b>✳</b></span><span>WEBSITES <b>✳</b> BRANDING <b>✳</b> META ADS <b>✳</b> SOCIAL MEDIA <b>✳</b> POSTERS <b>✳</b> VIDEO <b>✳</b></span></div></div><section class="section container"><div class="section-heading reveal"><div>${label('02 — WHAT WE DO')}<h2>BUILT TO MAKE<br>YOUR BRAND MOVE.</h2></div><a class="text-link" href="${A('services.html')}">All services <span class="arrow-circle">${arrow}</span></a></div>${serviceRows()}</section><section class="section section-band"><div class="container"><div class="section-heading reveal"><div>${label('03 — SELECTED CONCEPTS')}<h2>WORK THAT<br>SPEAKS.</h2></div><a class="text-link" href="${A('work.html')}">Explore the work <span class="arrow-circle">${arrow}</span></a></div><div class="project-grid">${projectData.slice(0, 3).map(projectCard).join('')}</div></div></section><section class="section container"><div class="section-heading reveal"><div>${label('04 — WHY DUKE AD')}<h2>DIFFERENT<br>BY DESIGN.</h2></div></div><div class="features-grid">${[['Creative First', 'Original thinking, considered design. We find the idea that makes your brand feel unmistakably yours.'], ['Built for Business', 'Beautiful is just the beginning. Every choice connects to your audience and your goals.'], ['One Creative Partner', 'Your website, identity and content speak the same language. Less fragmentation. More clarity.'], ['Performance Matters', 'Fast experiences, clear messages, purposeful campaigns. We care about how the work performs.']].map((x, i) => `<article class="feature-card reveal"><span>0${i + 1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div></section><section class="section section-band"><div class="container"><div class="section-heading reveal"><div>${label('05 — HOW WE WORK')}<h2>FROM IDEA<br>TO IMPACT.</h2></div><a class="text-link" href="${A('process.html')}">Our process <span class="arrow-circle">${arrow}</span></a></div>${processCards()}</div></section><section class="stories-section"><div class="container stories-inner reveal"><div>${label('06 — CLIENT STORIES')}<h2>REAL CLIENT STORIES.<br>COMING SOON.</h2></div><p>Good work deserves an honest story. We'll share genuine client experiences here when they're ready.</p></div></section>${closeCta()}`;
  }

  function about() {
    return heading('THE AGENCY / DUKE AD', 'INDEPENDENT MINDS.\nCONNECTED IDEAS.', 'A creative digital partner for businesses that want to show up with clarity, personality and purpose.') + `<section class="section container editorial-grid"><div>${label('01 — OUR POINT OF VIEW')}<h2>GOOD DESIGN<br>IS GOOD<br>COMMUNICATION.</h2></div><div><p>DUKE AD brings together the things a brand needs to be seen, understood and remembered. We connect website creation, identity, advertising and content instead of treating each as a separate conversation.</p><p>We start by understanding your business. Then we find a creative direction that belongs to you — and carry it consistently across the places your audience meets your brand.</p></div></section><section class="section section-band"><div class="container">${label('02 — OUR PHILOSOPHY')}<div class="philosophy-quote reveal">Less noise.<br>More meaning.<br><span>Nothing without purpose.</span></div></div></section><section class="section container"><div class="section-heading reveal"><div>${label('03 — WHAT GUIDES US')}<h2>THINK CLEARLY.<br>CREATE DIFFERENTLY.</h2></div></div><div class="values-grid">${[['Clarity over clutter', 'A strong idea does not need unnecessary complexity. We make the important things easy to see.'], ['Consistency over coincidence', 'The details work together. Across your identity, your website and your everyday communication.'], ['Collaboration over assumptions', 'Your knowledge of your business matters. We listen, share the direction and build through conversation.']].map((x, i) => `<article class="value-card reveal"><span>0${i + 1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div></section><section class="section section-band"><div class="container editorial-grid"><div>${label('04 — DESIGN + DIGITAL')}<h2>ONE DIRECTION.<br>EVERY TOUCHPOINT.</h2></div><div><p>A clear brand identity sets the direction. A considered website gives it a home. Campaigns, social content, posters and video bring it to people. Our approach keeps all of those pieces connected.</p><div class="button-row">${cta('Our capabilities', 'services.html', true)}</div></div></div></section>${closeCta()}`;
  }

  function servicesPage() {
    return heading('OUR CAPABILITIES', 'CREATIVE THINKING.\nCONNECTED SERVICES.', 'From your digital home to your next campaign, everything your brand needs — considered together.') + `<section class="section container"><div class="section-heading reveal"><div>${label('OUR SERVICES')}<h2>THE RIGHT SUPPORT.<br>FOR WHAT’S NEXT.</h2></div><p class="services-intro-note">From websites and branding to campaigns and content, choose the support you need now — with every piece designed to work together.</p></div>${serviceRows()}</section><section class="section section-band"><div class="container editorial-grid"><div>${label('ONE CREATIVE PARTNER')}<h2>LESS DISCONNECTED.<br>MORE DISTINCTIVE.</h2></div><div><p>When your website, brand and content share one creative direction, the whole experience becomes stronger. We help you connect the pieces while keeping your goals in view.</p><p>Start with what you need now. Build on it as your business develops. Each proposal defines the deliverables, responsibilities and priorities for your project.</p></div></div></section><section class="section container"><div class="section-heading reveal"><div>${label('OUR APPROACH')}<h2>A CLEAR PATH.<br>FROM THE START.</h2></div><a class="text-link" href="${A('process.html')}">The full process <span class="arrow-circle">${arrow}</span></a></div>${processCards()}</section>${closeCta()}`;
  }

  function work() {
    return heading('SELECTED CONCEPTS', 'IDEAS MADE\nVISIBLE.', 'A look at our creative direction through demonstration projects. These are self-initiated concepts, not client commissions or claims of results.') + `<section class="section container work-grid"><div class="filters" role="group" aria-label="Filter projects">${['All', 'Website', 'Branding', 'Campaign', 'Video'].map((f, i) => `<button class="filter-button" aria-pressed="${i === 0}" data-filter="${f}">${f}</button>`).join('')}</div><div class="project-grid">${projectData.map(projectCard).join('')}</div></section>${closeCta()}`;
  }

  function processPage() {
    return heading('HOW WE WORK', 'GOOD WORK.\nCLEAR PROCESS.', 'From the first conversation to the final details, a considered approach keeps ideas moving in the right direction.') + `<section class="section container"><div class="process-timeline">${process.map((s, i) => `<article class="timeline-step reveal"><div class="timeline-number">0${i + 1}</div><div><h2>${s.name}</h2><p>${s.text}</p></div></article>`).join('')}</div></section><section class="section section-band"><div class="container"><div class="section-heading reveal"><div>${label('WORKING TOGETHER')}<h2>BETTER TOGETHER.<br>AT EVERY STAGE.</h2></div></div><div class="expectation-grid">${[['Communication', 'We agree how to share updates, who makes decisions and how feedback will be collected. Clear conversations make better work.'], ['Feedback', 'Consolidated, purposeful feedback keeps the direction focused. Review rounds and revision scope are discussed in your proposal.'], ['Delivery', 'Required assets, access, file formats and handover needs are clarified before work starts. Timelines are shaped around the agreed scope.']].map(x => `<article class="reveal"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div></div></section>${closeCta()}`;
  }

  const faqs = [
    ['What services does DUKE AD offer?', 'We work across website creation, branding, Meta ads, social media, poster design and video creation. The scope is tailored to your goals.'],
    ['How does a project begin?', 'We start with a conversation about your business, audience, goals and priorities. From there, we can define the right scope and next steps.'],
    ['How much does a project cost?', 'Pricing depends on the work, deliverables and timeline. Once we understand your brief, we can discuss a suitable scope and proposal.'],
    ['How long will my project take?', 'Timelines vary by project size, complexity and feedback. Timing and milestones are agreed before work begins.'],
    ['Can I request only one service?', 'Yes. You can start with one service and add more later if they make sense for your business.'],
    ['Do you work with existing brands?', 'Yes. We can work with your existing identity or discuss how to strengthen and clarify it.'],
    ['Are the projects in your portfolio client work?', 'The projects shown here are demonstration concepts created to communicate creative direction. They are not presented as client commissions or performance claims.'],
    ['How do I get started?', 'Use the contact form to share your business, the service you need and a few details about your goals.']
  ];

  function faq() {
    return heading('A LITTLE MORE CLARITY', 'GOOD QUESTIONS.\nHONEST ANSWERS.', 'The essentials about working with DUKE AD. For anything specific to your business, let\'s talk.') + `<section class="section container faq-layout"><aside class="faq-aside"><h3>Still curious?</h3><p>Every brief is different. We'd be happy to talk about yours.</p>${cta('Ask us a question')}</aside><div>${faqs.map((x, i) => `<article class="faq-item"><h2><button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}" id="faq-question-${i}">${x[0]}<span aria-hidden="true">+</span></button></h2><div class="faq-answer" id="faq-answer-${i}" role="region" aria-labelledby="faq-question-${i}" inert><div><p>${x[1]}</p></div></div></article>`).join('')}</div></section>${closeCta()}`;
  }

  function servicePage(s) {
    return heading(s.name.toUpperCase() + ' / ' + s.tag, s.headline, s.intro) + `<section class="section container"><div class="section-heading reveal"><div>${label('01 — WHY IT MATTERS')}<h2>PURPOSE BEHIND<br>EVERY DETAIL.</h2></div></div><div class="values-grid">${s.benefits.map((b, i) => `<article class="value-card reveal"><span>0${i + 1}</span><h3>${b}</h3></article>`).join('')}</div></section><section class="section section-band"><div class="container editorial-grid"><div>${label('02 — WHAT WE CAN CREATE')}<h2>CONSIDERED<br>FROM THE<br>GROUND UP.</h2><p class="service-note">Deliverables are tailored to your brief and confirmed in the project proposal.</p></div><ul class="include-list">${s.includes.map((x, i) => `<li><span>0${i + 1}</span>${x}</li>`).join('')}</ul></div></section><section class="section container"><div class="section-heading reveal"><div>${label('03 — THE APPROACH')}<h2>FROM DIRECTION<br>TO DELIVERY.</h2></div></div><div class="workflow-list">${s.workflow.map((x, i) => `<article class="reveal"><span>0${i + 1}</span><h3>${x}</h3></article>`).join('')}</div></section><section class="section section-band"><div class="container editorial-grid"><div>${label('04 — IS THIS FOR YOU?')}<h2>YOUR NEXT<br>MOVE STARTS HERE.</h2></div><div><p>${s.use}</p><p class="service-note">Tell us what you have in mind. We'll discuss the right scope, creative direction and next steps.</p>${cta('Discuss ' + s.name, 'contact.html?service=' + s.slug)}</div></div></section>${closeCta()}`;
  }

  function contact() {
    return heading('LET\'S START SOMETHING', 'YOUR IDEA.\nOUR NEXT CONVERSATION.', 'A new brand, a better website, a campaign worth noticing. Tell us what you have in mind.') + `<section class="section container contact-layout"><aside class="contact-aside"><h2>BIG PLANS.<br>SMALL FIRST STEP.</h2><p>Share a little about your business and the direction you want to go. A good creative brief starts with a simple conversation.</p><div class="contact-detail"><h4>CONTACT AVAILABILITY</h4><p>Direct contact details and social channels will be added when confirmed.</p></div></aside><form class="contact-form" id="contact-form" novalidate><div class="form-field"><label for="name">Your name *</label><input id="name" name="name" autocomplete="name" placeholder="Alex Taylor" required></div><div class="form-field"><label for="email">Email address *</label><input id="email" name="email" type="email" autocomplete="email" placeholder="you@yourbusiness.com" required></div><div class="form-field"><label for="business">Business or brand</label><input id="business" name="business" autocomplete="organization" placeholder="Your business name"></div><div class="form-field"><label for="service">What do you need? *</label><select id="service" name="service" required><option value="">Select a service</option>${services.map(s => `<option>${s.name}</option>`).join('')}<option>A connected creative project</option></select></div><div class="form-field full-width"><label for="details">Tell us about your project *</label><textarea id="details" name="details" placeholder="Your idea, your goals, and anything else we should know…" required></textarea></div><div class="form-submit"><p class="form-note">Your enquiry will be sent to our inbox. Please include enough detail for us to understand your project.</p><button class="agency-button agency-button-primary" type="submit">Send Project Enquiry ${arrow}</button></div><div id="form-feedback" class="form-feedback" role="status" hidden></div></form></section>`;
  }

  if (page === 'home') main.innerHTML = home();
  else if (page === 'about') main.innerHTML = about();
  else if (page === 'services') main.innerHTML = servicesPage();
  else if (page === 'work') main.innerHTML = work();
  else if (page === 'process') main.innerHTML = processPage();
  else if (page === 'faq') main.innerHTML = faq();
  else if (page === 'contact') main.innerHTML = contact();
  else {
    const s = services.find(x => x.slug === page);
    main.innerHTML = s ? servicePage(s) : servicesPage();
  }

  document.title = ({
    home: 'DUKE AD — Creative Digital Agency',
    about: 'About — DUKE AD',
    services: 'Services — DUKE AD',
    work: 'Selected Work — DUKE AD',
    process: 'Our Process — DUKE AD',
    faq: 'FAQ — DUKE AD',
    contact: 'Contact — DUKE AD'
  })[page] || `${services.find(s => s.slug === page)?.name || 'Services'} — DUKE AD`;

  document.getElementById('year').textContent = new Date().getFullYear();

  const navPage = page.includes('-') || ['website', 'branding', 'meta-ads', 'social-media', 'poster-design', 'video-creation'].includes(page) ? 'services' : page;
  document.querySelector(`[data-nav="${navPage}"]`)?.setAttribute('aria-current', 'page');

  const loader = document.querySelector('.site-loader');
  setTimeout(() => loader?.classList.add('is-hidden'), matchMedia('(prefers-reduced-motion: reduce)').matches ? 80 : 900);

  const header = document.querySelector('.site-header');
  const scroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
  scroll();
  window.addEventListener('scroll', scroll, { passive: true });

  const menu = document.querySelector('.menu-toggle');
  const mobile = document.querySelector('.mobile-navigation');

  function closeMenu() {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
    mobile.classList.remove('is-open');
    mobile.inert = true;
    document.body.classList.remove('menu-open');
  }

  menu.addEventListener('click', () => {
    const open = !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', open);
    mobile.classList.toggle('is-open', open);
    mobile.inert = !open;
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    document.body.classList.toggle('menu-open', open);
  });

  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (innerWidth > 980) closeMenu();
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    }), { threshold: .08 });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }

  document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    document.querySelectorAll('.project-card').forEach(card => {
      const cat = card.querySelector('.project-meta span')?.textContent.split(' /')[0];
      card.hidden = btn.dataset.filter !== 'All' && cat !== btn.dataset.filter;
    });
  }));

  document.querySelectorAll('.faq-question').forEach(btn => btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    btn.querySelector('span').textContent = open ? '−' : '+';
    const answer = document.getElementById(btn.getAttribute('aria-controls'));
    answer.classList.toggle('is-open', open);
    answer.inert = !open;
  }));

  if (!document.getElementById('duke-send-tick-styles')) {
    const tickStyles = document.createElement('style');
    tickStyles.id = 'duke-send-tick-styles';
    tickStyles.textContent = `
      .agency-button.is-sent {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }

      .send-success-icon {
        width: 19px;
        height: 19px;
        overflow: visible;
        flex: 0 0 19px;
      }

      .send-success-icon path {
        fill: none;
        stroke: currentColor;
        stroke-width: 2.4;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 24;
        stroke-dashoffset: 24;
        animation: duke-check-draw .45s ease-out forwards;
      }

      @keyframes duke-check-draw {
        to {
          stroke-dashoffset: 0;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .send-success-icon path {
          animation: none;
          stroke-dashoffset: 0;
        }
      }
    `;
    document.head.appendChild(tickStyles);
  }

  const form = document.getElementById('contact-form');

  if (form) {
    const params = new URLSearchParams(location.search);
    const pre = services.find(s => s.slug === params.get('service'));

    if (pre) form.elements.service.value = pre.name;

    form.addEventListener('submit', async e => {
      e.preventDefault();

      const d = new FormData(form);
      const get = key => String(d.get(key) || '').trim();
      const errors = [];

      for (const id of ['name', 'email', 'service', 'details']) {
        const el = form.elements[id];
        el.removeAttribute('aria-invalid');
        el.parentElement.querySelector('.field-error')?.remove();

        let msg = '';

        if (id === 'name' && get(id).length < 2) {
          msg = 'Please enter your name.';
        }

        if (id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get(id))) {
          msg = 'Please enter a valid email address.';
        }

        if (id === 'service' && !get(id)) {
          msg = 'Please select a service.';
        }

        if (id === 'details' && get(id).length < 20) {
          msg = 'Tell us a little more — at least 20 characters.';
        }

        if (msg) {
          el.setAttribute('aria-invalid', 'true');

          const span = document.createElement('span');
          span.className = 'field-error';
          span.textContent = msg;
          el.parentElement.append(span);
          errors.push(el);
        }
      }

      const feedback = document.getElementById('form-feedback');
      feedback.hidden = false;

      if (errors.length) {
        feedback.innerHTML =
          '<h3>Please check the highlighted fields.</h3>' +
          '<p>Your enquiry has not been sent.</p>';

        errors[0].focus();
        return;
      }

      const submitButton = form.querySelector('[type="submit"]');
      const originalButtonHTML = submitButton?.innerHTML;

      if (submitButton?.disabled) return;
      if (submitButton) submitButton.disabled = true;

      feedback.innerHTML =
        '<h3>Sending your enquiry...</h3>' +
        '<p>Please wait while we send your project brief.</p>';

      const payload = {
        access_key: '0e668e32-38d1-40b4-8759-83c041274a9a',
        subject: 'New DUKE AD Project Enquiry',
        from_name: 'DUKE AD Website',
        name: get('name'),
        email: get('email'),
        business: get('business') || 'Not specified',
        service: get('service'),
        message: get('details'),
        botcheck: ''
      };

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || 'The enquiry could not be sent.');
        }

        feedback.innerHTML =
          '<h3>Thank you for contacting DUKE AD!</h3>' +
          '<p>Your project enquiry has been sent successfully. ' +
          'We will review your brief and get back to you.</p>';

        if (submitButton) {
          submitButton.classList.add('is-sent');
          submitButton.innerHTML =
            '<svg class="send-success-icon" viewBox="0 0 24 24" aria-hidden="true">' +
            '<path d="M5 12.5 9.5 17 19 7.5"></path></svg>' +
            '<span>Enquiry Sent</span>';

          window.setTimeout(() => {
            submitButton.classList.remove('is-sent');
            submitButton.innerHTML = originalButtonHTML;
          }, 3500);
        }

        form.reset();

        if (pre) form.elements.service.value = pre.name;

      } catch (error) {
        console.error('DUKE AD form submission failed:', error);

        feedback.innerHTML =
          '<h3>Your enquiry could not be sent.</h3>' +
          '<p>Please check your internet connection and try again. ' +
          'If the problem continues, contact us directly.</p>';

      } finally {
        if (submitButton) {
          submitButton.disabled = false;

          if (!submitButton.classList.contains('is-sent')) {
            submitButton.innerHTML = originalButtonHTML;
          }
        }
      }
    });
  }
})();



function addWhatsAppButton() {
  if (document.querySelector(".whatsapp-float")) return;

  const button = document.createElement("a");

  button.href = "https://wa.me/971500000000";
  button.className = "whatsapp-float";
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.setAttribute("aria-label", "Chat with DUKE AD on WhatsApp");

  button.innerHTML = `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="currentColor" d="M20.52 3.48A11.83 11.83 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.59 5.93L.1 24l6.34-1.66a11.9 11.9 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88a11.8 11.8 0 0 0-3.45-8.41ZM12.09 21.75a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.76.99 1-3.67-.24-.38a9.85 9.85 0 0 1-1.51-5.22c0-5.46 4.45-9.91 9.92-9.91a9.85 9.85 0 0 1 7.01 2.91A9.85 9.85 0 0 1 22 11.88c0 5.47-4.45 9.87-9.91 9.87Zm5.43-7.4c-.3-.15-1.77-.87-2.05-.97-.28-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z"/>
    </svg>
  `;

  document.body.appendChild(button);
}

addWhatsAppButton();