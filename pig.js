class pig{
    constructor(x,y,width,height){
        var option={'restitution': 1,
        'density': 0.5,
        'friction':1,
        'isStatic':1
    }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;

 
    World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill('green');
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
    }
