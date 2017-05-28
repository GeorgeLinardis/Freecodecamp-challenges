/**
 * FreeCodeCamp Challenge
 * -------------------------
 * The algorithm to convert from Celsius to Fahrenheit is the temperature in
 * Celsius times 9/5, plus 32.
 * You are given a variable celsius representing a temperature in Celsius.
 * Use the variable fahrenheit already defined and apply the algorithm to assign
 * it the corresponding temperature in Fahrenheit.
 *
 * -------------------------
 * @param {number} celsius
 *        celsius takes a number representing Celsious temperature
 * @return {number} number
 *        returns temperature in Fahreneit
 *
 */

function convertToF(celsius) {

    return (celsius *1.8)+32;
}

convertToF(30);