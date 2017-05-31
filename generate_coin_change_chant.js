function generateCoinChange( pennies ) {
    if (cents <= 0){
        alert('Please enter an amount greater than zero.');
        return false;
    }
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;

    while (pennies >= 25) {
      quarters++;
      pennies -= 25;
    }

    while (pennies >= 10) {
      dimes++;
      pennies -= 10;
    }

    while (pennies >= 5) {
      nickels++;
      pennies -= 5;
    }
     console.log("%d quarters", quarters);
     console.log("%d dimes",    dimes);
     console.log("%d nickels",  nickels);
     console.log("%d pennies",  pennies);
     return false;
}


//We declare a function called genCC that takes one parameter called cents.
function genCC ( cents ) {
    //Using the 'Fast-Fail' concept, we check that the user has entered a value that is greater than zero. If they do enter a negative value, the function will console.log an error message and return null, ending the function.
    if (cents < 0) {
        console.log ("ERROR: Please enter a value greater than Zero!")
        return null;
    }
    //In the body of the function we declare an associative array called 'names', associative arrays have a key and a value associated with it. The key has been set to the actual names of the coins and the value is initially set to zero. Each element will hold the total number of coins for each type, and the name of each coin.
    var names = {"Quarters":0, "Dimes":0, "Nickels":0, "Pennies":0};
    //We also declare a regular array called 'coins'. 'coins' holds the numeric values of each coin type. Using these two arrays, we can add additional coin types and values.
    var coins = [25,10,5,1];
    //We declare two helper variables called 'temp' and 'counter' and set them to the value of zero.
    var temp = 0, counter = 0;
    //Using a 'for in' loop, we iterate through the associative array 'names' based on the number of elements, without necessarily knowing how many elements are present. Inside of the 'for in' loop, we declare the variable 'key' which represents the names of the coins in the 'names' array.
    for (var key in names) {
        //We set the value of each element in the 'names' array to the quotient that we derive from dividing the remaining cents by the coin value stored in the 'coins array'. We increment through the 'coins' array using the 'counter' value.
        names[key] = cents / coins[counter];
        //We then set a temp variable to the remaining cents after we know how many of each coin is calulated.
        temp = cents % coins[counter];
        //We then pass the remaining coins, represented by 'temp' to the variable 'cents', so that the quotient can be calculated on the next iteration.
        cents = temp;
        //To output the results, we console.log the key and we truncate the results of each quotient calculation using the 'Math.trunc()' function. The 'Math.trunc()' function returns the integer part of a number by removing any fractional digits.
        console.log(key, Math.trunc(names[key]))
        //Finally, to iterate through the coins array, we increment the counter value by one.
        counter++;
        }
        //To end the function, we return null so that 'undefined' is not passed to the console after the function has completed.
        return null;
}
