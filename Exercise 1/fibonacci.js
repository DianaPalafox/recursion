#!/usr/bin/node

function fibs(n){
    let array = [0, 1, 1]
    let a = 1;
    let b = 1; 
    for(let i= 4; i<=n; i++){
        let c = a + b; 
        a=b;
        b=c; 
        array.push(c)  
    }
    return array; 
}

console.log(fibs(8))
