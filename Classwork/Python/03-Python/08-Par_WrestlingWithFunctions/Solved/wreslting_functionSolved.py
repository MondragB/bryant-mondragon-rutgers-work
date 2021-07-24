import os
import csv

# Path to collect data from the Resources folder
wrestling_csv = os.path.join("..", "Resources", "WWE-Data-2016.csv")

# Define the function and have it accept the 'wrestler_data' as its sole parameter


def print_percentages(wreslter_data):
    name = str(wreslter_data[0])
    wins = float(wreslter_data[1])
    losses = float(wreslter_data[2])
    draws = float(wreslter_data[3])
    totalMatches = wins + losses + draws

    # Find the total number of matches wrestled
    totalMatches = wins + losses + draws
    # Find the percentage of matches won
    percentWon = (wins / totalMatches) * 100
    # Find the percentage of matches lost
    percentLost = (losses / totalMatches) * 100
    # Find the percentage of matches drawn
    percentDrawn = (draws / totalMatches) * 100
    # Type of the fighter
    if(percentLost < 50):
        fighterType = 'Superstar'
    else:
        fighterType = 'Jobber'
    # Print out the wrestler's name and their percentage stats
    print(f"{name} has a winning percentage of {percentWon}%, a losing percentage of {percentLost}%, and a drawn percentage of {percentDrawn}%.")
    print(f"{name} is a {fighterType}")


# Read in the CSV file
with open(wrestling_csv, 'r') as csvfile:

    # Split the data on commas
    csvreader = csv.reader(csvfile, delimiter=',')

    # Prompt the user for what wrestler they would like to search for
    name_to_check = input("What wrestler do you want to look for? ")

    # Loop through the data
    for row in csvreader:

        # If the wrestler's name in a row is equal to that which the user input, run the 'print_percentages()' function
        if(name_to_check == row[0]):
            print_percentages(row)
