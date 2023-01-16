console.log("Hello TrueCoder TAs!!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");

//Function to skip even numbers, displaying only
//odd numbers up to "count"

function printOdds(count) {        
    if (count > 0)
    for(let i = 1; i <= count; i++ ) {
        if (i % 2 != 0) {
            console.log(i);
        } else {
            continue;
        }
    }    
}

printOdds(50)

// Exercise 2 Section

console.log("EXERCISE 2:\n==========\n");

//Function to check the user's age, to verify if they are old enough to drive a car

function checkAge(userName, age) {       
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you are 16.`;
    if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }  

}
checkAge("Kate", 14);
checkAge("Sarah", 35);

// Exercise 3 Section

console.log("EXERCISE 3:\n==========\n");

//Function to determine whether two points (x, y) in the Cartesian plane
//lie on x-axis, y-axis, or which quadrant they belong to.

// If in first quadrant then,    x > 0 and y > 0 
// If in second quadrant then,   x < 0 and y > 0 
// If in third quadrant then,    x < 0 and y < 0 
// If in fourth quadrant then,   x > 0 and y < 0 
// If in positive x-axis then,   y = 0 and x > 0
// If in negative x-axis then,   y = 0 and x < 0  
// If in positive y-axis then,   x = 0 and y > 0
// If in negative y-axis then,   x = 0 and y < 0  
// If at origin then,            x = 0 and y = 0

function checkQuadrant(x, y) {
    let firstQuad = `This point \(${x}, ${y})\ lies in the first quadrant.`;
    let secondQuad = `This point \(${x}, ${y})\ lies in the second quadrant.`;
    let thirdQuad = `This point \(${x}, ${y})\ lies in the third quadrant.`;
    let fourthQuad = `This point \(${x}, ${y})\ lies in the fourth quadrant.`;
    let posX = `This point \(${x}, ${y})\ lies on the positive x-axis.`;
    let negX = `This point \(${x}, ${y})\ lies on the negative x-axis.`;
    let posY = `This point \(${x}, ${y})\ lies on the positive y-axis.`;
    let negY = `This point \(${x}, ${y})\ lies on the negative y-axis.`;
    let atOrigin = `This point \(${x}, ${y})\ is at the origin.`;

    if (x > 0 && y > 0) {
        console.log(firstQuad);
    } else if (x < 0 && y > 0) {
        console.log(secondQuad);
    } else if (x < 0 && y < 0) {
        console.log(thirdQuad);
    } else if (x > 0 && y < 0) {
        console.log(fourthQuad);
    } else if (y == 0 && x > 0) {
        console.log(posX);
    } else if (y == 0 && x < 0) {
        console.log(negX);
    } else if (x == 0 && y > 0) {
        console.log(posY);
    } else if (x == 0 && y < 0) {
        console.log(negY);
    } else 
        console.log(atOrigin);
}

checkQuadrant(3, 3);
checkQuadrant(-9, 7);
checkQuadrant(0, 0);

// Exercise 4 Section

console.log("EXERCISE 4:\n==========\n");

//Function to determine whether three given numbers form a valid triangle.
//If they form a triangle, what type of triangle is displayed.

//equilateral: all side lengths equal 
//isosceles: only two side lengths equal
//scalene: all different side lengths

function checkSidesOfTriangle(side1, side2, side3) {
    let equilateral = `This is an 'equilateral' triangle. All sides are of even length.`;
    let isosceles = `This is an 'isosceles' triangle. Only two sides are of even length.`;
    let scalene = `This is a 'scalene' triangle. All sides are of different lengths.`;
    let invalid = `This is not a valid triangle.`;

    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
        console.log(invalid);
    } else if (side1 == side2 && side2 == side3 && side1 == side3) {
            console.log(equilateral);
    } else if (side1 == side2 || side2 == side3 || side1 == side3) {
            console.log(isosceles);
    } else if (side1 != side2 && side2 != side3 && side1 != side3) 
        console.log(scalene);
          
}

checkSidesOfTriangle(4, 4, 4);
checkSidesOfTriangle(1, 2, 2);
checkSidesOfTriangle(4, 3, 6);
checkSidesOfTriangle(1, 1, 2);

// Exercise 5 Section

console.log("EXERCISE 5:\n==========\n");

//Function to display average amount of data used per day and inform the user if they
//are using too much data or can afford to use more.

//The function should compute whether the user is over, under, or right on the average
//daily usage under the plan. It should also inform them of how much data is left
//and how much, on average, they can use per day for the rest of the month. If
//they’ve run out of data, it should inform them of that too.

//.toFixed is similar to Math.Round, it will return the numObj as a string rounded to
//the specified digit.

function dataPlan(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    if (currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING";
    } else if (currentAvg < projectedAvg) {
        statusMsg = "UNDER";
    } else 
        statusMsg = "AT";

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining.`);
    console.log(`Average projected use: ${projectedAvg.toFixed(2)} GB/day.`);
    console.log(`You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day),
    continuing this usage, you will have used ${planLimit - (usage + projectedUsage)} GB from your data plan.`);
    console.log(`To stay below your data plan, use no more than ${remainingData / remainingDays.toFixed(2)} GB/day.`);
}

 
dataPlan(50, 10, 25);
dataPlan(100, 15, 37);