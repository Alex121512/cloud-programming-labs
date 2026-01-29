def parse_line(line):
    try:
        level, rest = line.split(":", 1)
        parts = rest.strip().split()
        data = {"level": level}
        for p in parts:
            k, v = p.split("=")
            data[k] = v
        return data
    except Exception:
        return None


lines = [
    "INFO: user=42 action=login",
    "ERROR: user=5 action=fail",
    "INFO: user=7 action=logout",
]

users = []

for line in lines:
    parsed = parse_line(line)
    if not parsed or parsed.get("level") != "INFO":
        continue
    try:
        users.append(int(parsed["user"]))
    except Exception:
        continue

print(users)
