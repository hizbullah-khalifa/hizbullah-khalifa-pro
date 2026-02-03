import React, { useEffect, useRef, useState, useCallback } from "react";
const videoWebM = 'public/video/Rainbow_Nebula_4K_Motion_Background.webm';
const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const profileRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const profileImageUrl = "https://image2url.com/r2/default/images/1768735226295-5d158032-2b5e-4d14-b137-8e2324a98d0d.png";

  // Tech stack with actual logo URLs from CDN
  const techStack = [
    { 
      name: "HTML5", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26"
    },
    { 
      name: "CSS3", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6"
    },
    { 
      name: "JavaScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E"
    },
    { 
      name: "React", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB"
    },
    { 
      name: "Node.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933"
    },
    { 
      name: "Express", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "#ffffff"
    },
    { 
      name: "Git", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032"
    },
    { 
      name: "GitHub", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "#ffffff"
    },
  ];

  const checkMobile = useCallback(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobileDevice = /android|blackberry|iphone|ipad|ipod|opera mini|iemobile|wpdesktop/i.test(userAgent);
    const isSmallScreen = window.innerWidth <= 768;
    setIsMobile(isMobileDevice || isSmallScreen);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [checkMobile]);

  useEffect(() => {
    const preloadAssets = async () => {
      const video = document.createElement("video");
      video.src = videoWebM;
      video.preload = "metadata";

      const videoLoadPromise = new Promise((resolve) => {
        video.oncanplaythrough = () => {
          setVideoLoaded(true);
          resolve();
        };
        video.onerror = () => {
          setVideoLoaded(false);
          resolve();
        };
      });

      await videoLoadPromise;

      setTimeout(() => {
        setIsLoaded(true);
      }, 150);
    };

    preloadAssets();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          animateElements();
        }
      },
      {
        threshold: isMobile ? 0.1 : 0.2,
        rootMargin: isMobile ? "50px" : "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [isVisible, isMobile]);

  const animateElements = useCallback(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = prefersReducedMotion ? 0 : isMobile ? 50 : 100;

    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.style.opacity = "1";
        contentRef.current.style.transform = "translateY(0)";
      }
    }, delay);

    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }
    }, delay * 2);

    setTimeout(() => {
      if (profileRef.current) {
        profileRef.current.style.opacity = "1";
        profileRef.current.style.transform = "scale(1)";
      }
    }, delay * 3);

    setTimeout(() => {
      if (paraRef.current) {
        paraRef.current.style.opacity = "1";
        paraRef.current.style.transform = "translateY(0)";
      }
    }, delay * 4);
  }, [isMobile]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking && !isMobile) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const sectionTop = sectionRef.current?.offsetTop || 0;
          const sectionHeight = sectionRef.current?.offsetHeight || 0;
          const windowHeight = window.innerHeight;

          if (scrolled + windowHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
            const parallaxValue = (scrolled - sectionTop) * 0.2;

            if (videoRef.current && videoLoaded) {
              videoRef.current.style.transform = `translateY(${parallaxValue}px)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    if (!isMobile) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, videoLoaded]);

  return (
    <div
      id="About"
      className="about-section"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "3rem 0" : "5rem 0",
      }}
    >
      {/* Video Background */}
      <div
        className="video-background"
        style={{
          position: "absolute",
          top: isMobile ? "0" : "-10%",
          left: isMobile ? "0" : "-10%",
          width: isMobile ? "100%" : "120%",
          height: isMobile ? "100%" : "120%",
          zIndex: 1,
        }}
      >
        {videoLoaded && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: isMobile
                ? "brightness(0.6) contrast(1.1) hue-rotate(180deg)"
                : "brightness(0.6) contrast(1.1) hue-rotate(180deg)",
              transition: "opacity 0.5s ease",
            }}
          >
            <source src={videoWebM} type="video/webm" />
          </video>
        )}
      </div>

      {/* Gradient Overlay */}
      <div
        ref={overlayRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: isMobile
            ? "linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)"
            : `
              radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.8) 100%)
            `,
          zIndex: 2,
        }}
      />

      {/* Animated Grid (desktop only) */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            zIndex: 2,
            animation: "gridMove 25s linear infinite",
          }}
        />
      )}

      {/* Floating Elements (desktop only) */}
      {!isMobile &&
        [...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              borderRadius: "50%",
              background: `linear-gradient(45deg, ${["#6366f1", "#a855f7", "#ec4899", "#f59e0b", "#10b981"][i]}, transparent)`,
              opacity: 0.1,
              top: `${10 + i * 15}%`,
              left: `${5 + i * 20}%`,
              animation: `float ${3 + i}s ease-in-out infinite`,
              zIndex: 2,
            }}
          />
        ))}

      {/* Main Content */}
      <div
        className="about-content"
        ref={contentRef}
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "900px",
          width: "100%",
          padding: isMobile ? "0 1rem" : "0 2rem",
          opacity: 0,
          transform: "translateY(60px)",
          transition: `all ${isMobile ? 0.8 : 1.2}s cubic-bezier(0.16, 1, 0.3, 1)`,
        }}
      >
        {/* Title Section */}
        <div
          className="title-section"
          ref={titleRef}
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "2rem" : "3rem",
            opacity: 0,
            transform: "translateY(40px)",
            transition: `all ${isMobile ? 0.8 : 1.2}s cubic-bezier(0.16, 1, 0.3, 1)`,
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "clamp(2rem, 8vw, 3rem)" : "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "1rem",
              textShadow: "0 0 30px rgba(99, 102, 241, 0.3)",
              lineHeight: "1.2",
            }}
          >
            About{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Me
            </span>
          </h2>
          <div
            style={{
              width: isMobile ? "80px" : "100px",
              height: isMobile ? "3px" : "4px",
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              margin: "0 auto",
              borderRadius: "2px",
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
            }}
          />
        </div>

        {/* Animated Profile Image with Orbiting Tech Logos */}
        <div
          ref={profileRef}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: isMobile ? "3rem" : "4rem",
            opacity: 0,
            transform: "scale(0.8)",
            transition: `all ${isMobile ? 0.8 : 1.2}s cubic-bezier(0.16, 1, 0.3, 1)`,
          }}
        >
          <div
            className="profile-container"
            style={{
              position: "relative",
              width: isMobile ? "250px" : "300px",
              height: isMobile ? "250px" : "300px",
            }}
          >
            {/* Outer Rotating Ring */}
            <div
              className="outer-ring"
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                right: "-20px",
                bottom: "-20px",
                borderRadius: "50%",
                border: "4px solid transparent",
                borderTopColor: "#6366f1",
                borderRightColor: "#a855f7",
                animation: "rotate 3s linear infinite",
                zIndex: 0,
              }}
            />

            {/* Middle Rotating Ring (opposite direction) */}
            <div
              className="middle-ring"
              style={{
                position: "absolute",
                top: "-15px",
                left: "-15px",
                right: "-15px",
                bottom: "-15px",
                borderRadius: "50%",
                border: "3px solid transparent",
                borderBottomColor: "#ec4899",
                borderLeftColor: "#f59e0b",
                animation: "rotateReverse 4s linear infinite",
                zIndex: 0,
              }}
            />

            {/* Rotating Gradient Border */}
            <div
              className="rotating-border"
              style={{
                position: "absolute",
                top: "-10px",
                left: "-10px",
                right: "-10px",
                bottom: "-10px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6366f1, #a855f7, #ec4899, #f59e0b)",
                animation: "rotate 5s linear infinite",
                zIndex: 1,
              }}
            />

            {/* Pulsing Ring */}
            <div
              className="pulsing-ring"
              style={{
                position: "absolute",
                top: "-25px",
                left: "-25px",
                right: "-25px",
                bottom: "-25px",
                borderRadius: "50%",
                border: "2px solid rgba(99, 102, 241, 0.4)",
                animation: "pulse 2s ease-in-out infinite",
                zIndex: 0,
              }}
            />

            {/* Inner Glow Ring */}
            <div
              style={{
                position: "absolute",
                top: "-5px",
                left: "-5px",
                right: "-5px",
                bottom: "-5px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
                animation: "pulse 3s ease-in-out infinite alternate",
                zIndex: 1,
              }}
            />

            {/* Profile Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                border: "6px solid #000000",
                boxShadow: "0 0 60px rgba(99, 102, 241, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.3)",
                zIndex: 2,
              }}
            >
              <img
                src={profileImageUrl}
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) e.target.style.transform = "scale(1)";
                }}
              />
            </div>

            {/* Orbiting Tech Logo Icons */}
            {techStack.map((tech, i) => {
              const orbitDuration = 20;
              const radius = isMobile ? 150 : 180;
              
              return (
                <div
                  key={tech.name}
                  className="tech-logo-orbit"
                  style={{
                    position: "absolute",
                    width: isMobile ? "45px" : "55px",
                    height: isMobile ? "45px" : "55px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    animation: `orbit ${orbitDuration}s linear infinite`,
                    animationDelay: `${-(i * orbitDuration) / techStack.length}s`,
                    zIndex: 3,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "rgba(0, 0, 0, 0.6)",
                      backdropFilter: "blur(10px)",
                      border: `2px solid ${tech.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 20px ${tech.color}60, inset 0 0 10px rgba(0, 0, 0, 0.5)`,
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = "scale(1.3)";
                        e.currentTarget.style.boxShadow = `0 0 30px ${tech.color}, inset 0 0 15px rgba(0, 0, 0, 0.5)`;
                        e.currentTarget.parentElement.style.animationPlayState = "paused";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}60, inset 0 0 10px rgba(0, 0, 0, 0.5)`;
                        e.currentTarget.parentElement.style.animationPlayState = "running";
                      }
                    }}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      style={{
                        width: isMobile ? "28px" : "35px",
                        height: isMobile ? "28px" : "35px",
                        objectFit: "contain",
                        filter: tech.name === "Express" || tech.name === "GitHub" ? "invert(1)" : "none",
                      }}
                    />
                  </div>
                </div>
              );
            })}

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * Math.PI * 2) / 8;
              const radius = isMobile ? 140 : 170;
              return (
                <div
                  key={i}
                  className="floating-particle"
                  style={{
                    position: "absolute",
                    width: isMobile ? "8px" : "10px",
                    height: isMobile ? "8px" : "10px",
                    borderRadius: "50%",
                    background: ["#6366f1", "#a855f7", "#ec4899", "#f59e0b"][i % 4],
                    top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                    left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                    animation: `floatParticle ${2 + (i * 0.3)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                    boxShadow: "0 0 15px currentColor",
                    zIndex: 0,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              );
            })}

            {/* Orbiting Stars */}
            {!isMobile && [...Array(4)].map((_, i) => {
              const angle = (i * Math.PI * 2) / 4;
              const radius = 160;
              return (
                <div
                  key={`star-${i}`}
                  className="orbiting-star"
                  style={{
                    position: "absolute",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                    left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                    animation: `orbitStar 8s linear infinite`,
                    animationDelay: `${i * 2}s`,
                    boxShadow: "0 0 10px #ffffff",
                    zIndex: 0,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Description */}
        <div
          className="description-section"
          ref={paraRef}
          style={{
            textAlign: "center",
            opacity: 0,
            transform: "translateY(30px)",
            transition: `all ${isMobile ? 0.8 : 1.2}s cubic-bezier(0.16, 1, 0.3, 1)`,
          }}
        >
          <p
            style={{
              fontSize: isMobile ? "clamp(1rem, 4vw, 1.2rem)" : "clamp(1.1rem, 2vw, 1.2rem)",
              color: "#d1d5db",
              maxWidth: isMobile ? "100%" : "700px",
              margin: "0 auto",
              lineHeight: "1.8",
              padding: isMobile ? "0 0.5rem" : "0",
            }}
          >
            I'm a{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "600",
              }}
            >
              Hizbullah Khalifa, a passionate Web Developer & Problem Solver.
            </span>{" "}
           I am currently studying Computer Science in University of Malakand (UOM). Besides, I am a Web Developer 💻 with a passion for coding and problem solving. Specializing in Javascript, Wix & Webflow I am also enthusiastic about Machine Learning and Artificial Intelligence. Tech Enthusiast & Constant Learner.....!! My approach combines technical expertise with creative problem-solving to deliver intuitive, high-performance web applications that users love.
          </p>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes rotateReverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.15); opacity: 0.8; }
        }

        @keyframes floatParticle {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) translateY(-20px); opacity: 1; }
        }

        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(${isMobile ? '150px' : '180px'}) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(${isMobile ? '150px' : '180px'}) rotate(-360deg);
          }
        }

        @keyframes orbitStar {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(160px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(160px) rotate(-360deg);
          }
        }

        .profile-container:hover .rotating-border {
          animation-duration: 2.5s;
        }

        .profile-container:hover .outer-ring {
          animation-duration: 1.5s;
        }

        .profile-container:hover .middle-ring {
          animation-duration: 2s;
        }

        @media (max-width: 768px) {
          .about-section { padding: 3rem 0 !important; }
          .about-content { padding: 0 1rem !important; }
          .title-section { margin-bottom: 2rem !important; }
        }

        @media (max-width: 480px) {
          .about-section { padding: 2rem 0 !important; }
          .about-content { padding: 0 0.5rem !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;