class Ground
{
    constructor(x,y,width,height)
    {
        var ground_options = 
        {
            isStatic:true
        }
        this.width = width;
        this.height = height;
        Matter.Bodies.rectangle(x,y,this.width,this.height,ground_options);

        World.add(world,this.body);
    }

    display()
    {
        ellipse(x,y,this.width,this.height,)
    }
}