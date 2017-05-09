export const compose = (...pambdas) => next =>
  pambdas.reduceRight(
    (next, pambda) => pambda(next),
    next);
