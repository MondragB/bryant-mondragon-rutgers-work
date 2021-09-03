// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 9) + 1);

// Select the upvote and downvote buttons
upvoteButton = d3.select(".upvote");
downvoteButton = d3.select('.downvote');

// Select the counter h3 element
counterSelector = d3.select(".counter");

// Use D3 `.on` to attach a click handler for the upvote
upvoteButton.on("click", function () {
  let currentCount = parseInt(counterSelector.text());
  currentCount += 1;
  counterSelector.text(currentCount);
});

// Use d3 `.on` to attach a click handler for the downvote
downvoteButton.on("click", function () {
  let currentCount = parseInt(counterSelector.text());
  currentCount -= 1;
  counterSelector.text(currentCount);
});