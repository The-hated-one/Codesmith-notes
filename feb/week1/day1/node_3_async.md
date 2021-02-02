# Node 3 - Asynchronicity in Node

- Callbacks
- How Promises help us avoid callback hell
- Promise.all for parallel promise execution
- Introduce async/await syntax (node 8.*)

## Problem

### Background

Codesmith is changing the way they create and post blog articles to their site. In the past, markdown files were stored on a server and used to genreate HTML.

Now that Codesmith is making more article, we need to store them in a database.

### Tasks

- Step 1: connect to DB
- Step 2: fetch a markdown file from the file system
- Step 3: save new article to the database

### Parallelism and Congruence

In JavaScript, it is a single threaded, meaning it can only do one thing at a time, however it can be congruent.

Parallelism means you can do multiple things at a time.

Congruence is theoretically the ability to do multiple things at the same time. It can do it in a way that is close as possible to doing things at the same time.

```
# Step 1: connect to DB -------------------------|
# Step 2: Fetch markdown file from file system ------> steps 1 and 2 can be done congruently.
# Step 3: Save new article to the DB
```

### Approach 1 - callback hell

- Messy, callback hell, not congruent.

```JavaScript
const DB_URL = 'my-mock-db';

// step 1
mockDB.connect(DB_URL, (err) => { // async -> passed to libuv
  if (err) return console.log(err);
  console.log('connected to DB);

  // step 2
  fs.readFile(BLOG_PATH, 'utf-8', (err, data) => {
    if (err) return console.log(err);
    console.log('Got article from file system');

    mockDB.create({
      mdFileName: "filename",
      title: "title",
      body: markdown.toHTML(data),
      tags: ['welcome', 'news']
    }, (err, result) => {
      if (err) console.log(err);

      console.log('created article in db: ', result);
    })
  })
})
```

### Approach 2 - define callbacks before executing the code:

- Cleaner, but still not congruent.
- Potentially harder to read.

```JavaScript
function dbConnect(err) {
  if (err) console.log(err)
  console.log('got article from file system');
  fs.readFile(BLOG_PATH, 'utf-8', readFileCB)
}

function readFileCB(err, data) {
  if (err) console.log(err)
  console.log('got article from db');
  mockDB.create({
    mdFileName: "filename",
    title: "title",
    body: markdown.toHTML(data),
    tags: ['welcome', 'news']
  }, createArtCB);
}

function createArtCB(err, result) {
  if (err) console.log(err);
  console.log('created article in the db', result)
}

mockDB.connect(DB_URL, dbConnectDB);
```

### Approach 3 - Promises

- This approach is cleaner, the error handling is much better.
- Still incongruent.
- Promises reject/resolve on the micro-task queue, hence they have higher priority than items on the callback queue.

- Promises
  - A promise is something JavaScript provides to some asynchronous request. It promises to either resolve your request with some success case, or to reject your request by throwing an error.
  - Think about promises in real life. If you ask me to do something for you, I can promise I can do one of two things: fulfill my task (the thing I promised), or not fulfill the task.


> A promise represents an abstraction of non-blocking asynchronous execution.


It is an object that represents the eventual outcome of asynchronous code.
- 3 states:
  - Pending -> returns a promise object
  - Fulfilled -> returns something we wanted - e.g. JSON object
  - Rejected -> error object

- This is still incongruent, however it looks a bit nicer.

