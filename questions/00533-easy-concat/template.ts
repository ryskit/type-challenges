type Tuple = readonly any[]
type Concat<T extends Tuple, U extends Tuple> = [
  ...T,
  ...U
]
