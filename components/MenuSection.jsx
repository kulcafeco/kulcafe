'use client'
import { useState } from 'react'
import { useWindowSize } from '@/hooks/useWindowSize'

export default function MenuSection({ categories, footer }) {
  const [active, setActive] = useState(categories[0].id)
  const { isMobile } = useWindowSize()
  const current = categories.find(c => c.id === active)
  const half = Math.ceil(current.items.length / 2)
  const col1 = current.items.slice(0, half)
  const col2 = current.items.slice(half)

  return (
    <section id="menu" style={{ background: 'rgba(255,224,88,.07)', padding: isMobile ? '48px 20px' : 'clamp(52px,7vw,88px) clamp(24px,5vw,72px)' }}>
      <div style={{ marginBottom: isMobile ? 24 : 32 }}>
        <div className="kul-eyebrow">Menú Completo</div>
        <h2 className="kul-section-title" style={{ fontSize: isMobile ? 36 : undefined }}>
          Todo lo que <span className="accent">necesitas.</span>
        </h2>
      </div>

      {/* Tabs — horizontal scroll on mobile */}
      <div style={{
        display: 'flex', gap: 8, marginBottom: isMobile ? 28 : 40,
        overflowX: isMobile ? 'auto' : 'visible',
        flexWrap: isMobile ? 'nowrap' : 'wrap',
        paddingBottom: isMobile ? 4 : 0,
        scrollbarWidth: 'none',
        WebkitOverflowScrolling: 'touch',
      }}>
        {categories.map(cat => (
          <button key={cat.id} onClick={() => setActive(cat.id)} style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: isMobile ? 12 : 14,
            letterSpacing: '2px',
            padding: isMobile ? '8px 16px' : '9px 20px',
            borderRadius: 6,
            border: '1.5px solid var(--brd)',
            background: active === cat.id ? 'var(--brd)' : 'transparent',
            color: active === cat.id ? 'var(--cr)' : 'var(--brd)',
            cursor: 'pointer', transition: 'all .2s',
            whiteSpace: 'nowrap', flexShrink: 0,
          }}>{cat.label}</button>
        ))}
      </div>

      {/* Items */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '0' : '0 52px',
      }}>
        {(isMobile ? current.items : [col1, col2]).map((col, ci) => (
          <div key={ci}>
            {(isMobile ? [col] : col).map((item, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                gap: 12, padding: isMobile ? '12px 0' : '13px 0',
                borderBottom: '1px solid rgba(90,53,48,.09)',
              }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: isMobile ? 12 : 13, textTransform: 'uppercase', letterSpacing: '.4px', color: 'var(--brd)' }}>
                    {item.name}
                    {item.badge && (
                      <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '2px 6px', borderRadius: 20, marginLeft: 5, verticalAlign: 'middle', background: item.badge_color || '#FFE058', color: '#5a3530' }}>{item.badge}</span>
                    )}
                  </div>
                  {item.desc && <div style={{ fontSize: isMobile ? 10 : 11, color: 'var(--br)', opacity: .65, fontWeight: 300, marginTop: 3, lineHeight: 1.4 }}>{item.desc}</div>}
                </div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 18 : 21, color: 'var(--br)', flexShrink: 0 }}>{item.price}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* CTA bar */}
      <div style={{
        marginTop: isMobile ? 32 : 40,
        background: 'var(--y)', borderRadius: 12,
        padding: isMobile ? '20px' : '28px 32px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'stretch' : 'center',
        justifyContent: 'space-between', gap: isMobile ? 14 : 20,
      }}>
        <div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 22 : 'clamp(22px,3vw,34px)', color: 'var(--brd)', letterSpacing: 1, lineHeight: 1 }}>Order Now — Delivery &amp; Pickup</div>
          <div style={{ fontSize: 10, color: 'var(--brd)', opacity: .6, letterSpacing: '2px', textTransform: 'uppercase', marginTop: 5 }}>Uber Eats · DoorDash · Katy & Houston</div>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a href={footer.uber_eats} target="_blank" rel="noopener noreferrer" className="btn btn-dark" style={{ flex: isMobile ? 1 : 'none', justifyContent: 'center', fontSize: isMobile ? 14 : 16 }}>🛵 Uber Eats</a>
          <a href={footer.doordash} target="_blank" rel="noopener noreferrer" className="btn" style={{ flex: isMobile ? 1 : 'none', justifyContent: 'center', fontSize: isMobile ? 14 : 16, background: 'var(--br)', color: 'var(--cr)' }}>📦 DoorDash</a>
        </div>
      </div>
    </section>
  )
}
