export const content = ['./src/**/*.{html,js,svelte,ts}']
export const darkMode = false
export const theme = {
  fontFamily: {
    sans: [
      'Inter',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji',
    ],

    extend: {
      colors: {
        dark: {
          950: '#0e1012',
          900: '#19181F',
          800: '#1E1B24',
          700: '#23202A',
          600: '#333139',
          500: '#4f4d55',
          400: '#999cb4',
          300: '#fafbfe',
          200: '#d3d2d4',
          100: '#e9e9ea',
        },
      },
    },
  },
}
export const variants = {
  width: ['responsive', 'hover', 'group-hover'],
}
export const plugins = []
