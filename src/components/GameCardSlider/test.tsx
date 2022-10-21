import 'match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import GameCardSlider from '.'

const items = [
  {
    title: 'Red Dead',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/1000x1000',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'God of War',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/1000x1000',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'GTA',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/1000x1000',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Need for Speed',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/1000x1000',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Red Dead',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/1000x1000',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Borderlands',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/1000x1000',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Tibia',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/1000x1000',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Survivor.io',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/1000x1000',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  }
]

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} arrowColor="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
