'use client'
import { useState, useEffect } from 'react'
import { useWindowSize } from '@/hooks/useWindowSize'

export default function Nav({ footer }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isMobile } = useWindowSize()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { href: '#menu',      label: 'Menu' },
    { href: '#about',     label: 'Our Story' },
    { href: '#locations', label: 'Locations' },
    { href: '#locations', label: 'Catering' },
  ]

  const navBg = scrolled || menuOpen
    ? 'rgba(255,255,225,.97)'
    : 'var(--cr)'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
        height: isMobile ? 60 : 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: isMobile ? '0 20px' : '0 56px',
        background: navBg,
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: '1px solid rgba(90,53,48,.1)',
        boxShadow: scrolled ? '0 2px 28px rgba(90,53,48,.1)' : 'none',
        transition: 'all .4s',
      }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo-color-horizontal.png"
            alt="KÜL Café & Co."
            style={{ height: isMobile ? 26 : 32, width: 'auto' }}
          />
        </a>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {links.map((l, i) => (
              <a key={i} href={l.href} style={{
                fontSize: 11, letterSpacing: '2.5px', textTransform: 'uppercase',
                color: 'var(--brd)', opacity: .5, fontWeight: 500, transition: 'opacity .2s',
              }}
              onMouseEnter={e => e.target.style.opacity = 1}
              onMouseLeave={e => e.target.style.opacity = .5}
              >{l.label}</a>
            ))}
          </div>
        )}

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {!isMobile && (
            <a href={footer?.uber_eats || '#'} target="_blank" rel="noopener noreferrer"
              style={{
                background: 'var(--brd)', color: 'var(--cr)',
                fontFamily: "'Bebas Neue', sans-serif", fontSize: 14, letterSpacing: '2px',
                padding: '9px 22px', borderRadius: 6, transition: 'background .2s',
              }}
              onMouseEnter={e => e.target.style.background = 'var(--br)'}
              onMouseLeave={e => e.target.style.background = 'var(--brd)'}
            >Order Now</a>
          )}

          {/* Hamburger */}
          {isMobile && (
            <button onClick={() => setMenuOpen(o => !o)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 6, display: 'flex', flexDirection: 'column',
              gap: 5, alignItems: 'center', justifyContent: 'center',
            }}>
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: 'block', width: 22, height: 2,
                  background: 'var(--brd)', borderRadius: 2,
                  transition: 'all .3s',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                    : i === 2 ? 'rotate(-45deg) translate(5px,-5px)'
                    : 'scaleX(0)'
                    : 'none',
                }} />
              ))}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0, zIndex: 299,
          background: 'var(--cr)',
          borderBottom: '1px solid rgba(90,53,48,.1)',
          padding: menuOpen ? '20px 24px 28px' : '0 24px',
          maxHeight: menuOpen ? 400 : 0,
          overflow: 'hidden',
          transition: 'all .35s var(--ease)',
          boxShadow: menuOpen ? '0 8px 32px rgba(90,53,48,.12)' : 'none',
        }}>
          {links.map((l, i) => (
            <a key={i} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                fontSize: 13, letterSpacing: '2.5px', textTransform: 'uppercase',
                color: 'var(--brd)', fontWeight: 700, padding: '14px 0',
                borderBottom: '1px solid rgba(90,53,48,.08)',
              }}
            >{l.label}</a>
          ))}
          <a href={footer?.uber_eats || '#'} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'block', marginTop: 18, textAlign: 'center',
              background: 'var(--y)', color: 'var(--brd)',
              fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: '2px',
              padding: '14px', borderRadius: 8,
            }}
          >🛵 Order Now</a>
        </div>
      )}
    </>
  )
}
