var numOfSq=6;
var winnerColor;
var winnerdisplay=document.querySelector("span");
var squares=document.querySelectorAll(".square");
var resualtdisplay=document.querySelector(".main span");
var controller=document.querySelector(".main button");
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
var colors=[
  "rgb(255, 222, 222)",
  "rgb(255, 222, 222)",
  "rgb(255, 222, 222)",
  "rgb(255, 222, 222)",
  "rgb(255, 222, 222)",
  "rgb(255, 222, 222)"

];
easy.addEventListener("click",function(){
  numOfSq=3;
  easy.style.background="#F4C2C2";
  easy.style.color="white";
  hard.style.background="white";
  hard.style.color="#F4C2C2";
  document.querySelector("h1").style.backgroundColor= "#F4C2C2";
  assignColors();
  selectwinner();
});
hard.addEventListener("click",function(){
  numOfSq=6;
  hard.style.background="#F4C2C2";
  hard.style.color="white";
  easy.style.background="white";
  easy.style.color="#F4C2C2";
  document.querySelector("h1").style.backgroundColor= "#F4C2C2";
  assignColors();
  selectwinner();
});
controller.addEventListener("click",function(){
  document.querySelector("h1").style.backgroundColor= "#F4C2C2";
  assignColors();
  selectwinner();
});
function genarateColor(){
var r=  Math.floor(Math.random()*256);
var g=  Math.floor(Math.random()*256);
var b=  Math.floor(Math.random()*256);

  return "rgb("+r+", "+g+", "+b+")"  ;
}
assignColors();
selectwinner();

function assignColors(){
  resualtdisplay.textContent="";
  controller.textContent="New colors? "
  var i;
  for (i = 0; i < numOfSq; i++) {

    colors[i]=genarateColor();
    squares[i].style.backgroundColor=colors[i];
      }
      for ( j = i; j < 6; j++) {
        squares[j].style.backgroundColor="#8B8C86";
      }
    }

for (var i = 0; i < numOfSq; i++) {
  squares[i].addEventListener("click",function(){
    if(this.style.backgroundColor===winnerColor){
      for (i = 0; i < numOfSq; i++) {

        squares[i].style.backgroundColor=winnerColor;
    }
    document.querySelector("h1").style.backgroundColor=winnerColor;
    resualtdisplay.textContent=" Great!";
    document.querySelector(".main button").textContent="play Again? ";



    }
    else{
      this.style.backgroundColor ="#8B8C86";
      resualtdisplay.textContent="Try again";

    }
  });
}

function selectwinner(){

  winnerColorindex=Math.floor(Math.random()*numOfSq);
  winnerColor=colors[winnerColorindex];
  winnerdisplay.textContent=winnerColor;
}
