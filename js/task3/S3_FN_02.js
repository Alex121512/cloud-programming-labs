const people = [
  { name: "Ala", age: 30 },
  { name: "Ola", age: 20 },
  { name: "Kuba", age: 25 },
];

people.sort((a, b) => a.age - b.age);

console.log(people);
