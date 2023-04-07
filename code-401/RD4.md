# Class 04: Data Modeling

### Code review, lecture and reading notes


#### Assigned Reading Answers

- What type of database is the best fit for the complex query intensive environment?

> SQL databases are best for complex, query intensive applications.

- What type of database is the best fit for hierarchical data storage?

> NoSQL databases are better for hierarchical data storage.

- Describe the differences in scalability between a SQl and NoSQL database as though you were speaking to a non-technical friend.

> SQL scales vertically, NoSQL scales horizontally.  Think about it in terms of a commercial kitchen.  When you add more space and prep stations to the kitchen, you're scaling horizontally by adding more capacity for discrete tasks.  When you add equipment that does one thing better than before, you're scaling vertically.  

- Among data tables, what is a one-to-many relationship and how do we “relate” them?

> A one-to-many relationship is when an entry in one table is related to entries in more than one other table  We relate them along unique foreign keys amongst the 'other' entries we're relating to.

- Prior to designing your relational database, it might be useful to ___  ___ of the database tables and their relationships.

> Make a diagram.

- Explain the difference between a primary and foreign key.

> Primary key is the unique identifiers of an entry in the table you're working with.  When you relate it to outside tables (maybe in a one-to-many relationship) you join them along the foreign key if the outside table entries you need.

- How do we treat keywords and parameters differently in SQL syntax?

> Keywords are predefined for constructing SQL statements and are built into the engine.  Parameters are user defined and are used for constructing specific queries of specific data.

- Define normalization within the context of schemas and data.

> Logically ordering data in a database schema to reduce redundancy and improve data integrity.  You want everything stored in an orderly manner so you don't get weird artifacts as a result of the way you're storing your data.

- Explain the difference between one-to-one, one-to-many, and many-to-many relationships to a non-technical recruiter.

> One to one: one record in a table is associated with one record in another table.
> One to many: one record in a table is associated with many records in another table, but not vice versa.
> Many to many: multiple records in a table can be associated with many records in another table.


#### Code Review, Lecture Notes, Reading notes



##### Things I want to know more about

- 