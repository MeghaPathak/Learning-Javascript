function returnsPromise() {
    console.log('I return a promise');
    return Promise.resolve(4);  //<--- ek promise object return karna h Better h to use Promise.resolve
  }
  
  returnsPromise()
    .then(function (obj) {
      console.log('1st then');
      throw ReferenceError;
    })
    .then(function () {
      console.log('Success in 2nd then');
    }, function (err) {
      console.log('Error in 2nd then');
      return err;
    })
    .then(function () {
      console.log('Success in 3rd then');
    }, function (err) {
      console.log('Error in 3rds then');
      return err;
    });
//   VM174:2 I return a promise
//   VM174:8 1st then
//   VM174:14 Error in 2nd then
//   VM174:18 Success in 3rd then
 