'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-line',
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, scrollTrigger: {
          trigger: '.about-line', start: 'top 80%'
        }})
      gsap.fromTo('.about-tag',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, scrollTrigger: {
          trigger: '.about-tag', start: 'top 80%'
        }})
      gsap.fromTo('.about-heading',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: {
          trigger: '.about-heading', start: 'top 80%'
        }})
      gsap.fromTo('.about-text',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.2, scrollTrigger: {
          trigger: '.about-text', start: 'top 80%'
        }})
      gsap.fromTo('.value-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, scrollTrigger: {
          trigger: '.value-card', start: 'top 80%'
        }})
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={{
      background: 'white',
      padding: '6rem 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Top */}
        <div className="about-line" style={{
          width: '60px', height: '4px',
          background: 'linear-gradient(90deg, #2B3990, #39B54A)',
          marginBottom: '1.5rem',
          transformOrigin: 'left'
        }} />

        <p className="about-tag" style={{
          color: '#39B54A', fontSize: '0.85rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          fontWeight: 700, marginBottom: '1rem'
        }}>
          Who We Are
        </p>

        <h2 className="about-heading" style={{
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 900, color: '#1A1A2E',
          lineHeight: 1.1, marginBottom: '2rem',
          letterSpacing: '-0.02em'
        }}>
          ENGINEERING THAT<br />
          <span style={{ color: '#2B3990' }}>UNDERSTANDS</span> YOUR{' '}
          <span style={{ color: '#39B54A' }}>REQUIREMENT</span>
        </h2>

        {/* Two column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '4rem'
        }}>
          <div>
            <p className="about-text" style={{
              color: '#4A4A6A', lineHeight: 1.9,
              fontSize: '1.05rem', marginBottom: '1.5rem'
            }}>
              Every machine has a purpose. Every component has a responsibility. 
              Every dimension matters.
            </p>
            <p className="about-text" style={{
              color: '#4A4A6A', lineHeight: 1.9,
              fontSize: '1.05rem', marginBottom: '1.5rem'
            }}>
              At KETRONIX TECHNOLOGY, we believe manufacturing begins 
              <strong style={{ color: '#2B3990' }}> before production</strong> — with understanding.
            </p>
            <p className="about-text" style={{
              color: '#4A4A6A', lineHeight: 1.9,
              fontSize: '1.05rem'
            }}>
              Whether you provide a drawing, sample, specification or simply a requirement, 
              our approach is to understand the application and expectations before 
              moving toward production.
            </p>
          </div>

          <div>
            {/* Philosophy box */}
            <div style={{
              background: '#F5F6FA',
              borderLeft: '4px solid #2B3990',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <p style={{
                color: '#1A1A2E', fontWeight: 800,
                fontSize: '1.1rem', letterSpacing: '0.05em',
                lineHeight: 1.8
              }}>
                Right Understanding.<br />
                Right Engineering.<br />
                Right Manufacturing.<br />
                Right Delivery.
              </p>
            </div>

            <div style={{
              background: '#2B3990',
              padding: '2rem',
              color: 'white'
            }}>
              <p style={{
                fontSize: '1.1rem', fontWeight: 700,
                lineHeight: 1.7, fontStyle: 'italic'
              }}>
                "To turn industrial requirements into reliable engineering solutions."
              </p>
              <p style={{
                marginTop: '1rem', fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '0.1em', textTransform: 'uppercase'
              }}>
                — Our Purpose
              </p>
            </div>
          </div>
        </div>

        {/* 4 Values */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem'
        }}>
          {[
            { num: '01', title: 'On-Time Delivery', desc: 'Promise Made. Delivery Respected.', color: '#2B3990' },
            { num: '02', title: 'Innovation', desc: 'There Is Always A Better Way.', color: '#39B54A' },
            { num: '03', title: 'Quality', desc: 'Precision In Every Component.', color: '#2B3990' },
            { num: '04', title: 'Integrity', desc: 'Say What We Will Do. Do What We Say.', color: '#39B54A' },
          ].map(value => (
            <div key={value.num} className="value-card" style={{
              padding: '2rem',
              border: '1px solid #EAECF4',
              borderTop: `4px solid ${value.color}`,
              transition: 'all 0.3s',
              cursor: 'default'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 10px 40px rgba(43,57,144,0.1)`
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
              <div style={{
                fontSize: '0.75rem', fontWeight: 800,
                color: value.color, letterSpacing: '0.2em',
                marginBottom: '0.8rem'
              }}>
                {value.num}
              </div>
              <div style={{
                fontSize: '1rem', fontWeight: 800,
                color: '#1A1A2E', marginBottom: '0.5rem'
              }}>
                {value.title}
              </div>
              <div style={{
                fontSize: '0.85rem', color: '#7A7A9A',
                lineHeight: 1.6
              }}>
                {value.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}