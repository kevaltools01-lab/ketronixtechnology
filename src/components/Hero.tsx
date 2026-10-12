'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const tagRef = useRef<HTMLParagraphElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo(lineRef.current,
      { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'power3.out' })
      .fromTo(tagRef.current,
        { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
      .fromTo(headingRef.current,
        { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.2')
      .fromTo(subRef.current,
        { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
      .fromTo(btnRef.current,
        { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .fromTo(statsRef.current,
        { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F5F6FA 0%, #FFFFFF 50%, #EEF0FA 100%)',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: '75px'
    }}>

      {/* Background Pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(43,57,144,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(43,57,144,0.04) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Blue accent shape */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '40%', height: '100%',
        background: 'linear-gradient(135deg, transparent 40%, rgba(43,57,144,0.05) 100%)',
        pointerEvents: 'none'
      }} />

      {/* Green glow bottom left */}
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(57,181,74,0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Blue glow top right */}
      <div style={{
        position: 'absolute', top: '10%', right: '5%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(43,57,144,0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Content */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '4rem 2rem', position: 'relative', zIndex: 1,
        width: '100%'
      }}>

        {/* Top accent line */}
        <div ref={lineRef} style={{
          width: '80px', height: '4px',
          background: 'linear-gradient(90deg, #2B3990, #39B54A)',
          marginBottom: '1.5rem',
          transformOrigin: 'left'
        }} />

        {/* Tag line */}
        <p ref={tagRef} style={{
          color: '#39B54A',
          fontSize: '0.85rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          marginBottom: '1.2rem',
          fontWeight: 700
        }}>
          Precision Machinery Components · Customized Engineering Solutions
        </p>

        {/* Main Heading */}
        <h1 ref={headingRef} style={{
          fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          color: '#1A1A2E',
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em'
        }}>
          ENGINEERING<br />
          <span style={{ color: '#2B3990' }}>BEYOND </span>
          <span style={{ color: '#39B54A' }}>REQUIREMENTS</span>
        </h1>

        {/* Sub text */}
        <p ref={subRef} style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: '#4A4A6A',
          maxWidth: '580px',
          lineHeight: 1.8,
          marginBottom: '2.5rem',
          fontWeight: 400
        }}>
          From Requirement to Reality. We transform customer drawings,
          samples and ideas into reliable precision-engineered components.
        </p>

        {/* Buttons */}
        <div ref={btnRef} style={{
          display: 'flex', gap: '1rem', flexWrap: 'wrap',
          marginBottom: '4rem'
        }}>
          <a href="/contact" style={{
            background: '#2B3990', color: 'white',
            padding: '1rem 2.5rem',
            textDecoration: 'none',
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 700,
            transition: 'all 0.3s',
            display: 'inline-block',
            border: '2px solid #2B3990'
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#39B54A'
              e.currentTarget.style.borderColor = '#39B54A'
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(57,181,74,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#2B3990'
              e.currentTarget.style.borderColor = '#2B3990'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
            Get A Quote →
          </a>

          <a href="/capabilities" style={{
            background: 'transparent',
            border: '2px solid #2B3990',
            color: '#2B3990',
            padding: '1rem 2.5rem',
            textDecoration: 'none',
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 700,
            transition: 'all 0.3s',
            display: 'inline-block'
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#2B3990'
              e.currentTarget.style.color = 'white'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#2B3990'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
            Our Capabilities
          </a>
        </div>

        {/* Stats */}
        <div ref={statsRef} style={{
          display: 'flex', gap: '0',
          flexWrap: 'wrap',
          borderTop: '1px solid #EAECF4',
          paddingTop: '2.5rem'
        }}>
          {[
            { number: '500+', label: 'Components Delivered', color: '#2B3990' },
            { number: '100%', label: 'Custom Manufacturing', color: '#39B54A' },
            { number: '0', label: 'Compromise on Quality', color: '#2B3990' },
          ].map((stat, i) => (
            <div key={stat.label} style={{
              paddingRight: '3rem',
              marginRight: '3rem',
              borderRight: i < 2 ? '1px solid #EAECF4' : 'none'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: stat.color,
                lineHeight: 1,
                letterSpacing: '-0.02em'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '0.78rem',
                color: '#7A7A9A',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginTop: '0.4rem',
                fontWeight: 600
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side decorative element */}
      <div style={{
        position: 'absolute', right: '5%', top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', gap: '1rem',
        opacity: 0.6
      }}>
        {['PRECISION', 'QUALITY', 'RELIABILITY', 'INNOVATION'].map((word, i) => (
          <div key={word} style={{
            color: i % 2 === 0 ? '#2B3990' : '#39B54A',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            fontWeight: 700,
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}>
            {word}
          </div>
        ))}
      </div>
    </section>
  )
}