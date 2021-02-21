class Ball{
    constructor(x,y){
        var options={
            restituition: 0.3,
            friction: 5,
            density: 1.0
        }
       this.body=Bodies.circle(x,y,50,options);
       World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     
      fill("white");
      ellipse(0, 0, 50);
      pop();
    }
}