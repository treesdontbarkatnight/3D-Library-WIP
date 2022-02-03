function drawCube(offsetX,offsetY){
drawLine((offsetX-(cubeSize/d))/z,(offsetY-(cubeSize/d))/z,(offsetX+(cubeSize/d))/z,(offsetY-(cubeSize/d))/z);
drawLine((offsetX-(cubeSize/d))/z,(offsetY-(cubeSize/d))/z,(offsetX-(cubeSize/d))/z,(offsetY+(cubeSize/d))/z);
drawLine((offsetX+(cubeSize/d))/z,(offsetY-(cubeSize/d))/z,(offsetX+(cubeSize/d))/z,(offsetY+(cubeSize/d))/z);
drawLine((offsetX-(cubeSize/d))/z,(offsetY+(cubeSize/d))/z,(offsetX+(cubeSize/d))/z,(offsetY+(cubeSize/d))/z);

drawLine(((offsetX-(cubeSize/2))/depth)/z,((offsetY-(cubeSize/2))/depth)/z,((offsetX+(cubeSize/2))/depth)/z,((offsetY-(cubeSize/2))/depth)/z);
drawLine(((offsetX-(cubeSize/2))/depth)/z,((offsetY-(cubeSize/2))/depth)/z,((offsetX-(cubeSize/2))/depth)/z,((offsetY+(cubeSize/2))/depth)/z);
drawLine(((offsetX+(cubeSize/2))/depth)/z,((offsetY-(cubeSize/2))/depth)/z,((offsetX+(cubeSize/2))/depth)/z,((offsetY+(cubeSize/2))/depth)/z);
drawLine(((offsetX-(cubeSize/2))/depth)/z,((offsetY+(cubeSize/2))/depth)/z,((offsetX+(cubeSize/2))/depth)/z,((offsetY+(cubeSize/2))/depth)/z);

drawLine((offsetX-(cubeSize/2))/z,(offsetY-(cubeSize/2))/z,((offsetX-(cubeSize/2))/depth)/z,((offsetY-(cubeSize/2))/depth)/z);
drawLine((offsetX-(cubeSize/2))/z,(offsetY+(cubeSize/2))/z,((offsetX-(cubeSize/2))/depth)/z,((offsetY+(cubeSize/2))/depth)/z);
drawLine((offsetX+(cubeSize/2))/z,(offsetY-(cubeSize/2))/z,((offsetX+(cubeSize/2))/depth)/z,((offsetY-(cubeSize/2))/depth)/z);
drawLine((offsetX+(cubeSize/2))/z,(offsetY+(cubeSize/2))/z,((offsetX+(cubeSize/2))/depth)/z,((offsetY+(cubeSize/2))/depth)/z);


}

function cubeTexture(offsetX,offsetY){
	for(var i=0;i<cubeSize+10;i++){
	drawLine((offsetX-(cubeSize/2))/z+i,(offsetY-(cubeSize/2))/z,((offsetX-(cubeSize/2))/depth)/z+i,((offsetY-(cubeSize/2))/depth)/z);
	ctx.strokeStyle = "#000000";
}
for(var i=0;i<cubeSize+10;i++){
	drawLine(((offsetX-(cubeSize/2))/depth)/z+i,((offsetY-(cubeSize/2))/depth)/z,((offsetX-(cubeSize/2))/depth)/z+i,((offsetY+(cubeSize/2))/depth)/z);
	ctx.strokeStyle = red;
}
for(var i=0;i<cubeSize+5;i+=1){
	drawLine((offsetX-(cubeSize/2))/z,(offsetY+(cubeSize/2))/z-i,((offsetX-(cubeSize/2))/depth)/z,((offsetY+(cubeSize/2))/depth)/z-i);
	ctx.strokeStyle = "#00bbff";
}
}

function moveCube(){
	background("#ffffff");
	drawCube(x,y);
	for(var i=0;i<100;i++){
		drawCube(x+cubeSize*i,y);
		cubeTexture(x+cubeSize*i,y);
	}
	for(var i=0;i<100;i++){
		drawCube(x+cubeSize*i,y-cubeSize*2);
		cubeTexture(x+cubeSize*i,y-cubeSize*2);
	}
	x-=1;
	//y-=1;
	//z+=0.1;
	//depth+=0.01;
}

setInterval(moveCube,1);