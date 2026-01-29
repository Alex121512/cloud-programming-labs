big_int = 10 ** 100
print("Type:", type(big_int))
print("Digits:", len(str(big_int)))

big_float = float(big_int)
print("Big float:", big_float)

# Floats lose precision for very large numbers, ints do not.
