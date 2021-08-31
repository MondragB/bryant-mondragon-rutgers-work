// Open the inspector to see the data
console.log(data)

// Starting a rating count
let sum = 0;
let count = 0;

// Arrays to hold movies by decade
movies1960s = [];
movies1970s = [];
movies1980s = [];
movies1990s = [];
movies2000s = [];

// For loop to go through all movies
for (let i = 0; i < data.length; i++) {

  // Variable to hold current movie in loop
  currentMovie = data[i]

  // Increment sum variable by amount of rating
  sum += currentMovie.rating

  // Conditional statement to determine array assignment
  if (data[i].year > 1999) {
      movies2000s.push(currentMovie)
    }
    else if (currentMovie.year > 1989 && currentMovie.year < 1999 ) {
      movies1990s.push(currentMovie)
    }
    else if (currentMovie.year > 1979 && currentMovie.year < 1989 ) {
      movies1980s.push(currentMovie)
    }
    else if (currentMovie.year > 1969 && currentMovie.year < 1979 ) {
      movies1970s.push(currentMovie)
    }
    else {
      movies1960s.push(currentMovie)
    }
  }
  // Find the average rating
  let avg = sum/data.length

// Print results
console.log("---------");
console.log(`${movies1960s.length} of the top ten movies are from the 1960s.`);
console.log(`${movies1970s.length} of the top ten movies are from the 1970s.`);
console.log(`${movies1980s.length} of the top ten movies are from the 1980s.`);
console.log(`${movies1990s.length} of the top ten movies are from the 1990s.`);
console.log(`${movies2000s.length} of the top ten movies are from the 2000s.`);
console.log(`The average movie rating is ${avg}.`);
console.log("---------");
