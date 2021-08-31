// Create a variable called 'name' that holds your name in a string
let name = "Bryant M."

// Create another variable called 'title' using a string template to say "<your name>'s First Plotly Chart"
let title = `${name}'s First Plotly Chart`

// Create an array called 'books' of your favorite book titles
let books = ['Hamlet', 'Ender\'s Game', 'Halo', 'Shadows Rising', 'The Giver', 'Marshalls']

// Create another array called 'timesRead' of how many times you've read each respective book
let timesRead = ['1', '2', '3', '4', '5', '6']

// Create a JavaScript object called 'myData' with four key-value pairs
// 1. name
// 2. favoriteBooks
// 3. timesRead
// 4. age
let myData = {
    name: name,
    favoriteBooks: books,
    timesRead: timesRead,
    age: 28
}

// use console.log() to print 'myData' to the console. Explore the output in the Chrome Console
console.log(myData)


// BONUS: in 'myData', consolidate the 'favoriteBooks' and 'timesRead' into one key called 'books' where the value is
// another javascript object, with keys 'titles' and 'timesRead'. 