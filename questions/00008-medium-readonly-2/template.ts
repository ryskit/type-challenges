type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [Q in keyof T as Q extends K ? Q : never]: T[Q]
} & {
  [P in keyof T as P extends K ? never : P]: T[P]
}
