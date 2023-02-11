import { CoffeeCard, CoffeeCardProps } from '../CoffeeCard'
import { CoffeeCardListContainer } from './styles'

interface CoffeeCardContainerProps {
  menu: CoffeeCardProps[]
}

export function CoffeeCardList({ menu }: CoffeeCardContainerProps) {
  return (
    <CoffeeCardListContainer>
      {menu.map((coffee) => {
        return (
          <CoffeeCard
            key={coffee.name}
            image={coffee.image}
            tags={coffee.tags}
            name={coffee.name}
            description={coffee.description}
            price={coffee.price}
          />
        )
      })}
    </CoffeeCardListContainer>
  )
}
