# JavaScript power ups

### Class notes and reading assignment: Read 06

#### Additional CSS notes and beginnings of Javascript lecture
!(javascript ninja)[https://images.manning.com/360/480/resize/book/b/72b6dbb-4eb6-4bbd-9078-b47f0393a1bb/Resig-JSN-2ed-HI.png]

- **.classes** and **#ID values** can be used to great effect to apply multiple sets of rules to individual elements and sections on your page.
- Classes apply rules in order, like anything else in CSS. Any rule that is in conflict will default to the most recently used.

### Javascript: it's all the additional web functionality.  
- We use **Javascript** to add additional functionality to your page that is not possible with HTML.  
- This is what allows you to actually create web based functionality!
- Javascript is the basic functionality of not just web pages, but also the embedded systems in many every day devices.
- **Javascript is not Java.** Both are programming languages maintained/owned (?) by Oracle, but they have different purposes, syntax and conventions.

#### Some Javascript history <sup>(I'm old enough to remember this!)</sup>
- JavaScript used to be run inside browsers.  The code lived in the HTML page and was run in the browser when the site was accesed.
- More recently JavaScript code lives on the server too.  **Node.js** is the most well known server-side JavaScript environment to run.
- JavaScript consists of three major "parts."
  - The **language.** Pretty standard across environments.
  - The **DOM API.** This is how the language interacts with the various parts of the webpage.
  - The **Server API** provided by whatever the server side system is (maybe/probably Node.js).

#### Embedding/including JavaScript
You can put it inline in your HTML file, or you can do it CSS style and put your JavaScript in a separate file - much preferred in most cases.
**<script>This is what opens and closes JavaScript code sections.</script>**
Detailed guidance can be found at the [Code Maven site.](https://code-maven.com/introduction-to-javascript)

##### A few basic functions:
- **alert:** returns a pop up in the browser with whatever text specified.
-   alert("Hola gato!");
- **document.write:** inserts an HTML snippet wherever the function is placed.
-   document.write("<h2>Hola Gato!</h2>")
- **console.log:** prints information to the developer console in the browser.
- **prompt:** a function that shows a pop up window with text provided as the first parameter, then a textbox the user can fill in.
    var name = prompt("What's your name?", "");
    document.write("Hola, ", name);
- This can be used for asking to correct a name or address, for example.
- **confirm** is a if/then question asked of the user.
- confirm returns a true/false result, with two different specified outputs for each.
    if (confirm("Shall I say 'ni' to you again?")) {
      document.write("Ni! Nnnnni!");
      } else {
        document.write("Very well, we shall not say Ni to you.");
        }
 
 ##### JavaScript Variables
 Variables are containers for storing data values.  Basic algebra and/or Magic: The Gathering style!
 
 Declare variables with **var, let, const.**  Var works in all older browsers prior to 2015, while if you want a general rule use **const and let.**
 - **let** variables can be changed later in the code by simply restating the variable = 'value' command.
 - **const** values *cannot* be changed later in the code.  You'll get a assignment to constant variable error message.
 
 
 > var x = 5 
 > var y = 6
 > var z = x + y

> const x = 5
> const y = 6
> let total = x + y

Javascript **variables** must be **identified** uniquely.  Unique names are called **identifiers.**

**Data types in Javascript**
- text -> 'strings'  //text strings have to be enclosed in single or double quotes. *Doesn't matter which, just be consistent.*
- numbers -> numbers  //numbers don't need quotes, they're just numbers
- boolean -> true/false

Javascript variables are **assigned** with an **equal sign =.**  It's not the same thing as algebraic equal sign.  
- Use == to represent 'equal to' in JavaScript.

When using if/else statements, every **if and else if** statment has a condition in ().  A **else** statement can finish with {} because it's the final failsafe statement.

    



#### Things to learn later
- The assignment operator in JavaScript.
- How to use variable inside of strings.
- I could use a tool that lets me cycle through several different presets when trying out different CSS styles, i.e. tab selecting between 100px, 200px, 300px, etc for image-width, or between several different previously used values.  Currently it's pretty laborious.
