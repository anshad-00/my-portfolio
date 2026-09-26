import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "02",
    title: "JAVA CURRENCY CONVERTER",
    category: "COLLEGE MINI PROJECT",
    description:
      "A full-stack currency converter with a Spring Boot REST API that retrieves live exchange-rate data from Frankfurter. The Tailwind-based interface lets users select currencies, convert amounts, and swap the selected pair.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Frankfurter API",
    ],
  },
];

const WHATSAPP_NUMBER = "918075728258";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (section) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const openWhatsApp = () => {
    const message =
      "Hi Anshad, I'm interested in seeing a demo of your Café QR Ordering & POS System.";

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-inner">

          <button
            className="brand"
            onClick={() => scrollTo("home")}
          >
            AMK<span>.</span>
          </button>

          <nav className="desktop-nav">
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </nav>

          <button
            className="nav-demo"
            onClick={openWhatsApp}
          >
            Book a Demo
            <ArrowUpRight size={16} />
          </button>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </div>

        {menuOpen && (
          <div className="mobile-nav">

            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>

            <button
              className="mobile-demo"
              onClick={openWhatsApp}
            >
              Book a Demo ↗
            </button>

          </div>
        )}
      </header>

      {/* ================= HERO ================= */}

      <main>

        <section id="home" className="hero">

          <div className="hero-grid"></div>

          <div className="hero-inner">

            {/* Availability */}

            <div className="hero-label">
              <span></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            {/* Name */}

            <div className="hero-name">

              <p>I'm</p>

              <h1>
                ANSHAD
                <br />
                <span>MOHAMMED K</span>
              </h1>

            </div>

            {/* Role + Description */}

            <div className="hero-bottom">

              <div className="hero-role">

                <h2>
                  FULL STACK
                  <br />
                  <span>DEVELOPER</span>
                </h2>

              </div>

              <div className="hero-intro">

                <p>
                  I build practical digital products that turn
                  real-world problems into simple and useful
                  experiences.
                </p>

                <div className="hero-actions">

                  <button
                    className="hero-primary"
                    onClick={() => scrollTo("projects")}
                  >
                    View My Work
                    <ArrowUpRight size={18} />
                  </button>

                  <button
                    className="hero-secondary"
                    onClick={() => scrollTo("contact")}
                  >
                    Let's Connect
                  </button>

                </div>

              </div>

            </div>

            {/* ================= HERO HIGHLIGHTS ================= */}

            <div className="hero-meta">

              {/* 01 */}

              <div className="hero-meta-item">

                <div className="meta-number">
                  01
                </div>

                <div className="meta-content">

                  <div className="meta-line"></div>

                  <h3>
                    BUILDING REAL
                    <br />
                    PRODUCTS
                  </h3>

                  <p>
                    Turning ideas into practical
                    solutions.
                  </p>

                </div>

              </div>

              {/* 02 */}

              <div className="hero-meta-item">

                <div className="meta-number">
                  02
                </div>

                <div className="meta-content">

                  <div className="meta-line"></div>

                  <h3>
                    FULL STACK
                    <br />
                    DEVELOPMENT
                  </h3>

                  <p>
                    From frontend to backend
                    and beyond.
                  </p>

                </div>

              </div>

              {/* 03 */}

              <div className="hero-meta-item">

                <div className="meta-number">
                  03
                </div>

                <div className="meta-content">

                  <div className="meta-line"></div>

                  <h3>
                    CSE STUDENT
                    <br />
                    2028
                  </h3>

                  <p>
                    Learning, building and
                    growing every day.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Scroll */}

          <button
            className="hero-scroll"
            onClick={() => scrollTo("about")}
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={16} />
          </button>

        </section>


        {/* ================= TEMPORARY SECTIONS ================= */}

        {/* ================= ABOUT ================= */}

        <section id="about" className="about-section">

          <div className="section-container">

            {/* Section Header */}

            <div className="section-heading">

              <div className="section-index">
                01 / ABOUT
              </div>

              <div className="section-heading-line"></div>

            </div>


            {/* Main About Heading */}

            <div className="about-heading">

              <h2>
                I'M A DEVELOPER
                <br />
                WHO LIKES TO BUILD
                <br />
                <span>THINGS THAT ACTUALLY WORK.</span>
              </h2>

            </div>


            {/* About Content */}

            <div className="about-content">

              <div className="about-left">

                <p className="about-lead">
                  I'm Anshad Mohammed K, a Computer Science
                  and Engineering student and full stack developer
                  who enjoys turning ideas into practical digital
                  products.
                </p>

                <p>
                  I like working across the frontend and backend,
                  building complete applications rather than just
                  individual interfaces. My focus is on creating
                  software that is useful, reliable and easy to use.
                </p>

                <p>
                  One of my main projects is a complete Café QR
                  Ordering and POS system that connects customers,
                  kitchen staff and billing operations in one platform.
                </p>

              </div>


              {/* About Details */}

              <div className="about-details">

                <div className="about-detail">

                <span>01</span>

                <div>
                  <small>EDUCATION</small>

                  <h3>
                    B.Tech
                    <br />
                    Computer Science & Engineering
                  </h3>

                  <p>
                    College of Engineering, Attingal
                  </p>
                </div>

              </div>


              <div className="about-detail">

                <span>02</span>

                <div>
                  <small>GRADUATION</small>

                  <h3>
                    2028
                  </h3>

                  <p>
                    Currently pursuing my degree
                    and building real-world projects.
                  </p>
                </div>

              </div>


              <div className="about-detail">

                <span>03</span>

                <div>
                  <small>CURRENT FOCUS</small>

                  <h3>
                    Full Stack
                    <br />
                    Development
                  </h3>

                  <p>
                    React, Node.js, Express,
                    MongoDB and real-time applications.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* About Bottom Line */}

          <div className="about-footer">

            <span>BASED IN KERALA, INDIA</span>

            <span>BUILDING • LEARNING • GROWING</span>

          </div>

          </div>

        </section>

        <section id="skills" className="skills-section">
          <div className="section-container">

            <div className="section-heading">
                <div className="section-index">02 / SKILLS</div>
                <div className="section-heading-line"></div>
              </div>

              <div className="skills-intro">
              <h2>
                TOOLS I USE TO
                <br />
                <span>BUILD REAL PRODUCTS.</span>
              </h2>

              <p>
                I work across the frontend and backend, combining modern
                technologies to build complete and practical applications.
              </p>
            </div>

            <div className="skills-list">

              <div className="skill-item">
              <div className="skill-number">01</div>

              <div className="skill-main">
                <h3>FRONTEND DEVELOPMENT</h3>
                <p>
                  Building responsive, modern and user-friendly interfaces.
                </p>

                <div className="skill-tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-number">02</div>

              <div className="skill-main">
                <h3>BACKEND DEVELOPMENT</h3>
                <p>
                  Developing APIs, authentication systems and server-side
                  applications.
                </p>

                <div className="skill-tags">
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>REST API</span>
                  <span>JWT</span>
                </div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-number">03</div>

              <div className="skill-main">
                <h3>DATABASE & REAL-TIME</h3>
                <p>
                  Working with databases and real-time communication for
                  connected applications.
                </p>

                <div className="skill-tags">
                  <span>MongoDB</span>
                  <span>Mongoose</span>
                  <span>Socket.IO</span>
                </div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-number">04</div>

              <div className="skill-main">
                <h3>TOOLS & WORKFLOW</h3>
                <p>
                  Using modern development tools to build, test and deploy
                  applications.
                </p>

                <div className="skill-tags">
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>VS Code</span>
                  <span>Vercel</span>
                  <span>Render</span>
                </div>
              </div>
            </div>

            </div>

          </div>
        </section>

        <section id="projects" className="featured-project-section">
          <div className="section-container">

            <div className="section-heading">
              <div className="section-index">03 / FEATURED PROJECT</div>
              <div className="section-heading-line"></div>
            </div>

            <div className="featured-project-header">

              <div>
                <div className="project-label">
                  FULL STACK WEB APPLICATION
                </div>

                <h2>
                  CAFÉ QR ORDERING
                  <br />
                  <span>& POS SYSTEM.</span>
                </h2>
              </div>

              <div className="featured-project-description">
                <p>
                  A complete digital ordering and restaurant management
                  platform designed to connect customers, kitchen staff,
                  cashiers and administrators in one system.
                </p>

                <p>
                  Customers can order directly from their table using a QR
                  code, while staff can manage orders, prepare food, process
                  payments and generate invoices in real time.
                </p>
              </div>

            </div>


            {/* Main Project Image */}

            <div className="featured-project-image">
              <img
                src="/projects/cafe-menu.jpeg"
                alt="Café QR Ordering customer menu"
              />

              <div className="project-image-overlay">
                <span>01</span>
                <p>QR CUSTOMER MENU</p>
              </div>
            </div>


            {/* Project Screens */}

            <div className="project-screen-grid">

              <div className="project-screen project-screen-large">
                <img
                  src="/projects/cafe-dashboard.png"
                  alt="Café admin dashboard"
                />

                <div className="project-screen-caption">
                  <span>02</span>
                  <div>
                    <h3>ADMIN DASHBOARD</h3>
                    <p>
                      Monitor orders, revenue, invoices and restaurant
                      activity from one dashboard.
                    </p>
                  </div>
                </div>
              </div>


              <div className="project-screen">
                <img
                  src="/projects/cafe-kitchen.png"
                  alt="Kitchen Display System"
                />

                <div className="project-screen-caption">
                  <span>03</span>
                  <div>
                    <h3>KITCHEN DISPLAY</h3>
                    <p>
                      Real-time order management for kitchen staff.
                    </p>
                  </div>
                </div>
              </div>


              <div className="project-screen">
                <img
                  src="/projects/cafe-pos.png"
                  alt="Café POS billing system"
                />

                <div className="project-screen-caption">
                  <span>04</span>
                  <div>
                    <h3>POS BILLING</h3>
                    <p>
                     Manage ready orders, tables, payments and billing.
                    </p>
                  </div>
                </div>
              </div>


              <div className="project-screen project-screen-wide">
                <img
                  src="/projects/cafe-invoice.png"
                  alt="Café invoice"
                />

                <div className="project-screen-caption">
                  <span>05</span>
                  <div>
                    <h3>INVOICES</h3>
                    <p>
                      Generate and print professional customer invoices.
                    </p>
                  </div>
                </div>
              </div>

            </div>


            {/* Project Features */}

            <div className="project-features">

            <div className="project-feature">
              <span>01</span>
                <h3>QR ORDERING</h3>
                <p>
                  Customers scan a table QR code and order directly
                  from their phone.
                </p>
            </div>

            <div className="project-feature">
              <span>02</span>
                <h3>REAL-TIME KITCHEN</h3>
                <p>
                  Orders move from customer to kitchen with real-time
                  status updates.
                </p>
            </div>

            <div className="project-feature">
              <span>03</span>
                <h3>POS & BILLING</h3>
                <p>
                  Ready orders can be processed through table-wise
                  billing and payment.
                </p>
            </div>

            <div className="project-feature">
              <span>04</span>
              <h3>INVOICE SYSTEM</h3>
              <p>
                Generate invoice numbers, view invoice history and
                print receipts.
              </p>
            </div>

            </div>


            {/* Technology Stack */}

            <div className="project-stack">

            <div className="project-stack-title">
              <span>TECHNOLOGY</span>
              <span>STACK</span>
            </div>

            <div className="project-stack-list">
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>JWT</span>
              <span>Socket.IO</span>
              <span>Tailwind CSS</span>
              <span>Vercel</span>
              <span>Render</span>
            </div>

          </div>


          {/* Project Buttons */}

          <div className="project-actions">

            <a
              href="https://cafe-ordering-system-omega.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="project-button project-button-primary"
            >
              VIEW LIVE PROJECT ↗
            </a>

            <a
              href="https://github.com/anshad-designer/cafe-ordering-system"
              target="_blank"
              rel="noreferrer"
              className="project-button project-button-secondary"
            >
             VIEW GITHUB ↗
            </a>

            <button
              onClick={openWhatsApp}
              className="project-button project-button-demo"
            >
              BOOK A DEMO ↗
            </button>

          </div>

          </div>
        </section>

        <section className="other-projects-section">
          <div className="section-container">

            <div className="section-heading">
              <div className="section-index">04 / OTHER PROJECTS</div>
              <div className="section-heading-line"></div>
            </div>

            <div className="other-projects-intro">
              <h2>
                MORE THINGS
                <br />
                <span>I'VE BUILT.</span>
              </h2>

              <p>
                A growing collection of experiments, applications and
                projects built while learning and exploring new technologies.
              </p>
            </div>


            <div className="other-project-list">

              {projects.map((project) => (
                <article
                  className="other-project"
                  key={project.number}
                >

                <div className="other-project-number">
                  {project.number}
                </div>

                <div className="other-project-main">

                  <div className="other-project-title">
                    <span>{project.category}</span>

                    <h3>{project.title}</h3>
                  </div>


                  <div className="other-project-description">
                    <p>{project.description}</p>

                    <div className="other-project-tech">
                      {project.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>


                  <div className="other-project-status">
                    LOCAL PROJECT
                  </div>

                </div>

              </article>
              ))}

            </div>

          </div>
        </section>

        <section id="education" className="education-section">
          <div className="section-container">

            <div className="section-heading">
              <div className="section-index">05 / EDUCATION</div>
              <div className="section-heading-line"></div>
            </div>

            <div className="education-content">

              <div className="education-main">
                <div className="education-year">
                  2024 — 2028
                </div>

                <h2>
                  B.TECH
                  <br />
                  <span>COMPUTER SCIENCE</span>
                  <br />
                  & ENGINEERING.
                </h2>
              </div>

              <div className="education-details">

                <div className="education-detail">
                  <span>INSTITUTION</span>
                  <h3>College of Engineering, Attingal</h3>
                </div>

                <div className="education-detail">
                  <span>PROGRAM</span>
                  <h3>Computer Science & Engineering</h3>
                </div>

                <div className="education-detail">
                  <span>STATUS</span>
                  <h3>Currently Pursuing</h3>
                </div>

              </div>

            </div>

            <div className="education-footer">
              <span>KTU • B.TECH</span>
              <span>EXPECTED GRADUATION • 2028</span>
            </div>

          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-container">

            <div className="section-heading">
              <div className="section-index">06 / CONTACT</div>
              <div className="section-heading-line"></div>
            </div>

            <div className="contact-content">

              <div className="contact-main">

                <div className="contact-label">
                  HAVE A PROJECT IN MIND?
                </div>

                <h2>
                  LET'S BUILD
                  <br />
                  <span>SOMETHING.</span>
                </h2>

                <p>
                  I'm open to opportunities, collaborations, freelance
                  projects and interesting ideas. If you'd like to work
                  together, feel free to get in touch.
                </p>

                <button
                  onClick={openWhatsApp}
                  className="contact-button"
                >
                  START A CONVERSATION ↗
                </button>

              </div>


              <div className="contact-links">

                <a
                  href="mailto:muhammedkanshad@gmail.com"
                  className="contact-link"
                >
                  <span>EMAIL</span>
                  <strong>muhammedkanshad@gmail.com</strong>
                  <span>↗</span>
                </a>

                <a
                  href="https://github.com/anshad-00"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span>GITHUB</span>
                  <strong>anshad-00</strong>
                  <span>↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/anshad-k-193946301/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span>LINKEDIN</span>
                  <strong>anshad-k</strong>
                  <span>↗</span>
                </a>

              </div>

            </div>


            <div className="contact-footer">

              <div>
                AVAILABLE FOR OPPORTUNITIES
              </div>

              <div>
                KERALA, INDIA
              </div>

            </div>

          </div>
        </section>


        <footer className="site-footer">
          <div className="section-container">

            <div className="footer-top">

              <div className="footer-logo">
                AMK<span>.</span>
              </div>

              <div className="footer-text">
                FULL STACK DEVELOPER
                <br />
                & CSE STUDENT
              </div>

              <button
                onClick={() => window.scrollTo({
                top: 0,
                behavior: "smooth"
                })}
                className="back-to-top"
              >
                BACK TO TOP ↑
              </button>

            </div>

            <div className="footer-bottom">

              <span>
                © 2026 ANSHAD MOHAMMED K
              </span>

              <span>
                BUILDING • LEARNING • GROWING
              </span>

            </div>

          </div>
        </footer>

      </main>

    </div>
  );
}

export default App;
