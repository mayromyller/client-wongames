import { Story, Meta } from '@storybook/react'
import BannerSlide, { BannerSlideProps } from '.'

import items from './mock'

export default {
  title: 'BannerSlide',
  component: BannerSlide,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<BannerSlideProps> = (args) => (
  <div
    style={{
      maxWidth: '130rem',
      margin: '0 auto'
    }}
  >
    <BannerSlide {...args} />
  </div>
)
