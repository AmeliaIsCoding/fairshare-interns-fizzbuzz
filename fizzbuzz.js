// This is our main function
function fizzbuzz() {
    console.log("Hello, World!");

    let n = 0;
    while (n < 100) {
        n++;
        if (n % 3 == 0 && n % 5 == 0) {
            console.log("FizzBuzz");
        } else if (n % 3 == 0) {
            console.log("Fizz");
        } else if (n % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(n)
        }
    }

}

// Now, we run the main function:
fizzbuzz();

