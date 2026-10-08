let colmeia = document.getElementById("palco").getContext("2d");

let bg = new BG(0,0,500,690,"img/bg.png");
let bg2 = new BG(0,-690,500,690,"img/bg.png");
let abelha = new Abelha(200, 500, 100, 100, "Img/bee1.png");
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
    bg.drawObject();
    bg2.drawObject();
    abelha.drawObject();
    aranha.drawObject();
}


//atualiza os frames
function update(){ 
    abelha.animacao();
    abelha.move();
    aranha.move();
    aranha.animacao();
    bg.move(3,690,0);
    bg2.move(3,0,-690);
}

function main(){
    colmeia.clearRect(0, 0, 500, 690);
    update();
    draw();
}

setInterval(main, 10); //chama a func em 10
