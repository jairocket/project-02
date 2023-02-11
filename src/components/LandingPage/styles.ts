import styled from 'styled-components'

export const LandingPageSectionContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding: 4rem 0;
  align-items: center;
  justify-content: space-between;
`
export const TitleContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['title']};
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.3;
    font-stretch: 100;
    color: ${(props) => props.theme['subtitle']};
    margin: 1rem 0;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
  padding: 0 1rem 1rem 0rem;
`
export const ShoppingCartInfoContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['yellow-dark']};
  border-radius: 50%;
  padding: 0.5rem;
`

export const TimerInfoContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['yellow']};
  border-radius: 50%;
  padding: 0.5rem;
`
export const PackageInfoContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['text']};
  border-radius: 50%;
  padding: 0.5rem;
`

export const CoffeeInfoContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['purple']};
  border-radius: 50%;
  padding: 0.5rem;
`

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
`

export const TitleAndFeaturesContainer = styled.div`
  max-width: 60rem;
`
export const InfoBlockContainer = styled.div``
