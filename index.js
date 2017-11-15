var classnames = require('classnames')

module.exports = function () {
  return classnames.apply(null, arguments) || undefined;
};
