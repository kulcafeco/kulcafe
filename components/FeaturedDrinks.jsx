'use client'
import { useWindowSize } from '@/hooks/useWindowSize'

export default function FeaturedDrinks({ season, featured, uberEatsUrl }) {
  const { isMobile, isTablet } = useWindowSize()
  const cols = isMobile ? '1fr 1fr' : isTablet ? '1fr 1fr' : 'repeat(4,1fr)'

  return (
    <section style={{ background: 'var(--cr)', padding: isMobile ? '48px 20px' : 'clamp(52px,7vw,88px) clamp(24px,5vw,72px)' }}>
      {/* Header */}
      <div style={{ marginBottom: isMobile ? 28 : 40 }}>
        <div className="kul-eyebrow">{season.eyebrow}</div>
        <h2 className="kul-section-title" style={{ fontSize: isMobile ? 36 : undefined }}>
          {season.title_line1}<br />
          <span className="accent">{season.title_line2}</span>
        </h2>
        {!isMobile && <p style={{ fontSize: 13, color: 'var(--brd)', opacity: .5, fontWeight: 300, maxWidth: 280, lineHeight: 1.6, marginTop: 8 }}>{season.subtitle}</p>}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: cols, gap: isMobile ? 10 : 14 }}>
        {featured.map((drink) => (
          <div key={drink.id} style={{
            borderRadius: 14, overflow: 'hidden', cursor: 'pointer',
            transition: 'transform .35s, box-shadow .35s',
            boxShadow: '0 2px 12px rgba(90,53,48,.07)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 44px rgba(90,53,48,.18)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(90,53,48,.07)'; }}
          >
            {/* Photo */}
            <div style={{ height: isMobile ? '42vw' : 220, overflow: 'hidden', position: 'relative' }}>
              <img src={drink.photo} alt={drink.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s' }} />
              {drink.badge && (
                <span style={{
                  position: 'absolute', top: 8, right: 8,
                  fontSize: 8, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
                  padding: '3px 8px', borderRadius: 20,
                  background: drink.badge_color || '#FFE058',
                  color: drink.badge_text_color || '#5a3530',
                }}>{drink.badge}</span>
              )}
            </div>
            {/* Body */}
            <div style={{
              padding: isMobile ? '12px 12px 14px' : '16px 18px 20px',
              background: drink.card_bg || 'var(--cr)',
              border: `1px solid ${drink.card_border || 'rgba(90,53,48,.08)'}`,
              borderTop: 'none',
            }}>
              <div style={{ fontSize: 8, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--br)', opacity: .7, marginBottom: 4, fontWeight: 700 }}>{drink.kicker}</div>
              <div style={{ fontWeight: 700, fontSize: isMobile ? 11 : 13, color: 'var(--brd)', textTransform: 'uppercase', letterSpacing: '.3px', marginBottom: 4 }}>{drink.name}</div>
              {!isMobile && <div style={{ fontSize: 11, color: 'var(--br)', opacity: .7, fontWeight: 300, lineHeight: 1.4, marginBottom: 10 }}>{drink.desc}</div>}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: isMobile ? 6 : 0 }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 20 : 24, color: 'var(--br)' }}>{drink.price}</span>
                <a href={uberEatsUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 9, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--brd)', borderBottom: '1px solid rgba(90,53,48,.3)', paddingBottom: 1 }}>Order →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
