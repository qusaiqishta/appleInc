var cusName = prompt('what is your name?');
alert('Welcome to our lovely website  ' + '' + cusName);

var messege1 = '';
var budget = prompt('what is your bugdet');
console.log(budget);
if (budget >= 500) {
    messege1 = 'you can make a purchase with this budget, welcome';
}
else {
    messege1 = 'you have to raise your budget in order to can buy from apple store';

}
alert(messege1);



var products = prompt('what kind of apple products are you interested in');
console.log(products);
while (products !== 'iphone' && products !== 'mac' && products !== 'ipad' && products !== 'watches') {
    products = prompt('please choose one of this items: iphone,mac,ipad and watches')
}
var messege = '';
var pic = '';

if (products == 'iphone') {
    messege = 'click on the first item(iphon) in the top side of the page ';
    pic = '<img scr="iphone-12-black-select-2020.png" /img>';
}
else if (products == 'mac') {
    messege = 'click on the second item(mac) in the top side of the page';
    pic = '<img scr="ytKr6L3ZTP4Pf2acEpzpMM.jpeg" /img>';
}
else if (products == 'ipad') {
    messege = 'click on the third item(ipad) in the top side of the page';
 pic = '<img scr="ipad.jpg" img/>';}

 else if (products == 'watches') {
    messege = 'click on the forth item(watches) in the top side of the page';
    pic = '<img scr="apple watch.jpg" img/>';
}
else {
    messege = 'the selected product in not available in apple store';
}

var result='';
var numProd=prompt('How many '+products+' are you planning to buy');
for(i=0;i<numProd;i++)
{
    console.log(i);
    result=result + pic;
}


document.write(result);       
document.write('<h1>' + messege + '</h1>');











