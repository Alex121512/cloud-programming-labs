def chunk(lst, size):
    if size <= 0:
        return None

    result = []
    for i in range(0, len(lst), size):
        result.append(lst[i:i + size])
    return result


# Tests
print(chunk([1, 2, 3, 4, 5, 6, 7], 3))
print(chunk([1, 2, 3], 0))
