let price;
let discount;
let saved;
let priceWithDiscout;
price = +prompt('Price of goods','');
discount = +prompt('Discount on the product','');
if ( isNaN(price)|| isNaN(discount) && typeof price !== 'number' && typeof discount !== 'number'
    || price < 0 || 0 > discount) {
    console.log('Invalid data');
}else if (discount <= 100){
    priceWithDiscout = price - price * discount / 100;
    saved = price - priceWithDiscout;
    console.log(' Price without discount : ', price,
        '\n Discount : ', discount,
        '\n Price with discount : ', +priceWithDiscout.toFixed(2),
        '\n Saved : ', +saved.toFixed(2));
}