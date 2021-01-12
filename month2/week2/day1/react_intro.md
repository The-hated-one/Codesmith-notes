# React

```JavaScript
class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Richard"/>
      </div>
    );
  };
};

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}<h1>;
  }
}
```

Our UI is a direct representation of state.