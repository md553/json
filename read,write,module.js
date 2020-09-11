const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("me", "you");

console.log("this is a replaced text file")
console.log(text)

console.log("creating a new file")
fs.writeFileSync("you.txt",text)
