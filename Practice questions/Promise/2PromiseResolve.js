var p = new Promise.resolve(42)

p.then(function(){
	console.log("yayy 42 returned a promise value");
}
)

//yayy 42 returned a promise value