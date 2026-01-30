type MyAwaited<T> = T extends PromiseLike<infer U> ? U : T
