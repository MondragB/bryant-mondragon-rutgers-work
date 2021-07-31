import os
import csv

cereal_csv = os.path.join("..", "Resources", "cereal_bonus.csv")

with open(cereal_csv) as cerealcsv:

    cerealreader = csv.reader(cerealcsv, delimiter=',')
    next(cerealreader, None)
    for row in cerealreader:
        if (float(row[7]) >= 5):
            print(f"{row[0]} has {row[7]} grams of fiber.")
            # print(row)
