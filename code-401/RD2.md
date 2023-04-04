# Class 02: Express, NPM, TDD, CI/CD

### Code review, lecture and reading notes


#### Assigned Reading Answers

- Explain middleware, answer as though I were a non-technical recruiter.

> Middleware is software that allows other pieces of software to 'meet in the middle' to accomplish specific tasks.  It's like the umbilical airlock tubes between two spaceships in sci fi movies.

- Express the most popular __ __ ____.

> Node web framework.

- Express is “unopinionated.” What does that mean?

> Express is not siloed to a purpose, there's few restrictions on what components must be used to function.  You can insert almost any compatible middleware in the request handling change in almost any order.  It provides a lot of flexibility at the cost of having to know what components you need glue together.

- What is a module and why is modularity useful to us as developers?

> A module is a separate block(s) of code that can be called and invoked in other files and by other functions.  Modularity makes our code cleaner and easier to read and lets us write more intuitively.

- What is NPM?

> Node Package Manager.

- What version of npm are you running on your machine?

> 9.5.0

- What command would you type to install a library/package called ‘jshint’ into your node project?

> npm i jshint

- What is TDD?

> Testing driven development.

- Explain why tests are important. Please explain as though I were your non technical elder.

> Slow is smooth, smooth is fast.  Testing as you code and making sure that the smallest components are functional as you write them (via methods like console.log()) is the development version of cleaning as you cook.  

- What are three expected benefits of testing

> Reduction in defective code, fewer major corrections at the end of the project, and potentially improved design quality of the code.

- Name at lest 2 individual pitfalls and at least 2 team pitfalls commonly encountered while writing tests.
CI/CD

> Individual: forgetting to test frequently, writing too many tests, writing too-large tests, writing trivial tests, writing tests for trivial code
> Team: low adoption, poorly maintained testing suites, abandoned/seldom run test suites.

- What are three benefits of Continuous Integration?

> CI/CD automates much/all of the manual human intervention required to get new code from commit to production.
> Build, test and deployment happens automatically or near automatically after code is written.
> Improvements in productivity, efficiency and decreasing development complexity.

- What is the difference between Continuos Delivery and Continuous Deployment?

> Continuous Delivery is having the code that's built queued up and packaged with everything it needs to deploy anywhere, including testing and provisioning infrastructure.  Continuous Deployment is the last step of automating the deployment of the continuous delivery system and getting it out to production quickly.

- Explain how GitHub fits into this process assuming the listener comes from a non-technical background

> Github is a central repository hosting all the code commits and changes we make collectively.  The code we make changes to is like a bunch of people collectively writing different chapters of a novel while also doing editing for other people's chapters.  Github is where all our notes and updates are housed, with the added benefit of automatic publication and automatic 'spellcheck'


#### Code Review, Lecture Notes, Reading notes



##### Things I want to know more about

- 