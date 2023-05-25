/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F5F5',
        'text-dark': '#0F141E',
        'text-gray': '#D9D9D9',
        'bg-lemon': '#01EBDE',
      },
    },
  },
  plugins: [],
}
