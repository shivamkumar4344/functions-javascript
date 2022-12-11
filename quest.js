// 1. add 2 numbers and return their sum, then print it
// 2. make a function to calculate factorial
// 3. make a function to print multiplication table

// 1 ans
function add(a,b){
    return a+b

}
console.log(add(10,12))

// 2 ans
function factorial(n){
    if (n==0){
        return 1
    }
    else {
        return n*factorial(n-1)
    }

}
console.log(factorial(5))

// 3 ans 

function multiply_table(n, i = 1) {
    if (i == 11) // Base case
        return;
    console.log(n + " * " + i + " = " + n * i);
    i++;  // Increment i
    multiply_table(n, i);
}


let n = 12
multiply_table(n)
