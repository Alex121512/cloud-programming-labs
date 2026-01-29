def unique(values):
    result = []
    for v in values:
        if v not in result:
            result.append(v)
    return result


# Tests
print(unique([1, 2, 1, 3, 2, 4, 3]))
