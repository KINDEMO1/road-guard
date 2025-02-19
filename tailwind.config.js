/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Add this line if you're using the 'app' directory (for Next.js 13+)
    "./src/**/*.{js,ts,jsx,tsx}", // Optional: Add this if your components are within the 'src' directory
  ],
  theme: {
  	extend: {
  		colors: {
  			'colors-primary': '#fff',
  			darkgray: '#9d9d9d',
  			gray: {
  				'100': '#fffdfd',
  				'200': '#8f8f8f',
  				'300': '#74787b',
  				'400': '#74757c',
  				'500': '#1e1e1e'
  			},
  			silver: '#c7c3c3',
  			gainsboro: '#d9d9d9',
  			lavenderblush: '#ffeded',
  			mediumseagreen: '#25a25a',
  			black: '#000',
  			slategray: '#636d86',
  			snow: '#fffafa',
  			tomato: '#e74c3c',
  			brown: '#a22525'
  		},
  		fontFamily: {
  			montserrat: 'Montserrat',
  			kanit: 'Kanit'
  		},
  		borderRadius: {
  			'8xs': '5px',
  			'3xs': '10px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	fontSize: {
  		mini: '15px',
  		sm: '14px',
  		xl: '20px',
  		'17xl': '36px',
  		'3xl': '22px',
  		'10xl': '29px',
  		xs: '12px',
  		inherit: 'inherit'
  	},
  	screens: {
  		mq1050: {
  			raw: 'screen and (max-width: 1050px)'
  		},
  		mq975: {
  			raw: 'screen and (max-width: 975px)'
  		},
  		mq750: {
  			raw: 'screen and (max-width: 750px)'
  		},
  		mq725: {
  			raw: 'screen and (max-width: 725px)'
  		},
  		mq650: {
  			raw: 'screen and (max-width: 650px)'
  		},
  		mq450: {
  			raw: 'screen and (max-width: 450px)'
  		}
  	}
  },
  corePlugins: {
    preflight: false,
  },
    plugins: [require("tailwindcss-animate")]
};
