import { Story, Meta } from '@storybook/react'
import GameCardSlider, { GameCardSliderProps } from '.'

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

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GameCardSliderProps> = (args) => (
  <div
    style={{
      maxWidth: '130rem',
      margin: '0 auto'
    }}
  >
    <GameCardSlider {...args} />
  </div>
)
