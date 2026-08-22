const sectors = [
  { number: "01", title: "Water & Environment", text: "Integrated water infrastructure, treatment and distribution systems engineered for reliability." },
  { number: "02", title: "Roads & Urban Infrastructure", text: "Transport corridors and urban infrastructure designed for safer, faster and more connected communities." },
  { number: "03", title: "Power & Energy", text: "Engineering and execution capabilities that support dependable power infrastructure and long-term growth." },
  { number: "04", title: "Industrial & Buildings", text: "Efficient, durable civil and structural solutions for complex industrial and institutional requirements." },
];

const projects = [
  { title: "Regional Water Infrastructure", sector: "Water & Environment", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=85" },
  { title: "Highway Development Program", sector: "Transportation", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=85" },
  { title: "Industrial Engineering Works", sector: "Industrial", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ABCR home"><span className="brand-mark">A</span><span>ABCR</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#sectors">Businesses</a><a href="#projects">Projects</a><a href="#strength">Capabilities</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Enquire <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light">Engineering progress. Building trust.</p>
          <h1>Infrastructure<br />that moves <em>India</em><br />forward.</h1>
          <p className="hero-copy">ABCR brings engineering discipline, execution strength and long-term thinking to infrastructure that communities and industries depend on.</p>
          <div className="hero-actions"><a className="button primary" href="#projects">Explore our projects <span>↗</span></a><a className="text-link" href="#about">Discover ABCR <span>↓</span></a></div>
        </div>
        <div className="hero-index"><span>01</span><div className="hero-line"><i /></div><span>03</span></div>
      </section>

      <section className="intro section" id="about">
        <div><p className="eyebrow">Who we are</p><h2>Built on engineering.<br /><span>Driven by impact.</span></h2></div>
        <div className="intro-copy"><p>We approach infrastructure as a long-term responsibility. From planning and engineering to execution and delivery, ABCR is focused on building assets that perform reliably and create enduring value.</p><a className="arrow-link" href="#strength">About our capabilities <span>→</span></a></div>
      </section>

      <section className="stats" aria-label="Company highlights">
        <div><strong>4+</strong><span>Core infrastructure<br />business verticals</span></div>
        <div><strong>360°</strong><span>Project lifecycle<br />execution approach</span></div>
        <div><strong>QHSE</strong><span>Quality and safety<br />led delivery culture</span></div>
        <div><strong>India</strong><span>Focused execution<br />and growth platform</span></div>
      </section>

      <section className="sectors section" id="sectors">
        <div className="section-heading"><div><p className="eyebrow">Our businesses</p><h2>Capabilities across<br /><span>critical infrastructure.</span></h2></div><p>Multi-disciplinary execution built around technical expertise, strong project controls and uncompromising quality.</p></div>
        <div className="sector-list">{sectors.map((sector) => <article className="sector" key={sector.number}><span>{sector.number}</span><h3>{sector.title}</h3><p>{sector.text}</p><b>↗</b></article>)}</div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-head"><div><p className="eyebrow light">Selected work</p><h2>Projects that<br />shape progress.</h2></div><a href="#contact">View all projects <span>→</span></a></div>
        <div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title} style={{ backgroundImage: `linear-gradient(180deg, transparent 30%, rgba(4,16,26,.9) 100%), url(${project.image})` }}><span>0{index + 1}</span><div><p>{project.sector}</p><h3>{project.title}</h3></div></article>)}</div>
      </section>

      <section className="strength section" id="strength">
        <div className="strength-image" role="img" aria-label="Infrastructure engineering project" />
        <div className="strength-copy"><p className="eyebrow">Execution strength</p><h2>From complexity<br /><span>to certainty.</span></h2><p>Successful infrastructure depends on more than construction. Our delivery philosophy brings together engineering, project controls, procurement, safety, quality and disciplined on-ground execution.</p><ul><li><span>01</span>Engineering & planning</li><li><span>02</span>Project management</li><li><span>03</span>Quality & safety systems</li><li><span>04</span>Construction execution</li></ul></div>
      </section>

      <section className="contact" id="contact">
        <div><p className="eyebrow light">Start a conversation</p><h2>Building something<br />that matters?</h2></div><div><p>Talk to ABCR about your next infrastructure requirement, partnership or opportunity.</p><a className="button white" href="mailto:info@abcr.example">Contact ABCR <span>↗</span></a></div>
      </section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">A</span><span>ABCR</span></a><p>Infrastructure & Engineering</p><p>© 2026 ABCR. All rights reserved.</p></footer>
    </main>
  );
}
