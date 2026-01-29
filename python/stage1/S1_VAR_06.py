from test_helper import eq

def to_int_or_none(s):
    try:
        return int(s)
    except (ValueError, TypeError):
        return None

# Tests
eq(to_int_or_none("12"), 12)
eq(to_int_or_none(" 12 "), 12)
eq(to_int_or_none("12x"), None)
eq(to_int_or_none(""), None)
eq(to_int_or_none(None), None)

print("All tests passed for to_int_or_none")
