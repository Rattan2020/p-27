class Ball{

    constructor(x,y,radius){

        var options={
            isStatic:false,
           density: 0.008
                    }
       this.body=Bodies.circle(x,y,radius,options);
       World.add(world,this.body);
    
        this.radius=radius;
    }
    
         display(){
             
            var pos=this.body.position;
            
            ellipseMode(RADIUS);
            fill("yellow");
             circle(pos.x,pos.y,this.radius);
         }
}