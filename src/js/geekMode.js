// Toggle Geek Mode
export function setupGeekMode() {
    const toggleGeekModeButton = document.getElementById("toggleGeekMode");
    const terminal = document.getElementById("terminal");
    const terminalInput = document.getElementById("terminalInput");
    const terminalOutput = document.getElementById("terminalOutput");
    const portfolio = document.getElementById("portfolio");
  
    if (!toggleGeekModeButton || !terminal || !terminalInput || !terminalOutput || !portfolio) {
      console.error("One or more elements not found!");
      return;
    }
  
    toggleGeekModeButton.addEventListener("click", () => {
      terminal.classList.toggle("hidden");
      portfolio.classList.toggle("hidden"); // Hide portfolio in Geek Mode
      if (!terminal.classList.contains("hidden")) {
        terminalInput.focus(); // Focus on the input when terminal is shown
      }
    });
  
    // Handle Commands
    const commands = {
      help: () => `
        Available Commands:
        - help: Show this help message
        - about: Display information about me
        - projects: Display my projects
        - contact: Display contact information
        - clear: Clear the terminal
      `,
      about: () => `
        About Me:
        I'm a passionate developer with experience in building web applications and solving real-world problems.
      `,
      projects: () => `
        My Projects:
        1. Project 1: A web application for task management.
        2. Project 2: A portfolio website built with Astro and Tailwind CSS.
        3. Project 3: A REST API for a blogging platform.
      `,
      contact: () => `
        Contact Me:
        - Email: you@example.com
        - GitHub: github.com/yourusername
        - LinkedIn: linkedin.com/in/yourusername
      `,
      clear: () => {
        terminalOutput.innerHTML = "";
        return "Terminal cleared.";
      },
    };
  
    terminalInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const command = terminalInput.value.trim().toLowerCase();
        terminalInput.value = ""; // Clear input
  
        if (commands[command]) {
          const output = commands[command]();
          terminalOutput.innerHTML += `<code>$ ${command}</code>\n<code>${output}</code>\n`;
        } else {
          terminalOutput.innerHTML += `<code>$ ${command}</code>\n<code class="text-error">Command not found. Type "help" for a list of commands.</code>\n`;
        }
  
        // Scroll to the bottom of the terminal output
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }
    });
  }