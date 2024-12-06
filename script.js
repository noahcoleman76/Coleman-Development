// Start at the top of the page when refreshed

window.onbeforeunload = () => window.scrollTo(0, 0);

// Load content depending on if modal is open or not

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("top-modal");
  const typingElement = document.querySelector(".typing-animation");
  const imageContainer = document.querySelector(".section .image");
  let modalHidden = false; // Track whether the modal is hidden
  let typingStarted = false; // Ensure typing animation only starts once
  let imageAnimationStarted = false; // Ensure image animation only starts once

  // Get 25% of the viewport height
  const quarterViewportHeight = window.innerHeight * 0.25;

  // Show the modal initially
  modal.classList.add("show");
  document.body.classList.add("modal-open");

  document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    // Show the modal when scrolled back to the top
    if (scrollPosition === 0) {
      modal.classList.add("show");
      document.body.classList.add("modal-open");
      modalHidden = false; // Reset modal state
      typingStarted = false; // Allow typing animation to restart if needed
      imageAnimationStarted = false; // Allow image animation to restart if needed
    } else {
      // Hide the modal when scrolling down
      modal.classList.remove("show");
      document.body.classList.remove("modal-open");
      modalHidden = true;
    }

    // Trigger typing animation when scrolling 25% of the viewport height
    if (scrollPosition >= quarterViewportHeight && !typingStarted) {
      typingElement.classList.add("start-typing"); // Add the typing animation class
      typingStarted = true; // Ensure typing animation only starts once
    }

    // Trigger image animation when scrolling out of the modal
    if (modalHidden && !imageAnimationStarted) {
      imageContainer.classList.add("animate"); // Add the image animation class
      imageAnimationStarted = true; // Ensure image animation only starts once
    }
  });
});

// pupup-onscroll animation triggered

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.popup-onscroll'); // Select all elements

  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  };

  const handleScroll = () => {
    elements.forEach((el) => {
      if (isInViewport(el)) {
        el.classList.add('visible'); // Add the class when in viewport
      }
    });
  };

  window.addEventListener('scroll', handleScroll); // Listen for scroll events
  handleScroll(); // Trigger on page load in case elements are already in view
});
