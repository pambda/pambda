const { identity } = require('./identity');

exports.compose = (...pambdas) => next =>
  pambdas
    .filter(pambda => pambda && pambda !== identity)
    .reduceRight(
      (next, pambda) => pambda(next),
      next);
