var rootNode = document.getElementById('root');
var hea1 = document.createElement('h1');
var txt_h1 = document.createTextNode('TODO Cat List');
hea1.appendChild(txt_h1);
//-----------------
var input = document.createElement('input');
input.setAttribute('placeholder' ,'Add New Action');
input.setAttribute('type' ,'text');
input.setAttribute('id','inputValue1');
//-----------------
var buttonAdd = document.createElement('button');
var txtButtonAdd = document.createTextNode('add_box');
buttonAdd.className = 'material-icons';
buttonAdd.setAttribute('onclick','newElement()');
buttonAdd.style.backgroundColor = 'white';
buttonAdd.appendChild(txtButtonAdd);
//--------------------
var hr = document.createElement('hr');
//--------------------
const ten = 10;
const zero = 0;
//--------------------
var img = document.createElement('img');
img.setAttribute('src','./assets/img/cat.png');
function newElement() {
    let close = document.getElementsByClassName('close');
    let add = document.getElementsByClassName('add');
    let myUl = document.getElementsByClassName('myUl');
    let li = document.createElement('li');
    let inputValue = document.getElementById('inputValue1').value;
    let txtNew = document.createTextNode(inputValue);
    let span = document.createElement('span');
    let buttonClose = document.createElement('button');
    let txt = document.createTextNode('delete');
    buttonClose.className = 'material-icons close';
    let buttonClick = document.createElement('button');
    let txtClick = document.createTextNode('crop_din');
    buttonClick.appendChild(txtClick);
    buttonClick.className = 'material-icons add';
    buttonClose.appendChild(txt);
    let ul = document.createElement('ul');
    ul.className = 'myUl';
    if (inputValue === '') {
        alert('You must write something!');
    }else if (close.length === ten){
        alert('Maximum item per list are created');
    } else {
        li.appendChild(buttonClose);
        span.appendChild(txtNew);
        li.appendChild(span);
        rootNode.appendChild(li);

        li.appendChild(buttonClick);
    }
    document.getElementById('inputValue1').value = '';



    let i;
    for (i = zero; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = 'none';

        }
    }
    for (i = zero; i < add.length; i++) {
        add[i].onclick = function() {
            let div = this;
            div.style.display = 'none';
            let buttonClick = document.createElement('button');
            let txtClick = document.createTextNode('check_box');
            buttonClick.appendChild(txtClick);
            buttonClick.className = 'material-icons add';

            li.appendChild(buttonClick);
        }
    }


}

// Your code goes here

rootNode.appendChild(hea1/* Append your list item node*/);
rootNode.appendChild(input/* Append your list item node*/);
rootNode.appendChild(buttonAdd/* Append your list item node*/);
rootNode.appendChild(hr/* Append your list item node*/);
rootNode.appendChild(img/* Append your list item node*/);
