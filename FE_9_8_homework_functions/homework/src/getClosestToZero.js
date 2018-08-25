function getClosestToZero() {
    var numbreToZero = arguments[0];
    var index = 1;
    while(index < arguments.length){
        if(numbreToZero > Math.abs(arguments[index])){
            numbreToZero = arguments[index];
        }
        index++;
    }
    console.log(numbreToZero);
}
