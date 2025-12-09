/**
 * Performs a deep clone of a JavaScript object using recursion.
 * Handles arrays and objects, creating completely independent copies.
 * 
 * @param {*} obj - The object or array to clone
 * @returns {*} A deep copy of the input
 */
function deepClone(obj) {
  // Handle null and undefined
  if (obj === null || obj === undefined) {
    return obj;
  }

  // Handle primitive types (string, number, boolean, symbol, bigint)
  if (typeof obj !== 'object') {
    return obj;
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle RegExp objects
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags);
  }

  // Handle Arrays
  if (Array.isArray(obj)) {
    const clonedArray = [];
    for (let i = 0; i < obj.length; i++) {
      clonedArray[i] = deepClone(obj[i]);
    }
    return clonedArray;
  }

  // Handle Objects
  if (obj instanceof Object) {
    const clonedObject = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObject[key] = deepClone(obj[key]);
      }
    }
    return clonedObject;
  }

  // Fallback for any other type
  return obj;
}

// Export for use in Node.js environments (if available)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = deepClone;
}
