# Notes
Lukas Ruebbelke -> frontend masters

The antithesis of complexity is simplicity.
The problem is not a lack of advanced knowledge, but rather a failure to follow to follow first priciples.

## Local complexity

https://stackblitz.com/edit/micro-refactor-example

Can I know the result of this code at all times?
Can I reuse this code?
Can I test this code?

It is impossible to good tests for bad code.

If you are committed to writing tests, then you must commit to writing testable code.

## The axis of evil

### Hidden state
Function is dependent on the state outside fo the function. You could call the function an infinite number of times and you still don't know what it is going to do.

### SRP
Function should only do one thing

### Nested logic
The nested logic makes it very hard to test and reuse the code.

80% of the problems Lukas comes across come from these 3 violations.

Ironically, these are the easiest problems to fix.

## Solutions

### Extract to parameter
If you have hidden state in your function, simply pass it in through the parameters. This is dependency injection.

### Extract to method
Extact the nested logic into extra functions.
Extra SRP violations into extra functions.
This creates air traffic control methods, their primary job is to delegate.

You should be able to call a function 1000 times and always get the same result.

This means we can have fine-grained code vs coarse-grained code.
Reducing and abstracting complexity into small fine grained peices of code.

Extract to function and extract to parameter. Abstract away to fine grained small functions that do one thing, that will return the result every single time or do the same thing every single time.

You don't want to prematurely optimise your code. When you give new developers the tools to fix bad code. Refactor through promotion.

Constantly moving things to higher abstractions.

Ken block said, make it work, make it right, make it fast.

## 4 items of code
Nouns, verbs, conditions and iterators.

## Application complexity
https://github.com/briebug/bba-thin-components

Book - the Theoretcial Minimum by Leonard Susskind
In classical physics, if you know everything about a system at some instant of time, and you also know the equations that govern how the system changes then you can predict the future. That's what we mean when we say that the classical laws of physics are deterministic. If we can say the same thing, but with the past and future reversed, the same equations tell you everything about the past. Such a system is called reversible.

- In classical physics, if you know everything about a system at some instant of time -> STORE
- and you also know the equations that govern how the system changes -> REDUCERS
- then you can predict the future. That's what we mean when we say that the classical laws of physics are deterministic. -> We can run the same function 1000 times and it will always give the same result.
- If we can say the same thing, but with the past and future reversed, the same equations tell you everything about the past. Such a system is called reversible. -> You can do this with redux. You can reverse state and look backwards into the program, to look at a historical state.

We can separate the user events.
Using the observer pattern to decouple events from responses.
When we redifine how think about interactions, we can redifine how an application experiences time and space.

Abstracting out immediate event handling and moving it elsewhere.

## Space - manual dispatch

We have a click, we capture it, and we convert it into an action.
If one action is a user interaction. If multiple user interactions is a user flow. I capture those and recreate a particular user flow.

### Space - Dynamic Dispatch
We can use this to automate testing. By syncing state across space and time so that two people can collaborate.

This can be used to communicate between multiple tabs at the same time.

## Enterprsie complexity
https://github.com/briebug/ng-module-republic

Every application starts as an idea.
From the point of inception, there is no turning back.
The application grows in complexity.
It continues to increase in complexity until we arrive at the enterprise stage.
We are really dealing with module complexity.
Everybody wants something different, everybody needs to stay alive.
Everyone tries to co-ordinate a release at scale.
I wonder why this isn't going better?

Module Federation.

We extract units of complexity into standalone self-contained modules that can independently developed and consumed.
This is related to microservices.
Imagine that we have a large number of modules that are available to us.
We have n number of producers in the form of federated modules.
Create a centralised registery, that allows us register modules in the ledger.

Imagine you have a number of microservices that exist in containers. Containers are coming in and out of existence. You need service discovery. You need a ledger that registers modules that are available for consumption.

## Health check

Not only do you need to know which modules are available, and you need to know which modules are healthy. The ledger is monitoring all the different modules.

## Authorized Consumption

Imagine you have a BIG $$$ consumer, you get all the modules! Then you get a restricted consumer. Based on the users identity and how they authenticate with the ledger, you can say which modules are available to them.

You can also do split testing.

## Module inception

Federated modules inside of federated modules.

### More tips

People don't actually take the time to data model properly.
If you get it right it's very easy to build on that.
If you get it wrong, it's very hard to fix.
Because you have a crack in your foundation.

nx cli -> automate your development.

Never let a human do what a robot can do perfectly everysingle time.

Look for the meta patterns, and the common things you are doing, so that you can automate around and extract around them.

https://www.qualimente.com/2017/03/02/effects-of-project-size-and-quality-on-software-project-delivery/
-> Stephen Kuenzli - read everything he has written.

## Books
Clean Code - A Handbook of Agile Software Craftsmanship
Refactoring - Improving the Design of Existing Code - Martin Fowler, Kent Beck