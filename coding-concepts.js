// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
// console.log(cohort.split(""))

// a) Your answer: The .split function will seperate the strings into an array of other strings. Since the "" is put inside of the paranthesis, it will seperate them letter by letter. 
// b) Verify and explain: It returned 
[
  'E', 'c', 'h',
  'o', ' ', '2',
  '0', '2', '2'
]
// this is what I expected to happen, and if there was a space between the quotation marks, it would have come up as an array with Echo and 2022 in it, since it would have been separating by the spaces. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: This will log "Hello LEARN Student". This is because the name is the parameter of the function, and you are inserting "LEARN Student"into that parameter. It is able to show whatever you input there because of string interpolation which will show whatever you put into name. 
// b) Verify and explain: It came back as undefined.  This is because a function needs a return statement, and this function was missing that. If we add that return before the `Hello, ${name}!`, it will do what I thought it would. 


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: This will return the multipliedByTwo array, but multiplied by two. It should look something like this
// [8, 10, 12, 14, 16]
// this is because the .map higher order function will take an array and try to output an array with the same index. 
// b) Verify and explain: It came back as [8, 10, 12, 14, 16]. This is because of what I mentioned earlier with the .map higher order function. 


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: This will log only the odd numbers in an array. The .filter higher order function creates an array but has it output with a smaller index than the original array. In this case it will remove all of the numbers in this array that are not equal to 0 when the modulo operator is used. it should look like [ 11, 13, 15 ]
// b) Verify and explain: it came back as [ 11, 13, 15 ]. This is because the .filter method was used, that will come back as a smaller array than the original one. 


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: This is an object named myCodingSkills. When you run that, it will take the key languages, and look at the index of 0, In this case, it should output "JavaScript"
// b) Verify and explain:It output JavaScript as a string. It took the index of 0 in the languages key from the myCodingSkills object. 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: This is a class, which is a blueprint for an object. Doing the new method should add another key to this object, though im not exactly sure where it will put it.
// b) Verify and explain:It output Learn { student: 'George', cohort: 'Echo', year: 2022 }. It seemed like the constructor parameter of name was input when we did new Learn("George") and placed that name into our object, then output the object. 
