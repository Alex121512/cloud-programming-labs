def find_first_even(nums):
    for n in nums:
        if n % 2 == 0:
            return n
    return None


# Tests
print(find_first_even([1, 3, 5, 6, 7]))
print(find_first_even([1, 3, 5]))
