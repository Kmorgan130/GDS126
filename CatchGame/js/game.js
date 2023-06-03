//Declare my variables
// goal is to shoot karen "Yellow". only got it to function to shoot on the right hand side.
var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var score = 0;
var circle;
var square;

    //Set Up the Canvas
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");  

    //Instantiate the Player
        player = new GameObject();
        player.height = 50;
        player.width = 50;
        player.x = 500;
        player.y = 750;

        var amount = 5;
        var particles = [];
       
        
        
        for(var i = 0; i < amount; i++)
        {
            particles[i] = new GameObject({width:25, height:25});
            
           
            particles[i].color = "green";
        
            particles[i].x = Math.random() * canvas.width;
            particles[i].y = Math.random() * canvas.height;
            particles[i].vy = Math.random() * 10 + 5;
        }

        var particles2 = [];
        for(var i = 0; i < amount; i++)
        {
            particles2[i] = new GameObject({width:25, height:25});
            
           
            particles2[i].color = "red";
        
            particles2[i].x = Math.random() * canvas.width;
            particles2[i].y = Math.random() * canvas.height;
            particles2[i].vy = Math.random() * 10 + 5;
        }

    var fX = .85;
    var fY = .97;
    
    var key = false;
    var gravity = 1;


    //Set the Animation Timer
    interval = 1000/60;
    timer = setInterval(animate, interval);

function animate()
{
    //Erase the Screen
    context.clearRect(0,0,canvas.width, canvas.height); 

    for(var p = 0; p < particles.length; p++)
	{	
		particles[p].x += particles[p].vx;
		particles[p].y += particles[p].vy;
			
        if(player.hitTestObject(particles[p]))
            {
            score++;
            particles[p].y = -10;
            particles[p].x = Math.random() *canvas.width;
            particles[p].vy = Math.random() *15 + 5;
            }

		if(particles[p].y >canvas.height)
		    {
			particles[p].y = -10;
			particles[p].vy = Math.random() *15 + 5;
            particles[p].x = Math.random() *canvas.width;
		    }

		particles[p].drawRect();
	}

    for(var p = 0; p < particles2.length; p++)
	{	
		particles2[p].x += particles2[p].vx;
		particles2[p].y += particles2[p].vy;
			
        if(player.hitTestObject(particles2[p]))
        {
            score = 0;
            particles2[p].y = -10;
            particles2[p].x = Math.random() *canvas.width;
            particles2[p].vy = Math.random() *15 + 5;
        }

		if(particles2[p].y >canvas.height)
		{
			particles2[p].y = -10;
			particles2[p].vy = Math.random() *15 + 5;
            particles2[p].x = Math.random() *canvas.width;
		}

        

		particles2[p].drawCircle();
	}

    if(a)
    {
        console.log("Moving left");
        player.x += -5;
    }
    if(d)
    {
        console.log("Moving right");
        player.x += 5;
    }
    
    player.vx *= fX;
    player.vy *= fY;

    
    
    
    
    player.x += Math.round(player.vx);
    player.y += Math.round(player.vy);
    

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
    
    

    

    
// Text
    context.fillStyle = "blue"
    context.font = "15px Georgia";
    context.fillText("Score: ", canvas.width/2 - 350, 50);

	context.fillStyle = "blue"
    context.font = "15px Georgia";
    context.fillText(score, canvas.width/2 - 300, 50);

    //Update the Screen
    player.drawRect();
    //score.fillText();
    

}