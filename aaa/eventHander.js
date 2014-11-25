
/**
 * [解决事件的兼容问题，事件相关函数]
 * @type {Object}
 */
var eventHander={
	addHander:function(element,event,funName){
		if(element.attachEvent){
			element.attachEvent("on"+event,funName);
		}else if(element.addEventListener){
			element.addEventListener(event,funName,false);
		}else{
			element['on'+event]=funName;
		}
	},
	removeHander:function(element,event,funName){
		if(element.detachEvent){
			element.detachEvent("on"+event,funName);
		}else if(element.removeEventListener){
			
			element.removeEventListener(event,funName,false);
		}else{
			element['on'+event]=null;
		}
	},
	stopup:function(e){
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble=true;
		}
	},
	preventDefault:function(e){
		if(e.preventDefault){
			e.preventDefault();
		}else{
			e.returnValue=false;
		}
	}

}