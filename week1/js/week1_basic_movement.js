//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new Player();

	player.vx =2; 
	player.vy =2;
	
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	player.x += player.vx;

	if(player.x < player.width/2)// this the bounderies
	
	{
		player.x = player.width/2
		player.vx = -player.vx;
		player.color = "red";
	}
	if(player.x > canvas.width - player.width/2)// this the bounderies
	
	{
		player.x = canvas.width - player.width/2
		player.vx = - player.vx;
		player.color = "green";
	}

	//height
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
	//Update the Screen
	player.draw();
}
