type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2)
    ? (<T>() => T extends Y ? 1 : 2) extends
      (<T>() => T extends X ? 1 : 2)
        ? true
        : false
    : false

type Includes<T extends readonly any[], U> =
  T extends readonly [infer F, ...infer R]
    ? Equal<F, U> extends true
      ? true
      : Includes<R, U>
    : false