import { Story, Meta } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
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

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div
    style={{
      width: '30rem'
    }}
  >
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% off',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
