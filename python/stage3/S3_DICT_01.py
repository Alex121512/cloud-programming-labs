
def get_path(obj, path, fallback=None):
    current = obj
    for key in path.split("."):
        if not isinstance(current, dict):
            return fallback
        if key not in current:
            return fallback
        current = current[key]
    return current


# Tests
data = {"a": {"b": {"c": 42}}}
print(get_path(data, "a.b.c", None))
print(get_path(data, "a.b.x", "N/A"))
print(get_path(data, "a.b.c.d", "N/A"))
