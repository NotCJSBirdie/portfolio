"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const showcaseRef = useRef(null);
  const contactRef = useRef(null);
  const experienceCarouselRef = useRef(null);
  const projectsCarouselRef = useRef(null);
  const showcaseCarouselRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const aboutInView = useInView(aboutRef, { once: true });
  const skillsInView = useInView(skillsRef, { once: false, amount: 0.3 });
  const experienceInView = useInView(experienceRef, { once: true });
  const projectsInView = useInView(projectsRef, { once: true });
  const showcaseInView = useInView(showcaseRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  const sectionRefs = [
    heroRef,
    aboutRef,
    skillsRef,
    experienceRef,
    projectsRef,
    showcaseRef,
    contactRef,
  ];
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [resetSkillsAnimation, setResetSkillsAnimation] = useState(0);

  const projects = [
    {
      title: "Loyalty Program Website for Token Metrics",
      description:
        "Engineered a platform using Next.js, Tailwind CSS, and Snowflake SQL to reward user engagement, retaining 15% more customers.",
      tech: ["Next.js", "Tailwind CSS", "Snowflake SQL"],
      icon: "planet",
    },
    {
      title: "Token Metrics 3.0: Personalized Token Insights",
      description:
        "Designed token evaluation tools with React.js, TypeScript, and Tailwind CSS, empowering 200,000+ users.",
      tech: ["React.js", "TypeScript", "Tailwind CSS"],
      icon: "rocket",
    },
    {
      title: "Revenue-Boosting Gaming Store for Paradox Interactive",
      description:
        "Crafted an e-commerce platform that increased revenue by 25% using modern web technologies.",
      tech: ["React.js", "Node.js", "Tailwind CSS"],
      icon: "planet",
    },
    {
      title: "Scalable E-Library Platform",
      description:
        "Built a dynamic e-library system with React.js and Redux, enhancing content accessibility.",
      tech: ["React.js", "Redux", "Node.js"],
      icon: "rocket",
    },
    {
      title: "Client-Centric Website for Interior Design",
      description:
        "Developed a responsive website with Next.js and Ant-Design, improving client engagement by 40%.",
      tech: ["Next.js", "Ant-Design", "Tailwind CSS"],
      icon: "planet",
    },
  ];

  const experiences = [
    {
      role: "Frontend Web Developer",
      company: "Token Metrics LLC",
      period: "March 2024 - August 2024",
      location: "Remote (Austin, Texas)",
      achievements: [
        "Developed a loyalty program website, increasing customer retention by 15%.",
        "Built Token Metrics 3.0, boosting user engagement by 20%.",
        "Integrated personalized token evaluation features.",
      ],
    },
    {
      role: "Developer",
      company: "Paradox Interactive AB",
      period: "August 2023 - January 2024",
      location: "Stockholm, Sweden",
      achievements: [
        "Developed a gaming store website, driving 25% revenue increase.",
        "Enhanced product sales by 18% through a modern webshop.",
        "Refined SDK documentation, improving efficiency by 30%.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Flexisource IT",
      period: "April 2022 - June 2023",
      location: "Makati, Philippines",
      achievements: [
        "Developed a website for an interior design company, streamlining interactions by 40%.",
        "Built an employee portal, improving HR efficiency by 25%.",
        "Created a recipe website, attracting 15% more users.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Self-Employed/Freelance",
      period: "March 2018 - April 2022",
      location: "Dumaguete, Philippines",
      achievements: [
        "Delivered a scalable e-library platform in 6 months.",
        "Migrated UI components to a modern design system, improving maintainability by 35%.",
        "Developed e-commerce platforms, increasing performance by 20%.",
      ],
    },
  ];

  const showcases = [
    {
      title: "Token Metrics Loyalty Program",
      description:
        "A platform rewarding user engagement, built with Next.js and Tailwind CSS.",
      media: "/showcase/token-metrics-loyalty.png",
      type: "image",
      link: "https://www.tokenmetrics.com/",
    },
    {
      title: "Token Metrics 3.0",
      description:
        "Token evaluation tools empowering 200,000+ users, built with React.js.",
      media: "/showcase/token-metrics.png",
      type: "image",
      link: "https://www.tokenmetrics.com/",
    },
    {
      title: "Paradox Interactive Gaming Store",
      description:
        "E-commerce platform increasing revenue by 25%, built with React.js.",
      media: "/showcase/paradox-store.png",
      type: "image",
      link: "https://www.paradoxinteractive.com/our-games/discover",
    },
    {
      title: "Recime Recipe Website",
      description:
        "Recipe website attracting 15% more users, built during Flexisource tenure.",
      media: "/showcase/recime.png",
      type: "image",
      link: "https://www.recime.app/",
    },
    {
      title: "Novari Collective Interior Design",
      description:
        "Responsive website improving engagement by 40%, built with Next.js.",
      media: "/showcase/novari.png",
      type: "image",
      link: "https://novaricollective.com.au/",
    },
    {
      title: "Flexisource IT Employee Portal",
      description:
        "Portal improving HR efficiency by 25%, built with modern web technologies.",
      media: "/showcase/flexisource-portal.png",
      type: "image",
      link: "https://flexisourceit.com.au/",
    },
  ];

  const skills = [
    { name: "Next.js", icon: "rocket" },
    { name: "React.js", icon: "star" },
    { name: "Vue.js", icon: "comet" },
    { name: "Nuxt.js", icon: "planet" },
    { name: "TypeScript", icon: "rocket" },
    { name: "JavaScript", icon: "star" },
    { name: "Tailwind CSS", icon: "comet" },
    { name: "Node.js", icon: "planet" },
    { name: "Express.js", icon: "rocket" },
    { name: "REST APIs", icon: "star" },
    { name: "GraphQL", icon: "comet" },
    { name: "MongoDB", icon: "planet" },
    { name: "MySQL", icon: "rocket" },
    { name: "PostgreSQL", icon: "star" },
    { name: "Firebase", icon: "comet" },
    { name: "Jest", icon: "planet" },
    { name: "Sanity.io", icon: "rocket" },
    { name: "Performance Optimization", icon: "star" },
  ];

  const PlanetIcon = () => (
    <svg
      className="icon-planet"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00d4ff"
      strokeWidth="2"
      aria-label="Planet Icon"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 0 0 20 15 15 0 0 0 0-20" />
    </svg>
  );

  const RocketIcon = () => (
    <svg
      className="icon-rocket"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      aria-label="Rocket Icon"
    >
      <path d="M6 12L12 3l6 9H6z" />
      <path d="M4 14l-3 7 5-2M20 14l3 7-5-2" />
      <circle cx="12" cy="10" r="2" fill="#ffffff" />
    </svg>
  );

  const StarIcon = () => (
    <svg
      className="icon-star"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00d4ff"
      strokeWidth="2"
      aria-label="Star Icon"
    >
      <polygon points="12 2 15 8.5 22 9.5 17 14.5 18 21 12 18 6 21 7 14.5 2 9.5 9 8.5" />
    </svg>
  );

  const CometIcon = () => (
    <svg
      className="icon-comet"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00d4ff"
      strokeWidth="2"
      aria-label="Comet Icon"
    >
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4L6 18" />
      <path d="M14 6L8 16" />
    </svg>
  );

  const handleUpButtonClick = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(0);
      if (experienceCarouselRef.current) {
        experienceCarouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
      if (projectsCarouselRef.current) {
        projectsCarouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
      if (showcaseCarouselRef.current) {
        showcaseCarouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    }
  };

  const handleResumeClick = () => {
    setIsResumeOpen(true);
  };

  const handleResumeClose = () => {
    setIsResumeOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate 3-second load
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      window.location.hash = "";
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (!skillsInView) {
      setResetSkillsAnimation((prev) => prev + 1);
    }
  }, [skillsInView]);

  useEffect(() => {
    let isScrolling = false;

    const isCarouselAtEnd = (carousel) => {
      if (!carousel) return true;
      return (
        carousel.scrollWidth - carousel.scrollLeft <= carousel.clientWidth + 1
      );
    };

    const isCarouselAtStart = (carousel) => {
      if (!carousel) return true;
      return carousel.scrollLeft <= 1;
    };

    const updateCurrentSection = () => {
      const scrollY = window.scrollY;
      let closestSection = 0;
      let minDistance = Infinity;

      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = index;
          }
        }
      });

      setCurrentSection(closestSection);
    };

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      isScrolling = true;
      const delta = e.deltaY > 0 ? 1 : -1;
      let nextSection = currentSection;

      if (
        currentSection === 3 &&
        delta > 0 &&
        !isCarouselAtEnd(experienceCarouselRef.current)
      ) {
        experienceCarouselRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      } else if (
        currentSection === 3 &&
        delta < 0 &&
        !isCarouselAtStart(experienceCarouselRef.current)
      ) {
        experienceCarouselRef.current.scrollBy({
          left: -300,
          behavior: "smooth",
        });
      } else if (
        currentSection === 4 &&
        delta > 0 &&
        !isCarouselAtEnd(projectsCarouselRef.current)
      ) {
        projectsCarouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
      } else if (
        currentSection === 4 &&
        delta < 0 &&
        !isCarouselAtStart(projectsCarouselRef.current)
      ) {
        projectsCarouselRef.current.scrollBy({
          left: -300,
          behavior: "smooth",
        });
      } else if (
        currentSection === 5 &&
        delta > 0 &&
        !isCarouselAtEnd(showcaseCarouselRef.current)
      ) {
        showcaseCarouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
      } else if (
        currentSection === 5 &&
        delta < 0 &&
        !isCarouselAtStart(showcaseCarouselRef.current)
      ) {
        showcaseCarouselRef.current.scrollBy({
          left: -300,
          behavior: "smooth",
        });
      } else {
        nextSection = Math.min(
          Math.max(currentSection + delta, 0),
          sectionRefs.length - 1
        );
        if (sectionRefs[nextSection].current) {
          sectionRefs[nextSection].current.scrollIntoView({
            behavior: "smooth",
          });
          setCurrentSection(nextSection);
        }
      }

      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      isScrolling = true;
      const touch = e.touches[0];
      const currentY = touch.clientY;
      let startY = currentY;

      const onTouchMove = (moveEvent) => {
        const newY = moveEvent.touches[0].clientY;
        const delta = startY - newY;
        if (Math.abs(delta) > 50) {
          let nextSection = currentSection;
          if (
            currentSection === 3 &&
            delta > 0 &&
            !isCarouselAtEnd(experienceCarouselRef.current)
          ) {
            experienceCarouselRef.current.scrollBy({
              left: 300,
              behavior: "smooth",
            });
          } else if (
            currentSection === 3 &&
            delta < 0 &&
            !isCarouselAtStart(experienceCarouselRef.current)
          ) {
            experienceCarouselRef.current.scrollBy({
              left: -300,
              behavior: "smooth",
            });
          } else if (
            currentSection === 4 &&
            delta > 0 &&
            !isCarouselAtEnd(projectsCarouselRef.current)
          ) {
            projectsCarouselRef.current.scrollBy({
              left: 300,
              behavior: "smooth",
            });
          } else if (
            currentSection === 4 &&
            delta < 0 &&
            !isCarouselAtStart(projectsCarouselRef.current)
          ) {
            projectsCarouselRef.current.scrollBy({
              left: -300,
              behavior: "smooth",
            });
          } else if (
            currentSection == 5 &&
            delta > 0 &&
            !isCarouselAtEnd(showcaseCarouselRef.current)
          ) {
            showcaseCarouselRef.current.scrollBy({
              left: 300,
              behavior: "smooth",
            });
          } else if (
            currentSection === 5 &&
            delta < 0 &&
            !isCarouselAtStart(showcaseCarouselRef.current)
          ) {
            showcaseCarouselRef.current.scrollBy({
              left: -300,
              behavior: "smooth",
            });
          } else {
            nextSection =
              delta > 0
                ? Math.min(currentSection + 1, sectionRefs.length - 1)
                : Math.max(currentSection - 1, 0);
            if (sectionRefs[nextSection].current) {
              sectionRefs[nextSection].current.scrollIntoView({
                behavior: "smooth",
              });
              setCurrentSection(nextSection);
            }
          }
          window.removeEventListener("touchmove", onTouchMove);
        }
        startY = newY;
      };

      window.addEventListener("touchmove", onTouchMove);
      setTimeout(() => {
        window.removeEventListener("touchmove", onTouchMove);
        isScrolling = false;
      }, 800);
    };

    const handleScroll = () => {
      if (isScrolling) return;
      updateCurrentSection();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchMove, { passive: false });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection, sectionRefs]);

  useEffect(() => {
    const sections = document.querySelectorAll(".section-content");
    sections.forEach((section, index) => {
      if (index === currentSection) {
        section.classList.remove("flip");
      } else {
        section.classList.add("flip");
      }
    });

    if (currentSection === 0) {
      if (experienceCarouselRef.current) {
        experienceCarouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
      if (projectsCarouselRef.current) {
        projectsCarouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
      if (showcaseCarouselRef.current) {
        showcaseCarouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    }
  }, [currentSection]);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "-2";
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        type: Math.random() > 0.7 ? "rocket" : "star",
        glow: 0,
      });
    }

    let mouseX = null;
    let mouseY = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let lastScrollY = window.scrollY;

    function animate() {
      ctx.clearRect(0, 0, width, height);
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY;

      particles.forEach((p) => {
        p.x += p.vx + scrollDelta * 0.01;
        p.y += p.vy + scrollDelta * 0.01;

        if (p.x < 0) p.x += width;
        if (p.x > width) p.x -= width;
        if (p.y < 0) p.y += height;
        if (p.y > height) p.y -= height;

        let glow = 0;
        if (mouseX !== null && mouseY !== null) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            glow = (100 - distance) / 100;
          }
        }
        p.glow = glow;

        ctx.beginPath();
        if (p.type === "rocket") {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - 5, p.y + 5);
          ctx.lineTo(p.x + 5, p.y + 5);
          ctx.closePath();
          ctx.fillStyle = `rgba(0, 212, 255, ${1 + glow})`;
        } else {
          ctx.arc(p.x, p.y, p.size + glow, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + glow})`;
        }
        ctx.fill();
      });

      lastScrollY = scrollY;
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(canvas);
    };
  }, []);

  return (
    <div>
      {isLoading && (
        <motion.div
          className="loading-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className="rocket-loader"
              initial={{
                x: windowSize.width ? Math.random() * windowSize.width : 0,
                y: windowSize.height || 0,
                opacity: 1,
              }}
              animate={{
                x: windowSize.width
                  ? Math.random() * windowSize.width - 100
                  : -100,
                y: -100,
                opacity: 0,
              }}
              transition={{
                duration: 2,
                delay: index * 0.3,
                ease: "easeOut",
              }}
            >
              <RocketIcon />
            </motion.div>
          ))}
        </motion.div>
      )}
      {/* Hero Section */}
      <section ref={heroRef} className="section hero-section">
        <div className="section-content hero-content">
          <motion.img
            src="/avatar-placeholder.png"
            alt="Carl Serquina Avatar"
            className="hero-avatar"
            initial={{ opacity: 0, scale: 0 }}
            animate={heroInView && !isLoading ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          />
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView && !isLoading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Carl Serquiña
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView && !isLoading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Web Developer
          </motion.p>
          <motion.div
            className="cta-container"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView && !isLoading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#projects" className="cta-primary">
              Explore My Work
            </a>
            <button onClick={handleResumeClick} className="cta-secondary">
              View Resume
            </button>
          </motion.div>
        </div>
      </section>

      {isResumeOpen && (
        <div className="resume-modal">
          <div className="resume-modal-content">
            <button onClick={handleResumeClose} className="resume-modal-close">
              ×
            </button>
            <iframe src="/resume.pdf" title="Resume" />
          </div>
        </div>
      )}

      {/* About Section */}
      <section ref={aboutRef} className="section">
        <div className="section-content">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={aboutInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8 text-space-accent"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-space-glow max-w-3xl mx-auto"
          >
            I’m a Full Stack Web Developer with over 6 years of experience
            building responsive and scalable web applications using Next.js,
            React.js, Vue.js, and Node.js. I’ve enhanced user engagement by 20%
            and streamlined workflows by 30% across various projects. I’m
            passionate about creating impactful solutions and am seeking a
            Senior Frontend or Full Stack Developer role with an international
            team, offering relocation assistance.
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="section">
        <div className="section-content">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={skillsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8 text-space-accent"
          >
            Skills
          </motion.h2>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={skillsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            key={resetSkillsAnimation}
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: index % 2 === 0 ? -200 : 200,
                }}
                animate={skillsInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
                className="skill-tag flex items-center bg-space-nebula text-space-glow px-4 py-2 rounded-full text-sm hover:bg-space-accent transition animate-pulse-glow"
              >
                {skill.icon === "planet" && <PlanetIcon />}
                {skill.icon === "rocket" && <RocketIcon />}
                {skill.icon === "star" && <StarIcon />}
                {skill.icon === "comet" && <CometIcon />}
                <span className="ml-2">{skill.name}</span>
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="section">
        <div className="section-content">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={experienceInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8 text-space-accent"
          >
            Experience
          </motion.h2>
          <div ref={experienceCarouselRef} className="carousel">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="carousel-item">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                >
                  <h3>{exp.role}</h3>
                  <p className="text-lg text-space-accent">{exp.company}</p>
                  <p>
                    {exp.period} | {exp.location}
                  </p>
                  <ul>
                    {exp.achievements.map((achievement) => (
                      <li key={achievement}>
                        <RocketIcon />
                        <span className="ml-2">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="section" id="projects">
        <div className="section-content">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={projectsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8 text-space-accent"
          >
            Projects
          </motion.h2>
          <div ref={projectsCarouselRef} className="carousel">
            {projects.map((project, index) => (
              <div key={project.title} className="carousel-item">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-3">
                    {project.icon === "planet" ? (
                      <PlanetIcon />
                    ) : (
                      <RocketIcon />
                    )}
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-space-nebula text-space-glow px-3 py-1 rounded-full text-sm animate-pulse-glow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section ref={showcaseRef} className="section">
        <div className="section-content">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={showcaseInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8 text-space-accent"
          >
            Showcase
          </motion.h2>
          <div ref={showcaseCarouselRef} className="showcase-carousel">
            {showcases.map((showcase, index) => (
              <div key={showcase.title} className="showcase-item">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={showcaseInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                >
                  {showcase.type === "image" ? (
                    <img
                      src={showcase.media}
                      alt={showcase.title}
                      style={{
                        filter: "drop-shadow(0 0 5px rgba(0, 212, 255, 0.5))",
                      }}
                    />
                  ) : (
                    <video
                      src={showcase.media}
                      controls
                      style={{
                        filter: "drop-shadow(0 0 5px rgba(0, 212, 255, 0.5))",
                      }}
                    />
                  )}
                  <p>
                    {showcase.description}{" "}
                    <a
                      href={showcase.link}
                      target="_blank"
                      className="underline text-space-accent"
                    >
                      View Project
                    </a>
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="section" id="contact">
        <div className="section-content">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={contactInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8 text-space-accent"
          >
            Contact Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg mb-6 text-space-glow"
          >
            Interested in collaborating? Reach out to discuss opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={contactInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="flex items-center justify-center">
              <RocketIcon />
              <span className="ml-2">
                Email:{" "}
                <a
                  href="mailto:serquinajhunloprofessional@gmail.com"
                  className="underline text-space-accent hover:text-space-glow"
                >
                  serquinajhunloprofessional@gmail.com
                </a>
              </span>
            </p>
            <p className="flex items-center justify-center">
              <PlanetIcon />
              <span className="ml-2">
                Phone:{" "}
                <a
                  href="tel:+639657919686"
                  className="underline text-space-accent hover:text-space-glow"
                >
                  +63 (965) 791-9686
                </a>
              </span>
            </p>
            <p className="flex items-center justify-center">
              <RocketIcon />
              <span className="ml-2">
                LinkedIn:{" "}
                <a
                  href="https://linkedin.com/in/carl-serquiña-ab5509201"
                  className="underline text-space-accent hover:text-space-glow"
                >
                  carl-serquiña
                </a>
              </span>
            </p>
            <p className="flex items-center justify-center">
              <PlanetIcon />
              <span className="ml-2">
                Portfolio:{" "}
                <a
                  href="https://carlserquina-2023.vercel.app"
                  className="underline text-space-accent hover:text-space-glow"
                >
                  carlserquina-2023.vercel.app
                </a>
              </span>
            </p>
          </motion.div>
          <button
            onClick={handleUpButtonClick}
            className="up-button"
            aria-label="Scroll to top"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
            >
              <path d="M12 19V5m7 7l-7-7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
