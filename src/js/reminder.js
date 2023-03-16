const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function sum(params) {
    let total = 0;
    for (const i of params) {
        total += i/params.length
    }
    return total;

}

console.log(sum(numbers));