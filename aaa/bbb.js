    var eventHander={
	addHander:function(element,event,fun){
		if(element.addEventListener){

			element.addEventListener(event,fun,false);
		}else if(element.attachEvent){
			element.attachEvent('on'+event,fun);
		}else{
			element['on'+event] = fun;
		}
	},
	removeHander:function(element,event,fun){
		if(element.removeEventListener){
			element.removeEventListener(event,fun,false);
		}else if(element.detachEvent){
			element.detachEvent('on'+event,fun);
		}else{
			element['on'+event] = null;
		}
	}

}