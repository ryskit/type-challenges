type First<T extends any[]> = T extends [infer U, ...any[]] ? U : never
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]