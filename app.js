let username = "alphaomega";
let user_age = 31;
let is_member = true;

if (username === "admin") {
    console.log("Greetings Admin!!");
} else if ((user_age >= 30) && (is_member === true)) {
    console.log("Greetings master");
} else {
    console.log("I'm going to put myself in suspend mode now");
}

console.log(`Hello ${username}`);
console.log(`You are: ${user_age} years of age`);