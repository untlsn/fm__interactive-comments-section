import colors from 'windicss/colors';

module.exports = {
  extract: {
    include: ['**/*.{vue,css}'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    colors: {
      main: '#5357B4',
      warn: '#ED6368',
      ...colors,
    },
  },
};
