/**
 * Test suite for the deepClone function
 * Run this file with Node.js: node deepClone.test.js
 */

const deepClone = require('./deepClone.js');

// Test helper to check if test passes
function assert(condition, testName) {
  if (condition) {
    console.log(`✓ PASS: ${testName}`);
    return true;
  } else {
    console.error(`✗ FAIL: ${testName}`);
    return false;
  }
}

// Test helper for deep equality
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  
  if (obj1 === null || obj2 === null) return false;
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
  
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (const key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  
  return true;
}

console.log('Running deepClone tests...\n');

let passedTests = 0;
let totalTests = 0;

// Test 1: Clone primitive types
totalTests++;
const primitiveStr = "test";
const clonedStr = deepClone(primitiveStr);
if (assert(clonedStr === "test", "Test 1: Clone string primitive")) passedTests++;

totalTests++;
const primitiveNum = 42;
const clonedNum = deepClone(primitiveNum);
if (assert(clonedNum === 42, "Test 2: Clone number primitive")) passedTests++;

totalTests++;
const primitiveBool = true;
const clonedBool = deepClone(primitiveBool);
if (assert(clonedBool === true, "Test 3: Clone boolean primitive")) passedTests++;

// Test 4: Clone null and undefined
totalTests++;
if (assert(deepClone(null) === null, "Test 4: Clone null")) passedTests++;

totalTests++;
if (assert(deepClone(undefined) === undefined, "Test 5: Clone undefined")) passedTests++;

// Test 6: Clone simple object
totalTests++;
const simpleObj = { name: "John", age: 30 };
const clonedSimpleObj = deepClone(simpleObj);
if (assert(
  deepEqual(clonedSimpleObj, simpleObj) && clonedSimpleObj !== simpleObj,
  "Test 6: Clone simple object - values match and are different references"
)) passedTests++;

// Test 7: Clone nested object
totalTests++;
const nestedObj = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Springfield",
    coordinates: {
      lat: 42.1234,
      lng: -71.5678
    }
  }
};
const clonedNestedObj = deepClone(nestedObj);
if (assert(
  deepEqual(clonedNestedObj, nestedObj) && 
  clonedNestedObj !== nestedObj &&
  clonedNestedObj.address !== nestedObj.address &&
  clonedNestedObj.address.coordinates !== nestedObj.address.coordinates,
  "Test 7: Clone nested object - all levels are independent copies"
)) passedTests++;

// Test 8: Clone simple array
totalTests++;
const simpleArray = [1, 2, 3, 4, 5];
const clonedSimpleArray = deepClone(simpleArray);
if (assert(
  deepEqual(clonedSimpleArray, simpleArray) && clonedSimpleArray !== simpleArray,
  "Test 8: Clone simple array - values match and are different references"
)) passedTests++;

// Test 9: Clone nested array
totalTests++;
const nestedArray = [[1, 2], [3, 4], [5, [6, 7]]];
const clonedNestedArray = deepClone(nestedArray);
if (assert(
  deepEqual(clonedNestedArray, nestedArray) &&
  clonedNestedArray !== nestedArray &&
  clonedNestedArray[0] !== nestedArray[0] &&
  clonedNestedArray[2][1] !== nestedArray[2][1],
  "Test 9: Clone nested array - all levels are independent copies"
)) passedTests++;

// Test 10: Clone array with objects
totalTests++;
const arrayWithObjects = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" }
];
const clonedArrayWithObjects = deepClone(arrayWithObjects);
if (assert(
  deepEqual(clonedArrayWithObjects, arrayWithObjects) &&
  clonedArrayWithObjects !== arrayWithObjects &&
  clonedArrayWithObjects[0] !== arrayWithObjects[0],
  "Test 10: Clone array with objects - objects are independent copies"
)) passedTests++;

// Test 11: Clone object with arrays
totalTests++;
const objectWithArrays = {
  name: "Test",
  scores: [90, 85, 92],
  tags: ["javascript", "testing"]
};
const clonedObjectWithArrays = deepClone(objectWithArrays);
if (assert(
  deepEqual(clonedObjectWithArrays, objectWithArrays) &&
  clonedObjectWithArrays !== objectWithArrays &&
  clonedObjectWithArrays.scores !== objectWithArrays.scores &&
  clonedObjectWithArrays.tags !== objectWithArrays.tags,
  "Test 11: Clone object with arrays - arrays are independent copies"
)) passedTests++;

// Test 12: Verify independence - modifying clone doesn't affect original
totalTests++;
const original = {
  data: [1, 2, 3],
  info: { value: "test" }
};
const clone = deepClone(original);
clone.data.push(4);
clone.info.value = "modified";
if (assert(
  original.data.length === 3 &&
  original.info.value === "test" &&
  clone.data.length === 4 &&
  clone.info.value === "modified",
  "Test 12: Modifications to clone don't affect original"
)) passedTests++;

// Test 13: Clone complex nested structure
totalTests++;
const complexStructure = {
  users: [
    {
      id: 1,
      name: "Alice",
      hobbies: ["reading", "coding"],
      address: {
        city: "Boston",
        zip: "02101"
      }
    },
    {
      id: 2,
      name: "Bob",
      hobbies: ["gaming", "music"],
      address: {
        city: "NYC",
        zip: "10001"
      }
    }
  ],
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      push: false
    }
  }
};
const clonedComplexStructure = deepClone(complexStructure);
if (assert(
  deepEqual(clonedComplexStructure, complexStructure) &&
  clonedComplexStructure !== complexStructure &&
  clonedComplexStructure.users !== complexStructure.users &&
  clonedComplexStructure.users[0] !== complexStructure.users[0] &&
  clonedComplexStructure.users[0].hobbies !== complexStructure.users[0].hobbies &&
  clonedComplexStructure.settings.notifications !== complexStructure.settings.notifications,
  "Test 13: Clone complex nested structure - all nested levels are independent"
)) passedTests++;

// Test 14: Clone Date object
totalTests++;
const originalDate = new Date('2025-12-09');
const clonedDate = deepClone(originalDate);
if (assert(
  clonedDate instanceof Date &&
  clonedDate.getTime() === originalDate.getTime() &&
  clonedDate !== originalDate,
  "Test 14: Clone Date object - preserves date value as independent copy"
)) passedTests++;

// Test 15: Clone RegExp object
totalTests++;
const originalRegex = /test/gi;
const clonedRegex = deepClone(originalRegex);
if (assert(
  clonedRegex instanceof RegExp &&
  clonedRegex.source === originalRegex.source &&
  clonedRegex.flags === originalRegex.flags &&
  clonedRegex !== originalRegex,
  "Test 15: Clone RegExp object - preserves pattern and flags as independent copy"
)) passedTests++;

// Summary
console.log(`\n${'='.repeat(50)}`);
console.log(`Tests Passed: ${passedTests}/${totalTests}`);
console.log(`${'='.repeat(50)}`);

if (passedTests === totalTests) {
  console.log('\n✓ All tests passed!');
  process.exit(0);
} else {
  console.log(`\n✗ ${totalTests - passedTests} test(s) failed`);
  process.exit(1);
}
