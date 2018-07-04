var parent = {
	callingFunc : (){
		var that = this;
		setTimeout(function(){
			that.calledFunction();
		},1000);
	},
	calledFunction : function(){
		console.log("1");
	}
};
function x(){
	setTimeOut(function(){

	},2000);
}