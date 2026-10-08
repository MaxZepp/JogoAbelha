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
    move(){
        this.posx += this.dir
    }
}

class Aranha extends Obj{
    move(){
        this.posy += 3;
        if(this.posy > 690){
            this.posy = -100
            this.posx = Math.random() * (500 - this.height)
        }
    }
}

