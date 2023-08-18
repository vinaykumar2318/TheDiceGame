var mine = Math.random()*6;
mine = Math.floor(mine);
mine = mine + 1;

var randomDiceimage1 = "dice"+mine+".png";

var randomImagesrc1 = "./images/"+randomDiceimage1;

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomImagesrc1);

var nine = Math.random()*6;
nine = Math.floor(nine);
nine = nine + 1;

var randomDiceimage2 = "dice"+nine+".png";

var randomImagesrc2 = "./images/"+randomDiceimage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImagesrc2);

if(mine>nine){
    document.querySelector("h1").innerHTML= "Player 1 wins!..";
}
else if(mine<nine){
    document.querySelector("h1").innerHTML= "Player 2 wins!..";
}
else{
    document.querySelector("h1").innerHTML= "Draw!..";
}