class Umbrella {
    constructor(x,y,radius){
    var options = {
        isStatic: true
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image = loadImage("images/Walking Frame/Walking_1.png")
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        fill("brown");
        image(this.image, pos.x, pos.y, 300, 300);
      }
}