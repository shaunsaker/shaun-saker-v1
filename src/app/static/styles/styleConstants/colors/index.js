const getPrimaryColor = (opacity) => `rgba(54, 73, 88, ${opacity})`;

const colors = {
  primary: getPrimaryColor(1),
  secondary: '#3B6064',
  tertiary: '#F2F5EA',
  accent: '#49BC92',
  primaryText: getPrimaryColor(1),
  secondaryText: getPrimaryColor(0.67),
  grey: getPrimaryColor(0.33),
  lightGrey: getPrimaryColor(0.167),
  transBlack: 'rgba(0, 0, 0, 0.67)',
  transWhite: 'rgba(255, 255, 255, 0.67)',
};

export { getPrimaryColor };

export default colors;
