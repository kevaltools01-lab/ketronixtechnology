'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { num: '01', title: 'REQUIREMENT', desc: 'We listen, understand and identify the actual need.', color: '#2B3990' },
  { num: '02', title: 'ENGINEERING', desc: 'We evaluate the drawing, sample, specification and application.', color: '#39B54A' },
  { num: '03', title: 'MATERIAL', desc: 'We consider the right material and manufacturing requirements.', color: '#2B3990' },
  { num: '04', title: 'MANUFACTURING', desc: 'We focus on precision, consistency and process control.', color: '#39B54A' },
  { num: '05', title: 'QUALITY', desc: 'We verify critical dimensions and required specifications.', color: '#2B3990' },
  { num: '06', title: 'DELIVERY', desc: 'Quality is incomplete without delivery as promised.', color: '#39B54A' },
  { num: '07', title: 'RESULT', desc: 'A component that is ready to perform.', color: '#2B3990' },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.process-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.process-grid',
            start: 'top 75%'
          }
        })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={{
      background: '#F5F6FA',
      padding: '6rem 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          width: '60px', height: '4px',
          background: 'linear-gradient(90deg, #2B3990, #39B54A)',
          marginBottom: '1.5rem'
        }} />

        <p style={{
          color: '#39B54A', fontSize: '0.85rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          fontWeight: 700, marginBottom: '1rem'
        }}>
          Our Process
        </p>

        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 900, color: '#1A1A2E',
          lineHeight: 1.1, marginBottom: '1rem',
          letterSpacing: '-0.02em'
        }}>
          FROM <span style={{ color: '#2B3990' }}>REQUIREMENT</span>{' '}
          TO <span style={{ color: '#39B54A' }}>REALITY</span>
        </h2>

        <p style={{
          color: '#4A4A6A', fontSize: '1.05rem',
          maxWidth: '600px', lineHeight: 1.8,
          marginBottom: '4rem'
        }}>
          Every component we manufacture follows a disciplined process 
          designed to deliver precision, quality and reliability.
        </p>

        {/* Process Steps */}
        <div className="process-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '0',
          marginBottom: '4rem',
          overflowX: 'auto'
        }}>
          {steps.map((step, i) => (
            <div key={step.num} className="process-card" style={{
              position: 'relative',
              padding: '2rem 1rem',
              borderTop: `4px solid ${step.color}`,
              background: 'white',
              borderRight: i < steps.length - 1 ? '1px solid #EAECF4' : 'none',
              textAlign: 'center',
              transition: 'all 0.3s'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = step.color
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.15)`
                const children = e.currentTarget.querySelectorAll('p, div')
                children.forEach((child: Element) => {
                  (child as HTMLElement).style.color = 'white'
                })
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'white'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                const children = e.currentTarget.querySelectorAll('p, div')
                children.forEach((child: Element) => {
                  (child as HTMLElement).style.color = ''
                })
              }}>
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute', right: '-8px', top: '50%',
                  transform: 'translateY(-50%)',
                  color: step.color, fontSize: '1rem',
                  zIndex: 1, fontWeight: 900
                }}>→</div>
              )}
              <div style={{
                fontSize: '0.75rem', fontWeight: 800,
                color: step.color, letterSpacing: '0.15em',
                marginBottom: '0.8rem'
              }}>
                {step.num}
              </div>
              <div style={{
                fontSize: '0.75rem', fontWeight: 900,
                color: '#1A1A2E', letterSpacing: '0.1em',
                marginBottom: '0.8rem', textTransform: 'uppercase'
              }}>
                {step.title}
              </div>
              <p style={{
                fontSize: '0.75rem', color: '#7A7A9A',
                lineHeight: 1.6
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          background: '#2B3990',
          padding: '3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div>
            <h3 style={{
              color: 'white', fontSize: '1.5rem',
              fontWeight: 900, marginBottom: '0.5rem'
            }}>
              YOUR REQUIREMENT. OUR RESPONSIBILITY.
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>
              Share your drawing, sample or requirement with us today.
            </p>
          </div>
          <a href="/contact" style={{
            background: '#39B54A', color: 'white',
            padding: '1rem 2.5rem', textDecoration: 'none',
            fontSize: '0.9rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', fontWeight: 700,
            transition: 'all 0.3s', whiteSpace: 'nowrap'
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'white'}
            onMouseLeave={e => e.currentTarget.style.background = '#39B54A'}>
            Start Your Requirement →
          </a>
        </div>
      </div>
    </section>
  )
}