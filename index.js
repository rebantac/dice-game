var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelector("img.img1").setAttribute("src", randomDiceImage1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector("img.img2").setAttribute("src", randomDiceImage2);


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").textContent="🚩 Player One Wins";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").textContent="Player Two Wins 🚩";
}
else
{
    document.querySelector("h1").textContent="Draw !!";
}