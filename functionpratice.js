function countVowels(str)
{
    let count =0;

    for(let char of str)
        {
        if(char==="a" || char ==="e" || char ==="i" || char==="o" || char==="u")
            {
                count++;
            }  
        }
        return count; 
        
}
console.log(countVowels("appnacollege"));


const countVow=(str)=>{
    let count =0;
    for (let char1 of str){
        if(char1 ==="a"|| char1==="e" || char1==="o"|| char1==="u" || char1==="i"){
            count++;
        }
    }
    return count;
}
console.log(countVow("gaurave"));