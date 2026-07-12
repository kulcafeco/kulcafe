'use client'
import { useWindowSize } from '@/hooks/useWindowSize'

const MARQUEE_ITEMS = [
  'SPECIALTY COFFEE','WARM BAKED BREAD','TROPICAL MATCHAS',
  'LATIN SOUL','FRESH DAILY','HOUSTON & KATY TX','4.7 ★ UBER EATS','STAY KÜL ♥',
]

const PROOF_ITEMS = [
  { icon: '⭐', bg: '#FFE058', title: '4.7 Stars · Uber Eats',    sub: '34+ verified reviews' },
  { icon: '🕐', bg: '#9FDF9F', title: 'Open Daily',               sub: 'Mon–Sat 8AM–5PM' },
  { icon: '📍', bg: '#FFB7CC', title: '2 Locations',              sub: 'Katy · Houston' },
  { icon: '🛵', bg: '#FFBE93', title: 'Delivery & Pickup',        sub: 'Uber Eats · DoorDash' },
  { icon: '☕', bg: '#BEB5F1', title: 'Latin-Inspired Coffee',    sub: 'Tropical soul in every sip' },
]

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div style={{ background: 'var(--brd)', padding: '12px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <div style={{ display: 'inline-block', animation: 'marquee 28s linear infinite' }}>
        {items.map((item, i) => (
          <span key={i}>
            <span style={{ display: 'inline-block', fontFamily: "'Bebas Neue', sans-serif", fontSize: 15, letterSpacing: '3px', color: 'var(--cr)', padding: '0 24px', opacity: .8 }}>{item}</span>
            <span style={{ display: 'inline-block', width: 4, height: 4, borderRadius: '50%', background: 'var(--y)', verticalAlign: 'middle' }} />
          </span>
        ))}
      </div>
    </div>
  )
}

export function ProofBar() {
  const { isMobile } = useWindowSize()
  return (
    <div style={{
      background: 'var(--brd)',
      padding: isMobile ? '16px 20px' : '18px clamp(24px,5vw,64px)',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(5,1fr)',
      gap: isMobile ? '12px' : '0',
      alignItems: 'center',
    }}>
      {PROOF_ITEMS.map((item, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: isMobile ? '4px 0' : '0',
          borderRight: (!isMobile && i < 4) ? '1px solid rgba(255,255,225,.1)' : 'none',
          justifyContent: isMobile ? 'flex-start' : 'center',
        }}>
          <div style={{ width: 30, height: 30, borderRadius: 7, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>{item.icon}</div>
          <div>
            <div style={{ fontSize: isMobile ? 11 : 12, color: 'var(--cr)', fontWeight: 600, lineHeight: 1.3 }}>{item.title}</div>
            {!isMobile && <div style={{ fontSize: 10, color: 'var(--cr)', opacity: .5, fontWeight: 300 }}>{item.sub}</div>}
          </div>
        </div>
      ))}
    </div>
  )
}
