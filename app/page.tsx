// app/page.tsx
"use client";

import React from "react";

type Project = {
  title: string;
  stack: string[];
  description: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    title: "Investtech – Technical Analysis Platform",
    stack: ["PHP", "Tailwind CSS", "JavaScript", "Charts"],
    description:
      "Stock-market technical analysis application with interactive charts, popups, and dynamic components.",
    highlights: [
      "Built reusable front-end components (cards, popups, tooltips, dialogs).",
      "Handled tricky chart behaviors, hover popovers, and responsive layouts.",
      "Collaborated with backend team to integrate market data APIs.",
    ],
  },
  {
    title: "YourPrice – Auctions & E-commerce",
    stack: ["Next.js", "React", "TypeScript", "ShadCN", "Zustand", "Typesense"],
    description:
      "Modern marketplace with auctions, offers, and dynamic search using Typesense.",
    highlights: [
      "Used shared React components across multiple listing types.",
      "Implemented filters, search, and pagination using React Query & Zustand.",
      "Focused on performance, DX, and code reuse.",
    ],
  },
  {
    title: "Wenzel – ELISA IV Public Address System",
    stack: ["Node.js", "Vue.js", "MQTT", "Yocto", "Linux"],
    description:
      "Next-gen public address & alarm system with IP-based distributed architecture.",
    highlights: [
      "Worked with Yocto devices, MQTT brokers, and a 'Hive Queen' coordinator concept.",
      "Designed configuration flows and documentation for devices & services.",
      "Focused on reliability, observability, and configuration management.",
    ],
  },
];

const skills = {
  "Core Stack": [
    "JavaScript (ES6+)",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "Express",
    "MongoDB / Mongoose",
  ],
  "Frontend & UI": [
    "Tailwind CSS",
    "Material UI (MUI)",
    "ShadCN",
    "Responsive layouts",
    "Component architecture",
  ],
  "Backend & DevOps": [
    "REST APIs (Node/Express)",
    "GitLab CI/CD",
    "Nginx",
    "Linux / SSH",
    "Yocto-based devices",
  ],
  "Testing & Automation": [
    "Playwright",
    "Cucumber (BDD)",
    "Jest (unit tests)",
    "Manual + automation test strategy",
  ],
  "Learning & Future": [
    "AI / ML for developers",
    "Advanced DevOps",
    "Scaling architecture & performance",
  ],
};

export default function HomePage() {
  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="brand">
            <div className="avatar">NBK</div>
            <div>
              <h1 className="title">Niranjan BK</h1>
              <p className="subtitle">
                Full-Stack MERN Developer · Node.js · Next.js · React
              </p>
            </div>
          </div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#learning">Learning</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="hero-kicker">Hello, I&apos;m Niranjan 👋</p>
            <h2 className="hero-title">
              Building real-world apps with{" "}
              <span className="hero-highlight">Node.js, Next.js & React</span>,
              while leveling up in DevOps, AI & automation.
            </h2>
            <p className="hero-text">
              I&apos;m a full-stack developer with over 6 years of experience
              across web apps, distributed systems, and test automation. I enjoy
              taking complex requirements and turning them into clean,
              maintainable architecture – step by step.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn primary">
                View Projects
              </a>
              <a href="#contact" className="btn secondary">
                Get in touch
              </a>
            </div>
          </div>
          <div className="hero-card">
            <h3>Currently focused on</h3>
            <ul>
              <li>✅ Next.js & React best practices</li>
              <li>✅ GitLab CI/CD & DevOps fundamentals</li>
              <li>✅ Playwright + BDD for web automation</li>
              <li>✅ AI / ML foundations for developers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">
            I&apos;m a developer who likes understanding systems end-to-end:
            frontend, backend, infrastructure, and how teams actually work
            together. I&apos;ve worked on stock-market analysis apps, auction
            platforms, and distributed public-address systems running on
            Yocto-based devices.
          </p>
          <p className="section-text">
            I enjoy mentoring teammates, structuring learning plans, and turning
            vague ideas into concrete roadmaps – whether it&apos;s onboarding a
            new joiner, setting up a test framework, or planning my own growth
            into AI and DevOps.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Skills & Tools</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="card">
                <h3 className="card-title">{category}</h3>
                <ul className="pill-list">
                  {items.map((item) => (
                    <li key={item} className="pill">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Selected Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="card project-card">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                <div className="pill-row">
                  {project.stack.map((tech) => (
                    <span key={tech} className="pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="bullet-list">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning & Roadmap */}
      <section id="learning" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Learning & Roadmap</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Short-term</h3>
              <ul className="bullet-list">
                <li>Strengthen Playwright + Cucumber automation frameworks.</li>
                <li>Refine GitLab CI/CD pipelines for frontend and backend.</li>
                <li>
                  Build more static/dynamic sites and deploy to Vercel & on-prem
                  servers.
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <h3>Next 6–12 months</h3>
              <ul className="bullet-list">
                <li>
                  Dive deeper into AI / ML, focusing on how developers can use
                  it in real projects.
                </li>
                <li>
                  Strengthen DevOps: monitoring, logging, and deployment
                  strategies.
                </li>
                <li>
                  Contribute to or lead architectures that involve multiple
                  services/devices (like Wenzel / ELISA-IV).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <p className="section-text">
            Want to discuss a project, collaboration, or just talk about
            JavaScript, DevOps, or AI learning paths?
          </p>
          <div className="contact-card">
            <p>
              <strong>Location:</strong> Bengaluru, India
            </p>
            <p>
              <strong>Preferred stack:</strong> MERN, Next.js, Node.js,
              TypeScript
            </p>
            <p className="section-text">
              You can adapt this section later with your real email, LinkedIn,
              or portfolio links.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} Niranjan BK. Built with Next.js and
            deployed on Vercel.
          </p>
          <p className="footer-note">
            This portfolio is intentionally simple and static – perfect for
            learning Next.js + Vercel basics.
          </p>
        </div>
      </footer>
    </div>
  );
}
