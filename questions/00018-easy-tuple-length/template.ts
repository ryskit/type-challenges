type Length<T extends readonly any[]> = T["length"]
// type Length<T> = T extends readonly [...infer _Rest] ? T["length"] : never;
