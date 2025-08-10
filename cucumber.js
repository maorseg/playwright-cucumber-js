module.exports = {
  default: [
    '--require features/step-definitions/*.js',
    '--require support/*.js',
    '--format json:reports/json/cucumber_report.json'
  ].join(' ')
};




