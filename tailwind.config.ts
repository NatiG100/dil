import type { Config } from 'tailwindcss'

const config: Config = {
  important:true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary':"#005a86",
        'background':"#F5F5F5",
      },
      fontFamily:{
        "lato":"Lato"
      },
      backgroundSize:{
        "200%":"200%"
      },
      animation:{
        fadeIn:"fade-in 500ms ease-in-out 0s 1"
      },
      keyframes:{
        "fade-in":{
          '0%': { opacity: '0' },
          'opacity': { opacity:"1" },
        }
      }
    },
  },
  plugins: [],
}
export default config
