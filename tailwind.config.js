module.exports = {
  purge: {
		enabled: process.env.PURGE_TW === 'true',
		content: ['./src/**/*.html', './src/**/*.ts'],
	},
  theme: {
    extend: {
      boxShadow: {
        'lg': '5px 0px 10px 0px #919191',
        '2xl': '0 6px 10px -5px #303030',
        'menu': '0 6px 10px -5px #303030',
        'profile': '0 6px 10px -5px #c2c2c2'
      },
      borderRadius: {
        'xl': '0.8rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
        'full': '100%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animatecss')({
      classes: [
        'animate__animated',
        'animate__shakeY'
      ],
      settings: {},
      variants: [],
    }),
  ],
}
