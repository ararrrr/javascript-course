// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log("GUMANA KA");


// console.log("=== VARIABLES ===");

// let firstName  ="Jonas";
// console.log(firstName);

// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1414;
// console.log(PI);

// var job = "programmer";
// job = "Teacher";
// console.log(job);

// let lastName = "Doe";

// // let 3years = 3;
// // let jonas&matilda = "JM";
// // let new = 27;

// console.log("=== DATA TYPES ===");

// age = 24;
// console.log(age);
// console.log(typeof age);

// //String
// let userName = "mark";
// console.log(userName);
// console.log(typeof userName);

// //Boolean
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// //Undefined
// let year;
// console.log(year);
// console.log(typeof year);

// //Dyanmic variable
// let dyanmicVariable = 23;
// console.log(dyanmicVariable, typeof dyanmicVariable);

// // Change to a string
// dyanmicVariable = "Now I'm a string!";
// console.log(dyanmicVariable, typeof dyanmicVariable);

// // Change to a boolean
// dyanmicVariable = true;
// console.log(dyanmicVariable, typeof dyanmicVariable);



// /////
// //Basic Operators - Math operators
// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// console.log("Math operations:");
// console.log("Additiom:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication", 4 * 7);
// console.log("Divisiom", 15/3);
// console.log("Exponentiation:", 2 ** 3);


// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!");
// console.log("I am " + 25 + " years old");

// ////////////

// console.log("=== ASSIGNMENT OPERATIORS ===");

// let x = 10 + 5;
// console.log("x starts as:", x);

// x += 10;
// console.log("x starts += 10:", x);

// x *=4;
// console.log("x starts *= 4:", x);

// x /= 2;
// console.log("x starts /= 2:", x);

// ////

// console.log("=== COMPARISON OPERATIORS ===");

// console.log("Age comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparisons:");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// ////
// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);

// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018);

// // Operator Precedence

// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);

// const averageAge = ( ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// ///TEST DATA 1
// const markBMI = massMark / heightMark **2;
// console.log("Mark's BMI:", + markBMI);
// const johnBMI = massJohn / heightJohn **2;
// console.log("John's BMI:", + johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log("Mark has higher BMI:" + markHigherBMI);


// // Your code here:
// // 1. Calculate BMIs
// // 2. Create markHigherBMI variable
// // 3. Log results to console

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2+3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`);
// console.log(`Just a regular string...`);


// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// // New way - natural
// console.log(`String
// multiple
// lines`);

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const score = 85;

// if (score >= 60) {
//   console.log(`You passed with ${score} points! 🎉`);
//   console.log("Congratulations!");
// } else {
//   const pointsNeeded = 60 - score;
//   console.log(`You failed. Need ${pointsNeeded} more points.`);
// }

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));


// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// // Better approach for checking if defined:
// if (height !== undefined) {
//   console.log("Height is defined");
// }


// Type Conversion and Coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

//Automatic Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" * "2");

let n = "1" + 1;
console.log(n);

n = n - 1;
console.log(n);

//Type conversion = explecit/manual  (recommend)
//Type of coercion = implecit/automatic (javascript does itself)


//Equality - Strict

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// console.log("18" === 18);
// console.log("18" == 18);
// console.log(18 === 18);

// // why == can be dangerous
// console.log("0" == 0);
// console.log(0 == false);
// console.log("0" == false);
// console.log(null == undefined); //special case

// console.log("" == 0);
// console.log("   " == 0);

// // best practice
// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } if (favourite == 23) {
//   console.log("23 string is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?");

//Logical Operators
// const hasDriversLicense = false;
// const hasGoodVision = true;

// console.log(` AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
// console.log(` OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
// console.log(` NOT OPERATOR: ${!hasDriversLicense}`);

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Ronald is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

/////////////////////////////////////
// The Conditional (Ternary) Operator

// const age = 19;

// // Basic ternary: condition ? valueIfTrue : valueIfFalse
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// //if else statement
// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

//////////////////////
//Coding Challenge
const bill = 275;


const tip = bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)



