'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,1)',
      borderBottom: scrolled ? '2px solid #2B3990' : '2px solid #EAECF4',
      backdropFilter: 'blur(10px)',
      padding: '0 2rem',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      height: '75px',
      boxShadow: scrolled ? '0 2px 20px rgba(43,57,144,0.1)' : 'none',
      transition: 'all 0.3s'
    }}>

      {/* Logo */}
      <Link href="/">
        <Image
          src="/images/logo.jpeg"
          alt="Ketronix Technology"
          width={180} height={55}
          style={{ objectFit: 'contain' }}
        />
      </Link>

      {/* Desktop Menu */}
      <div style={{
        display: 'flex', gap: '2rem',
        alignItems: 'center'
      }}>
        {[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Capabilities', href: '/capabilities' },
          { label: 'Process', href: '/process' },
          { label: 'Why Us', href: '/why-us' },
          { label: 'Contact', href: '/contact' },
        ].map(item => (
          <Link key={item.label} href={item.href} style={{
            color: '#1A1A2E',
            textDecoration: 'none',
            fontSize: '0.88rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontWeight: 600,
            transition: 'color 0.3s',
            position: 'relative',
            paddingBottom: '4px',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#2B3990'}
            onMouseLeave={e => e.currentTarget.style.color = '#1A1A2E'}>
            {item.label}
          </Link>
        ))}

        {/* CTA Button */}
        <Link href="/contact" style={{
          background: '#2B3990',
          color: 'white',
          padding: '0.6rem 1.5rem',
          textDecoration: 'none',
          fontSize: '0.85rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontWeight: 700,
          borderRadius: '2px',
          transition: 'all 0.3s',
          border: '2px solid #2B3990',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#39B54A'
            e.currentTarget.style.borderColor = '#39B54A'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#2B3990'
            e.currentTarget.style.borderColor = '#2B3990'
          }}>
          Get Quote
        </Link>
      </div>

      {/* Mobile Button */}
      <button onClick={() => setOpen(!open)} style={{
        display: 'none',
        background: 'none', border: 'none',
        color: '#1A1A2E', fontSize: '1.5rem',
        cursor: 'pointer'
      }} className="mobile-btn">
        {open ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          position: 'fixed', top: '75px',
          left: 0, right: 0,
          background: 'white',
          padding: '1.5rem 2rem',
          borderBottom: '3px solid #2B3990',
          boxShadow: '0 10px 30px rgba(43,57,144,0.1)',
          display: 'flex', flexDirection: 'column', gap: '1rem'
        }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Capabilities', href: '/capabilities' },
            { label: 'Process', href: '/process' },
            { label: 'Why Us', href: '/why-us' },
            { label: 'Contact', href: '/contact' },
          ].map(item => (
            <Link key={item.label} href={item.href}
              onClick={() => setOpen(false)}
              style={{
                color: '#1A1A2E',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                padding: '0.7rem 0',
                borderBottom: '1px solid #EAECF4',
              }}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact"
            onClick={() => setOpen(false)}
            style={{
              background: '#2B3990', color: 'white',
              padding: '0.8rem 1.5rem', textAlign: 'center',
              textDecoration: 'none', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.08em',
              marginTop: '0.5rem'
            }}>
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  )
}