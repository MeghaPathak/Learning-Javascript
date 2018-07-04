new Promise(function(resolve,reject){
    resolve("I am resolving");
}).then(function(value1){
   return Promise.resolve(value1 + "from 1st then");
}).then(function(value){
    console.log(value)
})
//VM114:6 I am resolvingfrom 1st then