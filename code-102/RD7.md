# Programming with JavaScript

### Class notes and reading assignment: Read 07

#### JavaScript beginning of day misc. notes
!(javascript bond)[https://1.bp.blogspot.com/-8UmWFTngfwY/XkVRuoPFfkI/AAAAAAAACmI/93j-FMkA9EYyoRIT1qlJ2sMUbobnWT1UgCLcBGAsYHQ/s1600/javascript_var.png]

Code comments with // can be useful for explaining context in your code and keeping organized for yourself and other developers.

When using **if else** operators in JavaScript, it's important to remember that it's ***all case sensitive.***  There are ways to work around this.

// declaring a variable called theName
// assigning it the value o the result of prompting
// "What color is Pixel?"

let catColor = "BLACK"
let userGuess = prompt("What is color is Pixel?");
userGuess = userGuess.toUpperCase();
console.log("User guess is: " +userGuess);
if (userGuess == favColor) {
console.log("Correct! He is a black cat.");
} else {
  console.log("Incorrect. Pixel is a black cat.");
  }
//
// console.log("User says their name is: " + theName);

// Data Types
typeof(2)
typeof('2');
// These commands spit out information about what type of data is in the argument.  Possible output includes **number

You can use the **if(variable.toLowercase() == "variable") or variable.toUppercase()** to *check* if the user input, when converted to a uniform case, matches the preset condition you set earlier.

### Control Flow, Functions and Operators

**Control flow** is the order in which the computer executes statements in a script.  Code is run from first line to last, excepting structures that change the control flow like **loops and conditionals.**
JavaScript **functions** are blocks of code designed to perform specific tasks.  Functions are defined with the *function* keyword, a *name*, and parentheses.
> function myFunctionName(parameter1, parameter2, ...) {
>  //code to be executed is inside the curly brackets
>  }
[W3Schools](https://www.w3schools.com/js/js_functions.asp) has an excellent guide that's worth copying in it's entirety.

>Function **parameters** are listed inside the parentheses () in the function definition.
>
>Function **arguments** are the values received by the function when it is **invoked**.
>
>Inside the function, the arguments (the parameters) behave as local variables.
>
>**Function Invocation**
>The code inside the function will execute when "something" invokes (calls) the function:
>
>**When an event occurs** (when a user clicks a button)
>When it is **invoked (called)** from JavaScript code
>Automatically **(self invoked)**
>
>Function Return
>When JavaScript reaches a **return** statement, the function will **stop executing.**
>
>If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
>
>Functions often compute a return value. **The return value is "returned" back to the "caller"**:

#### Creating Functions lecture exercise
Making a function is called a **declaration**.
> function functionName(parameters){code to execute}

function addTwoNumbers() {
  let num1 = 3;
  let num2 = 6;
  return num1 + num2;
  }
  
  addTwoNumbers();    //this line is actually using the function created above
  
This function would be of limited use, since it's just repeatedly adding the two numbers defined inside of the function.  What we could do instead would be to use **parameters** to modify what the function can do.

function addTwoNumbers(num1, num2){
  console.log(num1 + num2);
  return num1 + num2;
  }
  // we've defined a function that can add two parameter numbers, log the result to the console, and print the result.
addTwoNumbers(2, 25);  //27
addTwoNumbers("hello", "world");  //helloworld
addTwoNumbers("world", "Hello"); //worldHello

But doing it this way doesn't store the result anywhere.  We can see it in the console log, but that's it.  We can let another variable store the result of our first addTwoNumbers function.

function addTwoNumbers(num1, num2){
  let sum = num1 + num2;
 console.log(sum);
 return sum
 }
 
let sum = addTwoNumbers(10, 10);
console.log(sum)    // this defines sum as the result of the addTwoNumbers function with the parameters 10, 10.

let thisNumber = addTwoNumbers(10, 15);
console.log(thisNumber);        //this stores the result of the addTwoNumbers function in a variable called thisNumber
// these two examples are functionally identical.  You can label the function whatever you want.  Don't get tripped up on nomenclature!  Be sure you identify correctly which is a operator and which is a variable.




***Variables declared inside of a function only exist in that function!*** Once the function terminates with a return statement, the variables inside that statement can't be accessed by later functions in the script.


#### Operators

The **Assignment Operator,** or **(=)** is used to assign value to a variable.  It's not the same as algebraic =, which is (==) in JavaScript.  While you can do algebra in JavaScript, there are many additional types of operators.**
- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Conditional Operators
- Type Operators**

**Arithmetic** operators do what it sounds like they do: basic Excel-style math.  

**Assignment** operators work kind of like the arithmetic operators, in that they "add" a value to existing variables.
- let x = 10; x += 5;  // this would yield 15.  You're defining X as 10, then running a command to add the value of '5' to the previously defined 'x' of 10.  It's a good example of the Control Flow in action.
The **+ operator** is pretty versatile.  It can be used to **concatenate** strings, or add together strings of non-numerical values.
>let text1 = "John";
>let text2 = "Doe";
>let text3 = text1 + " " + text2;    //the result of text3 is John Doe

**Comparison** 
