def compose(*fns):
    def apply(x):
        for fn in reversed(fns):
            x = fn(x)
        return x
    return apply


# Tests
f_pipe = pipe(lambda x: x + 1, lambda x: x * 2)
f_comp = compose(lambda x: x + 1, lambda x: x * 2)

print(f_pipe(3))
print(f_comp(3))
