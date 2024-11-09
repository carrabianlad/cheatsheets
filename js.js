Here's a comprehensive JavaScript cheat sheet for advanced-level usage, covering variables, data types, functions, control flow, DOM manipulation, ES6+ features, asynchronous programming, and more.

---

### **JavaScript Basics**

#### **Variables**
- **Declaration**:
  ```javascript
  let variableName;          // Block-scoped, can be reassigned
  const constantName = 'value'; // Block-scoped, cannot be reassigned
  var oldVar = 'value';      // Function-scoped, can be reassigned
  ```

#### **Data Types**
- **Primitive Types**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- **Reference Types**: `object`, `array`, `function`

---

### **Operators**
- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `**`
- **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`
- **Comparison**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical**: `&&`, `||`, `!`
- **Ternary**: `condition ? expr1 : expr2`

---

### **Control Flow**

#### **Conditionals**
```javascript
if (condition) {
    // code
} else if (anotherCondition) {
    // code
} else {
    // code
}
```

#### **Switch Statement**
```javascript
switch (expression) {
    case 'value1':
        // code
        break;
    case 'value2':
        // code
        break;
    default:
        // code
}
```

#### **Loops**
- **For Loop**:
  ```javascript
  for (let i = 0; i < 10; i++) {
      console.log(i);
  }
  ```
- **While Loop**:
  ```javascript
  while (condition) {
      // code
  }
  ```
- **For...of (Arrays/Iterables)**:
  ```javascript
  for (const item of array) {
      console.log(item);
  }
  ```
- **For...in (Object Properties)**:
  ```javascript
  for (const key in object) {
      console.log(object[key]);
  }
  ```

---

### **Functions**

#### **Function Declaration**
```javascript
function functionName(param1, param2) {
    return param1 + param2;
}
```

#### **Function Expression**
```javascript
const add = function(a, b) {
    return a + b;
};
```

#### **Arrow Function**
```javascript
const multiply = (a, b) => a * b;
const greet = name => `Hello, ${name}`;
```

#### **Immediately Invoked Function Expression (IIFE)**
```javascript
(function() {
    console.log("This function runs immediately!");
})();
```

---

### **Objects**

#### **Object Creation**
```javascript
const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};
```

#### **Object Methods**
- **Object.keys()**: Returns array of keys.
- **Object.values()**: Returns array of values.
- **Object.entries()**: Returns array of key-value pairs.
- **Destructuring**:
  ```javascript
  const { name, age } = person;
  ```

#### **Spread & Rest Operators**
```javascript
const newPerson = { ...person, gender: 'male' };
const { name, ...otherInfo } = newPerson;
```

---

### **Arrays**

#### **Array Methods**
- **push() / pop()**: Add/remove from end.
- **shift() / unshift()**: Add/remove from start.
- **map()**: Creates a new array by applying function.
- **filter()**: Creates a new array with elements meeting condition.
- **reduce()**: Reduces array to single value.
- **forEach()**: Executes function on each element.

#### **Destructuring**
```javascript
const arr = [1, 2, 3];
const [first, second] = arr;
```

---

### **Template Literals**
```javascript
const name = 'John';
const greeting = `Hello, ${name}!`; // Interpolates variables directly
```

---

### **DOM Manipulation**

#### **Selecting Elements**
```javascript
const element = document.getElementById('id');
const elements = document.querySelectorAll('.class');
```

#### **Modifying Content**
```javascript
element.textContent = 'New Text';
element.innerHTML = '<p>New HTML Content</p>';
```

#### **Changing Styles**
```javascript
element.style.color = 'blue';
element.classList.add('new-class');
element.classList.remove('old-class');
```

#### **Event Listeners**
```javascript
element.addEventListener('click', () => {
    console.log('Element clicked');
});
```

---

### **ES6+ Features**

#### **Default Parameters**
```javascript
function greet(name = 'Guest') {
    return `Hello, ${name}`;
}
```

#### **Rest Parameters**
```javascript
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
```

#### **Spread Operator**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
```

#### **Destructuring**
```javascript
const user = { name: 'John', age: 30 };
const { name, age } = user;

const arr = [1, 2, 3];
const [first, second] = arr;
```

---

### **Promises & Asynchronous JavaScript**

#### **Promise**
```javascript
const myPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('Success');
    } else {
        reject('Failure');
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

#### **Async / Await**
```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

### **Modules**

#### **Exporting**
```javascript
// file: math.js
export const add = (a, b) => a + b;
export default function subtract(a, b) {
    return a - b;
}
```

#### **Importing**
```javascript
import subtract, { add } from './math.js';
console.log(add(2, 3));
console.log(subtract(5, 3));
```

---

### **Error Handling**
```javascript
try {
    throw new Error('Something went wrong!');
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Cleanup code runs here');
}
```

---

### **Regular Expressions**
```javascript
const regex = /hello/i; // Case-insensitive match for "hello"
const result = regex.test("Hello World");
```

---

### **JSON (JavaScript Object Notation)**
```javascript
// Parsing JSON
const jsonString = '{"name": "John", "age": 30}';
const jsonObj = JSON.parse(jsonString);

// Stringifying JSON
const newJsonString = JSON.stringify(jsonObj);
```

---

### **Date and Time**
```javascript
const now = new Date();
const year = now.getFullYear();
const formattedDate = now.toLocaleDateString();
```

---

### **Local Storage**
```javascript
// Setting an item
localStorage.setItem('key', 'value');

// Getting an item
const value = localStorage.getItem('key');

// Removing an item
localStorage.removeItem('key');
```

---

### **Useful Console Methods**
- **console.log()**: Logs a message.
- **console.error()**: Logs an error message.
- **console.warn()**: Logs a warning.
- **console.table()**: Displays data in a table format.
- **console.time() / console.timeEnd()**: Measures time taken by a code block.

---

### **Advanced Functions**

#### **Higher-Order Functions**
Functions that take other functions as arguments or return functions.
```javascript
function greet(name) {
    return function(message) {
        console.log(`${message}, ${name}`);
    };
}
const greetJohn = greet('John');
greetJohn('Hello'); // Outputs: Hello, John
```

#### **Closures**
A function with access to its lexical scope, even when the function is executed outside that scope.
```javascript
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const increment = counter();
increment(); // 1
increment(); // 2
```

---

This JavaScript cheat sheet covers most advanced-level concepts and syntax, enabling efficient coding with ES6+ features, asynchronous operations, and DOM manipulation.