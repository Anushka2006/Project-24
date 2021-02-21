class Hammer{
    constructor(x,y){
        var options={
            'density': 2,
            'friction': 1.0,
            'restitution': 0.5
        };
        this.body = Bodies.rectangle(x,y,100,10,options);
        World.add(world, this.body);

    }
    display(){
        rectMode(CENTER)
        var posx = this.body.position.x
        var posy = this.body.position.y
        posx = mouseX;
        posy = mouseY;
        var angle = this.body.angle;
        push()
        translate(posx,posy)
        rotate(angle)
        fill("green")
        rect(0,0,100,10) ;
        pop()
    }
}