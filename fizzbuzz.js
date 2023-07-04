const readline = require("readline-sync");

// This is our main function
function fizzbuzz() {
    
    let flag = false;
    let max;
    let response;
    console.log("Please enter the maximum number to be printed");

    while (flag == false) {
        response = readline.prompt();
        max = parseInt(response);
        if (max != NaN) {
            if (max > 0) {
                flag = true;
            } else {
            console.log("Please enter a positive number");
        } }
    }

    console.log("The possible rules may apply to 3, 5, 7, 11, 13, 17");
    console.log("Input the numbers for which you want the rules to apply, seperated by a space");
    console.log("e.g. 3 5 11 17");
    console.log("If you enter a number other than these, it will be ignored")
    rules = readline.prompt().split(" ");

    let n = 0;
    while (n < max) {

        n++;
        let result = "";
        if (rules.includes("3") && n % 3 == 0) {
            result += "Fizz";
        } if (rules.includes("13") && n % 13 == 0) {
            result += "Fezz";
        } if (rules.includes("5") && n % 5 == 0) {
            result += "Buzz";
        } if (rules.includes("7") && n % 7 == 0) {
            result += "Bang";
        } if (rules.includes("11") && n % 11 == 0) {
            result = "";
            if (rules.includes("13") && n % 13 == 0) {
                result += "Fezz";
            } result += "Bong";
        } if (rules.includes("17") && n % 17 == 0 && result != "") {
            string_as_array = result.match(/[A-Z][a-z]+/g);
            result = string_as_array.reverse().join("");
        }
        
        if (result != "") {
            console.log(result);
        } else {
            console.log(n);
        }

    }

}

// Now, we run the main function:
fizzbuzz();

