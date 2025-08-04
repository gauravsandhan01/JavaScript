function testlet(){
    let y =10;
    if(true){
        let y = 20;      // different variable, scoped to this block
        console.log(y);  //20
    }
    console.log(y);      //10
}
testlet();