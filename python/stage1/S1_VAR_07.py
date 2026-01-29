import math

nan1 = float("nan")

try:
    nan2 = 0.0 / 0.0
except ZeroDivisionError:
    nan2 = float("nan")

print("nan1 == nan1:", nan1 == nan1)
print("nan2 == nan2:", nan2 == nan2)

print("isnan nan1:", math.isnan(nan1))
print("isnan nan2:", math.isnan(nan2))
