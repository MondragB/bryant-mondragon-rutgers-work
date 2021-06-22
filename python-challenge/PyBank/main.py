import os
import csv

# path to data file
bankData = os.path.join("Resources", "budget_data.csv")

with open(bankData, 'r') as csvfile:

    # read the csv file and skip the header
    csvreader = csv.reader(csvfile, delimiter=',')
    next(csvreader, None)

    # My solution involved taking the first row of values to use as base for some of the logic
    firstRowValues = next(csvreader, None)

    # initialize some variables to use
    totalMonths = 1

    # I have to start the total at the first row since when I enter the loop it will not be counted
    totalMoney = float(firstRowValues[1])
    previousRow = firstRowValues[1]
    rollingChange = 0
    lastChange = 0
    biggestIncrease = float(firstRowValues[1])
    biggestDecrease = 0
    biggestIncreaseMonth = firstRowValues[0]
    biggestDecreaseMonth = ''

    for row in csvreader:
        # This is the total months, just count rows
        totalMonths += 1
        # This is the total, just keep adding the value to total
        totalMoney += float(row[1])
        # This essentially keeps the total change from two rows, i.e. secondRow - firstRow. We need this to find the average change
        rollingChange += int(row[1]) - int(previousRow)
        # lastChange is used to store the value of the variable above but this is used to find the biggest increase/decrease. Otherwise only
        # the months actual value would have been used. I'm sure there is a cleaner way to do this, but it doesn't seem to add much inefficiency
        lastChange = int(row[1]) - int(previousRow)
        # here I set the previousRow to the one we just went over in order to have that record and to loop properly
        previousRow = row[1]

        # simple logic to find the biggest increase/decrease and store those values into variables for easy calling in the print statements
        if float(row[1]) > biggestIncrease:
            biggestIncrease = lastChange
            biggestIncreaseMonth = row[0]

        if float(row[1]) < biggestDecrease:
            biggestDecrease = lastChange
            biggestDecreaseMonth = row[0]

    # calculates the average change
    averageChange = rollingChange / (totalMonths - 1)

    print("Financial Analysis")
    print("----------------------------")
    print(f"Total Months: {totalMonths}")
    print(f"Total: ${totalMoney:.0f}")
    print(f"Average Change: ${averageChange:.2f}")
    print(
        f"Greatest Increase in Profits: {biggestIncreaseMonth} (${biggestIncrease})")
    print(
        f"Greatest Decrease in Profits: {biggestDecreaseMonth} (${biggestDecrease})")

    output_path = 'results.txt'

    with open(output_path, 'w', newline='') as csvfile:

        csvwriter = csv.writer(csvfile, delimiter=',')

        csvwriter.writerow(["Financial Analysis"])
        csvwriter.writerow(["----------------------------"])
        csvwriter.writerow([f"Total Months: {totalMonths}"])
        csvwriter.writerow([f"Total: ${totalMoney:.0f}"])
        csvwriter.writerow([f"Average Change: ${averageChange:.2f}"])
        csvwriter.writerow(
            [f"Greatest Increase in Profits: {biggestIncreaseMonth} (${biggestIncrease})"])
        csvwriter.writerow(
            [f"Greatest Decrease in Profits: {biggestDecreaseMonth} (${biggestDecrease})"])
