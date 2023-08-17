import type { Meta, StoryObj } from '@storybook/react'

import Footer from './index'

const meta = {
  title: 'Organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  //   args: {
  //     user: {
  //       name: 'Jane Doe'
  //     }
  //   }
}
