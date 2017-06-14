var quotes = [
'we all are dreamers trying to escape from reality','she learnt to be happy in her own world','okay?okay.','k','fine.','Good',' I feel nothing','idk','idc','maybe','really?','seriously','please','sure.','thankyou.','bie','cool','awesome','great','excited','damn','mumbaiman'
,'I dont give a damn now'];

var colors = ['#F44336', '#6A1B9A', '#283593', '19bd9b', '#689F38', '#EF6C00', '#4E342E', '#424242'];


function newQuote(){
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    var index = Math.floor(Math.random() * (colors.length));
    document.body.style.backgroundColor = colors[index] ;
}
var take = document.getElementById("taking");
function add ( ) {
quotes.push( take.value );
quotes.join(", ");
console.log(quotes);
clear();
}
function clear(){
	take.value = " " ;
	alert("Your quote is added. Thankyou for your response :)");
}
