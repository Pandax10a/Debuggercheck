let username = "alphaomega";
let user_age = 31;
let is_member = true;
let max_volume = 100;
let current_volume = 22;

let result = max_volume/current_volume;
let result2 = result*100;

if (username === "admin") {
    console.log("Greetings Admin!!");
} else if ((user_age >= 30) && (is_member === true)) {
    console.log("Greetings master");
} else {
    console.log("I'm going to put myself in suspend mode now");
}

console.log(`Hello ${username}`);
console.log(`You are: ${user_age} years of age`);



console.log(`${result}`);
console.log(`${result2}`);

let usernames = [`alpha`, `beta`, `gamma`, `epsilon`, `omega`];
let user_ages = [5, 77, 339, 9502, 32020];

let first_user_name = usernames[0];
let last_user_names = usernames[4];
let middle_user_age = user_ages[2];

