
//Player 1 

// Generate Random Number

var random1 = Math.floor(Math.random()*6)+1;

// Get The Element 
var dice1= document.querySelector('.img1');

// Path For THe Image 
var select1 = "/images" + "/dice" + random1 + ".png";

// setAttribute is Property by using this you change the src path of image
dice1.setAttribute("src",select1);


// Same For Player 2

// Player 2

// Generate Random Number

var random2 = Math.floor(Math.random()*6)+1;

// Get The Element 
var dice2= document.querySelector('.img2');

// Path For THe Image 
var select2 = "/images" + "/dice" + random2 + ".png";

// setAttribute is Property by using this you change the src path of image
dice2.setAttribute("src",select2);


// Games Rules 


if(random1>random2){
    document.querySelector('h1').textContent = "Player 1 Won The Match";

}

else if(random1 < random2)
{
    document.querySelector('h1').textContent = "Player 2 Won The Match"
}

else{
    document.querySelector('h1').textContent = "Match Draw";
}