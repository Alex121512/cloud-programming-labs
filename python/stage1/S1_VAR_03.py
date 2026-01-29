lst = [1, 2, 3]
lst[0] = 99
print("List modified:", lst)

tup = (1, 2, 3)
try:
    tup[0] = 99
except Exception as e:
    print("Tuple error:", e)

# Lists are mutable, tuples are immutable.
