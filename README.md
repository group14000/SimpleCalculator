# 1.SimpleCalculator
Calculator Webpage Readme

HTML:
This is an HTML document for a calculator webpage. The document contains the necessary HTML elements to create a basic calculator with buttons for arithmetic operations and functions.

Prerequisites
This webpage can be viewed in any modern web browser.

Getting started
To get started with the calculator, simply open the index.html file in a web browser. The calculator will be displayed on the screen with a text input and a table of buttons.

Features
The calculator has the following features:

Arithmetic operations: addition, subtraction, multiplication, and division.
Parentheses: open and close parentheses for grouping expressions.
Clear screen: a button to clear the screen and start a new calculation.
Percentage: a button to calculate the percentage of a number.
Decimal point: a button to add a decimal point to a number.
Equals: a button to calculate the result of the expression.
Styling
The styling for the calculator is defined in an external CSS file called calculatorstyle.css.

Functionality
The functionality for the calculator is defined in an external JavaScript file called calculator.js. The JavaScript code uses DOM manipulation to get references to the calculator's text input and buttons, and adds event listeners to the buttons to handle user input and calculate the result of the expression.

CSS: 

Description
This is a CSS file that contains styles for a calculator webpage. It defines the styles for the container, table, input, button, calculator, and h1 elements.

Styles
.container
This style sets the text alignment to center and adds a margin of 23 pixels at the top.

table
This style sets the margin to auto, which centers the table horizontally within its container.

input
This style sets the border radius to 21 pixels, adds a 5 pixel solid border with a dark green color, sets the font size to 34 pixels, and sets the height and width of the input field.

button
This style sets the border radius to 20 pixels, sets the font size to 40 pixels, sets the background color to a light purple, sets the width and height of the button, and adds a margin of 6 pixels around the button.

.calculator
This style sets the border to a 4 pixel solid line with a dark green color, sets the background color to a light pink, adds padding of 23 pixels, sets the border radius to 53 pixels, and sets the display property to inline-block.

h1
This style sets the font size to 28 pixels and sets the font family to Courier New or Courier, with a fallback to a generic monospace font family.

Usage
To use these styles, link this CSS file to the HTML file for your calculator webpage using the <link> element in the <head> section of your HTML file.
<head>
    <link rel="stylesheet" href="calculatorstyle.css">
</head>

JavaScript:

This code is a simple calculator that takes user input through button clicks and displays the results on the screen.

The first part of the code uses the DOM (Document Object Model) to get the screen element and all buttons on the page. It then initializes the screenValue variable to an empty string.

The code adds an event listener to each button using a for loop that iterates over all buttons on the page. The event listener checks the text of the button that was clicked and performs the appropriate action based on the button's text.

If the button clicked is 'X', the code replaces it with '*' in the screenValue variable and displays the updated value on the screen.

If the button clicked is 'C', the screenValue variable is reset to an empty string and the screen is cleared.

If the button clicked is '=', the screenValue expression is evaluated using the eval() function and the result is displayed on the screen.

If any other button is clicked, its text is appended to the screenValue variable and displayed on the screen.

Overall, this code is a basic example of how to create a simple calculator using JavaScript and the DOM.

