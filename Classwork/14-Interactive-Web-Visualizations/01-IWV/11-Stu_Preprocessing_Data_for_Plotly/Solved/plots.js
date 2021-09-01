let ratings = ['G', 'PG', 'PG-13', 'R']

// Create a function to calculate the average of a metric by rating
function averageMetric (data, rating, metric){
    let sum = 0;
    let count = 0; 
    for (let i = 0; i < data.length; i++) {
        currentFilm = data[i];
        if(currentFilm.rating == rating){
            sum += currentFilm[metric]
            count++
        }
    }
    avg = sum / count;
    console.log('Avg: ' +avg)
}

// Invoke the metric average function
// let metric = 'rental_rate'
// let metric = 'length'
let metric = 'replacement_cost'

averageMetric(films, 'G', metric)
averageMetric(films, 'PG', metric)
averageMetric(films, 'PG-13', metric)
averageMetric(films, 'R', metric)

// Create a function to plot the average metric by rating results


// Invoke the plot creating function
