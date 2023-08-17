/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [nextui()]
}
