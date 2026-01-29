def sample_function():
    pass

values = {
    "int": 10,
    "float": 3.14,
    "str": "hello",
    "bool": True,
    "none": None,
    "list": [1, 2],
    "tuple": (1, 2),
    "dict": {"a": 1},
    "set": {1, 2},
    "function": sample_function
}

print(f"{'name':<10} {'value':<15} {'type(x)':<30} {'type(x).__name__'}")
print("-" * 80)

for name, val in values.items():
    print(f"{name:<10} {str(val):<15} {str(type(val)):<30} {type(val).__name__}")
