function groupBy(items, key) {
  const res = {};

  for (let i = 0; i < items.length; i++) {
    const value = items[i][key];

    if (!res[value]) {
      res[value] = [];
    }

    res[value].push(items[i]);
  }

  return res;
}

// Tests
const users = [
  { name: "Ala", role: "admin" },
  { name: "Ola", role: "user" },
  { name: "Kuba", role: "admin" },
];

console.log(groupBy(users, "role"));
