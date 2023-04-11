# Class 07: Bearer Authorization

### Code review, lecture and reading notes


#### Assigned Reading Answers

- What is a JSON Web Token (JWT)?

> An open standard information transmission format.

- When should we use JSON Web Tokens?

> Because it can be digitally signed, allowing for authorization.  It allows relatively good assurance that transmitted information hasn't been tampered with.

- Claims are expected in which structural component of a JWT?

> Payload.

- If I get a JWT and I can decode the payload, how can we call that secure?

> Not because it prevents the reading of the payload, but by provisioning that without knowledge of the secret part of the JWT the contents will show as tampered.

- If sending a JWT, what must sender and receiver both know? Hint, it’s appended in the signature.

> A secret.

- Explain how concatenated content and secret can be sent and received securely to a non-technical recruiter.

> Basically a hashed string with a secret will not really hide the contents, but it will make it clear that the contents have been changed in some way, so we would no longer accept the message.

- Why use JWT?

> It's an open standard that anyone can use, it's well understood, and it allows for digitally signed transmissions that you know aren't tampered with, and it's very compact and fast.

- JWT is Compact and self-contained. Describe how this is useful to a non-technical friend.

> It's very easy to work with, and it comes pre packaged with all the information you usually want when you use the standard.  It's kind of like how Ikea furniture needs you to make it, but it's got easy instructions and comes with the tools.

- What are the three components (the structure) of a JWT signature?

> Header, Payload, Signature

#### Code Review, Lecture Notes, Reading notes



##### Things I want to know more about

- 