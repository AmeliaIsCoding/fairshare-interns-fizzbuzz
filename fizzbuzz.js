// This is our main function
function fizzbuzz() {
    console.log("Hello, World!");

    let n = 0;
    while (n < 100) {
        n++;
        let result = "";
        if (n % 3 == 0) {
            result += "Fizz";
        } if (n % 5 == 0) {
            result += "Buzz";
        } if (n % 7 == 0) {
            result += "Bang";
        } if (n % 11 == 0) {
            result = "Bong";
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

