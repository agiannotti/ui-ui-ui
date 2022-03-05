module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: { colors: { accent: '#FC6767' } },
  },
  plugins: [require('@tailwindcss/forms')],
};
