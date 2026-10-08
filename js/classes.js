class Obj{
    constructor(posx, posy, width, height, color){
        this.posx = posx
        this.posy = posy
        this.width = width
        this.height = height
        this.color = color
        
    }

    drawObject(){
        let img = new Image
        img.src = this.color
        colmeia.drawImage(img, this.posx, this.posy, this.width, this.height)
    }
}


class Abelha extends Obj{
    dir = 0;
    quadro = 1;
    timer = 0;
    move(){
        this.posx += this.dir
    }
    animacao(){
        this.timer += 1;
        if(this.timer > 45){
            this.quadro += 1;
            this.timer = 0;
        }
        if(this.quadro > 4){
            this.quadro = 1;
        }
        this.color = "Img/bee"+this.quadro+".png";
    }
}

class Aranha extends Obj{
    quadro = 1;
    timer = 0;
    move(){
        this.posy += 3;
        if(this.posy > 690){
            this.posy = -100
            this.posx = Math.random() * (500 - this.height)
        }
    }
    animacao(){
        this.timer += 1;
        if(this.timer > 45){
            this.quadro += 1;
            this.timer = 0;
        }
        if(this.quadro > 4){
            this.quadro = 1;
        }
        this.color = "Img/spider"+this.quadro+".png";
    }
}

class BG extends Obj{
    move(velocidade, limite, posInicial){
        this.posy += velocidade;
        if(this.posy > limite){
            this.posy = posInicial
        }
    }
}
