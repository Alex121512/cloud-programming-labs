def pick(d, keys):
    return {k: d[k] for k in keys if k in d}


# Tests
data = {"a": 1, "b": 2, "c": 3}
print(pick(data, ["a", "c", "x"]))
