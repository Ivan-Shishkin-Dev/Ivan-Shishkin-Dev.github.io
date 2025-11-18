import React from 'react';

const HomePanel = () => (
  <>
    <h1>Ivan Shishkin</h1>
    <h2>Computer Science Student @ UC Irvine</h2>
    <p>
      Aspiring computer scientist focused on building efficient and impactful systems. Passionate about algorithms,
      problem-solving, and applying technology to real-world challenges. Dedicated to continuous learning, disciplined
      work, and personal growth.
    </p>
  </>
);

const AboutPanel = () => (
  <section className="about-section">
    <h2>About Me</h2>
    <hr className="divider" />
    <p>
      I’m <strong>Ivan Shishkin</strong>, a Computer Science student at the <strong>University of California, Irvine</strong>.
      I’m passionate about creating efficient and impactful systems through clean code, strong logic, and design thinking.
    </p>
    <p>
      My interests span <strong>software engineering</strong>, <strong>artificial intelligence</strong>, and <strong>systems design</strong>.
      I bring high-level problem-solving while building projects that combine theory and practice.
    </p>
    <p>
      Outside of programming, I’m dedicated to fitness, leadership, and continuous personal development. I believe in
      disciplined improvement and pushing myself in every area of life.
    </p>
  </section>
);

const EducationPanel = () => (
  <section className="education-section">
    <h2>Education</h2>

    <h3>University of California, Irvine</h3>
    <p className="degree">B.S. Computer Science</p>
    <p className="grad-date"><em>Expected Graduation: June 2028</em></p>
    <p className="grad-date"><em>GPA: 3.9</em></p>

    <hr className="divider" />

    <h3>Relevant Coursework:</h3>
    <div className="course-tags">
      <span>Data Structures and Algorithms</span>
      <span>Systems Design</span>
      <span>Machine Learning &amp; AI</span>
      <span>Software Engineering and Testing</span>
      <span>Data Management</span>
      <span>Compilers</span>
    </div>

    <hr className="divider" />

    <h3>Leadership &amp; Activities:</h3>
    <ul className="activities">
      <li>Director Of Housing — Sigma Pi (Eta-Upsilon Chapter)</li>
      <li>ICS Student Council (ICSSC)</li>
      <li>Artificial Intelligence @ UCI</li>
      <li>Claude Builder Club</li>
      <li>Skateboarding Club</li>
      <li>Cyber @ UCI</li>
      <li>Hack @ UCI</li>
      <li>F1 Tenth @ UCI</li>
      <li>ReForm Senior Design Project Member</li>
    </ul>
  </section>
);

const ExperiencePanel = () => (
  <section className="experience-section">
    <h2>Experience</h2>

    <div className="experience">
      <h3>Arroyo Vista Center Attendant</h3>
      <p className="organization">University of California, Irvine &nbsp; | &nbsp; Aug. 2025 – Present</p>
      <p className="location"><em>Irvine, CA</em></p>
      <ul>
        <li>
          Utilize digital management systems (<strong>OSCAR</strong>, <strong>Roompact</strong>) for data entry, record tracking, and operational coordination across housing services.
        </li>
        <li>
          Streamline administrative workflows by organizing digital files, handling information requests, and maintaining accurate system data.
        </li>
        <li>
          Provide technical and logistical support for community spaces, including equipment setup, troubleshooting, and event technology management.
        </li>
      </ul>
    </div>

    <hr className="divider" />

    <div className="experience">
      <h3>Director of Housing, Sigma Pi Fraternity</h3>
      <p className="organization">University of California, Irvine &nbsp; | &nbsp; Oct. 2024 – Aug. 2025</p>
      <p className="location"><em>Irvine, CA</em></p>
      <ul>
        <li>
          Developed data-driven systems to track member housing preferences and lease information, improving decision-making and operational efficiency.
        </li>
        <li>
          Streamlined housing assignment and lease management through digital tools and structured workflows, reducing administrative overhead.
        </li>
        <li>
          Collaborated with landlords and campus partners using organized communication pipelines, ensuring compliance, accountability, and long-term stability.
        </li>
      </ul>
    </div>
  </section>
);

const ProjectsPanel = () => (
  <section className="projects-section">
    <h2>Projects</h2>

    <div className="project">
      <h3>
        Event Driven Propagation Model
        <span className="project-date">Python, PyCharm, Git — Oct 2025 – Nov 2025</span>
      </h3>
      <p>
        Built a modular simulation engine modeling device-based propagation of alerts and cancellations using custom event scheduling and priority queues to ensure deterministic, time-ordered message flow.
      </p>
    </div>

    <hr className="divider" />

    <div className="project">
      <h3>
        Data Management System
        <span className="project-date">PyCharm, Tkinter, SQLite, Git, Python — Oct 2025</span>
      </h3>
      <p>
        Developed a database-driven desktop app integrating a Tkinter GUI with SQLite to manage and visualize continent, country, and region data through a structured, event-driven architecture.
      </p>
    </div>

    <hr className="divider" />

    <div className="project">
      <h3>
        Personal Website
        <span className="project-date">CSS, Git, JavaScript, HTML, PyCharm — Mar 2025</span>
      </h3>
      <p>
        Designed and deployed a responsive personal portfolio website showcasing my projects, experience, and technical background, hosted on GitHub Pages with full version control integration.
      </p>
    </div>
  </section>
);

const SkillsPanel = () => (
  <section className="skills-section">
    <h2>Technical Skills</h2>
    <div className="skills-grid">
      <div className="skill-category">
        <h3>Front-End</h3>
        <p>HTML, CSS, JavaScript, React, Tkinter</p>
      </div>
      <div className="skill-category">
        <h3>Back-End</h3>
        <p>Python, SQL, SQLite, JavaScript</p>
      </div>
      <div className="skill-category">
        <h3>Tools &amp; Environments</h3>
        <p>Git, GitHub, VS Code, PyCharm, Terminal</p>
      </div>
    </div>
  </section>
);

const ContactPanel = () => (
  <div className="contact-buttons">
    <a href="https://www.linkedin.com/in/ivan-shishkin-dev" target="_blank" rel="noreferrer" className="btn linkedin">
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" />
      LinkedIn
    </a>
    <a href="https://github.com/Ivan-Shishkin-Dev" target="_blank" rel="noreferrer" className="btn github">
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" />
      GitHub
    </a>
    <a href="mailto:shishkinivan2006@gmail.com" className="btn email">
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" alt="Email" />
      Email
    </a>
  </div>
);

export const panels = {
  home: { label: 'Home', Component: HomePanel },
  about: { label: 'About', Component: AboutPanel },
  education: { label: 'Education', Component: EducationPanel },
  experience: { label: 'Experience', Component: ExperiencePanel },
  projects: { label: 'Projects', Component: ProjectsPanel },
  skills: { label: 'Skills', Component: SkillsPanel },
  contact: { label: 'Contact', Component: ContactPanel },
};

export const panelOrder = Object.keys(panels);
