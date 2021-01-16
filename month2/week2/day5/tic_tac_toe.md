# Tic Tac Toe Approach

## React Component

A class/constructor function.

When react creates your component, it is instantiating your class.

That component instance isa reflection of what you see in the DOM.

## React Element

- Description of a Component Instance.
- A plain JavaScript Object.
- Lighter weight than a DOM node.
- Used in the Diffing Algorithm to quickly update the DOM.

## React Elements in Action

```JavaScript
const Child = (props) => {
  return (
    <div>I am a Child</div>
  );
}

export default Child;
```

```
{
  type: 'div'
  props: {
    children: 'i am a child'
  }
}
```

```JavaScript
<Child myChild={this.state.childData}/>
<Sibling>
  <div>{this.state.siblingData}</div>
  </Sibling>
```

```JavaScript
{
  type: 'sibling',
  props: {
    children: {
      type: 'div',
      props: {
        children: 'my other child data'
      }
    }
  }
}
```

### JSX

Compiles down to React.createElement().

```JavaScript
React.createElement(Child, {myChild: this.state.childData}); // returns a JavaScript object
```

Why does it unbind -> when you call that method.

Experimental Class syntax:

```JavaScript
class Row extends Component {
  state = {

  }
}
```

Difference in binding between a this function and an arrow function.
On an arrow function the this binds to the parent component.

The fibre tree is what React uses to update the tree.


### Questions

So it is not a React thing, it is a JavaScript thing, it is because we are passing the function definition.

Go over the binding issue.