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

document.getElementById('terminal-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('input');
    const command = input.value.trim();
    input.value = '';
    processCommand(command);
});

function processCommand(command) {
    const output = document.getElementById('output');
    switch(command.toLowerCase()) {
        case 'help':
            output.innerHTML += "<div>Type 'sumfetch' to display summary.<br/>Type 'repo' or click <a href='https://github.com'>here</a> for the Github repository.</div>";
            break;
        case 'sumfetch':
            output.innerHTML += "<div>Summary info...</div>";
            break;
        case 'repo':
            output.innerHTML += "<div>Opening Github repository...</div>";
            window.open('https://github.com', '_blank');
            break;
        default:
            output.innerHTML += `<div>shell: command not found: ${command}. Try 'help' to get started.</div>`;
    }
    output.scrollTop = output.scrollHeight;
}
