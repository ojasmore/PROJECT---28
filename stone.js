class Stone{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            friction : 1,
            density : 1.2
        }
        this.radius = radius;
        
        this.body = Bodies.circle(x,y,this.radius/10);
        World.add(world,this.body);

        this.image = loadImage("images/stone.png")
    }
    display(){
      
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}