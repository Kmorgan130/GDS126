//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

//var bullet = [];

    //Set Up the Canvas
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");  

    var debugPoint = new GameObject();
    debugPoint.width = 10;
    debugPoint.height = 10;
    debugPoint.color = `black`

    

    //Instantiate the Player
        player = new GameObject();
        player.height = 50;
        player.width = 50;

        karen = new GameObject();
        karen.height = 50;
        karen.width = 50;

        platform0 = new GameObject();
        platform0.width = 1000;
        platform0.x <= canvas.width;
        platform0.y = 780
        platform0.color = "#66ff33";

        platform1 = new GameObject();
        platform1.width = 100;
        platform1.x = 980;
        platform1.y = 230;
        platform1.height= 1000
        platform1.color = "blue";   

        platform2 = new GameObject();
        platform2.width = 100;
        platform2.x = 500;
        platform2.y = 300;
        platform2.height= 50
        platform2.color = "red";   

//
var bullet = [];
var canShoot = true;

 bullet = new GameObject();
 bullet.x = 10000;
 bullet.y = player.y;
 bullet.color = "red";
 bullet.height = 20;
 bullet.width = 20;
 //

    var amount = 25;
	var particles = [];
	
	for(var i = 0; i < amount; i++)
	{
		particles[i] = new GameObject({width:10, height:10, x:karen.x, y:player.y, color:"#ffff00"});
	}
    

    var fX = .85;
    var fY = .97;
    
    var key = false;
    var gravity = 1;

    var angle = 0;

    //Set the Animation Timer
    interval = 1000/60;
    timer = setInterval(animate, interval);

function animate()
{
    //Erase the Screen
    context.clearRect(0,0,canvas.width, canvas.height); 

if(bullet.hitTestPoint(karen))
		{
			//wait one second before calling the boom function
			setTimeout(boom, 10);
		}
 
        
    if(spacebar && canShoot == true)
	{
	 bullet.x = player.x;
	 bullet.y = player.y;
     bullet.vx = 20;
    }

	if(bullet.x >= canvas.width)
	{
		bullet.x = 10000;
		bullet.vy = 0;
	}
	
	for(var p = 0; p < particles.length; p++)
	{	
		particles[p].x += particles[p].vx;
		particles[p].y += particles[p].vy;
      
		particles[p].drawRect();
	}


    //if(spacebar && canShoot == true)
	//{
	//	bullet.x = player.x;
   //     bullet.y = player.y
	//	bullet.vx = 20;
	//}

	//if(bullet.x >= canvas.width)
	//{
	//	bullet.x = 10000;
	//	bullet.vx = 0;
	//}
    
	
    //Move the Player to the right

    if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

    if(a && !platform1.hitTestPoint(player.left()))
    {
        console.log("Moving left");
        player.x += -5;
    }
    if(d && !platform1.hitTestPoint(player.right()))
    {
        console.log("Moving right");
        player.x += 5;
    }
    
    player.vx *= fX;
    player.vy *= fY;
    karen.vx *= fX;
    karen.vy *= fY;
    
    player.vy += gravity;
    karen.vy += gravity;
    
    
    player.x += Math.round(player.vx);
    player.y += Math.round(player.vy);
    karen.x += Math.round(karen.vx);
    karen.y += Math.round(karen.vy);

// player1
    player.y += player.vy;

    if(player.x < player.width/2)// this the bounderies
    {
        player.x = player.width/2
        player.vx = -player.vx;
        player.color = "yellow";
    }
    if(player.x > canvas.width - player.width/2)// this the bounderies
    {
        player.x = canvas.width - player.width/2
        player.vx = - player.vx;
        player.color = "pink";
    }
    //
    
///
    while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
    {
        player.y--;
        player.vy = 0;
        player.canJump = true;
    }

    while(platform0.hitTestPoint(karen.bottom()) && karen.vy >=0)
    {
        karen.y--;
        karen.vy = 0;
        karen.canJump = true;
    }
    //// need to jump on
    while(platform1.hitTestPoint(player.right()) && player.vx >=0)
    {
        player.x --;
    
    }
    //
    
    // need to jump on higher platform
    while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
    {
        player.y--;
        player.vy = 0;
        player.canJump = true;
    }
    //
      debugPoint.color = `black;`
    if(platform1.hitTestPoint(player.right1()))
    {
        debugPoint.color = `yellow`

        if(w)
        {
        player.vx = -95;
        player.vy = -15
       
        }
    }

   for (var p = 0; p < particles.length; p++) {
    particles[p].x += karen.vx;
    particles[p].y += karen.vy;
  }
   
    debugPoint.x = player.right1().x;
    debugPoint.y = player.right1().y;

    //Update the Screen
    player.drawRect();
    karen.drawRect();
    platform0.drawRect();
    platform1.drawRect();
    platform2.drawRect();
    debugPoint.drawRect();
    bullet.move();
    bullet.drawCircle();

}



    function boom()
{
		karen.x = -100000

		for(var p = 0; p < particles.length; p++)
	{	
		particles[p].vx += Math.random() * 20 - 10;
		particles[p].vy += Math.random() * 20 - 10;
		
	}
}