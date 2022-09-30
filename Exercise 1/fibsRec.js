#!/usr/bin/node

function fibsRec(n) {
    if(n <= 1) return n; 
    else return (fibsRec(n-1) + fibsRec(n-2))
}

console.log(fibsRec(5))