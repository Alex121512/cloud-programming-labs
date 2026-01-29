def is_truthy(v):
    return bool(v)

values = [0, 1, "", "0", [], [0], {}, None]

for v in values:
    print(f"{repr(v):>8} -> {is_truthy(v)}")
