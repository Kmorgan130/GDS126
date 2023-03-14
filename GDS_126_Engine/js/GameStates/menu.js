/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:125, height:30, x:135, y:275});
//startButton.img.src="images/mrt.jpg"

console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/mrt.jpg"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			//sounds.play(`bgMusic`,1)
		}

		//Hover Effect Graffic
		startButton.img.src = "images/button2.png"
	}
	else
	{
		//Default Button Graphic
		startButton.img.src = "images/button1.png"
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage()
}
	
	
