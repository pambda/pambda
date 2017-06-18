const { terminator } = require('lambda-terminator');

exports.createLambda = pambda => pambda(terminator);
