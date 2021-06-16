import os
import csv

csvpath = os.path.join('..', 'Resources', 'netflix_ratings.csv')

with open(csvpath) as csvfile:

    found = False
    csvreader = csv.reader(csvfile, delimiter=',')

    user_input = input("What video are you looking for? ")

    for row in csvreader:
        if (row[7] >= 5):
            print(f"{row[0]} has {row[7]} grams of fiber.")
            break
