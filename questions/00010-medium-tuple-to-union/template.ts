type TupleToUnion<T extends any[]> = T extends [infer U, ...infer Rest] ? U | TupleToUnion<Rest> : never
