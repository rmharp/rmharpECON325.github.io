'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

document.addEventListener('DOMContentLoaded', function () {
    const terminal = new Terminal(); // Create a new terminal instance
    const fitAddon = new FitAddon.FitAddon(); // Create a new instance of the FitAddon for responsive fitting
    terminal.loadAddon(fitAddon); // Load the fit addon to the terminal
    terminal.open(document.getElementById('terminal')); // Open the terminal in the specified container
    fitAddon.fit(); // Adjust the size of the terminal to fit the container

    terminal.writeln('Welcome to Riley Harper\'s Terminal! Type "help" for more options.');

    let inputBuffer = ''; // Buffer to hold user input

    terminal.onKey(({ key, domEvent }) => {
        const char = domEvent.key;

        if (char === 'Enter') {
            terminal.write('\r\n'); // Move to next line on Enter
            processCommand(inputBuffer); // Process the command
            inputBuffer = ''; // Clear the input buffer
        } else if (char === 'Backspace') {
            if (inputBuffer.length > 0) {
                inputBuffer = inputBuffer.substring(0, inputBuffer.length - 1); // Remove last character from buffer
                terminal.write('\b \b'); // Erase the last character on the terminal
            }
        } else {
            inputBuffer += char; // Add typed character to buffer
            terminal.write(char); // Display typed character on the terminal
        }
    });

    function processCommand(command) {
        switch (command.trim()) {
            case 'help':
                terminal.writeln('Type "origin story" to learn about me, or "video 2" to watch a video.');
                break;
            case 'origin story':
                terminal.writeln('Here\'s a brief history about me...');
                break;
            case 'video 2':
                terminal.writeln('Please visit: [video URL]'); // Example, replace with actual URL
                break;
            default:
                terminal.writeln('Unknown command: ' + command);
        }
        terminal.prompt(); // Optionally, prompt for next input
    }
});
