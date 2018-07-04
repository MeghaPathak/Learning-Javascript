var p1 = Promise.resolve(1)

var p2 = new Promise(function(yes,no){
	yes(3);
})


Promise.all([p1,p2])
.then(
	function(){
    console.log("Success")
	},
	function(){
	console.log("Error")
    } )

// Success
///////////////////////////////////////////////////////////////////

var p1 = Promise.resolve(1)

var p2 = new Promise(function(yes,no){
	no("Bad")
})


Promise.all([p1,p2])
.then(
	function(){
    console.log("Success")
	},
	function(){
	console.log("Error")
	} )


//VM201:14 Error