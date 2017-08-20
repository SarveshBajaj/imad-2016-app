console.log('Loaded!');
//changing text to New Value P5
var element = document.getElementById('main-text');
element.innerHTML='New Value';
//Move image
var img = document.getElementById('madi');
var marginLeft = 0;
//var marginRight = 0;
function moveRight(){
   marginLeft = marginLeft + 1;
   img.style.marginLeft = marginLeft + 'px';
}
//function moveLeft(){
  // marginRight = marginRight + 50;
   //img.style.marginRight = marginRight + 'px';
//}
img.onclick = function(){
  var interval = setInterval(moveRight, 50);//means moveRight function will be called after every 100 ms
  //img.style.marginLeft = '100px';
}
//img.onclick = function(){
  //var interval = setInterval(moveLeft, 25);//means moveRight function will be called after every 100 ms
  //img.style.marginLeft = '100px';
//}
