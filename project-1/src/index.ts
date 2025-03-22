
// Problem 1
function sumArray(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}


// Problem 2

function removeDuplicates(numbers: number[]): number[] {
    return Array.from(new Set(numbers));
}

// console.log(removeDuplicates([1,3,3,4,4,5,5,6,6,6,7,8,8,9]));
