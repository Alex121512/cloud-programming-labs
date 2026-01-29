def calc(a, op, b):
    try:
        a = float(a)
        b = float(b)
    except (TypeError, ValueError):
        return None

    match op:
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            if b == 0:
                return None
            return a / b
        case _:
            return None


# Tests
tests = [
    (1, "+", 2),
    (5, "-", 3),
    (4, "*", 2),
    (10, "/", 2),
    (10, "/", 0),
    ("a", "+", 1),
    (1, "%", 2)
]

for a, op, b in tests:
    print(f"{a} {op} {b} -> {calc(a, op, b)}")
