function isPrime(a) {
    var prim = true;
    var index = 2;
    while(index < a){
        if(a%index === 0){
            prim = false;
        }
        index++;
    }
    console.log(prim);
}
isPrime();