function example(){
    var x =10;
    if( true){
        var x =20 ;     // same variable, NOT a new one
        console.log(x); // 20 
    }
    console.log(x);     // 20 (x value cant change)

}
example();