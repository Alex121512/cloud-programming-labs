def normalize_name(x):
    if not x:
        return "Anonymous"

    name = x.strip()
    if not name:
        return "Anonymous"

    return name


# Tests
tests = ["", " ", None, " Ola "]

for t in tests:
    print(f"{repr(t)} -> {normalize_name(t)}")
