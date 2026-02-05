let student = { name: "Alice", age: 21, course: "CS" };

for (let key in student) {
  console.log(key + ":", student[key]);
  //console.log("key", key ,"value=",student[key]);
}
// Output:
// name: Alice
// age: 21
// course: CS
