import "./App.css";
import { useState, useEffect } from "react";
import headshot from "./assets/Ivan Shishkin Headshot.JPG";
import BlurText from "./components/BlurText";
import ShinyText from "./components/ShinyText";
import SpotlightCard from "./components/SpotlightCard";
import GlassIcons from "./components/GlassIcons";
import StaggeredMenu from "./components/StaggeredMenu";
import PillNav from "./components/PillNav";
import Section from "./components/Section";
import LogoLoop from "./components/LogoLoop";
import LetterGlitch from "./components/LetterGlitch";
// Skill icons
import {
  ReactIcon,
  NodeIcon,
  PythonIcon,
  JavaScriptIcon,
  HTMLIcon,
  CSSIcon,
  ViteIcon,
  SupabaseIcon,
  CPlusPlusIcon,
  SQLIcon,
  DockerIcon,
  GitIcon,
} from "./components/Icons";

// Social icons
import { GmailIcon, GitHubIcon, LinkedInIcon } from "./components/Icons";

// Skill links
const skills = [
  { node: <ReactIcon />, title: "React", ariaLabel: "React" },
  { node: <NodeIcon />, title: "Node.js", ariaLabel: "Node.js" },
  { node: <PythonIcon />, title: "Python", ariaLabel: "Python" },
  { node: <JavaScriptIcon />, title: "JavaScript", ariaLabel: "JavaScript" },
  { node: <HTMLIcon />, title: "HTML", ariaLabel: "HTML" },
  { node: <CSSIcon />, title: "CSS", ariaLabel: "CSS" },
  { node: <ViteIcon />, title: "Vite", ariaLabel: "Vite" },
  { node: <SupabaseIcon />, title: "Supabase", ariaLabel: "Supabase" },
  { node: <CPlusPlusIcon />, title: "C++", ariaLabel: "C++" },
  { node: <SQLIcon />, title: "SQL", ariaLabel: "SQL" },
  { node: <DockerIcon />, title: "Docker", ariaLabel: "Docker" },
  { node: <GitIcon />, title: "Git", ariaLabel: "Git" },
];

// Social links
const socialLinks = [
  {
    icon: <GmailIcon />,
    color: "gray",
    label: "Email",
    copyText: "shishkinivan2006@gmail.com",
  },
  {
    icon: <GitHubIcon />,
    color: "gray",
    label: "GitHub",
    link: "https://github.com/Ivan-Shishkin-Dev",
  },
  {
    icon: <LinkedInIcon />,
    color: "gray",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ivan-shishkin-dev",
  },
];

const menuItems = [
  { label: "Home", ariaLabel: "Go to home section", link: "#home" },
  { label: "About", ariaLabel: "Go to about section", link: "#about" },
  {
    label: "Experience",
    ariaLabel: "Go to experience section",
    link: "#experience",
  },
  {
    label: "Education",
    ariaLabel: "Go to education section",
    link: "#education",
  },
  { label: "Projects", ariaLabel: "Go to projects section", link: "#projects" },
  { label: "Skills", ariaLabel: "Go to skills section", link: "#skills" },
];

const socialMenuItems = [
  { label: "Email", link: "mailto:shishkinivan2006@gmail.com" },
  { label: "GitHub", link: "https://github.com/Ivan-Shishkin-Dev" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/ivan-shishkin-dev" },
];

function App() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) =>
        document.querySelector(item.link)
      );
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].link);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Convert menuItems to PillNav format (with href instead of link)
  const pillNavItems = menuItems.map((item) => ({
    label: item.label,
    href: item.link,
    ariaLabel: item.ariaLabel,
  }));

  return (
    <div className="App">
      {/* PillNav - Menu bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1001,
          display: "flex",
          justifyContent: "center",
          paddingTop: "1em",
          pointerEvents: "none",
        }}
      >
        <div style={{ pointerEvents: "all" }}>
          <PillNav
            items={pillNavItems}
            activeHref={activeSection}
            className="custom-nav"
            baseColor="#fff"
            pillColor="#060010"
            hoveredPillTextColor="#060010"
          />
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          pointerEvents: "none",
        }}
      >
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialMenuItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          accentColor="#5227FF"
          isFixed={true}
          closeOnClickAway={true}
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
        />
      </div>

      {/* Home Section */}
      <Section
        id="home"
        background={
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        }
        style={{ background: "#000000" }}
      >
        <div className="intro">
          <div className="headshot-wrapper">
            <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.3)">
              <img src={headshot} alt="Ivan Shishkin" className="headshot" />
            </SpotlightCard>
          </div>
          <div
            className="intro-text"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              padding: "1.5rem",
              paddingBottom: "2.5rem",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "visible",
            }}
          >
            <BlurText
              text="Hi, I'm Ivan Shishkin"
              className="greeting"
              delay={100}
              animateBy="words"
            />
            <h2 className="title">
              <ShinyText text="Software Engineer" speed={3} />
            </h2>
            <GlassIcons items={socialLinks} animateIn />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            margin: "3rem auto 0",
            padding: "2rem",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: "8px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <LogoLoop
            logos={skills}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={48}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#000000"
            scaleOnHover={true}
            ariaLabel="Technology skills"
            renderItem={(item) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  whiteSpace: "nowrap",
                }}
              >
                <span className="logoloop__node">{item.node}</span>
                <span
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: 500,
                    opacity: 0.9,
                  }}
                >
                  {item.title}
                </span>
              </div>
            )}
          />
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" style={{ background: "#0a0a0a" }}>
        <div className="section-content">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">
            Welcome to my portfolio! I'm a passionate software engineer with
            experience in building modern web applications. I love creating
            clean, efficient code and solving complex problems.
          </p>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" style={{ background: "#050508" }}>
        <div className="section-content">
          <h2 className="section-title">Experience</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                padding: "2rem",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem",
                  fontWeight: 600,
                }}
              >
                Position Title
              </h3>
              <p
                style={{
                  color: "#aaa",
                  fontSize: "1rem",
                  marginBottom: "1rem",
                  fontStyle: "italic",
                }}
              >
                Company Name • Location • Date Range
              </p>
              <ul
                style={{
                  color: "#ccc",
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  paddingLeft: "1.5rem",
                }}
              >
                <li>Key achievement or responsibility</li>
                <li>Another important contribution</li>
                <li>Notable project or impact</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" style={{ background: "#0d0d0d" }}>
        <div className="section-content">
          <h2 className="section-title">Education</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                padding: "2rem",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem",
                  fontWeight: 600,
                }}
              >
                Degree Name
              </h3>
              <p
                style={{
                  color: "#aaa",
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                  fontStyle: "italic",
                }}
              >
                University Name • Location
              </p>
              <p
                style={{
                  color: "#888",
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
                }}
              >
                Date Range • GPA (if applicable)
              </p>
              <p style={{ color: "#ccc", fontSize: "1rem", lineHeight: "1.8" }}>
                Relevant coursework, honors, or achievements.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" style={{ background: "#050508" }}>
        <div className="section-content">
          <h2 className="section-title">Projects</h2>
          <p className="section-text">
            Coming soon - showcase of my latest work and projects.
          </p>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" style={{ background: "#0d0d0d" }}>
        <div className="section-content">
          <h2 className="section-title">Skills</h2>
          <p className="section-text">
            Coming soon - technical skills and technologies I work with.
          </p>
        </div>
      </Section>
    </div>
  );
}

export default App;
