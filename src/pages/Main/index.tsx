import { LandPageSection } from '../../components/LandingPage'
import { CoffeeCardList } from '../../components/CoffeeCardList'
import { menu } from '../../menu-data'

export function Main() {
  return (
    <>
      <LandPageSection />
      <CoffeeCardList menu={menu} />
    </>
  )
}
