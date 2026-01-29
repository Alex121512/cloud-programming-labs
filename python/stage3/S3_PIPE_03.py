def collapse_spaces(s):
    return " ".join(s.split())


normalize = pipe(
    str.strip,
    str.lower,
    collapse_spaces
)

print(normalize(" Ala   Ma   Kota "))
