import type { Preview } from '@storybook/react'
import { MockedProvider } from '@apollo/client/testing'

import {
  withThemeByClassName,
  withThemeByDataAttribute
} from '@storybook/addon-styling'

/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
import '../src/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    apolloClient: {
      MockedProvider,
      globalMocks: []
    },
    layout: 'centered'
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'light'
    }),
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'light',
      attributeName: 'data-mode'
    })
  ]
}

export default preview
