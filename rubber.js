class rubber{
    constructor(x,y){
        var options={
            restituition: 1.5,
            friction: 5,
            density: 1.0
        }
       this.body=Bodies.circle(x,y,10,options);
       World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     
      fill("white");
      ellipse(0, 0, 10);
      pop();
    }
}