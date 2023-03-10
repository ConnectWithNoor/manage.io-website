/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSuperLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227,12%,61%)',
        darkBlueSuper: 'hsl(233, 12%, 13%)',
        PaleRedSuper: 'hsl(13, 100%, 96%)',
        GraySuperLight: 'hsl(0, 0%, 98%)',
      },
      backgroundImage: {
        heroPattern: "url('/bg-tablet-pattern.svg')",
        ctaPatternDesktop: "url('/bg-simplify-section-desktop.svg')",
        ctaPatternMobile: "url('/bg-simplify-section-mobile.svg')",
      },
      backgroundPosition: {
        heroPatternPostiionDesktop: '90% -25%',
        heroPatternPostiionMobile: '50px -50px',
      },
      backgroundSize: {
        size800: '800px',
        size500: '500px',
      },
    },
  },
  plugins: [],
};
