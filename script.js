// Wait for the DOM to load before running JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the form from refreshing the page
      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;
  
      // Display a simple alert message
      alert(`Thank you, ${name}! Your message has been sent:\n"${message}"`);
  
      // Optionally, clear the form
      form.reset();
    });
  });
  