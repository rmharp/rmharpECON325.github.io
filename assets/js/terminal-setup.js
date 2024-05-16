'use strict';

// Terminal initialization and command processing code
document.addEventListener('DOMContentLoaded', function () {
    const terminal = new Terminal();
    const fitAddon = new FitAddon.FitAddon();
    terminal.loadAddon(fitAddon);
    terminal.open(document.getElementById('terminal'));
    fitAddon.fit();

    terminal.writeln('Welcome to Riley Harper\'s Terminal! Type "help" for more options.');
    terminal.write('>');
    
    let inputBuffer = '';

    terminal.onKey(({ key, domEvent }) => {
        const char = domEvent.key;

        if (char === 'Enter') {
            terminal.writeln('');
            processCommand(inputBuffer);
            inputBuffer = ''; // Clear the input buffer after processing
            terminal.write('>');
        } else if (char === 'Backspace') {
            if (terminal._core.buffer.x > 1) {
                terminal.write('\b \b'); // Move cursor back, write space to erase, and move cursor back again
                inputBuffer = inputBuffer.slice(0, -1); // Remove last character from buffer
            }
        } else {
            inputBuffer += char; // Append new character to buffer
            terminal.write(char); // Display character in terminal
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
                terminal.writeln('Please visit: [video URL]'); // Replace with actual URL
                break;
            default:
                terminal.writeln('Unknown command: ' + command);
        }
    }
});
