
new Promise(function(resolve,reject){
    resolve(42);
   }).then(function success(){
       console.log("Its a success");
   }, function err(){
       console.log("Its an error");
   
   })
   //VM69:6 Its a success
  
new Promise(function(resolve,reject){
    throw ReferenceError;
   }).then(function success(){
       console.log("Its a success");
   }, function err(){
       console.log("Its an error");
   
   })
  // VM69:6 Its an error
 