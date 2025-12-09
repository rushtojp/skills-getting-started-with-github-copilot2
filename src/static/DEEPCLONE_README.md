# Deep Clone Utility

A JavaScript function to perform a deep clone of JavaScript objects and arrays using recursion.

## Overview

The `deepClone` function creates a complete independent copy of JavaScript objects and arrays, including all nested structures. This ensures that modifications to the cloned object do not affect the original object.

## Features

- ✅ Handles primitive types (string, number, boolean, null, undefined, symbol, bigint)
- ✅ Recursively clones nested objects
- ✅ Recursively clones nested arrays
- ✅ Handles mixed structures (objects containing arrays, arrays containing objects)
- ✅ Preserves Date objects
- ✅ Preserves RegExp objects
- ✅ Creates completely independent copies (no shared references)

## Usage

### In Browser

```html
<script src="deepClone.js"></script>
<script>
  const original = {
    name: "Alice",
    scores: [90, 85, 92],
    address: {
      city: "Boston",
      zip: "02101"
    }
  };

  const cloned = deepClone(original);
  
  // Modify the clone
  cloned.scores.push(88);
  cloned.address.city = "NYC";
  
  // Original remains unchanged
  console.log(original.scores); // [90, 85, 92]
  console.log(original.address.city); // "Boston"
</script>
```

### In Node.js

```javascript
const deepClone = require('./deepClone.js');

const original = {
  users: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]
};

const cloned = deepClone(original);
```

## Examples

### Simple Object

```javascript
const obj = { name: "John", age: 30 };
const clonedObj = deepClone(obj);
// clonedObj is a completely independent copy
```

### Nested Objects

```javascript
const nested = {
  person: {
    name: "Alice",
    address: {
      city: "Boston",
      coordinates: { lat: 42.36, lng: -71.06 }
    }
  }
};
const clonedNested = deepClone(nested);
// All nested levels are independent copies
```

### Arrays

```javascript
const arr = [1, 2, [3, 4, [5, 6]]];
const clonedArr = deepClone(arr);
// Nested arrays are all independent copies
```

### Mixed Structures

```javascript
const mixed = {
  users: [
    { id: 1, hobbies: ["reading", "coding"] },
    { id: 2, hobbies: ["gaming", "music"] }
  ],
  settings: {
    theme: "dark",
    notifications: ["email", "push"]
  }
};
const clonedMixed = deepClone(mixed);
// All objects and arrays at all levels are independent
```

### Special Objects

```javascript
// Date objects
const date = new Date('2025-12-09');
const clonedDate = deepClone(date);

// RegExp objects
const regex = /test/gi;
const clonedRegex = deepClone(regex);
```

## Implementation Details

The function uses recursion to traverse the object tree:

1. **Primitive types**: Returned as-is (immutable)
2. **null/undefined**: Returned as-is
3. **Date objects**: New Date created with same time
4. **RegExp objects**: New RegExp created with same pattern and flags
5. **Arrays**: New array created, each element is recursively cloned
6. **Objects**: New object created, each property is recursively cloned

## Testing

Run the comprehensive test suite:

```bash
node deepClone.test.js
```

The test suite includes 15 tests covering:
- Primitive types
- Simple and nested objects
- Simple and nested arrays
- Mixed structures
- Independence verification
- Special objects (Date, RegExp)

## Limitations

⚠️ **Note**: This implementation does not handle:
- Circular references (will cause stack overflow)
- Functions (functions are not cloned, but could be added if needed)
- Symbols as object keys
- Map, Set, WeakMap, WeakSet objects
- Custom class instances (only plain objects)

For most common use cases involving plain objects and arrays, this implementation provides a reliable deep cloning solution.

## License

This code is provided as-is for educational purposes.
