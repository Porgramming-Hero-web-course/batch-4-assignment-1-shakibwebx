function sumArray(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 3, 5, 2, 5, 6]));