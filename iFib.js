function iFib(val){
  if(val < 3){
    return 1
  }
  var temp = 2
  for(var start = 1; start < val; start++){
    temp = temp + (temp - start)
  }
  return temp - 2;
}


var fib = iFib(4);
console.log(fib);


2 = 2 + 2 - 1
3 = 3 + 3 - 2
4 = 4 + 4 - 3


5 - 2

// fib sequence = 1 1 2 3 5 8 13

function iFib(val){
  var x = 0;
  var y = 1;

  for(var start = 0; start < val; start++){
    y = y + x
    x = y - x
  }
  return y;
}

var fib = iFib(4);
console.log(fib);
