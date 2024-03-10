// JavaScript code for handling button clicks

// Function to handle button clicks
function handleButtonClick(event) {
    // Get the target element of the click event
    const target = event.target;
  
    // Check if the clicked element is a button
    if (target.tagName === 'BUTTON') {
      // Get the data-action attribute of the button
      const action = target.getAttribute('data-action');
  
      // Perform action based on the value of data-action attribute
      switch (action) {
        case 'scrollToTop':
          // Scroll to the top of the page
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          break;
        // Add more cases for other actions if needed
      }
    }
  }
  
  // Add event listener to the document for button clicks
  document.addEventListener('click', handleButtonClick);