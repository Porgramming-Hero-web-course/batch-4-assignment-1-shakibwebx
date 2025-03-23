// Problem 4

type Circle = { shape: "circle", radius: number };
type Rectangle = { shape: "rectangle", width: number, height: number }
type Shape = Circle | Rectangle;

function calculateShapeArea(s: Shape): number {
    if (s.shape === "circle") {
        return parseFloat((Math.PI * s.radius ** 2).toFixed(2));
    }

    else {
        return s.width * s.height;

    }
}
