def shipping_cost(weight_kg, is_member):
    try:
        weight = float(weight_kg)
    except (TypeError, ValueError):
        return None

    if weight <= 0:
        return None
    elif weight <= 1:
        cost = 10
    elif weight <= 5:
        cost = 20
    else:
        cost = 30

    if is_member:
        cost *= 0.8  # 20% discount

    return cost


# Tests (including boundaries)
tests = [
    (-1, False),
    (0, True),
    (0.5, False),
    (1, True),
    (5, False),
    (5.1, True),
    ("abc", False)
]

for w, m in tests:
    print(f"weight={w}, member={m} -> {shipping_cost(w, m)}")
