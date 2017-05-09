# pambda

Pluggable Lambda for AWS.

## Definition

### Pambda

``` javascript
type Pambda = (next: Lambda) => Lambda
```

### Lambda

``` javascript
type Lambda = (event, context, callback)
```

## API

### compose(...pambdas: Pambda[]): Pambda

### createLambda(pambda: Pambda): Lambda

## Related

- [pambda-404](https://github.com/pambda/pambda-404)
- [pambda-binary-support](https://github.com/pambda/pambda-binary-support)
- [pambda-cache](https://github.com/pambda/pambda-cache)
- [pambda-github-fetch](https://github.com/pambda/pambda-github-fetch)
- [pambda-path](https://github.com/pambda/pambda-path)
- [pambda-router](https://github.com/pambda/pambda-router)
- [pambda-serve-static](https://github.com/pambda/pambda-serve-static)

## License

MIT
