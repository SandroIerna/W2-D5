/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

console.log(
  "\n--------------------------------Ex1---------------------------------"
);
/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

let length = 4;
let width = 10;
const areaFunction = function (l1, l2) {
  let area = l1 * l2;
  console.log(area);
};
areaFunction(length, width);

console.log(
  "\n--------------------------------Ex2---------------------------------"
);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (integer1, integer2) {
  let sum = integer1 + integer2;
  if (integer1 === integer2) {
    sum *= 3;
  }
  console.log(sum);
};

crazySum(4, 4);

console.log(
  "\n--------------------------------Ex3---------------------------------"
);

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

let givenNumber = 20;
const crazyDiff = function (givenNumber) {
  let absoluteDiff = Math.abs(givenNumber - 19);
  if (givenNumber > 19) {
    absoluteDiff = Math.abs(givenNumber - 19) * 3;
  }
  console.log(absoluteDiff);
};
crazyDiff(givenNumber);

console.log(
  "\n--------------------------------Ex4---------------------------------"
);

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    console.log(true);
  } else {
    console.log(false);
  }
};

boundary(400);

console.log(
  "\n--------------------------------Ex5---------------------------------"
);

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
// const strive = "Strive";
// let string = ["Strive any words are good"];
// const strivify = function () {
//   if (string[0] !== "Strive") {
//     string.unshift(strive);
//   }
// };
// strivify(strive);
// console.log(string);

console.log(
  "\n--------------------------------Ex6---------------------------------"
);

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

const check3and7 = function (x) {
  let multipleOf3 = x % 3;
  let multipleOf7 = x % 7;
  if (multipleOf3 === 0 || multipleOf7 === 0) {
    console.log("This number is a multiple of 3 or 7");
    if (multipleOf3 === 0 && multipleOf7 === 0) {
      console.log("Specifically, this number is a multiple of both");
    } else if (multipleOf3 === 0) {
      console.log("Specifically, this number is a multiple of 3");
    } else {
      console.log("Specifically, this number is a multiple of 7");
    }
  } else {
    console.log("This number is not a multiple of 3 nor 7");
  }
};
check3and7();

console.log(
  "\n--------------------------------Ex7---------------------------------"
);

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

const notReverse = "This is not a reversed Strive";
let reverse = "";

const reverseString = function (y, z) {
  for (let i = y.length - 1; i >= 0; i--) {
    z += y[i];
  }
  console.log(z);
};
reverseString(notReverse, reverse);

console.log(
  "\n--------------------------------Ex8---------------------------------"
);

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

const string = "The quick brown fox jumps over the lazy dog.";
const splitCapString = string.split(" ");

let capString = "";

for (let i = 0; i < splitCapString.length; i++) {
  let capitalizedWord = "";
  const word = splitStrArr[i];

  capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1) + " ";
  sentence += capitalizedWord;
  console.log(capitalizedWord);
}

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
