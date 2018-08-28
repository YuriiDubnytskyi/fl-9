//----1------
function findType(type) {
    console.log(typeof type);
}
//----2-----
function forEach(massif, functions){
    let index = 0;
    for(index; index < massif.length ; index++){
        functions(massif[index]);
    }
}

//----3-----
function map(massif,functi) {
    let arRay = [];
    forEach(massif,el => arRay.push(functi(el)));
    console.log(arRay);
}

//-------4------------
function filter(massif,functi) {
    let arRay = [];
    forEach(massif,el => {
        if(functi(el)){
            arRay.push(el);
        }
    });
    console.log(arRay);
}
//---------5-----------
function getAdultAppleLovers(date) {
    filter(date,function(el){
 return el.age > 18 && console.log(el.name + ' - ' + el.favoriteFruit)
});
}
//-----6-------
function keys(obj) {
    let newObj = [];
    let i = 18;
    for (let key in obj){
        if(i === 18 ) {
            newObj.push(key)
        }
    }
    console.log(newObj)
}
//-----------7------------
function values(obj) {
    let newObj = [];
    let i = 18;
    for (let key in obj){
        if(i === 18) {
            newObj.push(obj[key])
        }
    }
    console.log(newObj)
}
//---------8-------------
function showFormattedDate(date) {
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    console.log('It is ' + date.getDate() + ' of ' + month[date.getMonth()] + ' ' + date.getFullYear());
}