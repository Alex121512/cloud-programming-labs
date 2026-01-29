def merge_defaults(defaults, overrides):
    return {**defaults, **overrides}


# Tests
defaults = {"a": 1, "b": {"x": 1}}
overrides = {"b": {"y": 2}}

merged = merge_defaults(defaults, overrides)
print(merged)

# Shallow merge explanation:
# The nested dict under "b" is replaced entirely, not merged deeply.
