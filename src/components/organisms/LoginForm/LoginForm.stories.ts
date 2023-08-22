import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import LoginForm from './index'

const meta = {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  //   args: {
  //     user: {
  //       name: 'Jane Doe'
  //     }
  //   }
}
