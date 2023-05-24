//1st question
function power(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
      result *= a;
    }
    return result;
  }
  
var base = 2;
var exponent = 3;
var result = power(base, exponent);
console.log(base + " raised to the power of " + exponent + " is: " + result);


// // 2nd question
// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return true;
//             } else {
//                 return false;
//             }
//         } else {
//             return true;
//         }
//     } else {
//         return false;
//     }
// }
// const year = parseInt(prompt("Enter a year: "));
// if (isLeapYear(year)) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }


// 3rd question
function calculateTriangleArea(a, b, c) {
    var s = (a + b + c) / 2; // 6
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
var a = 5;
var b = 4;
var c = 3;
var area = calculateTriangleArea(a, b, c);
console.log("The area of the triangle is: " + area);


//4th question
function calculateAverage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3; // 245
    var average = totalMarks / 3; // 81.66
    return average; 
}

function calculatePercentage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3; // 245
    var totalPossibleMarks = 300; // Assuming each subject has a maximum of 100 marks
    var percentage = (totalMarks / totalPossibleMarks) * 100; // 81.66
    return percentage;
}

function mainFunction(subject1, subject2, subject3) {
    var average = calculateAverage(subject1, subject2, subject3);
    var percentage = calculatePercentage(subject1, subject2, subject3);
    console.log("Average marks: " + average);
    console.log("Percentage: " + percentage + "%");
}

// Example usage
var subject1Marks = 80;
var subject2Marks = 75;
var subject3Marks = 90;
mainFunction(subject1Marks, subject2Marks, subject3Marks);


//5th question
function customIndexOf(string, searchChar) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === searchChar) {
        return i;
      }
    }
    return -1; // Character not found
  }
  
var string = "Hello, World!";
var searchChar = "W";
var index = customIndexOf(string, searchChar);
console.log("Index of '" + searchChar + "': " + index);

//6th question
function deleteVowels(sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var result = "";
    for (var i = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence[i])) {
            result += sentence[i];
        }
    }
    return result;
}

var sentence = "Hello, how are you today?"; // eooaeouoa
var modifiedSentence = deleteVowels(sentence);
console.log("Modified Sentence: " + modifiedSentence);

//7th question
function countSuccessiveVowels(text) {
    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (var i = 0; i < text.length - 1; i++) {
        var currentChar = text[i].toLowerCase();
        var nextChar = text[i + 1].toLowerCase();

        if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
            count++;
        }
    }
  
    return count;
}
var text = "Hello, how are you today?";
var count = countSuccessiveVowels(text);
console.log("Number of occurrences: " + count);

// //8th question
// function convertToMeters(distance) {
//     return distance * 1000;
// }

// function convertToFeet(distance) {
//     return distance * 3280.84;
// }

// function convertToInches(distance) {
//     return distance * 39370.08;
// }

// function convertToCentimeters(distance) {
//     return distance * 100000;
// }

// function printDistanceConversions(distance) {
//     var meters = convertToMeters(distance);
//     var feet = convertToFeet(distance);
//     var inches = convertToInches(distance);
//     var centimeters = convertToCentimeters(distance);

//     console.log("Distance: " + distance + " km");
//     console.log("Meters: " + meters + " m");
//     console.log("Feet: " + feet + " ft");
//     console.log("Inches: " + inches + " in");
//     console.log("Centimeters: " + centimeters + " cm");
// }

// // Example usage
// var distanceKm = parseFloat(prompt("Enter the distance between two cities in km: "));
// printDistanceConversions(distanceKm);


// //9th question
// function calculateOvertimePay(hoursWorked) {
//     var regularHours = 40;
//     var overtimeRate = 12.00;
//     var overtimeHours = Math.max(hoursWorked - regularHours, 0);
//     var overtimePay = overtimeHours * overtimeRate;
//     return overtimePay;
// }

// // Example usage
// var hoursWorked = parseFloat(prompt("Enter the number of hours worked: "));
// var overtimePay = calculateOvertimePay(hoursWorked);
// console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2));


// //10th question
// function calculateCurrencyNotes(amountInHundreds) {
//     var note100 = Math.floor(amountInHundreds);
//     var remainingAmount = (amountInHundreds - note100) * 100;

//     var note50 = Math.floor(remainingAmount / 50);
//     remainingAmount %= 50;

//     var note10 = Math.floor(remainingAmount / 10);

//     return {
//         note100: note100,
//         note50: note50,
//         note10: note10
//     };
// }

// // Example usage
// var amountInHundreds = parseFloat(prompt("Enter the amount to be withdrawn in hundreds: "));
// var notes = calculateCurrencyNotes(amountInHundreds);

// console.log("Number of 100 notes: " + notes.note100);
// console.log("Number of 50 notes: " + notes.note50);
// console.log("Number of 10 notes: " + notes.note10);









