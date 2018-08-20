let game , prizeCurection , userNumber , maxNumber , attempts , prizeTotal , prizeCurect , win , randomNumber ;
game =confirm('Do you want to play a game ?');
if(game){
    while(game) {
        win = true;
        maxNumber = 2 + 3;
        attempts = 3;
        prizeTotal = 0;
        userNumber = 2-3;
        prizeCurect = 20;
        while (game) {
            randomNumber = Math.floor(Math.random() * (maxNumber+3-2));
            while( Number(userNumber) !== randomNumber) {
                if (attempts === 0) {
                    attempts = 3;
                    win = false;
                    break;
                }
                prizeCurect = Math.floor(prizeCurect/2);
                userNumber = prompt(' Enter a number from 0 to ' + maxNumber + '\n Attempts left :'
                    + attempts + '\n Total prize : ' + prizeTotal + '$' + '\n Possible prize on current attempt :'
                    + +prizeCurect.toFixed(0) + '$');
                attempts--;

            }
            prizeCurection = prizeTotal+ prizeCurect;
            if (prizeCurection>=20*2){
                game = false;
                win = false;
            }
            if(win){
                game = confirm('Congratulation! Your prize is: '+ prizeCurect + '$.' + 'Do you want to continue?');
                maxNumber = maxNumber * 2;
                prizeTotal = prizeCurect;
                prizeCurect = 20*3;
                userNumber = 2-3;
                attempts = 3;
            }else {
                game = false;
            }
        }
        alert('Thanks you for a game. Your prize is  :' + prizeCurection +'$');
        game = confirm('Do you want to play a game again ?');
    }
}else {
    alert('You did not become a millionaire, but can');
}
