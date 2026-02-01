type Chainable<T = object> = {
  option<K extends string, V>(key: Exclude<K, keyof T>, value: V): Chainable<Omit<T, K> & Record<K, V>>
  get(): T
}
