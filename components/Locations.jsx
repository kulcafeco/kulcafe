'use client'
import { useWindowSize } from '@/hooks/useWindowSize'

export default function Locations({ locations }) {
  const { isMobile } = useWindowSize()

  return (
    <section id="locations" style={{ background: 'var(--brd)', padding: isMobile ? '48px 20px' : 'clamp(52px,7vw,88px) clamp(24px,5vw,72px)' }}>
      <div style={{ marginBottom: isMobile ? 28 : 40 }}>
        <div style={{ fontSize: 11, letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--y)', fontWeight: 700, marginBottom: 10 }}>Encuéntranos</div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 36 : 'clamp(40px,5.5vw,66px)', color: 'var(--cr)', lineHeight: .92, marginBottom: 8 }}>
          Dos locaciones.<br /><span style={{ color: 'var(--y)' }}>Misma energía KÜL.</span>
        </h2>
        {!isMobile && <p style={{ fontSize: 14, color: 'var(--cr)', opacity: .5, fontWeight: 300, maxWidth: 480 }}>Katy y Houston — porque el buen café debe estar cerca de casa.</p>}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 16 : 20 }}>
        {locations.map((loc) => (
          <div key={loc.id} style={{
            borderRadius: 16, overflow: 'hidden',
            background: 'rgba(255,255,225,.06)',
            border: '1px solid rgba(255,255,225,.12)',
            transition: 'transform .3s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'none'}
          >
            <div style={{ height: isMobile ? 160 : 200, overflow: 'hidden' }}>
              <img src={loc.photo} alt={`KÜL Café ${loc.city}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: isMobile ? '18px 18px 22px' : '24px 24px 28px' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 22 : 28, color: 'var(--y)', letterSpacing: '1.5px', marginBottom: 6 }}>{loc.city}</div>
              <div style={{ fontSize: isMobile ? 13 : 14, color: 'var(--cr)', opacity: .7, fontWeight: 300, lineHeight: 1.7, marginBottom: 4 }}>
                {loc.address_line1}<br />{loc.address_line2}
              </div>
              <div style={{ fontSize: 11, color: 'var(--cr)', opacity: .45, fontStyle: 'italic', marginBottom: 14 }}>{loc.note}</div>

              <div style={{ fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--y)', fontWeight: 700, marginBottom: 8 }}>Horario</div>
              {loc.hours.map((h, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: isMobile ? 12 : 13, color: 'var(--cr)', padding: '6px 0', borderBottom: '1px solid rgba(255,255,225,.07)' }}>
                  <span style={{ opacity: .5 }}>{h.days}</span>
                  <span style={{ fontWeight: 500 }}>{h.time}</span>
                </div>
              ))}

              <div style={{ display: 'flex', gap: 7, marginTop: 12, flexWrap: 'wrap' }}>
                {loc.delivery.map((d, i) => (
                  <span key={i} style={{ background: 'rgba(255,255,225,.08)', border: '1px solid rgba(255,255,225,.15)', borderRadius: 6, padding: '4px 10px', fontSize: 9, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--cr)' }}>{d}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
                <a href={loc.uber_eats_url} target="_blank" rel="noopener noreferrer"
                  style={{ flex: 1, textAlign: 'center', fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, letterSpacing: '2px', padding: '10px 16px', borderRadius: 6, background: 'var(--y)', color: 'var(--brd)', transition: 'background .2s' }}
                  onMouseEnter={e => e.target.style.background = 'var(--cr)'}
                  onMouseLeave={e => e.target.style.background = 'var(--y)'}
                >Order Delivery</a>
                <a href={loc.maps_url} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, letterSpacing: '2px', padding: '10px 16px', borderRadius: 6, border: '1.5px solid rgba(255,255,225,.25)', color: 'var(--cr)', transition: 'border-color .2s' }}
                  onMouseEnter={e => e.target.style.borderColor = 'var(--cr)'}
                  onMouseLeave={e => e.target.style.borderColor = 'rgba(255,255,225,.25)'}
                >Directions</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
