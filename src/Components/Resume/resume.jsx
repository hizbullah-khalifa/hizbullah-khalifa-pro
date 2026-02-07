import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, Award, ExternalLink } from 'lucide-react';
const videoWebM = '/Rainbow_Nebula_4K_Motion_Background.webm';

const Resume = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      degree: 'Matriculation (SSC)',
      year: '2016 - 2020',
      institution: 'Govt Higher School, Timergara',
    },
    {
      degree: 'Intermediate (HSSC)',
      year: '2020 - 2022',
      institution: 'Govt Higher Secondary School Saddo, Timergara',
    },
    {
      degree: 'Bachelor (BSCS)',
      year: '2022 - 2026',
      institution: 'University Of Malakand, KPK',
    },
  ];

  const experienceData = [
    {
      position: 'Fiverr',
      duration: 'August 2022 - Jan 2023',
      company: 'Web & Webflow Dev',
    },
    {
      position: 'Frontend Developer',
      duration: 'Feb 2023 - June 2024',
      company: 'Programmer Tech | Internship',
    },
    {
      position: 'Self-Employed',
      duration: 'October 2024 -   July 2025',
      company: '(Remote)',
    },
       {
      position: 'Web Developer & Web Instructor',
      duration: 'Nov 2025 - Present',
      company: 'Lewal Technologies | Internship',
    },
  ];

  const certificationsData = [
      { 
      title: 'Freelancing', 
      issuer: 'DigiSkills.pk', 
      year: '2023',
      link: 'https://drive.google.com/file/d/1bS_3Y6aQ5QBOErxz7dHSxfLaO9Y5Uujl/view'
    },
    { 
      title: 'Responsive Web Design', 
      issuer: 'freeCodeCamp', 
      year: '2024',
      link: 'https://drive.google.com/file/d/1K5qFuA6DNDmCaA6RcT7ZuilTLdp78dwE/view'
    },
    { 
      title: 'Communication & Soft Skills ', 
      issuer: 'DigiSkills.pk', 
      year: '2024',
      link: 'https://drive.google.com/file/d/1WYozVZjwsWTfv_cDviuVjluEIa-Mrnqn/view' 
    },
    { 
      title: 'Front End Development Libraries', 
      issuer: 'freeCodeCamp', 
      year: '2024',
      link: 'https://drive.google.com/file/d/1hJai5ly904a6yhjqXWjRJErkJVNMwivI/view'
    },
    { 
      title: 'Front End', 
      issuer: 'Udemy', 
      year: '2024',
      link: 'https://drive.google.com/file/d/1M99bkZAjGxH8dG3emrZxNoPuycPvuSTN/view'
    },
        { 
      title: 'UI & UX', 
      issuer: 'Great Learning', 
      year: '2024',
      link: 'https://drive.google.com/file/d/1_5xeEzXmW_BBMbu8raTQ3I97LD8xPCPN/view'
    },
        { 
      title: 'HTML5 Application Development', 
      issuer: 'W3C', 
      year: '2024',
      link: ''
    },
    { 
      title: 'JavaScript Algorithms & Data Structures', 
      issuer: 'freeCodeCamp', 
      year: '2024',
      link: 'https://www.freecodecamp.org/certification/hizbullahkhalifa/javascript-algorithms-and-data-structures-v8'
    },
     { 
      title: 'Great Learning', 
      issuer: 'SQL', 
      year: '2024',
      link: 'https://drive.google.com/file/d/1TWzQgZ0pC7zeHNfyUjBOS5ra26C03NG_/view'
    },
         { 
      title: 'JavaScript Fundamentals', 
      issuer: 'GreatStack', 
      year: '2025',
      link: 'https://drive.google.com/file/d/1jglAx73Wvhc7Kc4HxzUsAThfwQInE_ZD/view'
    },
        { 
      title: 'Delta Full Stack', 
      issuer: 'Apna College', 
      year: '2025',
      link: ''
    },
       { 
      title: 'Problem Solving', 
      issuer: 'HackerRank', 
      year: '2025',
      link: ''
    },
    
  ];

  // Function to handle certificate button click
  const handleCertificateClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const TimelineItem = ({ data, index, type }) => (
    <div
      style={{
        position: 'relative',
        paddingLeft: isMobile ? '2.5rem' : '3rem',
        paddingBottom: '2.5rem',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s ease ${index * 0.15}s`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '0.5rem',
          width: isMobile ? '2.5rem' : '3rem',
          height: isMobile ? '2.5rem' : '3rem',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366f1, #a855f7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
          zIndex: 2,
        }}
      >
        {type === 'education' ? (
          <GraduationCap size={isMobile ? 16 : 18} color="#ffffff" />
        ) : (
          <Briefcase size={isMobile ? 16 : 18} color="#ffffff" />
        )}
      </div>

      <div
        style={{
          background: 'rgba(30, 20, 60, 0.3)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          borderRadius: '12px',
          padding: isMobile ? '1.25rem' : '1.5rem',
          transition: 'all 0.3s ease',
          cursor: 'default',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = 'translateX(8px)';
            e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.6)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.3)';
            e.currentTarget.style.background = 'rgba(50, 30, 80, 0.5)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.2)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
            e.currentTarget.style.background = 'rgba(30, 20, 60, 0.3)';
          }
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? '1.1rem' : '1.25rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '0.5rem',
          }}
        >
          {type === 'education' ? data.degree : data.position}
        </h3>
        <p
          style={{
            fontSize: isMobile ? '0.85rem' : '0.9rem',
            background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '0.4rem',
            fontWeight: '500',
          }}
        >
          {type === 'education' ? data.year : data.duration}
        </p>
        <p
          style={{
            fontSize: isMobile ? '0.85rem' : '0.9rem',
            color: '#e5e7eb',
          }}
        >
          {type === 'education' ? data.institution : data.company}
        </p>
      </div>

      {index < (type === 'education' ? educationData : experienceData).length - 1 && (
        <div
          style={{
            position: 'absolute',
            left: isMobile ? '1.2rem' : '1.45rem',
            top: isMobile ? '3rem' : '3.5rem',
            width: '2px',
            height: 'calc(100% - 2rem)',
            background: 'linear-gradient(to bottom, rgba(99, 102, 241, 0.6), rgba(168, 85, 247, 0.2))',
            zIndex: 1,
          }}
        />
      )}
    </div>
  );

  const CertificationCard = ({ data, index }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    
    return (
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1) rotateY(0deg)' : 'scale(0.9) rotateY(-10deg)',
          transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s`,
        }}
      >
        <div
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(15, 10, 35, 0.7), rgba(30, 20, 60, 0.7))',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: isHovered ? '2px solid rgba(168, 85, 247, 0.5)' : '2px solid rgba(99, 102, 241, 0.2)',
            borderRadius: '20px',
            padding: isMobile ? '1.5rem' : '2rem',
            transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            cursor: 'pointer',
            overflow: 'hidden',
            transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
            boxShadow: isHovered 
              ? '0 25px 50px rgba(99, 102, 241, 0.4), inset 0 0 80px rgba(168, 85, 247, 0.1)' 
              : '0 10px 30px rgba(0, 0, 0, 0.4)',
          }}
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
          {/* Animated mesh gradient background */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: isHovered ? 0.6 : 0.3,
              background: `
                radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)
              `,
              filter: 'blur(40px)',
              transition: 'opacity 0.5s ease',
              animation: isHovered ? 'meshMove 8s ease-in-out infinite' : 'none',
            }}
          />

          {/* Top decorative elements */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Certificate number/badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '6px 12px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                  boxShadow: '0 0 10px rgba(99, 102, 241, 0.8)',
                  animation: isHovered ? 'pulse 1.5s ease-in-out infinite' : 'none',
                }}
              />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: '#c7d2fe',
                  letterSpacing: '0.5px',
                }}
              >
                #{String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Status badge */}
            <div
              style={{
                padding: '5px 12px',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(22, 163, 74, 0.2))',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 8px #22c55e',
                }}
              />
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  color: '#86efac',
                }}
              >
                VERIFIED
              </span>
            </div>
          </div>

          {/* Main content container */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Icon and title section */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              {/* Hexagon icon container */}
              <div
                style={{
                  position: 'relative',
                  width: isMobile ? '3.5rem' : '4rem',
                  height: isMobile ? '3.5rem' : '4rem',
                  flexShrink: 0,
                }}
              >
                {/* Outer rotating hexagon */}
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                    animation: isHovered ? 'rotateHex 4s linear infinite' : 'none',
                    opacity: 0.5,
                  }}
                />
                {/* Inner icon container */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '4px',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(236, 72, 153, 0.9))',
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isHovered ? '0 0 30px rgba(99, 102, 241, 0.6)' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Award 
                    size={isMobile ? 18 : 22} 
                    color="#ffffff" 
                    strokeWidth={2.5}
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                    }}
                  />
                </div>
              </div>

              {/* Title and subtitle */}
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    fontSize: isMobile ? '1.1rem' : '1.25rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    lineHeight: 1.3,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {data.title}
                </h4>
                <p
                  style={{
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    color: '#9ca3af',
                    fontWeight: '500',
                  }}
                >
                  {data.issuer}
                </p>
              </div>
            </div>

            {/* Bottom info bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem',
                background: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '12px',
                border: '1px solid rgba(99, 102, 241, 0.1)',
              }}
            >
              {/* Year */}
              <div>
                <p
                  style={{
                    fontSize: '0.7rem',
                    color: '#9ca3af',
                    marginBottom: '0.2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  Issued
                </p>
                <p
                  style={{
                    fontSize: isMobile ? '0.95rem' : '1rem',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {data.year}
                </p>
              </div>

              {/* View credential button */}
              <button
                onClick={() => handleCertificateClick(data.link)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '8px 16px',
                  background: isHovered 
                    ? 'linear-gradient(135deg, #6366f1, #a855f7)' 
                    : 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
                  fontFamily: 'inherit',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: isHovered ? '#ffffff' : '#a855f7',
                  outline: 'none',
                }}
                onMouseEnter={() => !isMobile && setIsHovered(true)}
                onMouseLeave={() => !isMobile && setIsHovered(false)}
                aria-label={`View ${data.title} certificate on GitHub`}
              >
                View
                <ExternalLink size={14} />
              </button>
            </div>
          </div>

          {/* Corner accent lines */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, #6366f1, transparent)',
              opacity: isHovered ? 1 : 0.5,
              transition: 'all 0.3s ease',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '2px',
              height: '60px',
              background: 'linear-gradient(180deg, #6366f1, transparent)',
              opacity: isHovered ? 1 : 0.5,
              transition: 'all 0.3s ease',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '60px',
              height: '2px',
              background: 'linear-gradient(270deg, #ec4899, transparent)',
              opacity: isHovered ? 1 : 0.5,
              transition: 'all 0.3s ease',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '2px',
              height: '60px',
              background: 'linear-gradient(0deg, #ec4899, transparent)',
              opacity: isHovered ? 1 : 0.5,
              transition: 'all 0.3s ease',
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      id="Resume"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: isMobile ? '4rem 1rem' : '6rem 2rem',
        background: '#000000',
        overflow: 'hidden',
      }}
    >
      {/* Video Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          loading="lazy"
          style={{
            width: isMobile ? '100%' : '120%',
            height: isMobile ? '100%' : '120%',
            objectFit: 'cover',
            filter: `brightness(${isMobile ? 0.4 : 0.3}) contrast(1.1)`,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            willChange: isMobile ? 'auto' : 'transform',
          }}
          aria-hidden="true"
        >
          <source src={videoWebM} type="video/webm" />
          <track kind="captions" srcLang="en" label="Background video" />
        </video>
      </div>

      {/* Vibrant Nebula/Galaxy Background Effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(ellipse at 15% 20%, rgba(255, 0, 150, 0.4) 0%, transparent 40%),
            radial-gradient(ellipse at 85% 80%, rgba(0, 255, 200, 0.3) 0%, transparent 40%),
            radial-gradient(ellipse at 70% 30%, rgba(100, 0, 255, 0.35) 0%, transparent 45%),
            radial-gradient(ellipse at 30% 70%, rgba(255, 100, 0, 0.3) 0%, transparent 40%),
            radial-gradient(ellipse at 50% 50%, rgba(0, 150, 255, 0.25) 0%, transparent 50%)
          `,
          filter: 'blur(80px)',
          opacity: 0.7,
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Additional Color Layers */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 40% 40%, rgba(138, 43, 226, 0.25) 0%, transparent 30%),
            radial-gradient(circle at 60% 60%, rgba(255, 20, 147, 0.25) 0%, transparent 30%)
          `,
          filter: 'blur(100px)',
          opacity: 0.6,
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Animated Grid Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(rgba(99, 102, 241, ${isMobile ? 0.03 : 0.08}) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, ${isMobile ? 0.03 : 0.08}) 1px, transparent 1px)`,
          backgroundSize: isMobile ? '30px 30px' : '40px 40px',
          zIndex: 2,
          animation: isMobile ? 'none' : 'gridMove 20s linear infinite',
        }}
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%)',
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      <div
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '3rem' : '4rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.6s ease',
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? '2rem' : '2.5rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '1rem',
            }}
          >
            My{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Journey
            </span>
          </h2>
          <p
            style={{
              fontSize: isMobile ? '0.95rem' : '1.05rem',
              color: '#e5e7eb',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Education, Experience & Professional Certifications
          </p>
        </div>

        {/* Two Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '3rem' : '4rem',
            marginBottom: isMobile ? '3rem' : '5rem',
          }}
        >
          {/* Education Column */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2rem',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 0.6s ease 0.2s',
              }}
            >
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(99, 102, 241, 0.4)',
                }}
              >
                <GraduationCap size={24} color="#ffffff" />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.5rem' : '1.75rem',
                  fontWeight: '600',
                  color: '#ffffff',
                }}
              >
                Education
              </h3>
            </div>
            {educationData.map((item, index) => (
              <TimelineItem key={index} data={item} index={index} type="education" />
            ))}
          </div>

          {/* Experience Column */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2rem',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                transition: 'all 0.6s ease 0.2s',
              }}
            >
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(168, 85, 247, 0.4)',
                }}
              >
                <Briefcase size={24} color="#ffffff" />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.5rem' : '1.75rem',
                  fontWeight: '600',
                  color: '#ffffff',
                }}
              >
                Experience
              </h3>
            </div>
            {experienceData.map((item, index) => (
              <TimelineItem key={index} data={item} index={index} type="experience" />
            ))}
          </div>
        </div>

        {/* Certifications Section - Premium Card Grid */}
        <div>
          <div
            style={{
              textAlign: 'center',
              marginBottom: '3rem',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.4s',
            }}
          >
            {/* Animated header badge */}
            <div
              style={{
                display: 'inline-block',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: isMobile ? '1rem 2rem' : '1.2rem 2.5rem',
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(236, 72, 153, 0.15))',
                  border: '2px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '50px',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div
                  style={{
                    width: isMobile ? '2.5rem' : '3rem',
                    height: isMobile ? '2.5rem' : '3rem',
                    background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.5)',
                  }}
                >
                  <Award size={isMobile ? 16 : 20} color="#ffffff" strokeWidth={2.5} />
                </div>
                <h3
                  style={{
                    fontSize: isMobile ? '1.5rem' : '1.9rem',
                    fontWeight: '800',
                    background: 'linear-gradient(135deg, #ffffff, #e0e7ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Certifications & Credentials
                </h3>
              </div>
            </div>
            
            <p
              style={{
                fontSize: isMobile ? '0.95rem' : '1.05rem',
                color: '#9ca3af',
                maxWidth: '650px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Industry-recognized certifications validating expertise in modern web technologies and professional development
            </p>
          </div>
          
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: isMobile ? '1.5rem' : '2rem',
            }}
          >
            {certificationsData.map((item, index) => (
              <CertificationCard key={index} data={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(40px, 40px); }
          }

          @keyframes rotateHex {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.2); }
          }

          @keyframes meshMove {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(20px, 20px); }
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              animation: none !important;
              transition: none !important;
            }
          }

          button {
            border: none;
            outline: none;
            font-family: inherit;
            background: none;
          }
        `}
      </style>
    </div>
  );
};

export default Resume;
