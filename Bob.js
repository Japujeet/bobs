class Bob{
    constructor(x,y,radius){
        
        var options={
          isStatic:false,
            restitution:1,
            friction:0,
            density:10
        }
       
      this.radius=radius;
      this.x=x;
      this.y=y;
      this.body=Bodies.circle(x,y,radius,options);
        
        World.add(world,this.body);
    }
    display(){
      
      var pos=this.body.position;
      push();
       translate(pos.x,pos.y)
      ellipseMode(RADIUS);
      fill(150,0,255);
     ellipse(0,0,this.radius);
     pop();
     
    }
}