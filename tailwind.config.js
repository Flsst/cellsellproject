/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FFFFFF',
          warm: '#FAFAF8',
        },
        foreground: {
          DEFAULT: '#0A0A0A',
        },
        muted: {
          foreground: '#6B6B6B',
        },
        accent: {
          pink: '#FF5C8A',
          magenta: '#E0448F',
          coral: '#FF6B5E',
          orange: '#FF8A3D',
          yellow: '#FFE9B8',
        },
        line: '#E5E5E3',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'ui-serif', 'serif'],
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
