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
	
	//Set the Animation Timer
	timer = setInterval(animate, 1000);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	player.x += player.vx;
	if(player.x < player.width/2)// this the bounderies
	//player.x=o + player.width/2
	//player.x =player.width/2
	{
		player.vx=0
	}//1   // dont need 0
	//{player.vx=0}//2


	//player.x = -player.vx

	//if(player.x > - canvas.width/2) this is for the looping to the other wall
	//Update the Screen
	player.draw();
}
