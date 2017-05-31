// fib sequence = 1 1 2 3 5 8 13

function rFib(val){
  if(val < 3){
    return 1;
  }

  return rFib(val - 1) + rFib(val - 2)
}


var fib = rFib(4);

console.log(fib);
