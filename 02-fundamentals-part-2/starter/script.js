// console.log("Part 2: Functions ready!");

// //Functions - Declaration and Expressions

// console.log(`=== FUNCTION ===`);

// function logger() {
//     console.log(`My name is Ronald`);
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(5, 3));

// // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // const juice3 = `Juice with 3 apples and 2 oranges.`;

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);
// console.log(juice1);

// const calAge = function (birthyear) {
//     return 2025 - birthyear;
// };

// const age1 = calAge(2005);
// console.log(age1);
// console.log(calAge(2003));

// function introduce(firstName, lastName, age) {
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I am ${20} years old`;
//     return introduction;
// }

//     console.log(introduce("Ronald", "Sena", "20"));

//     function yearsUntilRetirement(birthYear, firstName) {
//         const age = calAge (birthYear)
//         const retirement = 65 - age;

//         if (retirement > 0) {
//             return `${firstName} retires in ${retirement} years`;
//         } else {
//             return `${firstName} had already retired`;
//         }
//     }

//     console.log(yearsUntilRetirement(2005, "Ronald"));

//     // Global scope
// const globalVar = "I am global";

// function testScope() {
//   // Function scope
//   const localVar = "I am local";
//   console.log(globalVar);
//   console.log(localVar);
// }

// testScope();
// console.log(globalVar); 

// ////////////////////////////////////
// // Coding Challenge #1

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   const average = (score1 + score2 + score3)/3;
//   return average; 
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
// }


// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// ////////////////////////////////////
// // Arrays - Creation and Access
// console.log("=== ARRAYS ===");

// // Array creation
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// // Different data types in same array
// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);

// // Alternative way (but literal notation is preferred)
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// // Array indexing starts at 0
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);

// console.log(friends[friends.length - 1]);


// friends[1] = "Jay";
// console.log(friends);


// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991];
// console.log(jonas);

// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };

// const ages = [calcAge(2002), calcAge(2003), calcAge(2005)];
// console.log(ages);

// ////////////////////////
// // Array Methods - Adding Elements

// const newLength = friends.push("Steven");
// console.log(friends);
// console.log(newLength);
// const newLength2 = friends.push("John");
// console.log(friends);

// friends.unshift("Maria");
// console.log(friends);

// const popped = friends.pop();
// const popped2 = friends.pop();
// console.log(popped);
// console.log(popped2);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf("Micheal"));
// console.log(friends.indexOf("Maria"));
// console.log(friends.indexOf("Jay"));

// console.log(friends.includes("Jay")); 
// console.log(friends.includes("Maria")); 

// // Array Iteration - Loops
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);

//     friends.forEach(
//         function(friend, index) {
//             console.log(`Friend${index + 1}: ${friend}`);
//         }
//     )
// }

// const grades2 = [82, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades.length; i++) {
//   total += grades[i];
// }

// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades.forEach(
//     grade => {
//         if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades2.length} students passed`);


// const grades = [78, 85, 92, 67, 88, 95, 73, 82];
// let sum = 0;
// for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
// } 

//     const average = sum / grades.length;
//     console.log(`Average grade: ${average.toFixed(2)}`);

//     const highestGrade = Math.max(...grades);
//     console.log(`The highest grade is ${highestGrade}`);

//     const lowestGrade = Math.min(...grades);
//     console.log(`The lowest grade is ${lowestGrade}`);

//     let passedCount = 0;
//     grades.forEach(
//         grade => {
//         if (grade >= 70) passedCount++;
//     });
//     console.log(`${passedCount} out of ${grades.length} students passed`);


////////////////////////////////////
// // The Array Problem
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann", 
//   age: 2037 - 1991, 
//   job: "teacher", 
//   friends: ["Michael", "Peter", "Steven"], 
// };

// //Dot Noatation
// console.log(jonas);
// console.log(jonas.firstName);
// console.log(jonas.lasttName);
// console.log(jonas.age);

// //Bracket Notation
// console.log(jonas["firstName"]);
// console.log(jonas["lastName"]);
// console.log(jonas["age"]);


// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);

// // Both notations work for modification
// jonas.job = "Programmer";
// jonas["age"] = 35;
// console.log(jonas);

// // Add new properties 
// jonas.location = "Philippines";
// jonas["twitter"] = "@jonasschmedtman";
// jonas.hasDriversLicense = true;
// console.log(jonas);


// // Ordered, indexed data - think lists
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// // Objects
// const person = {
//   name: "Jonas",
//   age: 46,
//   occupation: "teacher",
// };

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };

// // Objects can contain arrays, arrays can contain objects
// const student = {
//   name: "Sarah",
//   grades: [85, 92, 78], 
//   address: {
//     street: "123 Main St",
//     city: "New York",
//   },
// };

// console.log(student.grades[0]);
// console.log(student.address.city);

// ////////////////////////////////////
// // Object Methods

// const jonas = {
//   firstName: "John",
//   lastName: "Doe",
//   birthYear: 1995,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // Method - function inside object
//   calcAge: function (birthYear) {
//     return 2025 - birthYear;
//   },
// };

// console.log(jonas.calcAge(2005));

// // 'this' keyword
// const jonasImproved = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1995,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2025 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// }

// console.log(jonasImproved.calcAge());
// console.log(jonasImproved.age);
// console.log(jonasImproved.getSummary());


////////////////////////////////////
// Coding Challenge #3 - User Profile System

const user = {
  firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

  // Calculate age method
  calcAge: function () {
    // Calculate age and store as this.age
    // Hint: Use new Date().getFullYear() for current year
    // Your code here
    this.age = new Date(). getFullYear() - this.birthYear;
    return this.age;
  },

  // Add friend method
  addFriend: function (name, status = "active") {
    // Add new friend object to this.friends array
    // Return the new length of friends array
    // Your code here
    this.friends.push({name, status: status});
    return this.friends.length;
  },

  // Get active friends count
  getActiveFriends: function () {
    const ActiveFriends = this.friends.filter(
        (friend => friend.status === "active")
    );
    return ActiveFriends.length;
  },

  // Toggle active status
  toggleStatus: function () {
    this.isActive = !this.isActive;
    return this.isActive;
  },

  // Generate profile summary
  getSummary: function () {
    const age = this.calcAge();
    const activeFriends = this.getActiveFriends();
    const status = this.active ? "active" : "away";

    return `${this.firstName} ${this.lastName} (${age}) from ${this.location}
    Currently ${status}
    ${activeFriends} active friends out of ${this.friends.lengtj} total
    Interest: ${this.interests.join(', ')}
    Connected and sharing life's adventures`;
    C
  },
};

// Test your user profile system
console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());

