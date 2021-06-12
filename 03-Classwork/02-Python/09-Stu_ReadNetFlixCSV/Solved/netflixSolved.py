import os
import csv

csvpath = os.path.join('..', 'Resources', 'netflix_ratings.csv')

with open(csvpath) as csvfile:

    found = False
    csvreader = csv.reader(csvfile, delimiter=',')

    user_input = input("What video are you looking for? ")

    for row in csvreader:
        if (user_input in row[0]):
            found = True
            print(f"{row[0]} is rated {row[1]} with a rating of {row[6]}.")
            break

    if(found == False):
        print("Video was not found.")
