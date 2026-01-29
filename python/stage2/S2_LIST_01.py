
def clean_numbers(values):
    result = []
    for v in values:
        try:
            result.append(float(v.strip()))
        except (ValueError, AttributeError):
            continue
    return result


# Tests
tests = [" 1 ", "x", "2", " 3.5 ", "", None]
print(clean_numbers(tests))
