'use client'
import { useWindowSize } from '@/hooks/useWindowSize'

const chips = [
  { color: '#FFE058', name: 'Horchata Latte',        sub: '#1 Most Liked',       price: '$6.40' },
  { color: '#FFB7CC', name: 'Strawberry Matcha',     sub: 'Fruity · dreamy',     price: '$7.00' },
  { color: '#9FDF9F', name: 'Guava Cream Matcha',    sub: 'Tropical · refreshing', price: '$6.75' },
  { color: '#FFBE93', name: 'Bacon & Egg Croissant', sub: '#1 Breakfast',        price: '$10.72' },
]

export default function Hero({ hero, footer }) {
  const { isMobile } = useWindowSize()

  return (
    <section style={{
      minHeight: isMobile ? 'auto' : '100vh',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      paddingTop: isMobile ? 60 : 68,
      overflow: 'hidden',
      position: 'relative',
    }}>

      {/* ── LEFT — cream panel ── */}
      <div style={{
        background: 'var(--cr)',
        padding: isMobile ? '40px 24px 36px' : 'clamp(48px,7vw,88px) clamp(32px,5vw,72px)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        position: 'relative', zIndex: 2,
        borderLeft: isMobile ? 'none' : '6px solid var(--y)',
        borderTop: isMobile ? '5px solid var(--y)' : 'none',
      }}>

        {/* Eyebrow */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          fontSize: isMobile ? 9 : 11, letterSpacing: '3px',
          textTransform: 'uppercase', color: 'var(--br)', fontWeight: 700,
          marginBottom: isMobile ? 14 : 20,
          animation: 'fadeUp .7s .2s both',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--y)', flexShrink: 0, display: 'inline-block' }} />
          {isMobile ? 'Houston & Katy, TX' : hero.eyebrow}
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: isMobile ? 'clamp(52px,14vw,72px)' : 'clamp(58px,8.5vw,108px)',
          lineHeight: .86, color: 'var(--brd)',
          marginBottom: isMobile ? 16 : 24,
          animation: 'fadeUp .9s .35s both',
        }}>
          <span style={{ display: 'block' }}>{hero.headline_line1}</span>
          <span style={{ display: 'block', color: 'var(--br)' }}>{hero.headline_line2}</span>
          <span style={{ display: 'block', WebkitTextStroke: '2px var(--brd)', color: 'transparent' }}>{hero.headline_line3}</span>
        </h1>

        {/* Tagline */}
        <p style={{
          fontSize: isMobile ? 13 : 'clamp(14px,1.6vw,16px)',
          color: 'var(--brd)', opacity: .65, fontWeight: 300,
          lineHeight: 1.7, maxWidth: isMobile ? '100%' : 380,
          marginBottom: isMobile ? 24 : 36,
          animation: 'fadeUp .8s .5s both',
        }}>{hero.tagline}</p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap', gap: isMobile ? 10 : 12,
          marginBottom: isMobile ? 28 : 40,
          animation: 'fadeUp .8s .65s both',
        }}>
          <a href={footer.uber_eats} target="_blank" rel="noopener noreferrer"
            className="btn btn-yellow"
            style={{ textAlign: 'center', fontSize: isMobile ? 15 : 16 }}>
            🛵 Order on Uber Eats
          </a>
          <a href={footer.doordash} target="_blank" rel="noopener noreferrer"
            className="btn btn-dark"
            style={{ textAlign: 'center', fontSize: isMobile ? 15 : 16 }}>
            📦 Order on DoorDash
          </a>
          {!isMobile && (
            <a href="#menu" className="btn btn-ghost">Ver Menú ↓</a>
          )}
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: isMobile ? 16 : 28,
          animation: 'fadeUp .8s .8s both',
        }}>
          {[
            [hero.stat_rating,    hero.stat_rating_label],
            [hero.stat_locations, hero.stat_locations_label],
            [hero.stat_items,     hero.stat_items_label],
          ].map(([num, label], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'stretch', gap: isMobile ? 16 : 28 }}>
              {i > 0 && <div style={{ width: 1, background: 'rgba(90,53,48,.15)' }} />}
              <div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 24 : 32, color: 'var(--brd)', lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: isMobile ? 8 : 10, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--br)', opacity: .65, marginTop: 3 }}>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT — photo ── */}
      {isMobile ? (
        <div style={{ height: '55vw', overflow: 'hidden', position: 'relative' }}>
          <img src="/photos/hero-main.jpg" alt="KÜL Café"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(90,53,48,.5) 0%, transparent 60%)',
          }} />
          {/* Drink chips — mobile */}
          <div style={{
            position: 'absolute', bottom: 12, left: 12, right: 12,
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6,
          }}>
            {chips.map((chip, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,225,.40)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: 8, padding: '8px 10px',
                display: 'flex', flexDirection: 'column', gap: 2,
              }}>
                <div style={{ fontWeight: 700, fontSize: 9.5, textTransform: 'uppercase', color: 'var(--brd)', lineHeight: 1.2 }}>{chip.name}</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 14, color: 'var(--br)' }}>{chip.price}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="/photos/hero-main.jpg" alt="KÜL Café specialty coffee"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(105deg, var(--cr) 0%, rgba(255,255,225,0) 30%), linear-gradient(to top, rgba(90,53,48,.55) 0%, transparent 50%)',
          }} />
          {/* Drink chips — desktop */}
          <div style={{ position: 'absolute', top: '50%', left: -28, transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 10, zIndex: 5 }}>
            {chips.map((chip, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,225,.40)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: 12,
                padding: '11px 16px',
                display: 'flex', alignItems: 'center', gap: 14,
                minWidth: 220,
                animation: `slideRight .6s ${0.85 + i * 0.15}s both`,
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '.4px', color: 'var(--brd)', lineHeight: 1.2 }}>{chip.name}</div>
                  <div style={{ fontSize: 10.5, color: 'var(--br)', opacity: .8, fontWeight: 300, marginTop: 2 }}>{chip.sub}</div>
                </div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, color: 'var(--brd)', flexShrink: 0 }}>{chip.price}</div>
              </div>
            ))}
          </div>
          {/* Rotating stamp */}
          <div style={{ position: 'absolute', bottom: 28, right: 28, width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 6 }}>
            <svg style={{ position: 'absolute', width: '100%', height: '100%', animation: 'spin 22s linear infinite' }} viewBox="0 0 100 100" fill="none">
              <path id="sc" d="M50,50 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" fill="none" />
              <text fontFamily="'Bebas Neue',sans-serif" fontSize="10" fill="#FFE058" letterSpacing="6" opacity=".8">
                <textPath href="#sc">STAY KÜL · KATY TX · HOUSTON · </textPath>
              </text>
            </svg>
            <img src="/logo-cream-horizontal.png" alt="KÜL"
              style={{ width: 58, filter: 'brightness(0) invert(1)', opacity: .9, position: 'relative' }}
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        </div>
      )}
    </section>
  )
}
