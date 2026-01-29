def stats(nums):
    if not nums:
        return None

    total = 0
    min_val = nums[0]
    max_val = nums[0]

    for n in nums:
        total += n
        if n < min_val:
            min_val = n
        if n > max_val:
            max_val = n

    return {
        "min": min_val,
        "max": max_val,
        "avg": total / len(nums),
        "sum": total
    }


# Tests
print(stats([1, 2, 3, 4]))
print(stats([-5, 0, 5]))
print(stats([]))
