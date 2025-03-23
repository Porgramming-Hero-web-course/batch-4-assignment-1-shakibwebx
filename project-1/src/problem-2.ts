// Problem 2

function removeDuplicates(numbers: number[]): number[] {
    return Array.from(new Set(numbers));
}