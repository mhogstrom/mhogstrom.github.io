var surface;
var myImg;

function drawCanvas()
{
	var canvas = document.getElementById('myCanvas');
	var x = canvas.width / 2;
	var y = canvas.height / 2;
	var radius = 45;
	var offset = 50;
	if (canvas.getContext)
	{
		var context = canvas.getContext('2d');
		context.beginPath();
		context.arc(x, y, radius, 0, 2 * Math.PI, false);
		context.clip();
		context.fillStyle = "rgb(255,255,255)";
		context.fillRect(0, 0, canvas.width, canvas.height);
		
		myImg = new Image();
		myImg.onload = function ()
		{
			var scale = 0.1;
			 //context.translate(x + myImg.width * 0.5, y + myImg.height * 0.5);
			 // Perform the scale
			 context.scale(scale, scale);
			 // Translate back to the top left of our image
			 //context.translate(-myImg.width * 0.5, -myImg.height * 0.5);
			 context.drawImage(myImg,0,0);
		};
		myImg.src = 'mattiashogstrom.png'; 
	}
}

function detectMob() {
	if(window.innerWidth <= 800 && window.innerHeight <= 600)
	{
		return true;
	} 
	else 
	{
       		return false;
	}
}

function loadingComplete()
{
	var surfaceContext = surface.getContext("2d");
	var scale = 0.1;
	surfaceContext.translate(x + myImg.width * 0.5, y + myImg.height * 0.5);
	// Perform the scale
	surfaceContext.scale(scale, scale);
	// Translate back to the top left of our image
	surfaceContext.translate(-myImg.width * 0.5, -myImg.height * 0.5);
	surfaceContext.drawImage(myImg,0,0);
}

	

