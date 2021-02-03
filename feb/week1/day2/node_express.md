# Node 4 - Express and the Middleware Design Pattern

- What is Express
- Why we use Express
- What is middleware?
  - Intro to MVC
- Express router

## What is express?

It is a back-end framework for Node.js

## Express and other Node frameworks

- Express aims to be fast, un-opinionated and minimal
- Not the only Node framework for the web, but easily the most used
- Others include Hapi and Koa (which was developed by TJ Holowaychuk, the creator of Express!)

## Why use Express?

Express provides many helpful abstractions why maintaining flexibility.

- No more listening for stream events!
- Express' request and response objects wrap the vanilla node request and response objects, adding tons of useful methods
- It is powerful yet flexible due to the middleware design pattern.

# Code

```JavaScript
const express = require('express');
const path = require('path');
const app = express(); // in express we, call our server app
const PORT = 3000;

app.get('/', (req, res) => { // this is a middleware function -> its functionality that occurs between getting the request and sending the response
  // sendFile is an express method
  res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/dogs', (req, res) => {
  // do stuff
})

app.listen(PORT () => console.log(`Listening on port ${PORT}...`));
```

## Middleware

- Middleware is any function that helps process an http request.
- Built-in Express middleware provides out-of-the-box functionality
- There are plenty of open-source middleware packages
- You can also create your own middleware
- In the previous code snippet, the anonymous function responding with a file is considered middleware.

## Chaining Middleware

Express allows us to chain pieces of middleware.

```JavaScript
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/', setCookie, sendHtml)

app.listen(PORT () => console.log(`Listening on port ${PORT}...`));

function setCookie(req, res, next) {
  res.cookie('cookieName', 'cookieValue'); // setting a cookie onto the response object
  // this method does not end the response
  return next(); // tells express, I am done with this function, move onto the next function in the middleware chain.
  // in this scenario that is the sendHtml function
  // the cookie property will persist through the chain.
}

function sendHtml(req, res) {
  return res.sendFile(path.join(__dirname, './index.html'));
}
```

### We can use next to tell Express to move on to the next piece of middleware!

```JavaScript
const express = require('express');
const app = express();
const PORT = 3000;
const mongoose - require('mongoose)
const Article = require('./articlesModel.js')
const DB_URI = 'https://mlab.com/mymongocollection';

mongoose.connect(DB_URI, () => console.log('connected to db'))

app.get('/articles',
  getArticles,
  (req, res) => {
    return res.status(200).send(res.locals.db_docs)
  },
);

app.listen(PORT () => console.log(`Listening on port ${PORT}...`));

function getArticles(req, res, next) {
  articles.find({}, (err, docs) => {
    // add the docs to the res.locals property
    // so that it persists across the middleware chain
    res.locals.db_docs = docs;
    return next(); // next doesn't HAVE to be returned, it usually should be though
  })
}
```

> Now, res.locals allows us to persist state over the course of a single request/response cycle

## MVC

MVC is an architectural pattern for software at large.

- Stands for Model, view, controller.
- Model
  - Represents any data that may be seen / used / processed, such as data from a database.
- View
  - Represents the applications UI, which renders said data in a user friendly way.
- Controller
  - Represents the connection between the model and the view, handling any processing of information back and forth.


> ---------request--------->| Controller |--request--->| Model | <br>
> <--response--| View |<----| Controller |<--response--| Model |

## MVC with Express

Controllers in Express refer to collections of middleware functions, typically grouped around a specific topic.

```JavaScript
const mongoose = require('mongoose');
const articles = require('./articlesModel.js')
const DB_URI = 'https://mlab.com/mymongoosecollection';

mongoose.connect(DB_URI, () => console.log('connected to db'))

const articleController = {};

articleController.getArticles = (req, res, next) => { /*some functionality */ }
articleController.createArticle = (req, res, next) => { /* some functionality */ }
articleController.updateArticle = (req, res, next) => { /* some functionality */ }

module.exports = articleController;
```

## Express Router

Modularize your server code with Express Router!

```JavaScript
// articleRouter.js
const express = require('express');
const router = express.Router();

router.get('/',
  // do stuff
)

router.post('/',
  // do post stuff
  // do other stuff
)

module.express = router
```

```JavaScript
// index.js

const express = require('express')
const app = express();
const PORT = 3000;
const articleRouter = require('./articleRouter.js');

app.use('/article', articleRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
```

## Demo

```JavaScript
const express = require('express')
const app = express();
const PORT = 3000;
//...

// Define named middleware

const articleController = {};

articleController.createArticle = (req, res, next) => {
  /* do stuff */
  articles.find({}, (err, docs) => {
    if (err) return next(err); // will trigger the global error handler
    res.locals.db_articles = docs;
    return next();
  })
};

// configure Global Middleware
app.use((req, res, next) => {
  res.locals.skip = {};
  return next();
})

// configure route handler middleware

app.get('./articles',
  articleController.getArticles,
  (req, res)> {
    return res.status(200).json(res.locals.db_articles)
  }
)

// configure catch all route

app.use('*', (req, res) => {
  return res.sendStatus(404);
})

// Configure global error hanlder

app.use((err, req, res, next) => {
  console.log('ERROR: ', err);
  const errorStatus = err.status || 500;
  return res.sendStatus(errorStatus);
})

// start server

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
```

### Questions

Why are you passing the error into your next function.

Is error the first parameter in which exact scenarios?