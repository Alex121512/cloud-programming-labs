def at_least(min_value):
    return lambda x: x >= min_value


nums = [1, 5, 10, 15]
filtered = list(filter(at_least(10), nums))

print(filtered)
