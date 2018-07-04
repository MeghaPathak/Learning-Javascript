function foo() {
  console.log('foo');
  
  return new Promise(resolve => {
    console.log('foo timeout before');
    
    setTimeout(() => {
      console.log('foo timeout');

      resolve('foo resolved');
    }, 1000);
    
    console.log('foo timeout after');
  });
}


function bar() {
  console.log('bar');
  
  return new Promise(resolve => {
    console.log('bar timeout before');
    
    setTimeout(() => {
      console.log('bar timeout');
      
      resolve('bar resolved');
    }, 3000);
    
    console.log('bar timeout after');
  });
}