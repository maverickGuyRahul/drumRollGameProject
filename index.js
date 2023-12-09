var numberOfDrumButtons = document.querySelectorAll(".drum");


// ADDING CLICK EVENT TO ALL MY BUTTONS 

for (var index = 0; index < numberOfDrumButtons.length; index++) 
{
    numberOfDrumButtons[index].addEventListener("click",function () 
    {
        var buttonInnerHTML = this.innerHTML; // The content of inner html is always stored in string format.

        buttonAnimation(buttonInnerHTML);

        switch (buttonInnerHTML) 
        {
            case "w":
                var tom1 = new Audio("./sounds/tom-3.mp3");
                tom1.play();
                break;
            
            case "a":
            var tom1 = new Audio("./sounds/tom-4.mp3");
            tom1.play();
            break;

            case "s":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

            case "d":
            var tom1 = new Audio("./sounds/tom-2.mp3");
            tom1.play();
            break;

            case "j":
            var tom1 = new Audio("./sounds/snare.mp3");
            tom1.play();
            break;

            case "k":
            var tom1 = new Audio("./sounds/crash.mp3");
            tom1.play();
            break;

            case "l":
            var tom1 = new Audio("./sounds/kick-bass.mp3");
            tom1.play();
            break;
        
            default:
                console.log("Some unexpected click event has been registered, pls check");
                break;
        }

        // var audio = new Audio('./sounds/crash.mp3');
        // audio.play();
    });
    
}

// ADDING KEY PRESS EVENT TO ALL MY BUTTONS 

document.addEventListener("keypress",function (event){

    var keyPressed = event.key;
    console.log(event.key);

    buttonAnimation(event.key);

    switch (keyPressed) 
    {
        case "w":
        var tom1 = new Audio("./sounds/tom-3.mp3");
        tom1.play();
        break;
            
        case "a":
        var tom1 = new Audio("./sounds/tom-4.mp3");
        tom1.play();
        break;

        case "s":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;

        case "d":
        var tom1 = new Audio("./sounds/tom-2.mp3");
        tom1.play();
        break;

        case "j":
        var tom1 = new Audio("./sounds/snare.mp3");
        tom1.play();
        break;

        case "k":
        var tom1 = new Audio("./sounds/crash.mp3");
        tom1.play();
        break;

        case "l":
        var tom1 = new Audio("./sounds/kick-bass.mp3");
        tom1.play();
        break;
        
        default:
            console.log("Some unexpected click event has been registered, pls check");
            break;
    }
});

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    // var activeButton = document.querySelector(".w");

    activeButton.classList.add("pressed");

    setTimeout(function () {

        activeButton.classList.remove("pressed");

    }, 100);

}





