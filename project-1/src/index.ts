
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


// problem 5

function getProperty<X, Y extends keyof X>(obj:X, key:Y): X[Y]{
    return obj[key]
}

// Problem 6

interface Profile {
    name: string;
    age: number;
    email: string;
}

function updateProfile(profile:Profile, updates: Partial<Profile>): Profile{
    return {...profile, ...updates};
}

// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { email: "shakib@shakib.com", name: "Shakib" }));

