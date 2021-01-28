# Node Lecture

## Node, Events & Streams

### Roadmap

- The what and why of Node.js
- JavaScript in Node vs JavaScript in the 
  ...]

## What is Node?

Node.js is an open-source, cross-platform **runtime environment** for JavaScript built by the linux foundation.

- Built on V8, the engine created for chrome.
- It can do more than JavaScript in the browser, as **it is not sandboxed**.
- Browser JS cannot:
  - Make files
  - Delete them
  - Kill processes
  - Shut down the computer
  - System calls
- Node can do these things.

Node is written is C++.
C++ is a language is a language that can access a file system.

JavaScript is being transpiled into c++.

## Why is it good?

- It is relatively high-level
- It's the same language as the browser, reducing cognitive overhead.
- It's **non-blocking**. Great for I/O bound applications.
- **NPM** is awesome!

## In browser vs Node.js

- JS Ecosystem is made up of:
  - JS runtime
  - Event Loop
  - Queue(s)

- We can pass off time consuming/complex tasks to Web APIs to keep the JS thread from blocking.
- The Web API pushes any delayed functionality onto the callback queue.
- The event loop is responsible for clearing the callback queue at the appropriate time.

## In node

- Node uses Chrome's V8 engine for the JS runtime, but **does not** rely on it's event loop or callback queue.
- Instead, it uses the **libuv** library to handle the event loop, callback queue (event queue), and also for background I/O operations.

libuv -> Library, unicorn velociraptor.

This library transpiles JavaScript into C++.

## Difference

- Node has **no Web API**, no window, document, XMLHttpRequest.
- Node instead has its own system-related globals like `__dirname`, `__filname` and `process`.
- Node is still built on top of an **event loop**, and has functions/objects like setTimeout and console, but their underlying implementation is different.

## Node Modules & NPM

In order to accomplish being flexible and lightweight, NOde relies on the concept of modules for added functionality depending on the use case.

## Why Modules?

Aside from enabling NOde to be lightweight and flexible:
- Node modules help you avoid globals and keep your namespace clean.
- Modules allow us to expose only the parts of your program you want exposed (sort of like a closure).

## What are Modules?

For example, if I want to build a web server, I might import node's built-in **http** module:

```JavaScript
const http = require('http');
```

## Sources of Node modules

- Node provides some built-in modules:
  - http
  - fs (file system)
  - path
  - events
  - child_process
  - etc.

- There are also Node modules you write yourself.
- As well as Node modules from the open-source ecosystem (this is why we use npm).

```
const fs = require('fs');
```

## Using your own modules

```JavaScript
// counter.js
let i = 0;

function counter() {
  console.log(i);
  return i++;
}

module.exports = counter;
```

```JavaScript
// index.js
const counter = require('./counter.js);
console.log(counter()); // 0
console.log(counter()); // 1
console.log(i); // Error
```

```JavaScript
module.exports = {
    requireUser,
    requireAdminUser
}
const { requireUser, requireAdminUser } = require('./utils')
```

## What about open source community modules?

## Node Package Manager (NPM)

- NPM is a **command line tool** for downloading packages.
- A **package** is a collection of modules.
- You can `npm install` packages, giving you a `node_modules` folder.
- You can require packages from there.
- File paths are not necessary for packages installed this way. Simply require by the package name (like how you require a built-in module).

```JavaScript
npm install moment // command line
require('moment') // in JS file
```

## Package Dependencies

- What does `npm install` do? Installs all packages listed in the `package.json`.
- If project doesn't have a package.json file, create one with: `npm init`.
- For your projects, be sure to add each package you use to your `package.json`.
- Install and add packages to your `package.json` using this command:
  - `npm install <pkg name>`
  - You can also add packages manually, though not recommended.
- Generate a new project using a package.json file with `npm install`.

## Node Server

### Why create a server?

- Fetch data from other services
- Save/fetch data from our own database
- Process large quantities/complex data outside the browser

### How do servers work?

- Servers *listen* for requests on a specified port.
  - They can even listen for specific *methods* and/or requests to specific *routes(endpoints)*.

- Depending on the *method* and *route(endpoint)* specified in the request, a server may or may not process the request in some way.

- In the end, the server will *respond* to the request with a status (success/failure) and [optionally] some data.

#### Event Emitters

- An event emitter is a type of class which enables attaching specific functionality to a particular event.
- Think about events on the browser, such as a button click, and attaching a listener to that button with specific functionality to run.

