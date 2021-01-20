# Unit 7: State Management - Redux

# Objectives

In this lecture, we'll discover Redux, a more efficient and featureful way to manage state in our applications.

## What is useful about a state management library?

- Simplified access to state across complex access.
- Better debugging == including time travel!
- Simplified Testing.
- A Single Source of Truth.

# History

- Created by Dan Abramov in 2015.
- His talk was going to be on developer tools, and to perpare for his talk he ended up developing Redux.
- Dan has jokingly proclaimed that the methodology use to develop Redux sas Talk-Driven Development: sign up for a talk, and let that drive your development.

## What is Redux?

Redux is a state management library, based on the Flux architecture of React.

Flux, in turn, is a modified version of the observer pattern, one of the 23 design patterns outlined by the `Gang of Four` in their 1995 book 'Design Patterns: Elements of Reusable Object-Oriented Software'.

## Observer Design Pattern

E.g. on twitter you subscribe to hear everyone's tweets.

Components are subscribed to the state. When the state changes it will re-render any components using any information from state.
So React components are subscribed to state.

Observers are subscribed to your subject. That is the observer design pattern. React uses this.

- The observer pattern is a software design pattern in which an object, called the subject, which references state, publishes its presence.
- It maintains a list of its dependents, called observers (or listeners), that have subscribed to notifications of any updates. When state changes, the subject notifies all subscribed observers, usually by calling one of their methods.
- The observer pattern is used primarily in event driven-applications.

## Redux Under the Hood

1. Subject - publishes its interface
2. Observers - subscribe as listeners for specified state changes.
3. Events - cause state changes.
4. State changes - invoke notification. -> inside of store.
5. Notification - invokes subscribed observer updates.

State is kept in the store.

Event (user action) -> [getState, setState, notify, subscribe, unsubscribe]


Observer 1

## Flux

Facebook's state management architecture built on the observer design pattern.

- Actions
- Dispatchers
- Stores -> note plural
- Views

## Flux Data Flow

An action occurs which is passed by an Action Creator to the global Dispatcher, which then passes it to every registered callback.

If a store has a callback registered with the Dispatcher, it will receive the dispatched event/data. Logic within the store applies the action/data, and then emits a change event.

View gets change event and updates itself and its children.

Action -> Dispatcher -> Store -> Views

- Action, triggered by a user event.
- Triggers a dispatch.
- Dispatcher updates the store accordingly.
- Store then tells all subscribed components that it has been updated.
- View = the component.

                      ---< Action (flux) <---------------
                      |                                 |
Action (flux) -> Dispatcher (flux) -> Store (flux) -> View (React)

## Redux

Redux provides a stripped down and efficient implementation of Flux architecture in order to provide a simple data store used to power unidirectional data flow to react.

It was built with react in mind.

## What does React see in Redux?

- Efficient State Management.
- Hot Module Reloading that doesn't lose track of state.
- Time Travel Debugging with Redux DevTools.

## Redux DevTools

Each line is an action that is occurring.
When you click something, or trigger an event, you can see a new line appears, which is an action being triggered.

Each line has it's own 'sub state' (Reid's term).

You can click jump to certain points, and then move one step at a time.

Every single action takes a snapshot of redux.

## Under the Hood: Redux

The Redux store is, at its core, an object consisting of:

1. The state object representing the state of the application.
2. Methods allowing observers to 'subscribe/unsubscribe'.
3. The reducers used to calculate new state objects.
4. A dispatch method used to accept...
...

## The Golden Rules of Redux

- The Store holds your application level data in Sinlge State Tree
  - Just an object containing nested objects and arrayS
  - The redux store is the single source of truth
- Actions
- Reducers

      ------------------------------------< Re-renders ---------------------------------------------
      |                                                                                            |
React Component -invokes-> Action Creator -dispatch action-> Reducer -returns new state object-> Store {}
                            { type: SOME_ACTION, payload: 'some new value}


Connects to the Store
- mapStateToProps()
- mapDispatchToProps()
- connect()

## Store

Redux uses a single store to save data. That store can consist of deeply embedded objects, referencing all the data required by the app.

The store is initialized and updated by reducers.

## Actions

- Actions are just objects that are essentially custom events that carry state changes with them. They are the only way to update state in the Redux store.
- These actions and reducers server as a way to whitelist how the state can be updated.
- Your component dispatches action objects via Action Creators whenever a state change needs to occur.
- Actions must contain a 'type' that indicates the kind of update (and thereby which properties of state will be updated).
...

## Reducers

- A reducer is a function that inputs state via an action, and then returns some change to the state, depending on the action.
- Reducers often house switch statements that switch on the type property passed in with the action.
- Reducers treat the state as immutable, making a change on a 'copy' of the state.


## Summary

1. The Redux state management library is based on the Flux architecture of React, which is turn based on the Observer design pattern.
2. Powerful devtools
3. Predictive state allows developers to predict state based on an initial state and a history of actions.
4. Declarative programming paradigm allows developers to easily see what is being calculated with very little parsing through control flow.
5. Redux achieves predictive state within the paradigm of declarative programming through action objects, action creators and reducer functions.

### Questions

I redux storing the historical state data by default, even when react dev tools is not on? YES


I read online that state is immutable in react, but not in flux, is this true, and if so what does it mean? - everything in store is deep copied -

What is the benefit of redux over flux?
Was it previously possible to do the same thing using Flux?


I read online that flux has a singleton dispatcher, whereas there is no dispatcher in Redux, is that true, if so what does that mean?

What is a unidirectional data flow in react?

The balance between still using props and redux? - more than 3 layers of prop drilling - use redux
