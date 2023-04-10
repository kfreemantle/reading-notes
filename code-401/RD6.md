# Class 06: Authentication

### Code review, lecture and reading notes


#### Assigned Reading Answers

- Explain to a non-technical friend how you would safely hash and store a password.

> Password hashing is like taking the password and running it through a secret codebook that only you and another friend have.  You turn the password into a long string of gibberish looking characters, but if someone else has the key - like the cypher book - they can convert it to a regular password.

- What is Bcrypt?

> A encryption algorithm for passwords.

- Why might you use something like Bcrypt?

> If you need to store passwords very securely and don't care about a higher impact to system resources.

- What is Basic Authentication?

> A method for a web browser to provide a user name and password when making a request.

- What properties are necessary in the header of a Basic Auth request?

> Authorization: Basic Username:password

- How are username:password in Basic Auth encoded?

> Base64

- Define the authentication process to a non-technical recruiter.

> Authentication is just verifying that a entity actually is who it claims it is.  It's not about whether or not that person is allowed to be there, that's authorization.  

- How should your error messaging respond (both HTTP and HTML)? Why?

> In a generic manner, so as not to give information about the state of the system - whether or not a username is valid, for example - based on failed login attempts.  


#### Code Review, Lecture Notes, Reading notes



##### Things I want to know more about

- 