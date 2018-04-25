const test = require('tape');
const {
  compose,
  createLambda,
  identity,
} = require('..');

test('test', t => {
  t.plan(2);

  const countUp = next => (event, context, callback) => {
    next(event + 1, context, callback);
  };

  const handler = createLambda(
    compose(
      countUp,
      countUp,
      identity,
      countUp,
      next => (event, context, callback) => {
        callback(null, event);
      }
    )
  );

  handler(0, {}, (err, result) => {
    t.error(err);
    t.equal(result, 3);
  });
});