```JavaScript
const EventEmitter = require('events');

const myEmitter = new EventEmitter()

myEmitter.on('action-occured', function() {
  console.log('I heard the action!!');
});

function action() {
  myEmitter.emit('action-occured');
}
```

#### HTTP module and EventEmitters

Node's **http** module is used for creating servers, is an example of an event emitter with a specific API.

```JavaScript
const http = require('http');
const server = http.createServer();

server.on('request', (request, response) => {
  console.log('request received');
  let body = [];
  request.on('data', chunk => body.push(chunk));
  request.on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(`Received body of request ${body}`);
    response.end('Here is a response');
  });
});

server.listen('3000', () => {
  console.log('Listening on port 3000');
});
```

### Postman

- A robust tool for testing requests to your server.
- Test different request methods and routes(endpoints) to ensure your backend is working as expected (even in error states).
- Send the exact data your server is expecting
  - Enables decoupling of your frontend from your BE.

### Useful package

Node mon -> install globally -> this prevents you having to restart the server for changes to take effect

```
npm install -D nodemon // -D Installs it as a dev dependency!
```

## Best practices

Separate tags for production and for dev.

```
npm run dev // for dev
npm start // for production
```

```JavaScript
scripts: {
  start: "node server.js"
  dev: "nodemon server.js"
}
```

## Streams

- A stream is a way of handling a large amount of data that you don't necessarily want to hold entirely in memory at any one time.
  - In a stream, data is handled in partial chunks, which can be managed incrementally.
- A key goal is to limit the buffering of data to acceptable levels such that sources and destinations of differing speeds will not overwhelm the available memory.

It allows us to take incremental pieces of data and then process it. I.e. when you watch a video, you don't have to pre-load the whole thing, it buffers in chunks.

Imagine you come across a candy mountain. You take pieces of candy, put it in a buffer, and float in down a stream to your home.

## Streams in node

- Every stream broadcasts certain types of events.
- There are two main types of streams in Node:
  - Readable Streams
  - Writable Streams

- Readable Streams:
  - Events: data, end, close, error
  - Method: pause(), resume(), destroy(), pipe()

- Writable Streams:
  - Events: pipe, drain, close, error
  - Method: ....

### Standard In and Out

Two of the most basic streams are **stdin** and **stdout**.

**stdin**: The input to a computer "process"
**stdout** The output to a computer "process"

### Processes

A process is an **instance** of a program and the environment it is running in.

Your computer's operating system manages many processes simultaneously.

## Let's write a program

- Let's use Node's **fs** module to get a better understanding of how streams work.
- **fs** is a built-in module for working with the file system.
- We'll use the fs module to read and write data to a file.

```JavaScript
const http = require('http');

// Create server...
server.on('request', (request, response) => {
  console.log('received request');
  let body = '';
  request.on('data', chunk => body += chunk);
  request.on('end', () =>)
});
/// .... server ends

const readQuotes = () => {
  const quoteStream = fs.createReadStream(__dirname + '/readMe.txt');
  let data = '';
  let chunkCount = 0;
  quotesStream.on('data', data => {
    chunkCount++;
    process.stdout.write('got chunk number' + chunkCount);
    data += chunk.toString().trim();
  })

  quotesStream.on('end', () => (process.stdout.write(data));
}

const writeStuffToFile = () => {
  const writableStream = fs.createWriteStream(__dirname + '/writeToMe.txt');
  writableSteam.write('write some stuff');
}

const readFromWrite = () => {
  const quoteStream = fs.createReadStream
  //....
}

const readFromPipeTo = () => {
  // read from one file and write to another
  const quotesStream = fs.createReadStream(__dirname + '/readMe.txt');
  const writableStream = fs.createWriteStream(__dirname + '/writeToMe.txt');

  quotesStream.pipe(writableStream);
  quotesStream.on('end', () => (process.stdout.write('\n readfile piped to writefile \n\n')))
}
```

## Summary

- Node is lightweight, flexible, JS for BE.
- Node modules are awesome, allows us to avoid globals.
- Common use case -> writing servers.
  - Node servers are based on the concept of event emitters
    - These listen and send responses.
  - ...



### Questions

If I install a module, say `moment`, I've bloated my project somewhat, does it impact performance depending on the specific files I import moment into.

Why don't we need to npm install for node when we use require?

What is an I/O operation?

Is JavaScript asynch or not.

Spoiler: at its base, JavaScript is a synchronous, blocking, single-threaded language.
JavaScript can mimic asynch activity.
