const { identity } = require('./identity');

exports.compose = (...fns) => {
  fns = fns.filter(fn => fn && fn !== identity);

  switch (fns.length) {
    case 0:
      return identity;
    case 1:
      return fns[0];
    default:
      return next => fns.reduceRight((next, fn) => fn(next), next);
  }
};
