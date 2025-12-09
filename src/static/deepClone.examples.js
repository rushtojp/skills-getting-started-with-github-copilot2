/**
 * Example usage of the deepClone function
 * Demonstrates practical use cases for deep cloning
 */

// Load the deepClone function (in browser, this would be loaded via script tag)
const deepClone = require('./deepClone.js');

console.log('=== Deep Clone Function - Examples ===\n');

// Example 1: Cloning a simple configuration object
console.log('Example 1: Simple Configuration Object');
console.log('--------------------------------------');
const config = {
  appName: "MyApp",
  version: "1.0.0",
  debug: true
};

const configCopy = deepClone(config);
configCopy.debug = false;
configCopy.version = "2.0.0";

console.log('Original config:', config);
console.log('Modified copy:', configCopy);
console.log('✓ Original remains unchanged\n');

// Example 2: Cloning user data with nested structures
console.log('Example 2: User Data with Nested Structures');
console.log('-------------------------------------------');
const userData = {
  id: 101,
  name: "Alice Johnson",
  profile: {
    email: "alice@example.com",
    phone: "555-0123"
  },
  preferences: {
    theme: "dark",
    notifications: ["email", "sms"],
    privacy: {
      shareData: false,
      publicProfile: true
    }
  }
};

const userBackup = deepClone(userData);
userBackup.profile.email = "alice.new@example.com";
userBackup.preferences.notifications.push("push");
userBackup.preferences.privacy.shareData = true;

console.log('Original user email:', userData.profile.email);
console.log('Backup user email:', userBackup.profile.email);
console.log('Original notifications:', userData.preferences.notifications);
console.log('Backup notifications:', userBackup.preferences.notifications);
console.log('✓ Changes to backup don\'t affect original\n');

// Example 3: Cloning an array of objects (e.g., shopping cart)
console.log('Example 3: Shopping Cart Items');
console.log('------------------------------');
const shoppingCart = [
  { id: 1, name: "Laptop", price: 999.99, quantity: 1 },
  { id: 2, name: "Mouse", price: 29.99, quantity: 2 },
  { id: 3, name: "Keyboard", price: 79.99, quantity: 1 }
];

const cartSnapshot = deepClone(shoppingCart);
cartSnapshot[0].quantity = 5;
cartSnapshot.push({ id: 4, name: "Monitor", price: 299.99, quantity: 1 });

console.log('Original cart items:', shoppingCart.length);
console.log('Snapshot cart items:', cartSnapshot.length);
console.log('Original laptop quantity:', shoppingCart[0].quantity);
console.log('Snapshot laptop quantity:', cartSnapshot[0].quantity);
console.log('✓ Cart snapshot is independent\n');

// Example 4: Cloning state for undo/redo functionality
console.log('Example 4: Application State for Undo/Redo');
console.log('-------------------------------------------');
const appState = {
  document: {
    title: "My Document",
    content: [
      { type: "paragraph", text: "First paragraph" },
      { type: "paragraph", text: "Second paragraph" }
    ],
    metadata: {
      created: new Date('2025-01-01'),
      modified: new Date('2025-01-15')
    }
  },
  selection: {
    start: 0,
    end: 5
  }
};

// Save state before making changes
const previousState = deepClone(appState);

// Make changes to current state
appState.document.title = "My Modified Document";
appState.document.content.push({ type: "paragraph", text: "Third paragraph" });
appState.selection.end = 10;

console.log('Previous state title:', previousState.document.title);
console.log('Current state title:', appState.document.title);
console.log('Previous paragraphs:', previousState.document.content.length);
console.log('Current paragraphs:', appState.document.content.length);
console.log('✓ Can restore previous state for undo functionality\n');

// Example 5: Cloning complex nested data structures
console.log('Example 5: Complex Organization Structure');
console.log('-----------------------------------------');
const organization = {
  name: "Tech Corp",
  departments: [
    {
      name: "Engineering",
      teams: [
        {
          name: "Frontend",
          members: [
            { name: "Alice", role: "Senior Developer" },
            { name: "Bob", role: "Developer" }
          ]
        },
        {
          name: "Backend",
          members: [
            { name: "Charlie", role: "Lead Developer" },
            { name: "Diana", role: "Developer" }
          ]
        }
      ]
    },
    {
      name: "Marketing",
      teams: [
        {
          name: "Digital",
          members: [
            { name: "Eve", role: "Manager" }
          ]
        }
      ]
    }
  ]
};

const orgCopy = deepClone(organization);
orgCopy.departments[0].teams[0].members.push({ name: "Frank", role: "Intern" });
orgCopy.departments[1].name = "Sales & Marketing";

console.log('Original Engineering Frontend members:', organization.departments[0].teams[0].members.length);
console.log('Copy Engineering Frontend members:', orgCopy.departments[0].teams[0].members.length);
console.log('Original second department:', organization.departments[1].name);
console.log('Copy second department:', orgCopy.departments[1].name);
console.log('✓ Deep nested structures are properly cloned\n');

console.log('=== All Examples Completed Successfully ===');
