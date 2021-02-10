# Senior Projects

## Obsidian

DENO -> JavaScript/Typescript Runtime
GraphQl
Redis

### The Problem

No dominant library that gives you full graphQL functionality or the ability to cache your queries written for Deno.

### MVP 

- Optimize the caching solution on both the server side with Redis
  - Garbage collection
- GraphQL
  - Aliases
  - Fragments
  - Variables
- Demo site revamp.

## Team catSnakes

### SWELL

Websocket and Chaos Testing.

Swell is an Electron based API dev tool that helps with end-to-end testing.

### Problems

- No built in fuzz or chaos testing tools to find vulnerabilities and other unforeseen blind spots in the code base.
- Holes in internal testing already implemented for Websocket

- Stretch
  - Despite the focus on streaming APIs, there are gaps in the existing support for modern streaming protocols (WebRTC in particular)
  - Current build lacks some of the robust analytical data offered by competitors
    - Specifically in regards to timing and delays

### Production Goals

- Shore up missing internal tests for Websocket
- Add chaos and stress testing packages
- More robust analytics, response time

### MVP

- Implement full testing for Websocket functionality
- Create a chaos testing suite that includes:
  - Fuzz testing: odd data and odd formatting to confuse the server
  - Server load
  - Scripting vulnerabilities

### Stretch Goals

- WebRTC
- Analytics

## Team Danger Noodle

### Recoilize Refactoring

- Recoil is an experimental state management library for React apps. It provides several capabilities that are difficult to achieve with React alone, while being compatible with the newest features of React.

### Problem

- Traditional React applications did not take full advantage of Server Side Rendering to boost performance in websites. As new technologies are capitalizing on this feature, frameworks such as Nuxt.js and Next.js are designed to use this asset to its greatest potential.
- Currently Recoilize does not support Server Side Rendering.

### MVP

- Server Side Rendering support with Next.js
- User Interface
  - Flame Graph
  - Ranked Graph
  - Component Graph
  - Atom Network
- Update internal tests
  - Jest

### Stretch

- Update Recoilize codebase to support Typescript version 4.1
- Update internal state management system
  - Recoil
  - Redux Toolkit

## Panda-whale

### Quell

- Open source lightweight javascript library, used for caching graphQL.

### Problems with Quell

1. Quell does not handle arguments or variables, only standard queries.
2. Communication between the Libraries is not efficient.
3. Authentication: the caching exposes data to unauthorized users.

### Goals

1. Extend the library to address GraphQL queries with arguments and variables since it only caches standard queries at the moment, making it capable of handling full query data.
2. Couple the FE & BE to communicate more effectively.

## Heat Seeking Devil Chicken

### Problem

- Waterfalls -> and unintentional sequence that should have been parallelized.

- When data is fetched in a React app, there is no clear way for developres to easily identify which components will be re-rendered due to newly fetched data.

### React Concurrent Mode with Suspense for Data Fetching

### Goal

- NPM library that can traverse codeabse, identify http requests and create a data-dependency tree visualization to highlight potential waterfalls.


## Team stab-rabbit

### Jotai Atomic

Jotai is a new flexible state management library for react.
- It uses an atomic state management style.

### Problem

- No stand-alone feature-rich development tool exists for Jotai.

### MVP

- Add time-travel
- Atomic Network Visualization
- Measure render performance measurements
- State modifications via rich UI

### Stretch

- Integrate end-to-end testing with cypress.
- Wrap application with Electron.
- Localize performance concerns.

