'use client'
import Nav                      from '@/components/Nav'
import Hero                     from '@/components/Hero'
import { Marquee, ProofBar }    from '@/components/ProofBar'
import FeaturedDrinks           from '@/components/FeaturedDrinks'
import MenuSection              from '@/components/MenuSection'
import Combos                   from '@/components/Combos'
import Gallery                  from '@/components/Gallery'
import Locations                from '@/components/Locations'
import { FinalCTA, SiteFooter } from '@/components/Footer'

import siteData      from '@/content/site.json'
import menuData      from '@/content/menu.json'
import locationsData from '@/content/locations.json'
import combosData    from '@/content/combos.json'

export default function Home() {
  const { hero, season, gallery, cta, footer } = siteData
  return (
    <>
      <Nav footer={footer} />
      <Hero hero={hero} footer={footer} />
      <Marquee />
      <ProofBar />
      <FeaturedDrinks season={season} featured={menuData.featured} uberEatsUrl={footer.uber_eats} />
      <MenuSection categories={menuData.categories} footer={footer} />
      <Combos combos={combosData.combos} />
      <Gallery gallery={gallery} />
      <Locations locations={locationsData.locations} />
      <FinalCTA cta={cta} footer={footer} />
      <SiteFooter footer={footer} />
    </>
  )
}
