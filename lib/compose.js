const { identity } = require('./identity');

exports.compose = (...fns) => {
  fns = fns.filter(fn => fn && fn !== identity);

  return next => fns.reduceRight(
    (next, fn) => fn(next), next);
};
