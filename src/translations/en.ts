export const EN_WORDS = [
  'Number expected',
  'Number should be positive',
  'Percentage expected',
  'Percentage should be between 0 and 100',
  'Percentage should be between 1 and 100',
  'Number should be between 0 and 10',
  'Number should be between -200 and 0',
  'Must not be blank',
  'Number should be positive and greater than zero',
];

export const EN_ERROR_TRANSLATIONS = {
  ...EN_WORDS.reduce((prevValue, w) => ({ ...prevValue, [w]: w }), {}),
};
