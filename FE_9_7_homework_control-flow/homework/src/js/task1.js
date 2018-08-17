let login , password, hours;
login = prompt('Enter your name : ','');
if (login === null){
    alert('Canceled')
}else if ( login === 'User'){
    password = prompt('Enter password : ','');
    if (password === null){
        alert('Canceled')
    }else if ( password === 'SuperUser'){
        hours = new Date().getHours();
        if ( hours >= 20 ){
            alert('Good evening')
        }else {
            alert('Good day')
        }
    }else {
        alert('Wrong password')
    }
}else if ( login.length > 0 && login.length < 4){
    alert('I do not know any users having name length less than 4 symbols')
}else {
    alert('I do not know you')
}