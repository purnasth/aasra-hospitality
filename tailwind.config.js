/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#000',
        // light: '#fffbf3',
        light: '#e2e2e2',
        'logo-yellow': '#FFCE35',
        'logo-maroon': '#981C20',
        'logo-green': '#346833',
      },
      fontFamily: {
        title: ['"Chaviera"','Aiguilette', 'Georgia', 'Cambria', 'serif'],
        body: ['"Syne"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1600px',
        '3xl': '1920px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1600px',
        },
      },
    },
  },
  plugins: [],
};
