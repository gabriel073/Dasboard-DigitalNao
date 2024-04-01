import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // fontSize: {
    //   xxl: '1.75rem',
    // },

  },
  fontFamily: {
    'poppins': 'poppins',
  },
  extend: {
    spacing: {
      '194': '52rem',
      'cardsWidth': '19rem',
      'cardsHeight': '7.5rem'
    },
    // rotate: {
    //   '225': '225deg',
    // },
    colors: {
      'iconNotification': '#3692EB',


    }
  },
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "ligth", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

  plugins: [daisyui],
};
