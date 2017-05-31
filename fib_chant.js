
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

// We declare a function called iFib that takes one parameter, called val.
function iFib(val){
// In the body of the function we declare two variables x and y, we set them to starting values of zero and one.
  var x = 0;
  var y = 1;

// Using a for loop, we declare a variable called start and while start is less than the value passed into function using val, we run the code inside of the loop. After the loop runs one time, we then increment the start by one.
  for(var start = 0; start < val; start++){
//Inside of the for loop, we set the variable y to y plus x and we set the value of x to y minus x.
    y = y + x
    x = y - x
  }
//When the condition in the loop is no longer true, we then return the value of y.
  return y;
}

//To invoke the funtion we must pass a parameter into the iFib function. We can set a variable fib to the result if the function iFib and console.log the result.

var fib = iFib(4);
console.log(fib);

//Recursive Solution
function rFib(val){
  if(val < 3){
    return 1;
  }
  return rFib(val - 1) + rFib(val - 2)
}
var fib = rFib(4);
console.log(fib);
