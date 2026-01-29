def pipe_safe(*fns):
    def apply(x):
        try:
            for fn in fns:
                x = fn(x)
            return {"ok": True, "value": x}
        except Exception as e:
            return {"ok": False, "error": str(e)}
    return apply


def fail_on_negative(x):
    if x < 0:
        raise ValueError("Negative not allowed")
    return x * 2


safe = pipe_safe(lambda x: x + 1, fail_on_negative)

print(safe(1))
print(safe(-2))
