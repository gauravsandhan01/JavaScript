let arr =[3,5,8,2,4,7];

const output = arr.reduce((prve, curr)=>{
    return prve < curr ? prve : curr;
});

console.log(output);