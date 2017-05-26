# pambda

プラグイン構成可能な Lambda.

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
type Lambda = (event, context, callback)
```

## 使い方

このパッケージが提供する compose 関数を使用して、プラグインとなる Pambda を合成し、合成した Pambda を Lambda ハンドラーとして export して使用する。

``` javascript
import { compose, createLambda } from 'pambda';

export const handler = createLambda(
  compose(
    pambda1,
    pambda2,
    ...
  )
);
```

## API

### compose(...pambdas: Pambda[]): Pambda

指定した Pambda を合成した Pambda を返す。

合成された Pambda に最後に実行する Lambda を渡すと、最初の引数で指定した Pambda の Lambda が返される。
その Lambda を実行する事で引数で指定した順に Pambda 内の Lambda が実行される。

### createLambda(pambda: Pambda): Lambda

指定した Pambda から Lambda を返す。
返された Lambda をメインのハンドラーとして export して使う。

Pambda の引数 next には、エラーを返す Lambda が渡される。

## 関連パッケージ

- [pambda-404](https://github.com/pambda/pambda-404)
- [pambda-binary-support](https://github.com/pambda/pambda-binary-support)
- [pambda-cache](https://github.com/pambda/pambda-cache)
- [pambda-github-fetch](https://github.com/pambda/pambda-github-fetch)
- [pambda-path](https://github.com/pambda/pambda-path)
- [pambda-router](https://github.com/pambda/pambda-router)
- [pambda-serve-static](https://github.com/pambda/pambda-serve-static)

## License

MIT
