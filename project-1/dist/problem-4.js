"use strict";
// Problem 4
function calculateShapeArea(s) {
    if (s.shape === "circle") {
        return parseFloat((Math.PI * s.radius ** 2).toFixed(2));
    }
    else {
        return s.width * s.height;
    }
}
