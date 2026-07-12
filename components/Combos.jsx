'use client'
import { useWindowSize } from '@/hooks/useWindowSize'

export default function Combos({ combos }) {
  const { isMobile, isTablet } = useWindowSize()
  const cols = isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3,1fr)'

  return (
    <section style={{ background: 'var(--pk)', padding: isMobile ? '48px 20px' : 'clamp(52px,7vw,88px) clamp(24px,5vw,72px)' }}>
      <div style={{ marginBottom: isMobile ? 8 : 8 }}>
        <div style={{ fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--brd)', fontWeight: 700, opacity: .6, marginBottom: 10 }}>Hechos para ir juntos</div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 36 : 'clamp(40px,5.5vw,66px)', color: 'var(--brd)', lineHeight: .92, marginBottom: 8 }}>
          KÜL <span style={{ color: 'var(--br)' }}>Combos.</span>
        </h2>
        <p style={{ fontSize: isMobile ? 13 : 14, color: 'var(--brd)', opacity: .6, fontWeight: 300, marginBottom: isMobile ? 28 : 40 }}>
          Ahorra $1.50 cuando los combinas. Todo sabe mejor en pareja.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols, gap: isMobile ? 12 : 16 }}>
        {combos.map((combo, i) => (
          <div key={i} style={{
            background: 'var(--cr)', borderRadius: 14,
            padding: isMobile ? '18px 16px' : '24px 20px',
            borderTop: `4px solid ${combo.accent}`,
            transition: 'transform .3s, box-shadow .3s',
            cursor: 'pointer',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 36px rgba(90,53,48,.14)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: 17, letterSpacing: 1,
              color: 'var(--y)', background: 'var(--brd)',
              width: 36, height: 36, borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 12,
            }}>{combo.num}</div>
            <div style={{ fontWeight: 700, fontSize: isMobile ? 12 : 13, textTransform: 'uppercase', letterSpacing: '.4px', color: 'var(--brd)', marginBottom: 4 }}>{combo.name}</div>
            <div style={{ fontSize: isMobile ? 11 : 12, color: 'var(--br)', opacity: .7, fontWeight: 300, lineHeight: 1.5, marginBottom: 12 }}>{combo.desc}</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 22 : 26, color: 'var(--br)' }}>{combo.price}</div>
            <div style={{ fontSize: 9, color: 'var(--br)', opacity: .55, letterSpacing: 1, textTransform: 'uppercase' }}>{combo.save}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
