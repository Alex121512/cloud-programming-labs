def grade(score):
    try:
        score = int(score)
    except (TypeError, ValueError):
        return None

    if score < 0 or score > 100:
        return None
    elif score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"


# Boundary tests
tests = [59, 60, 69, 70, 89, 90, 100, 101]

for t in tests:
    print(f"score={t} -> {grade(t)}")
