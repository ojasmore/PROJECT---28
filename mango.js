class Mango {
    constructor(x,y,radius){

        var options = {
            isStatic : true,
            friction : 0.9
        }
       
        this.radius = radius;
        this.body = Bodies.circle(x,y,this.radius/10,options);
        World.add(world,this.body);

        this.image = loadImage("images/mango.png");

    }
    display(){
        var pos = this.body.position;
        imageMode(RADIUS);
        image(this.image,pos.x,pos.y,this.radius,this.radius);

    }
}