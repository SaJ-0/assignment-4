document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
  var audio = new Audio('sounds/go-new-gambling.mp3');
  audio.play();
  this.style.color="white";
}
