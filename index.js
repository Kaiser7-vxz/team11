document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const text = "Welcome to our college"; // Text to type out
    let index = 0;
  
    function typeText() {
      if (index < text.length) {
        textElement.textContent += text.charAt(index); // Add one character at a time
        index++;
        setTimeout(typeText, 100); // Adjust typing speed (100ms per character)
      } else {
        // Fade in effect after typing is complete
        textElement.style.opacity = 1;
      }
    }
  
    typeText(); // Start the typing animation
  });