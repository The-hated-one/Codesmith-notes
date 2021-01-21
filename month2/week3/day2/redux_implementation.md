# Redux Implementation

## How do we write reducers?

1. Map out our state logically across different reducers.
2. WIthin each reducer file:
   a. Create an object to store your initial state values you want the reducer to start with.
   b. Create a pure function that takes two parameters: **state** and **action**.
    - *state* should default to your initial state object (usually using default parameters).
  c. Create a switch statement that checks action.type
  d. Return the new state.

## Example

```JavaScript
/// ACTION
dispatch({
  type: CHANGE_COUNT,
  payload: 5
});
// ------> REDUCER
```

```JavaScript
// REDUCER
const initialState = {count: 0}

function countReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_COUNT:
      return Object.assign({}, state, {count: action.payload})
    default:
      return state;
  };
};

export default countReducer
```

## How do we create our store?

1. Combine your reducers into a single function/object using **combineReducers** from redux.
2. Import the object returned by combineReducers and pass it into the **createStore** method from redux to create your store
   - This is also where we can add in redux devtools.


We combine the reducers to create the store:

```JavaScript
// index.js
import { combineReducers } from 'redux;
// import reducer functions
import countReducer from './countReducer.js'
import userReducer from './userReducer.js'

const reducers = combineReducers({
  counter: countReducer,
  user: userReducer,
})

export default reducers;

```
```JavaScript
// store.js
import { createStore } from 'redux';
import reducers from './index.js'

const stores = createStore(reducers);

export default store;
```

You can add middleware in `store.js`, e.g. redux devtools:
```JavaScript
import { createStore } from 'redux';
import { composeWithDevTools } 'redux-devtools-extension';
import reducers from './reducers/index';

const store = createStore(
  reducers,
  composeWithDevTools()
);
export default store;
```

## How do we make our store available to React

1. Import **Provider** from react-redux, the store from store.js, and your top level component.
2. Wrap your top level component in the **Provider** component.
3. Pass the store as an attribute to the Provider component.

### Giving our Store to React

```JavaScript
// index.js
import { render } from 'react-dom';
import { Provider } from 'react-redux
import App from './components/App';
import store from './store.js';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root');
);
```

## How do we access the store from within React components?

### mapStateToProps

- A pure function that receives state as an argument and returns an object listing any properties of state that the component wants to subscribe to.
  - These keys will then be passed on as props to the component they are connected to.

```JavaScript
// this function merges the resulting object into this component's props object
const mapStateToProps = state => (
  {
    counter: state.counter.count
    user: state.user
  }
)
```

### mapDispatchToProps
- a pure function that receives **dispatch** as an argument and returns an object containing event handlers.
  - These event handlers can be passed to events (onClick, onChange etc.)
  - When invoked, these event handlers will **dispatch actions**
  - This is accomplished by invoking **action creators** that will return action objects, which are passed into dispatch.

```JavaScript
// this function merges the resulting object into this component's props object
const mapDispatchToProps = dispatch => {
  {
    increment: () => dispatch(incrementActionCreator()),
    decrement: () => dispatch(decrementActionCreator())
  }
}
// WORKS LIKE THIS
const mapDispatchToProps = dispatch => {
  {
    increment: () => dispatch({type: INCREMENT_COUNT, payload: 5}),
    decrement: () => dispatch(decrementActionCreator())
  }
}
```

## connect
- Once these functions have been defined, they should be passed to the **connect** function that we import from react-redux. This ties our component to the redux store.

```JavaScript
import { connect } from 'react-redux';

export default connect(mapStateToProps, mapDispatchToProps)(Component)
```
E.g.
```JavaScript
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
```

## How do we write action creators?

1. Create a file and export **constant** variables that represent all of the ways you can change state. These will be the values passed as the **type** properties in your action objects.
2. All processing of side effects (ajax calls) should be handled in Action Creators. Once all the data necessary to facilitate the state change is derived, the value should be passed as the **payload** in your action objects.
    - In order to implement asynchronous functionality in Redux, you'll need to employ middleware like **redux-think** or **redux-saga**.
3. Each Action Creator should return an action object (which will be passed to dispatch, which will invoke your reducers).


Redux Thunk, and redux saga.

```JavaScript
// ACTION
import (CHANGE_COUNT) from './types.js';

dispatch({
  type: CHANGE_COUNT,
  payload: 5
});

// types.js
export const CHANGE_COUNT = 'CHANGE_COUNT';

// REDUCER
import { CHANGE_COUNT } from './types.js';

const initialState = { count: 0 }

function countReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_COUNT:
      return Object.assign({}, state, {count: action.payload})
    default:
      return state
  }
}

// actions.js
import * from './constants/actionTypes';
const changeCount = (num) => {
  type: types.CHANGE_COUNT
  payload: num
}

// import actions from actions.js and pass them into mapDispatchToProps
```

React Redux Architecture

## Summary

For example Redux Debug Workflow:

1. You can log actions and states. They are just simple objects.
2. Go through the log and find the action that caused the bad state.
3. Check the action. Is that good?
...

- Semi steep learning curve but for good reason
- Most large codebases are built with some sort of state management tool
- Once you understand the boilerplate, it simple becomes a matter of creation additional reducers and action creators.

### Questions

Pure functions.

Is connect here an higher order function, which we are passing mapStateToProps and mapDispatchToProps, and this function is returning a function, which we then invoke with our component as an argument?

So with mapState to props, this is not a redux function, but more a redux design pattern.

How does dispatch connect to the reducer?

Is there a listener somewhere under the hood that is listening for a dispatch, and then triggering the reducer function, or do we need to write that ourselves?

It sends the dispatch to all the reducers.
