   
    var number = Math.random();
    number = (number*6)+1;
    var randomNumber1 = Math.floor(number); 
    console.log(randomNumber1);
    var randomDice1 = "images/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src",randomDice1);
    var number = Math.random();
    number = (number*6)+1;
    var randomNumber2 = Math.floor(number);
    var randomDice2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src",randomDice2);
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = ("Player 1 Wins");
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = ("Player 2 Wins");
    }
    else{
        document.querySelector("h1").innerHTML = ("Draw");
    }
    
    


