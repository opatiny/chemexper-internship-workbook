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

## Operators

### ternary operator (? :)

This operator accepts three operands. It has the following syntax:
```js
let result = condition ? resultIfConditionTrue : resultIfConditionFalse;
```

This is equivalent to:
```js
let result;
if (condition) {
  result = resultIfConditionTrue;
} else {
  result = resultIfConditionFalse;
}
```

### spread operator (...)

This operators allows to "explode" an array or an object. This is an example of how it can be used:

```js
let data = [1, 2, 3];

function sum(x, y, z) { // a function that inputs three variables
  return x+y+z;
}

let result = sum(...data); // this would return 6
let sameResult = sum(1, 2, 3); // this is equivalent to the line above
```