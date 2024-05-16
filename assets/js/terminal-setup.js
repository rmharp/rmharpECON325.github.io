document.addEventListener('DOMContentLoaded', function() {
    const terminal = new Terminal();
    const fitAddon = new FitAddon.FitAddon();
    terminal.loadAddon(fitAddon);
    terminal.open(document.getElementById('terminal'));
    fitAddon.fit();

    terminal.writeln('Welcome to Riley Harper\'s Terminal! Type "help" for more options.');

    let inputBuffer = '';

    terminal.onKey(keyEvent => {
        const { key, domEvent } = keyEvent;
        if (domEvent.keyCode === 13) { // Enter key
            terminal.writeln('');
            processCommand(inputBuffer);
            inputBuffer = '';
            terminal.write('>');
        } else if (domEvent.keyCode === 8) { // Backspace key
            if (inputBuffer.length > 0) {
                terminal.write('\b \b');
                inputBuffer = inputBuffer.slice(0, -1);
            }
        } else {
            inputBuffer += key;
            terminal.write(key);
        }
    });

    function processCommand(command) {
        switch (command.trim()) {
            case 'help':
                terminal.writeln('Available commands: "help", "origin story", "video 2"');
                break;
            case 'origin story':
                terminal.writeln('Here\'s a brief history about me...');
                break;
            case 'video 2':
                terminal.writeln('Visit YouTube to watch my videos.');
                break;
            default:
                terminal.writeln('Unknown command: ' + command);
        }
    }
});
