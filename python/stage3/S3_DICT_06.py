def group_by(items, key):
    groups = {}
    for item in items:
        value = item.get(key)
        if value not in groups:
            groups[value] = []
        groups[value].append(item)
    return groups


# Tests
users = [
    {"name": "Ola", "role": "admin"},
    {"name": "Max", "role": "user"},
    {"name": "Ivan", "role": "admin"},
]

print(group_by(users, "role"))
