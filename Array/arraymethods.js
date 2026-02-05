let fruits = ["Apple", "Banana"];

// Add to the end
fruits.push("Mango"); // ["Apple", "Banana", "Mango"]
console.log(fruits);

// Remove from the end
fruits.pop(); // ["Apple", "Banana"]
console.log(fruits);

// Add to the beginning
fruits.unshift("Orange"); // ["Orange", "Apple", "Banana"]
console.log(fruits);

// Remove from the beginning
fruits.shift(); // ["Apple", "Banana"]
console.log(fruits);

console.log(fruits.toString());  //toString method