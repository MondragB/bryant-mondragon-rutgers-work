// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 9) + 1);

// Select the counter h3 element
counter = d3.select('.counter');  

// Select the buttons and use D3 `.on` to attach a click handler
button = d3.selectAll('button').on('click', function() {
  // Create a variable for the button selected
  currentButton = d3.select(this)
  // Create a variable to hold the increment or decrement
  if (currentButton.attr('.upvote') == true){
      change = 1;
    } else {
      change = -1;
    }

  // Create a variable to hold the current counter value
  let currentCount = parseInt(counter.text());
  // Update the counter value
  currentCount += change;
  // Set the counter h3 text to the new count
  counter.text(currentCount);
});