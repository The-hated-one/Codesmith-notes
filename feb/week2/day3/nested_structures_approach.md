# Recursion in Nested Structures

## Why Recursion?

- It is declarative.
- Lets you account for arbitrary depth.
- Allows us to break a complex problem into smaller ones.
- Performs better in solving problems on tree structures.

## Drawbacks

- Call stack usage leads to greater memory allocation.
- Allocating new stack frames can be slow.

## Flatten Deep

### Recursive

```JavaScript
const flattenDeep = array => {
  const flattened = [];

  array.forEach(el => {
    if (Array.isArray(el)) flattened.push(...flattenDeep(el));
    else flattened.push(el);
  });

  return flattened;
}
```

### Imperative

```JavaScript
const flattenDeep = array => {
  const flattened = [];
  let flat = false;

  while (!flat) {
    flat = true;
    array.forEach(el => {
      if (Array.isArray(el)) {
        flat = false
        array.forEach(subEl => {
          flattened.push(subEl);
        });
      } else {
        flattened.push(el);
      }
    })
  }

  return flattened;
}
```

## Questions