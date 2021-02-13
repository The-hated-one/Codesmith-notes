# Databases approach

- SQL vs noSQL
- PostgreSQL
  - Parameterized Queries
  - Callbacks vs Promise vs Async/Await
  - ...

## SQL

- Up-front preparation
  - Predefined schemas
  - Table structure
- Vertically scalable -> adding more power to an existing machine
- ACID compliant
  - Atomicity - all or nothing, tx works or fails
  - Consistency - will not take in the wrong datatype
  - Isolation - no other tx take place that will affect the current tx
  - Durability - if system fails it does not affect the committed tx

## NoSQL

- Create/manipulate data as you go
  - Unstructured data (dynamic)
  - Column, document, graph, KeyValue store
- Horizontally scalable
- Follows BASE model
  - Basically Available - does guarantee availability based on the app theorem.
  - Soft State - state of the system may change over time.
  - Eventual Consistency - stores consistency at some later point.

## PostgreSQL

- SQL database.

### DB Architecture

- Primary key
- Foreign key
- NOT NULL - value cannot be null
- UNIQUE - value must be unique
- CHECK - a check data must satisfy

### node-postgres

- node-postgres is a collection of node.js modules for interfacing with your PostgreSQL database.
  - Other options include Sequelize and more.

- Benefits
  - Connection pooling (gives you a reusable poop of clients you can check out, use and return)
  - Intuitive Query API that supports callbacks and promises
  - Parameterized queries.

### Parameterized Queries with node-postgres

- These let us pass predetermined values into SQL queries.
- They're essentially SQL queries with variables. Why would we NOT want these variables directly passed in?
- node-postres' parameterized queries come with built-in protection against SQL injection.

Template literal:
```JavaScript
`SELECT * FROM PLANETS WHERE _ID=${id}`
```

```JavaScript
starwarsController.getHomeworld = (req, res, next) => {
  const { id } = req.query;
  const queryText = 'SELECT * FROM planets WHERE _id=$1';
  const queryParams = [id];
  db.query(queryText, queryParams)
    .then((data) => {
      res.locals.homeworldData = data.rows[0];
      return next();
    })
    .catch(err => next(err))
};
```

### Different ways to query

```JavaScript
const text = 'SELECT homeworld_id FROM people WHERE gender=$1 AND hair_color=$2 AND eye_color=$3';
const values = ['female', 'black', 'brown'];

// callback
db.query(text, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows[0])
    return next();
  }
})

// promise
db.query(text, values)
  .then(res => {
    console.log(res.rows[0]);
    return next();
  })
  .catch(e => console.error(e.stack));

// async/await
try {
  const res = await db.query(text, values);
  console.log(res.rows[0])
  return next();
} catch (err) {
  console.log(err.stack);
}
```

### Handling errors

```JavaScript
starWarsController.getCharacters = async (req, res, next) => {
  const characters = [];
  try {
    const text = `some query`
    const result = await db.query(text);
    res.locals.characters = result.characters;
    next();
  }
  catch (err) {
    next({
      log: `starWarsController.getCharacters: ERROR: ${err}`
      messages: { err: 'Error occured in starWarsController.getCharacters. Check server logs for more details.' }
    });
  }
}

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: `Express error handler caught unknown middleware error`,
    status: 400,
    messages: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})
```

## Mongo DB

### Architecture

- JSON-like format known as **BSON**, which is the binary encoding of JSON.

- Database: THe container that holds a set of collections
- Collection: A set of documents, similar to a table in SQL. Unlike a SQL database, a collection does not have a set structure or pre-configured data types.
- Documents: A JSON-like object, similar to a row in a SQL database.
- _id: Mandatory unique field in every document. it separates one document from another.

### Schema vs Model

Mongoose is an Object Document Mapper (ODM) library for MongoDB in Node.js. It translates documents in MongoDB to objects in the program.

A schema represents the structure of a particular document, either completely or as a portion of the document. It's a way to express expected properties and values as well as constraints and indexes.

"What will the data in this collection look like?"

The model defines this.

```JavaScript
const person = new Schema({
  name: {
    type: String,
    required: true
  },
  mass: String,
  hair_color: String,
  height: Number,
  homeworld_id: {
    type: Schema.Types.ObjectId,
    ref: 'planet'
  },
  films: Array
})
```

### Mongoose queries

- They are NOT promises.
- Although queries are not promises, queries are thenables.
- If you need fully-fledged promise, use the .exec() function.

```JavaScript
somethingController.getSomething = async (req, res, next) => {
  try {
    const characters = await Person.find({});
    res.locals.characters = characters;
    return next();
  } catch (err) {
    return next(err);
  }
}

//// To return a real promise
somethingControlelr.getSomething = (req, res, next) => {
  Person.find({})
    .exec()
    .then(characters => {
      res.locals.characters = characters;
      return next();
    })
    .catch(err => next(err));
} 
```

### Requests

GET /events
GET /events/:id

## Params

- GET /events/:id (params)

```
http://localhost:3000/events/9182
```
```JavaScript
req.params = { id: 9182 };
```

## Query string

- GET /events?page=10
```
http://localhost:3000/events?page=10
```

```JavaScript
req.query = { page: 10 }
```

### Questions
