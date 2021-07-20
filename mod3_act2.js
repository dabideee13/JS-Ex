// mod3_act2.js

/*
Tasks
1. Write a program that adds two numbers.
2. The program will ask to enter first and second number.
3. The program will display "The sum of n1 and n2 is nTotal"
4. The program will ask if the user wants to try again. The user will
    input Y/y if Yes and N/n if No.
5. If Yes, refer to step 2.
6. If No, the program will display "Thank you!"
*/

const prompt = require('prompt-sync')({ sigint: true });


function add(first, second) {
    return first + second
}


function pprint() {
    console.log(`The sum of ${first} and ${second} is ${add(first, second)}`)
}


function main() {

    while (true) {

        // User input
        first = Number(prompt('Enter first number: '));
        second = Number(prompt('Enter second number: '));
        console.log(`The sum of ${first} and ${second} is ${add(first, second)}\n`);

        let trial = prompt('Try again? (Yes or No): ');

        if (trial.toLowerCase() == 'y') {
            continue;

        } else if (trial.toLowerCase() == 'n') {
            console.log('Thank you!')
            break;

        } else {
            break;
        }
    }
}


main();

// TODO: Handle invalid inputs for first number
// TODO: Handle invalid inputs for second number
// TODO: Handle invalid inputs for trial
