/*
farenheit = 120.25
celsius = 37.38

celsius_to_fahrenheit = ###
fahrenheit_to_celsius = ###

print(celsius, "celsius is", round(celsius_to_fahrenheit, 2), "fahrenheit")
print(fahrenheit, "fahrenheit is", round(fahrenheit_to_celsius, 2), "celsius")

Tasks
1. Modify the given code and assign the correct expressions to convert
    fahrenheit to celsius and vice versa.
Formula:
    (__degree celsius * 9/5) + 32 = __degree fahrenheit
    (__degree fahrenheit * 5/9) = __degree celsius
*/


function celsiusToFahrenheit(celsius) {
    return (celsius * (9/5)) + 32
}


function fahrenheitToCelsius(fahrenheit) {
    return fahrenheit * (5/9)
}


function main() {

    // Test data
    let fahrenheit = 120.25;
    let celsius = 37.38;

    console.log(
        `${celsius}`,
        'celsius is',
        `${Math.round(celsiusToFahrenheit(celsius), 4)}`,
        'fahrenheit'
    );
    console.log(
        `${fahrenheit}`,
        'fahrenheit is',
        `${Math.round(fahrenheitToCelsius(fahrenheit), 4)}`,
        'celsius'
    );
}


main();
