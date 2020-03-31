# Javascript syntax / programming tricks

## `switch case`: `default` should throw an error

If you have an empty `default` in a switch case, make it throw an error, so that you know when it is entered.

```js
  switch (operator) {
    case '..':
      data = data.filter(
        (entry) => accessor(entry) >= values[0] && accessor(entry) <= values[1],
      );
      break;
    case '=':
    case '': {
      data = data.filter((entry) => accessor(entry) === value);
      break;
    }

    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
```