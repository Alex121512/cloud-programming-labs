function runCommand(cmd) {
  switch (cmd) {
    case "start":
      return "System started";
    case "stop":
      return "System stopped";
    case "status":
      return "System status: OK";
    default:
      return "Unknown command";
  }
}

// Tests
console.log(runCommand("start"));
console.log(runCommand("status"));
console.log(runCommand("stop"));
console.log(runCommand("restart"));
