# Hack Hour stack/queue

```JavaScript
class Stack {
  #data = []; // this is how you define a private property on a class.

  get size() {return this.#data.length};

  isEmpty() {
    return this.#data.length === 0;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.#data[this.#data.length - 1];
  }

  push(value) {
    this.#data.push(value);
    return this.#data.length;
  }

  pop() {
    return this.#data.pop();
  }

  print() {
    console.log('Stack => ', this.#data);
  }
}
```

