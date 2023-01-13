# Operators y Loops

### Class notes and reading assignment: Read 08

#### JavaScript Operators, cont.
![javascript operator cheat sheet](https://www.miltonmarketing.com/wp-content/uploads/2018/04/mmjavascriptoperators4533535Javascript3-min.png)

**Expressions** are units of code that resolve to a value.   
- Expressions either have side effects such as assigning values, or
- Expressions can purely evaluate a result.
x = 5, 3 + 4 respectively.

Expressions of the second type **must be part of a larger construct for its result to be useful.**

In both cases these expressions are joined by **operators** like **=, +, -, /**
For the purpose of basic arithmetic/algebra, remember **PEMDAS** for the order that the operators resolve. As always, code resolves in the order it is written.
JavaScript has **binary** and **unary** operators. 
- Binary operators are use two operands (x,y) joined by a operator (+,-).  Example: x + y
- Unary operators are operators with prefixes or postfixes appeneded to them.  In JavaScript, **++ and --** are the only postfix operators.  *Everything else is a prefix operator, like !, typeof, etc.*

A **Comparison Operator** simply compares its two operands based on a operator and returns a **logical value** based on whether the result is **true.**
- The operators **=== and !==** perform **strict** equality and inequality comparisons.  Using == or != performs a less strict comparison, attempting to perform like to like comparisons regardless of data type.



### Loops, lecture notes

**While** loops let you run their code continually as long as the invoking condition is maintained.
// while(condition is true){execute this code}

let x = 0

while (x < 10) {
    console.log(x)
    x++;
}

The argument in a **while loop** must resolve to **true** for the code to run!  While that condition is true the code will execute indefinitely.  
The operators **(!false)** and **(!true)** can be used to set the conditions to fulfill a while loop.

let answer = prompt("How old am I?")
while (answer !== '37'){
    answer = prompt("Nope, try again.");
}

**For** loops are loops that run **until a condition is met.**  They are writte with an **initial value, a condition to evaluate, and a increment.**

// for(initial value; condition to evaluate; increment){code to execute}
// code to evaluate how many people are in class that you can say Hi to.
for(let i = 1; i < 16; i++){
    console.log("Hello student " +i);
}
// this code would log into the console "Hello student 1, 2, 3, ..." until 16, and then stop running.  The initial value is 1, the condition to evaluate is "is i less than 16?" and the increment to change per run is to increase i by 1. 

Once the condition resolves to FALSE the for loop breaks, and the code is not executed.  For this reason, you can use for loops when you know you want your code to execute a **set number of times.**

let myNumber = 5;
for (let i = 0; i < myNumber; i++>} {

}



#### Loops - reading notes not covered in lecture notes

Like covered in the lecture, **loops repeat a given action some number of times.**  There's a lot of different ways to determine the start and end points of a loop, and the objective dictates which is best to use.  There's 8 different loop statements in JavaScript but we're going to focus on **for** loops and **while** loops.
Loops that you create need to have their **output** directed somewhere for it to be usable later.  **console.log()** is a useful argument for storing the output of a loop.


#### What I want to know more about
- Destructuring syntax doesn't make much sense.  I get the utility of extracting data from arrays, but I don't get how it's executed.
- Working with objects is baffling.
- Chaining assignments looks baffling **and** ill-advised.
- Remember, **while** loops are loops dealing with potentially infinite situations, like how long a user can take to enter their password right.  A **for** loop runs so long as a specific condition is met, or things with a **specific number of iterations.**

