// This JavaScript is for handling the search bar functionality (you can expand this if needed)

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    console.log('Searching for:', query);
    // You can add functionality to filter content based on the search query.
});
document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById("typing-text");
  
    // Set the text for the typing animation dynamically
    typingText.textContent = "Welcome to our college";
  });
  // Placeholder script for future enhancements, like animations or dynamic content
console.log("About page loaded successfully!");
