module.exports = {
  default: [
    '--require features/step-definitions/*.js',
    '--require support/*.js',
  ].join(' ')
};