let side1 = 3;
let side2 = 2;
let side3 = 0;

if (side1 === side2 && side2 === side3) {
    console.log("Equilateral triangle");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("Isosceles triangle");
} else {
    console.log("Scalene triangle");
}