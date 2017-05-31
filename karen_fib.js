function fib() {
    var value = 0;
    var prev = 0;
    var prevprev = 1;
    console.log(value+':'+prev+':'+prevprev);
    function nacci() {
        prev = prevprev;
        prevprev = value;
        value = prevprev + prev;
        console.log(value+':'+prev+':'+prevprev);
    }
    console.log('nacci:'+nacci);
    return nacci
};

var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
