import os
import csv

bankData = os.path.join("Resources", "budget_data.csv")\

with open(bankData, 'r') as csvfile:

    csvreader = csv.reader(csvfile, delimiter=',')
    next(csvreader, None)

    firstRowValues = next(csvreader, None)

    totalMonths = 1
    totalMoney = float(firstRowValues[1])
    firstRow = firstRowValues[1]
    rollingChange = 0
    lastChange = 0
    biggestIncrease = float(firstRowValues[1])
    biggestDecrease = 0
    biggestIncreaseMonth = firstRowValues[0]
    biggestDecreaseMonth = ''

    for row in csvreader:
        totalMonths += 1
        totalMoney += float(row[1])
        rollingChange += int(row[1]) - int(firstRow)
        lastChange = int(row[1]) - int(firstRow)
        firstRow = row[1]

        if float(row[1]) > biggestIncrease:
            biggestIncrease = lastChange
            biggestIncreaseMonth = row[0]

        if float(row[1]) < biggestDecrease:
            biggestDecrease = lastChange
            biggestDecreaseMonth = row[0]

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
