
  // Function to animate the number from a starting value to the target value
  function animateNumber(element, startValue, endValue, duration) {
    const range = endValue - startValue;
    const increment = range / duration;
    let current = startValue;

    const timer = setInterval(() => {
      current += increment;
      element.textContent = Math.round(current);

      if (current >= endValue) {
        element.textContent = endValue;
        clearInterval(timer);
      }
    }, 10);
  }

  // Call the animation function for each number


  // Define a function to check if the element is visible
  function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Get the element with ID 'num3'
  const num3Element = document.getElementById('num3');

  // Check if the element is visible when the page loads
  if (isElementVisible(num3Element)) {
    // If the element is visible, then run the animation
    animateNumber(num3Element, 0, 200, 500);
  }

  // Observer to check if the element becomes visible during scrolling
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // If the element becomes visible, run the animation
        animateNumber(num3Element, 0, 200, 500);
        const num1Element = document.getElementById('num1');
        animateNumber(num1Element, 400, 800, 500); // Animation duration: 1500ms
        const num4Element = document.getElementById('num4');
        animateNumber(num4Element, 800, 1000, 500); // Animation duration: 1500ms
        const num2Element = document.getElementById('num2');
        animateNumber(num2Element, 0, 12, 500); // Animation duration: 1500ms
        // Unobserve the element since we only want to trigger the animation once
        observer.unobserve(entry.target);
        setTimeout(function() {
            var element1 = document.getElementById('countplus1');
            var element2 = document.getElementById('countplus2');
            var element3 = document.getElementById('countplus3');
      
            element1.classList.remove('hidden');
            element2.classList.remove('hidden');
            element3.classList.remove('hidden');
          }, 6000);
      }
    });
  });

  // Start observing the element
  observer.observe(num3Element);
// Animation duration: 1500ms


