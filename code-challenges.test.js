// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// // a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// // b) Create the function that makes the test pass.



// // --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// // a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
const object2 =  { number: 0 }
// // Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

// //First i will describe a function called divByThree, and have it take an object as an argument
// // the exected output is a string that says if the number is divisible by three or not
// // i will use modulo, conditionals. 

describe("divByThree", () => {
    it("returns whether the number inside is evenly divisible by three or not.", () => {
        expect(divByThree(object1)).toEqual("15 is divisible by three");
        expect(divByThree(object2)).toEqual("0 is divisible by three");
        expect(divByThree(object3)).toEqual("-7 is divisible by three");
    });
  });

// // b) Create the function that makes the test pass.

const divByThree = (number) => {
    if (number % 3 === 0) {
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
}
console.log(divByThree(object1))
console.log(divByThree(object2))
console.log(divByThree(object3))

// I keep getting an error in jest. It's very frustrating because I know the code works, but something in the test isn't working. If i take out the string interpolation it works, but then it just says This number is or isnt divisible by 3, instead of the actual input number. I'm sure its a simple fix, but as of now I can't figure it out. 
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("allCapital", () => {
    it("returns an array that captizlizes the first letter of each element in an array", () => {
        expect(allCapital(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]);
        expect(allCapital(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]);

    });
  });

// b) Create the function that makes the test pass.
//first i will create a function named allCapital
//then ill take an array as a parameter
// then i will use the .map function because im trying to get back another array
// I'll use the toUpperCase function to make the first index of each string uppercase, by specifying 0, then ill add the rest using the .slice method lowercase.

const allCapital = (array) => {
   return array.map(array => array[0].toUpperCase() + array.slice(1)) 
}
console.log(allCapital(randomNouns2))

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("vowelChecker", () => {
    it("returns the index of the first vowel in the string", () => {
        expect(vowelChecker(vowelTester1)).toEqual(1);
        expect(vowelChecker(vowelTester2)).toEqual(0);
        expect(vowelChecker(vowelTester3)).toEqual(2);
    });
  });

// b) Create the function that makes the test pass.

//first i will create a function named vowelChecker
//i will take a string as an argument
// i will use the charAt method to check if a character in the string is strictly equal to a vowel
// then if it is, it will return the index of that vowel. 
const vowelChecker = (str) => {
 for(let i = 0; i < str.length; i++) {
    if(str.charAt([i]) === "a", "e", "i", "o", "u") {
    return str.indexOf([i])
    } else {
        return "This word has no vowels"
    }
 }
}
console.log (vowelChecker(vowelTester1))


//I'm having trouble getting this code to work. My idea was to have a for loop that iterates and checks each character in the string to see if it has a vowel, which i represented in the code by if(str.charAt([i]) == "a", "e", "i", "o", "u"). Then, to return the index, I tried to use the indexOf function, but something here isn't working. I keep getting -1 for everything. Also, I'm having trouble with jest. I think somethings not clicking with it.
