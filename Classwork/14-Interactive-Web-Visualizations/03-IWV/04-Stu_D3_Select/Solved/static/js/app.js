// The new student and grade to add to the table
var newGrade = ["Wash", 79];

// Use D3 to select the table
let tableSelector = d3.select('table');

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
tableSelector.attr('class', 'grades table table-striped');

// Use D3 to select the table body
let tableBodySelector = d3.select('tbody');

// Append one table row `tr` to the table body
let newTr = tableBodySelector.append('tr');

// Append one cell for the student name
newTr.append('td').text(newGrade[0])

// Append one cell for the student grade
newTr.append('td').text(newGrade[1])
