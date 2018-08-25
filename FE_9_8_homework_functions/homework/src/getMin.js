function getMin() {
    var minNumber = arguments[0];
    var index = 1;
    while(index < arguments.length){
        if(minNumber > arguments[index]){
            minNumber=arguments[index];
        }
        index++;
    }
    console.log(minNumber);
}
