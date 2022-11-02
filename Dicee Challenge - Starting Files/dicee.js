

var randomNumber1=Math.floor(Math.random()*6) +1 ;

var randomeDiceImg = "dice" + randomNumber1 +".png";

var randomImgSource ="images/" + randomeDiceImg;


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImgSource) ;


var randomNumber2 = Math.floor(Math.random()*6) +1 ;

var randomImgSource2 =  "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);


// document.querySelector(".dice .img1").setAttribute("src", randomImgSource);

if(randomNumber1 > randomNumber2)
  {
    document.querySelector(".container h1").innerHTML="Player 1 Wins";
    }
  else if(randomNumber1< randomNumber2)
  {
      document.querySelector(".container h1").innerHTML="Player 2 Wins";
  }
  else
    {
      document.querySelector("h1").innerHTML="Draw!";
    }
