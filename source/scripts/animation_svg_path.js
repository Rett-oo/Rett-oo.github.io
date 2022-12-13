var path = document.querySelector('.squiggle-animated path');
var length = path.getTotalLength();
// Clear any previous transition
path.style.transition = path.style.WebkitTransition = 'none';
// Set up the starting positions
path.className = length;
path.style.strokeDashoffset = length / 5;
// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
path.getBoundingClientRect();
// Define our transition
path.style.transition = path.style.WebkitTransition =
  'stroke-dashoffset 30s ease-in-out';
// Go!
path.style.strokeDashoffset = '0';