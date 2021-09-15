students <- c("Abraham", "Beatrice", "Cory", "Dinah", "Eric", "Felicia")


attendance <- function(classroom) {
  for (student in classroom) {
    print(student)
  }
}

#attendance(students)

locker_combinations <- function(classroom) {
  for (student in classroom) {
    print(student)
    combination <- sample(33,3)
    print(combination)
  }
}

#locker_combinations(students)

emergency <- function (classroom) {
  for (student in classroom) {
    second_letter <- substr(student,2,2)
    
    if (second_letter == 'e') {
      print(student)
      combination <- sample(33,3)
      print(combination)
    }
  }
}

emergency(students)

 
