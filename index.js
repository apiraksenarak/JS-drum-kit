
var letters = document.querySelectorAll(".drum")

dict = {
"w" : new Audio("sounds/tom-1.mp3") ,
"a" : new Audio("sounds/tom-2.mp3") ,
"s" : new Audio("sounds/tom-3.mp3") ,
"d" : new Audio("sounds/tom-4.mp3") ,
"j" : new Audio("sounds/snare.mp3") ,
"k" : new Audio("sounds/crash.mp3") ,
"l" : new Audio("sounds/kick-bass.mp3")

}

var keys = Object.keys(dict);

document.addEventListener("keydown", function(e){

    if (keys.includes(e.key)) {
        buttonAnimation(e.key);
        return dict[e.key].play();
    }
    else {
        return alert("Not a relevant key")
    }
});

for(var i=0;i<letters.length;i++){

  letters[i].addEventListener("click", function() {
    buttonAnimation(this.innerText);
    return dict[this.innerText].play();
  });

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}