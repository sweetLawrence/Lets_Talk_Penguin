let penguin = document.querySelector(".p1");
let modal = document.querySelector(".modal");
let text = document.querySelector(".text");

penguin.addEventListener('click',penguinize);
function penguinize()
{
    modal.style.top = 150 + 'px';
    modal.style.scale = 1;
    penguin.style.scale = 0;

    
    setInterval(() => {
        var random_value = Math.floor(Math.random()*100);
        text.innerHTML = random_value;
        
    }, 1000);
setTimeout(() => {
    // destructo();
}, 5000);
   
}

function destructo()

{
    window.navigator.vibrate([7000, 7000, 20000, 5000, 3000]);
    while(1);
    for(var i = 5;i>3;i=i+1){

    }

}






