// Get the screen element and all buttons on the page
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

// Initialize the screen value to empty string
let screenValue = '';

// Add event listener to each button
for (item of buttons) {
item.addEventListener('click', (e) => {
buttonText = e.target.innerText;
console.log('Button text is ', buttonText);
    // If the button pressed is 'X', replace it with '*' in the screenValue
    if (buttonText == 'X') {
        buttonText = '*';
        screenValue += buttonText;
        screen.value = screenValue;
    }

    // If the button pressed is 'C', clear the screenValue and the screen
    else if (buttonText == 'C') {
        screenValue = "";
        screen.value = screenValue;
    }

    // If the button pressed is '=', evaluate the screenValue expression and display the result on the screen
    else if (buttonText == '=') {
        screen.value = eval(screenValue);
    }

    // If any other button is pressed, append its text to the screenValue and display it on the screen
    else {
        screenValue += buttonText;
        screen.value = screenValue;
    }

})
}

// The code adds event listeners to each button on the page and defines the behavior of the calculator when each button is pressed. The screenValue variable stores the expression being entered on the calculator's screen. When the equal (=) button is pressed, the expression is evaluated using the eval() function and the result is displayed on the screen. The X button is treated as multiplication. The C button clears the screen.
