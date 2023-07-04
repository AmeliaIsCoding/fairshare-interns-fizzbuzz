// This is our main function
function fizzbuzz() {
    console.log("Hello, World!");

    let n = 0;
    while (n < 260) {
        
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

