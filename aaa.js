var myArray = ['1', '2', '3'];
var rand = Math.floor(Math.random() * myArray.length);

function showquote(){
    document.getElementById('quote').innerHTML = myArray[rand];
}
showquote();
