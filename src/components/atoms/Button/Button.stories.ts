import type { Meta, StoryObj } from '@storybook/react'

import Button from './index'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Hello',
    primary: true,
    size: 'large',
    rounded: 'full'
  }
}
