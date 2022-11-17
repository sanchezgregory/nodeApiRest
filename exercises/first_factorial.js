function firstFactorial(num) {
    if (num === 0 || num === 1 || num === 2) return num;
    let c = 0;
    let fact = 1;
    do {
        fact *= ++c;
    } while(c<num)

    return fact;
}

console.log(firstFactorial(7))