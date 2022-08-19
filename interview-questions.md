# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is something you pass through a function as an input. For example in the function 
let num = 2
const App = (num) => {
    if (num === 0) {
    return "number is zero"
    }
}
the () would be where you pass in the number. An argument is a value that is used by a function, like an array.

Researched answer: A parameter is the name of the variable that is passed through a function. In the above example, it would be num, as that is the name of a varialble. The argument in this case of the example above would be 2, as an argument is the actual data that is being passed through the variable. 

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:The predefined parameters of the .map() method are the array that was passed through it. It will take that array and try to give back an array of the same index.

Researched answer: .map() will take in two predefined parameters, that are both required. The first is the index of the array, then the actual value of each index of the array. It will also keep it in the array form unless told otherwise.  

3. What is the difference between map and filter?

Your answer:map will return an array with the same index as the one that you originally gave it, while filter will return an array with a lower index than the one you originally gave it. 

Researched answer:.map will return an array with the same index as the one that you originally gave it, while filter will return an array with a lower index than the one you originally gave it. An interesting fact about these two higher order functions is that filter will return the same array, but without some of the values, while .map will return an entirely new array that it creates. 

4. What is the DOM?

Your answer: DOM is what we use to edit and change webpages through React. 

Researched answer: DOM stands for Doctument Object Model, and is used to take JavaScript and use it to access HTML webpages. You can edit components and add logic to them to make webpages do what you want them to do. 

5. What is React? Why would you use it?

Your answer: React is a javascript based language that can be used to combine logic you make into html and css to display on a webpage. It uses JSX to make apps like the one we made in class. 

Researched answer: React is a javscript library. This means that while on its own react could only do a couple things, its userbase has added so much to it that you can now do a lot with it. It allows people to edit the UI of apps and webpages. You can create modules and assign entire blocks of code to variables. Doing this you can edit webpages a lot better than just using HTML and CSS by itself. 

6. STRETCH: What is hoisting in JavaScript?

Your answer: I'm not sure, but if I had to guess it would be pushing code to the front of a page so you can see it.

Researched answer: JavaScript hoisting is when you pull a code up to the top of a document, before you run it. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories:User stories are stories people will post about their experience with coding.

2. Spread operator: The spread operator lets us add one array into another one. 

3. React props: React props let you take a component from something else and reuse it for your UI. 

4. Conditional rendering:You can create some components, then only use the parts of it that you need at any given time 

5. DOM events: A code that can be executed by doing something, like clicking on something on a page. 
