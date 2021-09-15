library(tidyverse)

students_csv <- read.csv('C:\\Users\\bryan\\Documents\\bryant-mondragon-rutgers-work\\Classwork\\16-R\\01-R\\06_Stu_Tibble\\Resources\\students.csv')

schools_list <- distinct(students_csv, school_name)
print(schools_list)

total_schools <- count(schools_list)
print(total_schools)

total_students <- nrow(students_csv)
print(total_students)

avg_Reading <- mean(students_csv$reading_score)
print(avg_Reading)

avg_Math <- mean(students_csv$math_score)
print(avg_Math)

