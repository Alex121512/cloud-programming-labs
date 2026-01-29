def to_float_gen(values):
    for v in values:
        try:
            yield float(v.strip())
        except Exception:
            continue


data = [" 1 ", "x", "2.5", " 3 "]

total = sum(x * 2 for x in to_float_gen(data))
print(total)
