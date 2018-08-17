let oneSide, twoSide, threeSide, perimeter ,angle , square ,radian, halfPerimeter ;
oneSide = +prompt('Length of the first side','');
twoSide = +prompt('Length of the second side','');
angle = +prompt('Angle between sides','');
if ( validNumber(oneSide) || validNumber(twoSide) || validNumber(angle)){
    console.log('Invalid data');
}else {
    const anglePiv = 180;
    radian = Math.PI * angle / anglePiv;
    threeSide = Math.sqrt(oneSide * oneSide + twoSide * twoSide - 2 * oneSide * twoSide * Math.cos(radian));
    perimeter = oneSide + twoSide + threeSide;
    halfPerimeter = perimeter / 2;
    square = Math.sqrt(halfPerimeter * (halfPerimeter - oneSide) * (halfPerimeter - twoSide)
        * (halfPerimeter - threeSide));
    console.log(' Length of the third party',+threeSide.toFixed(2),
        '\n Triangle area',+square.toFixed(2),
        '\n Perimeter of the triangle',+perimeter.toFixed(2));
}
function validNumber(number) {
    return isNaN(number) || typeof number !== 'number' || number < 0;
}