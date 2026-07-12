'use client'
import { useWindowSize } from '@/hooks/useWindowSize'

export function FinalCTA({ cta, footer }) {
  const { isMobile } = useWindowSize()
  return (
    <section style={{
      background: 'var(--y)',
      padding: isMobile ? '64px 24px' : 'clamp(64px,9vw,100px) clamp(24px,5vw,72px)',
      textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -30, left: '50%', transform: 'translateX(-50%)', fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 140 : 260, letterSpacing: -6, color: 'rgba(90,53,48,.06)', whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>KÜL</div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--brd)', opacity: .5, fontWeight: 700, marginBottom: 14 }}>{cta.eyebrow}</div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 64 : 'clamp(56px,9vw,104px)', color: 'var(--brd)', lineHeight: .88, letterSpacing: .5, marginBottom: 18 }}>
          {cta.title_line1}<br />{cta.title_line2}
        </h2>
        <p style={{ fontSize: isMobile ? 14 : 16, color: 'var(--brd)', opacity: .58, fontWeight: 300, marginBottom: 36, maxWidth: 400, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>{cta.subtitle}</p>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={footer.uber_eats} target="_blank" rel="noopener noreferrer"
            className="btn btn-dark"
            style={{ fontSize: isMobile ? 16 : 18, letterSpacing: '3px', padding: isMobile ? '14px 32px' : '16px 42px', justifyContent: 'center' }}>
            🛵 Order on Uber Eats
          </a>
          <a href="#menu"
            style={{ fontFamily: "'Bebas Neue', sans-serif", border: '2px solid var(--brd)', color: 'var(--brd)', background: 'transparent', fontSize: isMobile ? 16 : 18, letterSpacing: '3px', padding: isMobile ? '12px 28px' : '14px 36px', borderRadius: 8, opacity: .55, transition: 'opacity .2s', textAlign: 'center' }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = .55}
          >Ver Menú Completo</a>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter({ footer }) {
  const { isMobile } = useWindowSize()
  return (
    <footer style={{ background: 'var(--brd)', padding: isMobile ? '40px 20px 24px' : '60px clamp(24px,5vw,80px) 28px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : '2fr 1fr 1fr 1fr 1fr',
        gap: isMobile ? '28px 20px' : 48,
        marginBottom: isMobile ? 32 : 52,
      }}>
        {/* Brand — full width on mobile */}
        <div style={{ gridColumn: isMobile ? 'span 2' : 'span 1' }}>
          <img src="/logo-cream-horizontal.png" alt="KÜL Café" style={{ height: isMobile ? 28 : 34, width: 'auto', marginBottom: 8, opacity: .85 }} />
          <div style={{ fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--y)', marginBottom: 10 }}>{footer.tagline}</div>
          <div style={{ fontSize: 12, color: 'var(--cr)', opacity: .4, fontWeight: 300, lineHeight: 1.65, maxWidth: 230, marginBottom: 12 }}>{footer.copy}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--cr)', opacity: .5 }}>
            <span style={{ color: 'var(--y)', letterSpacing: 1 }}>★★★★★</span> {footer.rating}
          </div>
        </div>

        {/* Menu */}
        <div>
          <div style={{ fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--y)', fontWeight: 700, marginBottom: 12, opacity: .8 }}>Menu</div>
          {['Signature Lattes','Coffee Classics','Tropical Matchas','Breakfast','Sandwiches'].map(link => (
            <a key={link} href="#menu" style={{ display: 'block', fontSize: 12, color: 'var(--cr)', opacity: .5, padding: '4px 0', fontWeight: 300, transition: 'opacity .2s' }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = .5}
            >{link}</a>
          ))}
        </div>

        {/* Visit */}
        <div>
          <div style={{ fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--y)', fontWeight: 700, marginBottom: 12, opacity: .8 }}>Visit</div>
          {['Katy Location','Houston Location','Hours','Catering'].map((link, i) => (
            <a key={i} href="#locations" style={{ display: 'block', fontSize: 12, color: 'var(--cr)', opacity: .5, padding: '4px 0', fontWeight: 300, transition: 'opacity .2s' }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = .5}
            >{link}</a>
          ))}
        </div>

        {/* Order — hidden on mobile to save space */}
        {!isMobile && (
          <div>
            <div style={{ fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--y)', fontWeight: 700, marginBottom: 12, opacity: .8 }}>Order</div>
            <a href={footer.uber_eats} target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: 12, color: 'var(--cr)', opacity: .5, padding: '4px 0', fontWeight: 300, transition: 'opacity .2s' }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = .5}>Uber Eats</a>
            <a href={footer.doordash} target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: 12, color: 'var(--cr)', opacity: .5, padding: '4px 0', fontWeight: 300, transition: 'opacity .2s' }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = .5}>DoorDash</a>
            <a href="#locations" style={{ display: 'block', fontSize: 12, color: 'var(--cr)', opacity: .5, padding: '4px 0', fontWeight: 300 }}>Pickup</a>
          </div>
        )}

        {/* Connect */}
        <div>
          <div style={{ fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--y)', fontWeight: 700, marginBottom: 12, opacity: .8 }}>Connect</div>
          <a href={footer.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: 12, color: 'var(--cr)', opacity: .5, padding: '4px 0', fontWeight: 300, transition: 'opacity .2s' }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = .5}>Instagram</a>
          <a href="#" style={{ display: 'block', fontSize: 12, color: 'var(--cr)', opacity: .5, padding: '4px 0', fontWeight: 300 }}>TikTok</a>
          <a href={`mailto:${footer.email}`} style={{ display: 'block', fontSize: 12, color: 'var(--cr)', opacity: .5, padding: '4px 0', fontWeight: 300, transition: 'opacity .2s' }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = .5}>Contact</a>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,225,.08)', paddingTop: 20, display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: 12 }}>
        <div style={{ fontSize: 10, color: 'var(--cr)', opacity: .3 }}>© 2025 KÜL Café & Co. All rights reserved.</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {['@kulcafeco','Uber Eats','DoorDash'].map((tag, i) => (
            <a key={i} href={i === 0 ? footer.instagram : i === 1 ? footer.uber_eats : footer.doordash} target="_blank" rel="noopener noreferrer"
              style={{ background: 'rgba(255,255,225,.08)', color: 'var(--cr)', fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 12px', borderRadius: 20, fontWeight: 700, transition: 'background .2s' }}
              onMouseEnter={e => e.target.style.background = 'rgba(255,255,225,.18)'}
              onMouseLeave={e => e.target.style.background = 'rgba(255,255,225,.08)'}
            >{tag}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
