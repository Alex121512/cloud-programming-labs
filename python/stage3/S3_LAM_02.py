people = [
    {"name": "Ola", "age": 30},
    {"name": "Max", "age": 20},
    {"name": "Ivan", "age": 25},
]

print("Before:", people)

sorted_people = sorted(people, key=lambda p: p["age"])

print("After:", sorted_people)
