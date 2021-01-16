# Hack hour

```JavaScript
function pow(base, power) {
  if (!power) return 1;

  return base * pow(base, power - 1);
}
```