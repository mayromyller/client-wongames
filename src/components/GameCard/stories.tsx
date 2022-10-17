import { Story, Meta } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Red Dead',
    developer: 'Rockstar Games',
    img: 'img/red-dead-img.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div
    style={{
      width: '30rem'
    }}
  >
    <GameCard {...args} />
  </div>
)
