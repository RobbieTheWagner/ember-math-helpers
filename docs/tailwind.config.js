const path = require('node:path');
const defaultTheme = require('tailwindcss/defaultTheme');
const appEntry = path.join(__dirname, 'app');
const relevantFilesGlob = '**/*.{html,js,ts,hbs,gjs,gts}';
const plugin = require('tailwindcss/plugin');

function makeNegative(obj) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[`-${key}`] = `-${obj[key]}`;
  });

  return newObj;
}

module.exports = {
  content: [path.join(appEntry, relevantFilesGlob)],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      inset: { ...defaultTheme.spacing, ...makeNegative(defaultTheme.spacing) },
      maxWidth: {
        'screen-2xl': '1400px',
        256: '64rem',
        200: '50rem',
      },
      maxHeight: {
        '(screen-16)': 'calc(100vh - 4rem)',
      },
      colors: {
        gray: {
          ...defaultTheme.colors.gray,
          1000: '#12161f',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('focus-visible', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(
            `focus-visible${separator}${className}`
          )}[data-focus-visible-added]`;
        });
      });
    }),
  ],
};
