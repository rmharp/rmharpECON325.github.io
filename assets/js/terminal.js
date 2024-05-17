(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        const initialMessage = "Type 'help' to see the list of available commands.<br/>" +
                               "Type 'sumfetch' to display summary.<br/>" +
                               "Type 'repo' or click <a href='https://github.com'>here</a> for the Github repository.";
        document.getElementById('output').innerHTML += `<div>${initialMessage}</div>`;
    });
    
    document.getElementById('terminal-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form from submitting traditionally
        const input = document.getElementById('input');
        const command = input.value.trim();
        input.value = '';  // Clear the input after getting the command
        processCommand(command);
    });
    
    function processCommand(command) {
        const output = document.getElementById('output');
        output.innerHTML += `<div>visitor@liveterm:$ ~ ${command}</div>`;  // Display the command in the terminal
        switch(command.toLowerCase()) {
            case 'help':
                output.innerHTML += "<div>Type 'sumfetch' to display summary.<br/>Type 'repo' or click <a href='https://github.com'>here</a> for the Github repository.</div>";
                break;
            case 'sumfetch':
                case 'sumfetch':
                const sumfetchOutput = `
                <pre>
    
                                                    ██████                                             
                                             ████████████████████                                      
                                         █████████████████████████████                                 
                                     ████████████████████████  █████████                               
                                   ████████████████████████████  ██████████                            
                                 ████████████████████████████████   █████████                          
                                ██████████████████        ████████    █████████                        
                              ████████████████████  ██████  ███████       ██████                       
                             █████████████████████  ██████  ███████         █████                      
                            ██████████████████████         █████████         █████                     
                           ███████████████████████  ██████  ████████          █████                    
                          ████████████████████████  ██████  ███████            █████                   
                          █████████████████████████████████████████             █████                  
                         █████████████████████████████████████████              █████                  
                         ████████████████████████████████████████                ████                  
                         █████████████████████████████████████                   █████                 
                         ██████████████████████████████████                      █████                 
                         ██████████████████████████                              █████                 
                         ██████████████████████                                  █████                 
                         ████████████████████                                    ████                  
                         ███████████████████                                     ████                  
                          █████████████████     █████    █████                  █████                  
                          █████████████████      ████    █████                  ████                   
                           ████████████████      ████    █████                 ████                    
                            ███████████████      █████████████               █████                     
                             ██████████████      █████████████              █████                      
                              ██████████████     ████    █████             █████                       
                                █████████████    ████    █████           ██████                        
                                 █████████████                         ██████                          
                                   █████████████                    ███████                            
                                      ██████████████           ██████████                              
                                         █████████████████████████████                                 
                                             ████████████████████                                      
                                                     ████                                              
    
                Riley Harper
                ----------------------------
                > CONTACT
                  - riley.harper@unc.edu
                  - linkedin.com/in/rileymharper
                </pre>`;
                output.innerHTML += sumfetchOutput;
                break;
            case 'repo':
                output.innerHTML += "<div>Opening Github repository...</div>";
                window.open('https://github.com', '_blank');
                break;
            default:
                output.innerHTML += `<div>shell: command not found: ${command}. Try 'help' to get started.</div>`;
        }
        output.scrollTop = output.scrollHeight;  // Auto-scroll to the bottom of the output
    }
})();    
