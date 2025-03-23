
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


// Problem 4

type Circle = { shape: "circle", radius: number };
type Rectangle = { shape: "rectangle", width: number, height: number }
type Shape = Circle | Rectangle;

function calculateShapeArea(s: Shape): number {
    if(s.shape === "circle" ) {
        return parseFloat((Math.PI * s.radius ** 2).toFixed(2));
    }

    else{
        return s.width * s.height;
    
    }
}
