def active_user_names(users):
    return sorted(
        [u["name"].upper() for u in users if u.get("active")]
    )


# Tests
users = [
    {"id": 1, "name": "Ola", "active": True},
    {"id": 2, "name": "Max", "active": False},
    {"id": 3, "name": "Ivan", "active": True},
]

print(active_user_names(users))
