var cusName=prompt('what is your name?');
alert('Welcome to our lovely website  '+'' +  cusName);

var messege1='';
var budget=prompt('what is your bugdet');
console.log(budget);
if(budget>=500)
{
    messege1='you can make a purchase with this budget, welcome';
}
else{
    messege1='you have to raise your budget in order to can buy from apple store';

}


var messege='';
var products=prompt('what kind of apple products are you interested in');
console.log(products);

if(products=='iphone')
{
    messege='click on the first item(iphon) in the top side of the page ';
}
else if(products=='mac')
{
    messege='click on the second item(mac) in the top side of the page';
}
else if(products=='ipad')
{
    messege='click on the third item(ipad) in the top side of the page';
}
else if(products=='watches')
{
    messege='click on the forth item(watches) in the top side of the page';
}
else {
    messege='the selected product in not available in apple store';
}
document.write('<h1>'+messege+'</h1>');