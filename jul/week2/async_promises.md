# Async and Promises

## Recap

- Callbacks
- Promises
  - then()
  - async/await

## Callback Pattern

With the **callback pattern**, we rely on the **event loop** and the **callback (task) queue** in order to get any delayed functionality back into JavaScript-land, knowing that our delayed task is complete.

```JavaScript
setTimeout(() => console.log('done!'), 1000)
```

^ Here `setTimeout` is the async function. `console.log` is the callback function. `1000` is the delay argument.

## Callback (Task) Queue Details

A **task** is any JavaScript code which is scheduled to run. These all get scheduled on the **task queue**.

Tasks get added to the task queue when:
- A new JavaScrip program or subprogam is executed (such as from a console, or by running the code in a `<script>` element) directly.
- An event fires, adding the event's callback function to the task queue.
- A timeout or interval created with `setTimeout()` or `setInterval()` is reached, causing the corresponding callback to be added to the task queue.

The event loop driving your code handles these tasks one after another, in the order in which they were enqueued. Only tasks *which were already in the task queue* when the event loop pass began will be executed during the current iteration. The rest will have to wait until the following iteration.

## Promises

With **promises**, the same non-blocking task execution occurs **and** we get an object immediately returned to us in JS, a **Promise** object, which enables us to more easily track / reason about our asynchronous code.

Promises are mainly syntactic sugar, however there is one significant execution difference: Promises go into the **micro-task queue** rather than the task queue.

## Microtask Queue Details

The Microtask queue can block the event loop, because it will finish everything in that queue until it is done processing everything else.

It has priority over the Task Queue.

## Async/Await

**Async / Await** is a new-ish (ECMAScript 2017) way of dealing with asynchronicity in Javascript.

The idea behind async/await is to make async functions look synchronous.

This makes the code more readable (no callback hell orchained .then's).

An **async** function object is a special type of function that can be suspended to wait for an async operation to complete.

## Async/Await Details

- An Async function returns **a promise**. If invoked, the function returns its return value *wrapped* in a promise.
- The **async** keyword can only be used on functions.
- **Await** can only be used in async functions.
- Upon hitting **await**, the thread of execution leaves the async function continues to the next code to be executed. The await moves into the *microtask queue* and will resume after the promise is resolved.

## Practical Applications

### Events - Common Examples

DOM Events - Waiting for a user to click on a button before firing a function.
Servers - Listening for requests and invoking functionality once a request is received.

### HTTP Requests

Sending HTTP requests and waiting for their responses requires some type of asynchronicity.

### Debounce

Common interview question: What is the difference between debouncing and throttling?

Debounce delays the processing of some function until after a given amount of time has passed.

Common use case:
- Type-ahead search results


