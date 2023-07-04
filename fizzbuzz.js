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

    let n = 0;
    while (n < max) {

        n++;
        let result = "";
        if (n % 3 == 0) {
            result += "Fizz";
        } if (n % 13 == 0) {
            result += "Fezz";
        } if (n % 5 == 0) {
            result += "Buzz";
        } if (n % 7 == 0) {
            result += "Bang";
        } if (n % 11 == 0) {
            result = "";
            if (n % 13 == 0) {
                result += "Fezz";
            } result += "Bong";
        } if (n % 17 == 0 && result != "") {
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

