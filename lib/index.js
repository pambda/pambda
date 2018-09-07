const { terminator } = require('lambda-terminator');

const identity = next => next;

const compose = (...fns) => {
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

const createLambda = pambda => pambda(terminator);

/*
 * Exports.
 */
exports.identity = identity;
exports.compose = compose;
exports.createLambda = createLambda;
