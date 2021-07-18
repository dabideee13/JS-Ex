// mod2_act2.js

/*
Tasks
1. Write a program code that allows the user to input values for a
    salesperson's base salary, total sales, and commission rate. The
    program calculates and displays the salesperson's pay by adding
    the base salary to the product of the total sales and
    commission rate.
*/

const prompt = require('prompt-sync')({ sigint: true });


function calculatePay(baseSalary, totalSales, commissionRate) {
    return baseSalary + (totalSales * commissionRate)
}


function main() {
    let baseSalary = Number(prompt('Enter salary: '));
    let totalSales = Number(prompt('Enter total sales: '));
    let commissionRate = Number(prompt('Enter commission rate: '));

    console.log(
        'Salesperson\'s pay',
        calculatePay(baseSalary, totalSales, commissionRate)
    );
}


main();
