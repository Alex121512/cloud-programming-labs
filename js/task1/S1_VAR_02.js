try {
  {
    let blockLet = "Hey! I wish you all the best!";
  }
  console.log(blockLet); // ReferenceError
} catch (error) {
  console.log("Let variable is not accessible outside its block.");
}

// ----- var example -----
try {
  {
    var blockVar = "Happy new Year!";
  }
  console.log(blockVar); // Works
} catch (error) {
  console.log("Oops. Something went wrong!");
}

/*
  Explanation:
  let is block-scoped, so it cannot be accessed outside the { } block where it is declared.
  var is function-scoped, not block-scoped, so it becomes available outside the block.
  */
