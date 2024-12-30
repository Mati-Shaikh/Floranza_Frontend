/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      perspective: {
        'DEFAULT': '1000px'
      },
      colors: {
        gold: '#FFD700',  // Add this gold color to your Tailwind config
      },
      screens: {
        'lg': '980px', // Define your custom breakpoint
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        rv: '0 0 30px rgba(0, 0, 0, 1)'
      },
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      addUtilities({
        '.perspective': {
          'perspective': '1000px'
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d'
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden'
        },
        '.rotate-y-180': {
          'transform': 'rotateY(180deg)'
        }
      })
    }
  ]
};
