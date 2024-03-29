import { Story, Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}

export const WithIcon: Story = (args) => <Button {...args} />

WithIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}

export const AsLink: Story = (args) => <Button {...args} />

AsLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
