from pprint import pprint

def inspect(v):
    try:
        iter(v)
        is_iterable = True
    except Exception:
        is_iterable = False

    return {
        "type_name": type(v).__name__,
        "is_none": v is None,
        "is_callable": callable(v),
        "is_iterable": is_iterable,
        "truthy": bool(v)
    }

values = [
    0, 1, "", "text", [], [1],
    {}, {"a": 1}, None, lambda x: x
]

results = {repr(v): inspect(v) for v in values}
pprint(results)
