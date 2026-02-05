let marks= [96,46,78,43,56,23];

let sum =0;

for (let val of marks){
    sum += val;
    console.log(val);
}
console.log("the sum of mark",sum);
avg =sum / marks.length;
console.log(`the avg of mark , ${avg}`); //templet literal