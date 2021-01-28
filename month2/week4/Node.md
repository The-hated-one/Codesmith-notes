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

### Questions

If I install a module, say `moment`, I've bloated my project somewhat, does it impact performance depending on the specific files I import moment into.

Why don't we need to npm install for node when we use require?

What is an I/O operation?

Is JavaScript asynch or not.

Spoiler: at its base, JavaScript is a synchronous, blocking, single-threaded language.
JavaScript can mimic asynch activity.
