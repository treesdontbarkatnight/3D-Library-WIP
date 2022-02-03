var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext('2d');
var red = "#FF0000";
var scalex = 0;
var scaley = 0;
textScroll = 0;
var y = canvas.width/2;
var x = canvas.height/2;
var cubeSize = 80;
var z=1;
var depth=0.9;
var depthSwitch=0;
var d = 2;

function drawLine(x,y,x2,y2){
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x2,y2);
	ctx.stroke();	
}

function drawRect(x,y,w,h,c){
  	if (canvas.getContext) {
		ctx.fillStyle = c;
		ctx.fillRect(x, y, w, h);
	}
}

function background(c){
	w = canvas.width;
	h = canvas.height;
  	if (canvas.getContext) {
		ctx.fillStyle = c;
		ctx.fillRect(0, 0, w, h);
	}
}

function drawImg(id,x,y,alpha,scalex,scaley){
	var img = document.getElementById(id);
	ctx.drawImage(img, x, y);
}

function audio(audioID,audioEvent){
	var aud = document.getElementById(audioID);
	if(audioEvent == "play"){
		document.getElementById(audioID).style.visibility = "visible";
		aud.muted = false;
		aud.play();
	}else if(audioEvent == "stop"){
		document.getElementById(audioID).style.display = "none";
		aud.muted = true;
		aud.pause();
		aud.currentTime = 0;
	}
}

function drawText(text,x,y,size,shadowColor,shadowBlur,fc){
	ctx.font = size + ' serif';
	ctx.shadowColor = shadowColor;
	ctx.shadowBlur = shadowBlur;
	ctx.lineWidth = 100;
	ctx.fillText(text,x,y);
	if(fc != null){
		ctx.fillStyle = fc;
	}else{
		if(poemText == true){
			ctx.fillStyle = "#000000";
		}else{
			ctx.fillStyle = "#ffffff";
		}
		
	}
}