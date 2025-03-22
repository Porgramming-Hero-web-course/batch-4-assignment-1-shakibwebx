
// Problem 1
function sumArray(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}


// Problem 2

function removeDuplicates(numbers: number[]): number[] {
    return Array.from(new Set(numbers));
}

// Problem 3

function countWordOccurrences(sentence: string, word: string): number {
    
    const words = sentence.toLowerCase().split(" ");
    return words.filter(w => w === word.toLowerCase()).length;
}
