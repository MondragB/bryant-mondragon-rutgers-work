import os
import csv

# path to data file
electionData = os.path.join("Resources", "election_data.csv")

with open(electionData, 'r') as csvfile:

    # read the csv file and skip the header
    csvreader = csv.reader(csvfile, delimiter=',')
    next(csvreader, None)

    # initialize some variables to use
    totalVotes = 0
    candidates = []
    candidateTotals = []
    winner = 0

    for row in csvreader:
        # This is the total votes, just count rows
        totalVotes += 1

        # Initially I had a simple loop that iterated through the whole csv file and counted
        # the votes depending on who was in row[2] but that seemed too specific for this dataset,
        # now this should work for similiarly styled datasets

        # We save each candidate into an array
        candidate = row[2]
        # if the candidate is in the array then based on their index we increase the total vote
        # count for said candidate
        if candidate in candidates:
            candidateIndex = candidates.index(candidate)
            candidateTotals[candidateIndex] = candidateTotals[candidateIndex] + 1
        # if it is a new candidate then we add them to the list and give them a vote
        else:
            candidates.append(candidate)
            candidateTotals.append(1)

    # this loops calculates the winner by going through the list of candidates and compares
    # their total to the next and saves that index as the winner which we can use to save
    # the winner in a variable
    for candidate in range(len(candidates)):
        if(candidateTotals[candidate] > winner):
            winner = candidateTotals[candidate]
            winnerIndex = candidate

    electionWinner = candidates[winnerIndex]

    print("Election Results")
    print("----------------------------")
    print(f"Total Votes: {totalVotes}")
    print("----------------------------")
    for candidate in range(len(candidates)):
        print(
            f'{candidates[candidate]} : {(candidateTotals[candidate]/totalVotes)*100:.03f}% ({candidateTotals[candidate]})')
    print("----------------------------")
    print(f"Winner: {electionWinner}")
    print("----------------------------")

    output_path = 'results.txt'

    with open(output_path, 'w', newline='') as csvfile:

        csvwriter = csv.writer(csvfile, delimiter=',')

        csvwriter.writerow(["Election Results"])
        csvwriter.writerow(["----------------------------"])
        csvwriter.writerow([f"Total Votes: {totalVotes}"])
        csvwriter.writerow(["----------------------------"])
        for candidate in range(len(candidates)):
            csvwriter.writerow([
                f'{candidates[candidate]} : {(candidateTotals[candidate]/totalVotes)*100:.03f}% ({candidateTotals[candidate]})'])
        csvwriter.writerow(["----------------------------"])
        csvwriter.writerow([f"Winner: {electionWinner}"])
        csvwriter.writerow(["----------------------------"])
