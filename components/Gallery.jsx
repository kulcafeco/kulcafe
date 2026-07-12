'use client'
import { useWindowSize } from '@/hooks/useWindowSize'

const PHOTOS = [
  { src: '/photos/vibe-2.jpg',                label: 'The KÜL Ritual ☕',        tall: true },
  { src: '/photos/feat-strawberry-matcha.jpg', label: 'Strawberry Matcha 🍓',    tall: false },
  { src: '/photos/food-bacon-croissant.jpg',   label: 'Bacon & Egg Croissant 🥐', tall: false },
  { src: '/photos/feat-mango-matcha.jpg',      label: 'Mango Matcha 🍈',          tall: false },
  { src: '/photos/feat-pistachio.jpg',         label: 'Pistachio Latte 🍵',       tall: false },
  { src: '/photos/food-chicken-panini.jpg',    label: 'Chicken Pesto Panini 🥪',  tall: false },
  { src: '/photos/vibe-4.jpg',                 label: 'Latte Art ♡',              tall: false },
]

export default function Gallery({ gallery }) {
  const { isMobile } = useWindowSize()

  return (
    <section style={{ background: 'var(--cr)', padding: isMobile ? '48px 20px' : 'clamp(52px,7vw,88px) clamp(24px,5vw,72px)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: isMobile ? 24 : 40, flexWrap: 'wrap', gap: 14 }}>
        <div>
          <div className="kul-eyebrow">{gallery.eyebrow}</div>
          <h2 className="kul-section-title" style={{ fontSize: isMobile ? 36 : undefined }}>
            {gallery.title_line1}<br />
            <span className="accent">{gallery.title_line2}</span>
          </h2>
        </div>
        {!isMobile && <p style={{ fontSize: 13, color: 'var(--brd)', opacity: .5, fontWeight: 300, maxWidth: 200, textAlign: 'right', lineHeight: 1.6 }}>{gallery.subtitle}</p>}
      </div>

      {/* Mobile: 2-col simple grid */}
      {isMobile ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {PHOTOS.map((photo, i) => (
            <div key={i} style={{ borderRadius: 10, overflow: 'hidden', position: 'relative', aspectRatio: '1/1' }}>
              <img src={photo.src} alt={photo.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '8px 10px', background: 'linear-gradient(to top, rgba(90,53,48,.75) 0%, transparent 100%)' }}>
                <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--cr)' }}>{photo.label}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Desktop: asymmetric grid */
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridTemplateRows: '200px 200px', gap: 10 }}>
          {PHOTOS.map((photo, i) => (
            <div key={i} style={{
              borderRadius: 14, overflow: 'hidden', position: 'relative', cursor: 'pointer',
              gridRow: photo.tall ? 'span 2' : 'span 1',
            }}
            onMouseEnter={e => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.06)'
              e.currentTarget.querySelector('.ov').style.opacity = 1
              e.currentTarget.querySelector('.lb').style.opacity = 1
              e.currentTarget.querySelector('.lb').style.transform = 'none'
            }}
            onMouseLeave={e => {
              e.currentTarget.querySelector('img').style.transform = 'none'
              e.currentTarget.querySelector('.ov').style.opacity = 0
              e.currentTarget.querySelector('.lb').style.opacity = 0
              e.currentTarget.querySelector('.lb').style.transform = 'translateY(6px)'
            }}
            >
              <img src={photo.src} alt={photo.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s' }} />
              <div className="ov" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(90,53,48,.72) 0%, transparent 55%)', opacity: 0, transition: 'opacity .3s' }} />
              <div className="lb" style={{ position: 'absolute', bottom: 14, left: 14, right: 14, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--cr)', opacity: 0, transform: 'translateY(6px)', transition: 'all .3s' }}>{photo.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Instagram CTA */}
      <div style={{ marginTop: isMobile ? 24 : 28, textAlign: 'center' }}>
        <a href={gallery.instagram_url} target="_blank" rel="noopener noreferrer"
          className="btn btn-dark"
          style={{ fontSize: isMobile ? 14 : 16, width: isMobile ? '100%' : 'auto', justifyContent: 'center' }}>
          📸 Síguenos {gallery.instagram_handle}
        </a>
      </div>
    </section>
  )
}
