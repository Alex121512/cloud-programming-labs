def pipe(*fns):
    def apply(x):
        for fn in fns:
            x = fn(x)
        return x
    return apply


# Tests
f = pipe(lambda x: x + 1, lambda x: x * 2)
print(f(3))  # (3 + 1) * 2 = 8
