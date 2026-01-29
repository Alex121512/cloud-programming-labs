def run_command(cmd):
    match cmd:
        case "start":
            return "Service started"
        case "stop":
            return "Service stopped"
        case "status":
            return "Service running"
        case _:
            return "UNKNOWN_COMMAND"


# Tests
commands = ["start", "stop", "status", "restart", None]

for c in commands:
    print(f"{c} -> {run_command(c)}")
