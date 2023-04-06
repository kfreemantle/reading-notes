# Class 03: Express, NPM, TDD, CI/CD

### Code review, lecture and reading notes


#### Assigned Reading Answers

- Classes are a template for creating ____.

> Objects

- Can a class declaration be hoisted?

> No, you can't use a class before it's declared.

- How would you describe a constructor and contextual “this” to a non-technical friend?

> A constructor builds new objects in the same way, and the property "this" is passed down to each of the objects.  It's like a characteristic that is first referred to in the design (the constructor) that then makes it from template to reality for each of the constructed objects.

- Within Express, what does routing refer to?

> How an application's endpoints (or URIs) respond to client requests.

- What is the difference between a route path and a route method?

> Route path is the actual URI path that needs to resolve in order to make a HTTP request.  The Route Method is exactly what we're going to do (GET, POST, UPDATE, DELETE) once we get there.

- When is it appropriate to add next as a parameter to a route handler and what must you do if next has been passed to your middleware as a parameter?

> When you have multiple callback functions it's important to provide next as an argument and then call it in the body of the function, if you've set it as a parameter.

- What is an Express Router?

> It's an application built into Express that provides routing APIs like .use, .get, .param and .route.

- By what mean do we initialize express.Router() in an express server?

> By setting a variable like 'router' to express.Router() in order to actually call/initialize the express router in our application.

- What do we use route middleware for?

> To do something specific before a request is processed, like checking if a user is authenticated or whatever else we want to do before we return information to the client.


#### Code Review, Lecture Notes, Reading notes

- SQL and ORM: We're not really going to be writing queries.  We're going to use ORM to handle queries for us in JS.

- 

##### Things I want to know more about

- 