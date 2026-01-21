const user = { name: "Ala", tags: [] };

user.tags.push("manager");
user.tags.push("actor");

console.log("Final user object:", user);

try {
  user = {};
} catch (error) {
  console.log("Error on reassignment:", error.message);
}
