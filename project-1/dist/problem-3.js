"use strict";
// Problem 3
function countWordOccurrences(sentence, word) {
    const words = sentence.toLowerCase().split(" ");
    return words.filter(w => w === word.toLowerCase()).length;
}
