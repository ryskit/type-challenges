type Last<T extends any[]> = T extends [...infer Rest, infer U] ? U : never

