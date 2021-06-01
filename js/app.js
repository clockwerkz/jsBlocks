const MAX_BLOCKS = 100;
const app = document.getElementById("app");
for (let i=1; i <= MAX_BLOCKS; i++){
    const block = document.createElement("div");
    block.classList.add("block");
    app.appendChild(block);
}

document.querySelector("#app button").addEventListener("click", animateBlocks);


function animateBlocks() {  
    anime({
        targets: ".block",
        translateX: function(){
            return Math.floor(Math.random()*1300)-650;
        },
        translateY: function(){
            return Math.floor(Math.random()*800)-400;
        },
        scale: function() {
            return Math.floor(Math.random()*4)+1;
        }
    })
}

animateBlocks();