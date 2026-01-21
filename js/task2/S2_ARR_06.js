function getActiveUserNames(users) {
  return users
    .filter((user) => user.active)
    .map((user) => user.name.toUpperCase())
    .sort();
}

// Tests
const users = [
  { id: 1, name: "Ala", active: true },
  { id: 2, name: "Ola", active: false },
  { id: 3, name: "Kuba", active: true },
  { id: 4, name: "bartek", active: true },
];

console.log(getActiveUserNames(users));
// ["ALA", "BARTEK", "KUBA"]
