//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;
var prevX;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.x = 20;
	player.height = 150;
	player.width = 15;
	

	ball = new GameObject();
	ball.vx =-5; 
	ball.vy =0;
	ball.width = 35;
	ball.height = ball.width;

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player to the right
	if(w)
	{
		console.log("Moving Up");
		player.y += -5;
	}
	if(s)
	{
		console.log("Moving Down");
		player.y += 5;
	}

	//boarders

	player.y += player.vy;

	if(player.y < player.height/2)// this the bounderies
	{
		player.y = player.height/2
		player.vy = -player.vy;
		player.color = "yellow";
	}
	if(player.y > canvas.height - player.height/2)// this the bounderies
	{
		player.y = canvas.height - player.height/2
		player.vy = - player.vy;
		player.color = "pink";
	}


	//ball function
	ball.x += ball.vx;


	if(ball.x + ball.width + 10 < ball.width/2)// this the bounderies
	{
		ball.x = canvas.width/2
		ball.y = canvas.height/2
		ball.vx = ball.vx
	
	}

	if(ball.x > canvas.width - ball.width/2)// this the bounderies
	
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = - ball.vx;
		ball.color = "green";
	}
	
	//
	//height
	ball.y += ball.vy;

	if(ball.y < ball.height/2)// this the bounderies
	{
		ball.y = ball.height/2
		ball.vy = -ball.vy;
		ball.color = "yellow";
	}
	if(ball.y > canvas.height - ball.height/2)// this the bounderies
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = - ball.vy;
		ball.color = "pink";
	}
//collid


if(ball.hitTestObject(player))
{
	//draw bounding boxes
	context.strokeRect(ball.x- ball.width/2, ball.y - ball.height/2, ball.width, ball.height)
	context.strokeRect(player.x- player.width/2, player.y - player.height/2, player.width, player.height)
}

	if(ball.hitTestObject(player))
	{
		ball.x = player.x + player.width/2 + ball.width/2
		ball.vx = -ball.vx
		console.log("colliding");
	}
	


	//Update the Screen
	player.drawRect();
	ball.drawCircle();
}

