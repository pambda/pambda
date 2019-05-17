# pambda

プラグイン構成可能な Lambda.

## 使い方

このパッケージを使うことで、以下のように、関数合成で Lambda ハンドラーを定義できる。

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

## 定義

### Pambda

プラグイン可能な Lambda として以下の関数を Pambda という名前で定義する。

``` javascript
type Pambda = (next: Lambda) => Lambda
```

この関数は Lambda を返す。 その Lambda が次に呼び出すべき Lambda を引数 next で指定する。

next で次に実行する Lambda を指定できるので、１つの大きな Lambda を複数の小さな Lambda に分割して実装することができる。

### Lambda

``` javascript
type Lambda = (event, context, callback) | (event, context) => Promise
```

Lambda は callback スタイルの関数と async function の両方に対応する。

Pambda の中で Lambda を呼び出す際には、どちらの形式の関数であっても動くようにする必要がある。

## API

### compose(...pambdas: Pambda[]): Pambda

指定した Pambda を合成した Pambda を返す。

合成された Pambda に最後に実行する Lambda を渡すと、最初の引数で指定した Pambda の Lambda が返される。
その Lambda を実行する事で引数で指定した順に Pambda 内の Lambda が実行される。

引数 `pambdas` の中に `identity` Pambda があった場合、それらは合成対象としない。

falsy な値も同様に無視される。これは以下のような環境変数に依存した処理で役に立つ。

``` javascript
compose(
  process.env.AWS_SAM_LOCAL === 'true' && localOnlyPambda,

  ...
)
```

### createLambda(pambda: Pambda): Lambda

指定した Pambda から Lambda を返す。
返された Lambda をメインのハンドラーとして export して使う。

この関数は渡された Pambda の引数 next に [lambda-terminator](https://github.com/pambda/lambda-terminator) を渡す。
lambda-terminator が実行されることは、Pambda にバグがあることを意味する。

### identity: Pambda

何もしない Pambda.

## 関連パッケージ

- [create-pambda-app](https://github.com/pambda/create-pambda-app)
- [pambda-404](https://github.com/pambda/pambda-404)
- [pambda-aws](https://github.com/pambda/pambda-aws)
- [pambda-binary-support](https://github.com/pambda/pambda-binary-support)
- [pambda-by-env](https://github.com/pambda/pambda-by-env)
- [pambda-cache](https://github.com/pambda/pambda-cache)
- [pambda-cookie](https://github.com/pambda/pambda-cookie)
- [pambda-cwlogs](https://github.com/pambda/pambda-cwlogs)
- [pambda-env](https://github.com/pambda/pambda-env)
- [pambda-errorhandler](https://github.com/pambda/pambda-errorhandler)
- [pambda-github-fetch](https://github.com/pambda/pambda-github-fetch)
- [pambda-headers](https://github.com/pambda/pambda-headers)
- [pambda-json-api](https://github.com/pambda/pambda-json-api)
- [pambda-jwt-authorizer](https://github.com/pambda/pambda-jwt-authorizer)
- [pambda-logger](https://github.com/pambda/pambda-logger)
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
