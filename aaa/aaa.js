var maindiv=null;
var startdiv=null;
var startbtn=null;
var START=false;
var STEP=2;
var up=false;
var down=false;
var left=false;
var right=false;
var plane=null;
var FPS=60;
function $(id){
	document.getElementById(id);
}
eventHander.addHander(window,"load",init);
maindiv=$("maindiv");
startdiv=$("startdiv");
startbtn=$("startbtn");
function init(){
	eventHander.addHander(startbtn,"click",start);
	eventHander.addHander(document,"keydown",function(){
		var e=event||window.event;
		if (e.keyCode==13&&START==false) {
			start();
		}
	});
}
function start(){
	START=true;
	startdiv.style.display="none";
	plane=new Plane(250,450,30,30,"aaa.jpg");
	plane.create();
	update();
	eventHander.addHander(document,"keydown",function(){
		var e=event||window.event;
		if (e.keyCode==37) {
			left=true;
		}
		else if(e.keyCode==39) {
			right=true;
		}
		else if (e.keyCode==38) {
			up=true;
		}
		else if (e.keyCode==40) {
			down=true;
		}
	});
	eventHander.addHander(document,"keyup",function(){
		var e=event||window.event;
		if (e.keyCode==37) {
			left=false;
		}
		else if(e.keyCode==39) {
			right=false;
		}
		else if (e.keyCode==38) {
			up=false;
		}
		else if (e.keyCode==40) {
			down=false;
		}
	});
}
function update(){
	if (START==false) {
		return;
	}
	plane.update;
	window.setTimeout("update()",1000/FPS);
}
function Plane(x,y,height,width,imgpath){
	this.x=x;
	this.y=y;
	this.height=height;
	thid.width=width;
	this.imgpath=imgpath;
	this.img=null;
}
Plane.prototype={
	create:function(){
		var img=document.createElement('img');
		img.style.left=this.x+"px";
		img.style.top=this.x+"px";
		img.style.height=this.height+"px";
		img.style.width=this.width+"px";
		img.style.position="absolute";
		img.src=this.imgpath;
		maindiv.appendChild(img);
	},
	move:function(){
		if (left) {
			this.x-=STEP;
		}
		else if (right) {
			this.x+=STEP;
		}
		else if (up) {
			this.y-=STEP;
		}
		else if (down) {
			this.y+=STEP;
		}
	},
	update:function(){
		this.move();
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
	}
}
