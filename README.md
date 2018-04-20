# pambda

Pluggable Lambda for AWS.

## Usage

By using this package, you can define a Lambda handler in function synthesis as follows:

``` javascript
const { compose, createLambda } = require('pambda');

exports.handler = createLambda(
  compose(
    pambda1,
    pambda2,
    ...
  )
);
```

## Definition

### Pambda

``` javascript
type Pambda = (next: Lambda) => Lambda
```

This function returns Lambda. It specifies the Lambda that Lambda should call next by argument `next`.

Since `next` can specify Lambda to be executed next, one large Lambda can be divided into multiple smaller Lambdas.

### Lambda

``` javascript
type Lambda = (event, context, callback) | (event, context) => Promise
```

Lambda supports both callback style functions and async functions.

When invoking Lambda in Pambda, it is necessary to make it work in both types of functions.

## API

### compose(...pambdas: Pambda[]): Pambda

Return a Pambda which synthesized specified Pambdas.

If you pass the last executed Lambda to the synthesized Pambda, the Lambda of the Pambda specified by the first argument is returned.
By executing that Lambda, Lambda in Pambda is executed in the order specified by the arguments.

If there is an `identity` pambda in the argument `pambdas`, they are not to be composited.

### createLambda(pambda: Pambda): Lambda

Return Lambda from the specified Pambda. The Lambda is exported and used as the main handler.

Pambda's argument `next` is passed Lambda which returns an error.

This function passes [lambda-terminator](https://github.com/pambda/lambda-terminator) to argument next in the passed pambda.

The execution of `lambda-terminator` means there is a bug in the pambda.

### identity: Pambda

This pambda do nothing.

## Context Extending

Some pambdas add properties into a context. Adding properties are following:

| Property     | Pambda                                                       |
|--------------|--------------------------------------------------------------|
| [AWSService] | [pambda-aws](https://github.com/pambda/pambda-aws)           |
| logEvent     | [pambda-cwlogs](https://github.com/pambda/pambda-cwlogs)     |
| redirect     | [pambda-redirect](https://github.com/pambda/pambda-redirect) |
| render       | [pambda-pug](https://github.com/pambda/pambda-pug)           |

## Event Extending

| Property | Pambda                                                   |
|----------|----------------------------------------------------------|
| cookies  | [pambda-cookie](https://github.com/pambda/pambda-cookie) |

## Related

- [create-pambda-app](https://github.com/pambda/create-pambda-app)
- [pambda-404](https://github.com/pambda/pambda-404)
- [pambda-aws](https://github.com/pambda/pambda-aws)
- [pambda-binary-support](https://github.com/pambda/pambda-binary-support)
- [pambda-by-env](https://github.com/pambda/pambda-by-env)
- [pambda-cache](https://github.com/pambda/pambda-cache)
- [pambda-cookie](https://github.com/pambda/pambda-cookie)
- [pambda-cwlogs](https://github.com/pambda/pambda-cwlogs)
- [pambda-errorhandler](https://github.com/pambda/pambda-errorhandler)
- [pambda-github-fetch](https://github.com/pambda/pambda-github-fetch)
- [pambda-json-api](https://github.com/pambda/pambda-json-api)
- [pambda-path](https://github.com/pambda/pambda-path)
- [pambda-pug](https://github.com/pambda/pambda-pug)
- [pambda-records](https://github.com/pambda/pambda-records)
- [pambda-redirect](https://github.com/pambda/pambda-redirect)
- [pambda-redux](https://github.com/pambda/pambda-redux)
- [pambda-router](https://github.com/pambda/pambda-router)
- [pambda-s3-fetch](https://github.com/pambda/pambda-s3-fetch)
- [pambda-serve-static](https://github.com/pambda/pambda-serve-static)
- [pambda-tap](https://github.com/pambda/pambda-tap)
- [pambda-terminator](https://github.com/pambda/pambda-terminator)

## License

MIT
