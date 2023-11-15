import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#3b81f6',
      white: '#ffffff',
      text: {
        DEFAULT: '#1F2937',
        light: '#6c7281',
      },
      light: {
        DEFAULT: '#fafbfc',
        lighter: '#f3f4f6',
      }
    },
  },
  plugins: [],
}
export default config
