exports.createLambda = pambda =>
  pambda((event, context, callback) => callback(new Error('Fail')));