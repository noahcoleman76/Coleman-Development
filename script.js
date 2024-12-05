document.addEventListener("DOMContentLoaded", () => {
    // Ensure the page starts at the top
    window.scrollTo(0, 0);
  
    const modal = document.getElementById("top-modal");
    const typingElement = document.getElementById("typing");
    const header = document.querySelector("header");
    let modalHidden = false; // Ensure modal hides only once
    let typingStarted = false; // Prevent multiple triggers of the typing animation
  
    // Show the modal initially
    modal.classList.add("show");
  
    document.addEventListener("scroll", () => {
      // Hide the modal on the first scroll
      if (!modalHidden) {
        modal.classList.remove("show");
        modalHidden = true; // Prevent further modifications to the modal
      }
  
      // Trigger typing animation when scrolling past the header
      const headerBottom = header.getBoundingClientRect().bottom;
      if (!typingStarted && headerBottom <= 0) {
        typingElement.classList.add("start-typing");
        typingStarted = true; // Ensure animation only starts once
      }
    });
  });
  