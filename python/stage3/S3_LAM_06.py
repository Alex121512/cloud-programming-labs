def map_values(d, fn):
    return {k: fn(v) for k, v in d.items()}


# Tests
data = {"a": 1, "b": 2, "c": 3}
print(map_values(data, lambda x: x * 10))
