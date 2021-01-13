# React

## How does react handle data?

- Top-down
- One-way
- Props are immutable

## State and Event Handling

- One way data flow
- State declared in top level only
- Use setState
  - A method on each stateful component used to update it's state.
  - Functions that use setState need to be declared inside the stateful component.

## setState and Event Handlers

- We can access this functionality in child components by creating handler methods in our stateful component that invoke setState. We then pass these functions down as props to child components.
- Once we've received them in our child component as props, we can invoke the function, triggering an update in state in the parent.

## New things 

```JavaScript
<button data-number={someVariable} onClick={this.doSomething}>A button</button>

doSomething(event) {
  const dataNumber = event.target.dataset.number;
  console.log(dataNumber) // prints someVariable
}
```

## Binding class methods

- You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default.

....

## HTML Element Callbacks

React enables you to work with a range of events, which you can attach to JSX elements in the hierarchy.

onClick is a synthetic event.

- onClick
- onSubmit
- onChange

## Synthetic Events

When the event callback is invoked, React creates a synthetic event and passes this 'event' object as the first parameter to the handler. From there we can examine the event to discover things like the source ID.s

## Reconciliation: Setting State and Rendering

Each time there is a state change a reconciliation process kicks off
1. All components that reference the changed value is re-rendered in a new Virtual DOM
2. The diff between the previous Virtual DOM representation and new one will be calculated using React's optimized diffing algorithm.

...

## Optimized Diffing Algorithms

Typical tree diffing algorithms find changed nodes a O(n^3) or worse, React works in O(n).

React operates on **various assumptions **when comparing DOM nodes and component structure.
1. When comparing two nodes if they are of different types it assumes the rest of the tree below needs to be re-rendered.
2. If you specify a key on each node in a list, React is able to find insertion, deletion and substitution changes.

## Additional reasons React is so performant...

- Updating the actual DOM is expensive.
- React batches changes to the DOM to paint only once.
- React only updates the sub tree.
- Further optimization can be set up through specific lifecycle methods like shouldComponentUpdate.

## Component Lifecycle

React components have lifecycle methods that we can use.

1. Lifecycle methods allow us to inject code at different points during a component's lifecycle birth/growth/death process.
2. The render method is the primary lifecycle method we should be concerned about.

componentDidMount
componentDidUpdate
componentWillUnmount

Mounting    -> constructor -> render -> React updates DOM and refs -> componentDidMount
Updating    -> setState()  -> render -> React updates DOM and refs -> componentDidUpdate
Unmounting  --------------------------------------------------------> componentWillUnmount

## Types of components

- Container: A top-level, stateful component that manages state, and passes props to its children. These are best defined with the class keyword, extending React.Component
  - Smart/Stateful/Class components

- Presentation: These are stateless components that are only responsible for receiving props, and displaying a view. These can be expressed as classes or as functions.
  - Dumb/Functional/Stateless components

```JavaScript
// Class
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1> // Props is accessible on the prototype chain
  }
}

// Function declaration
function Welcome(props) { // Props is passed in as an argument
  return <h1>Hello, {props.name}</h1>
}

// ES6 Function Expression
const Welcome = props => (
  <h1>Hello, {props.name}</h1>
)
```

## Summary

1. Use handlers in your stateful components to call setState and pass those handlers down to child components to be callbacks in event handlers.
2. React uses an optimized diffing algorithm to enable fast rendering to the DOM.
3. Use React's component lifecycle methods to inject functionality at appropriate points.
4. Use pure functions to keep your code simple and concise.

### Questions

Passing down a unique key for each element. Why is this important? For example at work, we have a bunch of places where people haven't bothered to do this for old code, and it doesn't break the code, it just throws a warning error.
What is the actual risk of not setting unique keys for each element, as each element has a unique react_id anyway if you inspect the DOM.
-> The key allows an optimization in the diffing algorithm.

What is the diffing algorithm?

<!-- On the line:
```
this.handleClick = this.handleClick.bind(this);
```
Is it correct to say the handleClick function is already on the prototype chain of the App class,
however at this point, the this keyword within the handleClick function refers to the handleClick function itself.
So we are binding the this keyword within the handleClick function to point to the App class, rather than
the function itself -->

So in terms of binding, is it correct to say that 

NodeList