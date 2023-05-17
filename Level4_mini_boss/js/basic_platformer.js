//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});

	platform0 = new GameObject();
		platform0.width = 200;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";

		platform1 = new GameObject();
		platform1.width = 400;
		platform1.x = canvas.height/2 - 30;
		platform1.y = canvas.height/2 - 30;
		platform1.color = "blue";

		platform2 = new GameObject();
		platform2.width = 500;
		platform2.x = canvas.height/2;
		platform2.y = 600;
		platform2.color = "green";

		platform3 = new GameObject();
		platform3.x = platform2.width;
		platform3.y = platform2.y- platform0.height/2 - platform1.height/2;
		platform3.color = "yellow";
		platform3.vx = 3;

		
		platform4 = new GameObject();
		platform4.width = 100;
		platform4.x = canvas.height/2 + 550;
		platform4.y = canvas.height/2 - 200;
		platform4.color = "blue";

		platform5 = new GameObject();
		platform5.width = 100;
		platform5.x = canvas.height/2 - 100;
		platform5.y = canvas.height/2 - 220;
		platform5.color = "red";

		platform6 = new GameObject();
		platform6.width = 100;
		platform6.x = canvas.height/2 + 150;
		platform6.y = canvas.height/2 - 220;
		platform6.color = "red";
		
	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});
	goal1 = new GameObject({width:24, height:50, x:20, y:platform0.y-100, color:"#00ffff"});

	var fX = .85;
	var fY = .97;
	
	var key = false;
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	
// light green
	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	
	////// Green
	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform2.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	// blue
	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	/// Yellow

	while(platform3.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform3.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform3.hitTestPoint(player.right()) && player.vx >=0)
	{
		platform3.x++;
	}
	while(platform3.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y--;
		player.vy = 0;
	}

	//goal
	while(platform4.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	
	
	
// platform 5 red
	if(platform5.hitTestPoint({x:player.left().x, y:player.bottom().y})&& player.vy >=0 )
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
// goal move right with key
	while(platform6.hitTestPoint({x:player.right().x, y:player.bottom().y, x:player.right().x}) && player.vx >=0)
	{
		player.y--;
		player.vx = 0;
		player.canJump = true;

		if(key==true){
			platform6.x = 10000;
		}
	}
	while(platform6.hitTestPoint(platform4.left()))
	{
		platform4.x++;
	}
	
	//---------Objective: Treasure!!!!!!!---------------------------------------------------------------------------------------------------- 
	//---------Run this program first.
	//---------Get Creative. Find a new way to get your player from the platform to the pearl. 
	//---------You can do anything you would like except break the following rules:
	//---------RULE1: You cannot spawn your player on the pearl!
	//---------RULE2: You cannot change the innitial locations of platform0 or the goal! 
		
	if(player.hitTestObject(goal))
	{
		goal.y = 10000;
		context.textAlign = "center";
		context.drawText("You Win!!!", canvas.width/2, canvas.height/2);
	}


	if(player.hitTestObject(goal1))
	{
		goal1.y = player.bottom().y;
		goal1.x = player.bottom().x;
		
	}
	
	if(goal1.hitTestObject(platform6))
	{
		platform6.x++;
	}
	
	
	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	platform4.drawRect();
	platform5.drawRect();
	platform6.drawRect();
	//Show hit points
	player.drawRect();
	goal.drawCircle();
	goal1.drawCircle();
}

