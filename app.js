var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    character.classList.add("animate");
    setTimeout(function() {
        character.classList.remove("animate");
    }, 700);
}

var checkDead = setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft>0 && characterTop>=130 )
    {
        block.style.animation = "none";
        alert("u lose.");
    }
        
},10);