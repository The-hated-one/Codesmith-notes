# Event Loop

- Concurrency and parallelism and threads.
- Review V8's call stack and single-thread
- Understand the Task queue and Web API through examples

## What is Concurrency?

Concurrency is the ability of a computer program to be decomposed into **order-independent**, or partially order-independent units.

### Concurrency example

```JavaScript
const plus = (a, b) => a + b;

plus(plus(1, 2), plus(3, 4))
```

## Difference between Concurrency and Parallelism

- Concurrency relates to the logical structure of a program. What parts of a program are logically independent such that they could happen separately?

- Parallelism relates to the simultaneous execution of separate parts of a program.

## What is a thread?

A thread is a linear sequence of of machine instructions that cannot be divided into parallel sequences.

If a runtime maintains a single call-stack, this a strong indicator that the language is single-threaded.

## JavaScript Engines are single threaded

JavaScript engines, like V8 only manage a single sequence of tasks at a time.

JavaScript engines have a single call stack.

There are other languages that are multi-threaded (C++) and can run and manage multiple call stacks.

## Asynchronicity and the event loop

### setTimeout

```JavaScript
console.log('I will');

setTimeout(function() {
  console.log('for you.');
}, 0);

console.log('be there');
```

Call Stack
```JavaScript
console.log('I will')
setTimeout(....); // -> Connects to Web API and enqueue the function parameter onto the callback queue 
console.log('be there;)
function(){...}
function(){...} console.log('for you')
function(){...}
```

### JavaScript Engine

Browsers use a JavaScript engine to handle JavaScript code.

### Web API

Browsers also expose a Web API which handles asynchronicity.

### Event Loop

The event loop brings the function back to the call stack.

It constantly checks if the call stack is empty 

1. Is my synchronous code done running?
2. Do I have any async functions waiting to be run?

If Yes and Yes -> dequeue from the callback push onto the call stack.

### All together

Call Stack ----> Web API
    ^               |
    |               ↓
    Event Loop <- Event/Callback Queue

## AJAX

AJAX calls are also controlled by the Web API.

First it passed to the Web API.
Then it the API waits for a response from whatever server.
Then when the response comes back, it is added to the Callback queue.
Once the Call Stack is empty, it is dequeued from the Callback queue and pushed onto the Call Stack.

If you use fetch it will go to the **MicroTask queue**.

## Events in the Web API

- Async events
  - onClick
  - onSubmit

## Summary

- Understanding the how asynchronous operations use the web API and the event loop queue is necessary to truly understand non-blocking execution.
- The non-blocking nature of JavaScript is one of the real advantages that make it well suited for fullstack web development.

### Questions

What does the Web API run on? Is it using a different language from JavaScript? C#

What is the equivalent of push and pop for a queue? enqueue and dequeue

## CHECK OUT

Quokka.js to make VSCode a JS playground

## Remember/learn

enqueue and dequeue

Microtask queue has a higher priority than the callback queue. Promises go onto the microtask queue

Message Htin and ask about how C++ is running JavaScript under the hood.