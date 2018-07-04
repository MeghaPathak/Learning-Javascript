function returnsPromise(){
    console.log("I return a promise");
    return Promise.resolve(4);  //<--- ek promise object return karna h Better h to use Promise.resolve
}

returnsPromise().then(function(obj){
	console.log("Function k call se Promise return hua")
})

// VM142:2 I return a promise
// VM142:7 Function k call se Promise return hua