```JavaScript
// example
const firstPromise = new Promise((resolve, reject) => { // this is an executor function
  if (someCondition) {
    resolve('I resolved')
  } else {
    reject('I rejected')
  }
});

function connectToDB() {
   return new Promise((resolve, reject) => {
     mockDB.connect(DB_URL, (err) => {
       if (err) return reject(err);
       console.log('connected to db');
       return resolve();
     })
   })
}

function getLocalArticle() {
  return new Promise((resolve, reject) => {
    fs.readFile(BLOG_PATH, 'utf-8', (err, data) => {
      if (err) return reject(err);
      console.log('Got article from file system');
      return resolve(markdown.toHTML(data));
    })
  })
}

function createArticle(html) {
  return new Promise((resolve, reject) => {
    mockDB.create({
      mdFileName: "filename",
      title: "title",
      body: html,
      tags: ['welcome', 'news']
    }, (err, result) => {
      if (err) return reject(err);
      console.log('created article in db');
      return resolve(result);
    });
  });
}

connectToDB()
  .then(getLocalArticle)
  // .then(getLocalArticle, functionToHandleRejectedStatus)
  .then(createArticle)
  .then((result) => {
    console.log('created article', result);
  })
  .catch((error) => console.log(error));
```

- `.then`'s take two arguments
  - First argument is what is a callback for what is received from a resolve
  - Second argument is what is a callback for what is resolved from an error.

- `.catch` takes 1 argument, a callback to handle a rejected status.

The order of priority between the microtask and callback queue is expressed here.

```JavaScript
const bar = () => console.log('bar')
const baz = () => console.log('baz')

const foo = () => {
  console.log('foo');
  setTimeout(bar, 0); // -> callback queue
  new Promise((resolve, reject) => { // -> microtask queue
    resolve('should be right after baz, before bar');
  }).then(resolve => console.log(resolve));
  baz();
}

foo()
// foo
// baz
// should be right after baz, before bar
// bar
```

### Approach 4 - Promise.all

- More efficient
- Fails fast!
- Potentially less clear which promises are in your array.

```JavaScript

const paCreateArticle = (results) => {
  const newArticle = {  
    mdFileName: "filename",
    title: "title",
    body: results[1], // notice the results is an array, and we are using the element in the first position
    tags: ['welcome', 'news']
  }
  mockDB.create(DB_URL, (err) => {
    if (err) return reject({ type: 'dbCreate', err})
    console.log('created article in db')
    return resolve(result);
  })
}

// reusing functions from approach 3
const intialProms = [
  connectToDB(), // notice the functions are invoked.
  getLocalArticle(),
];

// Promise.all takes an array, and returns an array
Promise.all(initialProms)
  .then(paCreateArticle)
  .then((result) => {
    console.log('created article', result)
  })
  .catch((error) => console.log(error))
```

Promise.all is a failing fast function. The moment one of the functions reject, it will stop running and then pass the rejected error messages to the `.catch`.

### Approach 5 - async/await

- Benefits is it looks nicer to the eye, potentially more readable.
- DRAWBACK - no longer congruent UNLESS combo'd up.

- Syntactic sugar on traditional promises

```JavaScript
// example async arrow function
const fcreateAsyncArticle = async () => {};

async function createAsyncArticle() {
  try {
    await connectToDB(); // pauses local execution context
    let html = await getLocalArticle(); // pauses local execution context
    for (let i = 0; i <20; i++) {
      console.log(i);
    }
  } catch (error) {
    console.log(error);
  }
}

createAsyncArticle()
  .then((result) => console.log('success: ', result));
  .catch(errorDispatch);


// BETTER VERSION
async function createBetterAsyncArticle() {
  try {
    const results = await Promise.all(initialProms);
    for (let i = 0; i < 20; i++) {
      console.log(i)
    }
    return await paCreateArticle(results);
  } catch (error) {
    console.log(error);
  }
}
```

### Summary

If we can be concurrent, we should be concurrent.

## Extra notes

- libuv stands for: Librarian Unicorn Velociraptor


### Questions

Clarifying on what Pat said.

Is there a higher priority queue equivalent to the microtask queue in libuv?

Why doesn't the first promise resolve anything?

What was the name of the function passed into a promise?

returning a console log?

Is each callback being passed onto the callback queue equivalent for node? Approach 1

What is the queue that has higher priority in JavaScript
-> Callback queue and the microtask queue.