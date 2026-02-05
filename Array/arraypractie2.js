let item =[780,600,567,90,500];

for(let i=0; i<item.length;i++){
    //console.log(i);
    let offer =item[i] /10;
    item[i] =item [i]-offer; //item -=offer

}
console.log(item)