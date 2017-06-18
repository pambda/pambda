# pambda

Pluggable Lambda for AWS.

## Definition

### Pambda

``` javascript
type Pambda = (next: Lambda) => Lambda
```

This function returns Lambda. It specifies the Lambda that Lambda should call next by argument `next`.

Since `next` can specify Lambda to be executed next, one large Lambda can be divided into multiple smaller Lambdas.

### Lambda

``` javascript
type Lambda = (event, context, callback)
```

## API

### compose(...pambdas: Pambda[]): Pambda

Return a Pambda which synthesized specified Pambdas.

If you pass the last executed Lambda to the synthesized Pambda, the Lambda of the Pambda specified by the first argument is returned.
By executing that Lambda, Lambda in Pambda is executed in the order specified by the arguments.

### createLambda(pambda: Pambda): Lambda

Return Lambda from the specified Pambda. The Lambda is exported and used as the main handler.

Pambda's argument `next` is passed Lambda which returns an error.

## Related

- [pambda-404](https://github.com/pambda/pambda-404)
- [pambda-binary-support](https://github.com/pambda/pambda-binary-support)
- [pambda-cache](https://github.com/pambda/pambda-cache)
- [pambda-cookie](https://github.com/pambda/pambda-cookie)
- [pambda-errorhandler](https://github.com/pambda/pambda-errorhandler)
- [pambda-github-fetch](https://github.com/pambda/pambda-github-fetch)
- [pambda-json-api](https://github.com/pambda/pambda-json-api)
- [pambda-path](https://github.com/pambda/pambda-path)
- [pambda-redux](https://github.com/pambda/pambda-redux)
- [pambda-router](https://github.com/pambda/pambda-router)
- [pambda-serve-static](https://github.com/pambda/pambda-serve-static)
- [pambda-tap](https://github.com/pambda/pambda-tap)
- [pambda-terminator](https://github.com/pambda/pambda-terminator)

## License

MIT
