function reverseNumber(n) {
    var str;
    if(n < 0){
        str='-';
        n = Math.abs(n);
    }else {
        str='';
    }
    n = n + '';
    return str + n.split('').reverse().join('');


}
console.log(reverseNumber());