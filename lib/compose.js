const { identity } = require('./identity');

exports.compose = (...pambdas) => {
  pambdas = pambdas.filter(pambda => pambda && pambda !== identity);

  return next => pambdas.reduceRight(
    (next, pambda) => pambda(next), next);
};
