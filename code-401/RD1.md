# Class 01: Node Ecosystem

### Code review, lecture and reading notes


#### Assigned Reading Answers


- How would you describe Node to a non-technical friend?

> Node is a way to run Javascript, which is a programming language usually used on websites.  Node is a way to run Javascript on your computer, so your computer locally is speaking the same language as a website using Javascript.  It's basically about finding a common language and methodology, like lingua franca.

- What does it mean that Node is a JavaScript runtime?

> It means that it's a way to run the JS code on your local machine, rather than on a server.

- What is Node used for?

> Lots, but the package manager is one very useful part.  Node.js also lets us run JS on the server, and it's very good at building applications that require real-time interaction because of the asynchronous model.

- Looking ahead at this module’s course schedule, What do you look forward to learning?

> All of module 3.  Real time services are near and dear to me coming from a telehealth background.

- What are your learning goals after reading and reviewing the class README?

> I want to get really, REALLY good at debugging.  I want to be able to sell that as a skill that I'm proficient at and enjoy doing, because my understanding is that a lot of hiring managers have teams that hate doing it.  If I can present myself as someone who can make your teams' life easier I think I can get hired more easily.


#### Code Review, Lecture Notes, Reading notes

- Day in the life: morning is code review followed by lecture.  Code review is really important so we can articulately examine code for suitability to task.

- After code review we do lecture and explore new design patterns, data structures, specific libraries and frameworks, and prep for the day's lab.

- Afternoon is lab and code challenge time.  A big difference is that we're doing code challenges primarily in a whiteboarding/problem solving mode.  We should do no more than an hour into the code challenge before switching to the lab, and working on the labs the remainder of the day.

- Fridays are more focused on career servicing.  Career coaching workshop happens in the morning, typically led by Dr. Robin or JB Tellez.  Data structures and algorithms is what we focus on Fridays, as we don't have labs.  The DSA work is a sort of pseudo-code exercise to help us to understand data structures at a more fundamental level.  

> That actually sounds really cool, I look forward to this.

- All of our content lives in Github for the course.  It's considered our source of truth for purposes of learning materials.  Canvas is for tracking and submitting assignments.  It also shows our course calendar in a relatively straightforward way.

- The DSA work we do on Fridays is intended to prepare us for the code challenges of the next week.

- Moving on.. back in 201, where did our code run?  It ran in the browser.  When we moved up to 301 we branched out and started running code in the back end as well.  

- With React.js, code ran first in Node before anything went through to run in the browser.  In short, somewhere OTHER than the client ran the code.  That's still going to happen, but in 401 the big change is that we're introducing **Jest**.  In short, we're going to focus more on understanding *where* our code runs.

- **JEST** is a *dependency* for our test environment.  When we write tests we're going to test from the smallest piece of functionality that we can validate first, and build up from there.  

- The most basic test you can do for a function you write is to try and run the function and log its result to the console, and see if you got the expected result.

- Getting what you want as a human is great, but we also want to be able to validate automatically with test code.

- This is where **dependency injection** enters the mix.  When we make a someCode.test.js testing file, right up at the top we put a line to require the code we're testing, i.e:

> const someCode = require ('./someCode.js');
> let output = someCode('test');
> console.log(output);

- NPM init gives us the main package.json file that gives a list of dependencies for the project.  As we npm install more packages they're added to the package.json file as dependencies for the project.

- Jest gives us the ability to use the test function.

describe('As a user, I want someTest to give me testOutput.', () => {
test('Description of test', () => {
  let output = someTest('argument');
  expect(output).toEqual('testOutput');
});
});

- In the package.json file if we define 'test' as just 'jest' it'll automatically look for any files appeneded with .test or .spec.

- Jest is our one stop shop for testing environment.  It has a ton of built in methods we can use for writing testing suites.

- We're going to use Github actions inside our repo to use tests before 

##### Things I want to know more about

- 