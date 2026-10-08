let colmeia = document.getElementById("palco").getContext("2d");

let abelha = new Abelha(200, 500, 100, 100, "Img/abelhaRonaldo.jpg");
let aranha = new Aranha(100, 100, 100, 100, "Img/spider1.png");

document.addEventListener("keydown", function(e){
    if(e.key == "a")
        abelha.dir = -3;

    if (e.key =="d")
        abelha.dir = 3;
    
});

document.addEventListener("keyup", function(e){
    if(e.key == "a")
        abelha.dir = 0;
    
    if (e.key =="d")
        abelha.dir = 0;
    
});

//Desenha elementos na tela
function draw(){ 
    abelha.drawObject();
    aranha.drawObject();
}


//atualiza os frames
function update(){ 
    abelha.move();
    aranha.move();
}

function main(){
    colmeia.clearRect(0, 0, 500, 690);
    update();
    draw();
}

setInterval(main, 10); //chama a func em 10
