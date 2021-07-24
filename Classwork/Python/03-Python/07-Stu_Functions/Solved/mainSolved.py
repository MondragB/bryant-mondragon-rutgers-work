# @TODO: Write a function that returns the arithmetic average for a list of numbers
def average(list):
    total = 0
    for num in list:
        total += num
        average = total/len(list)
    return average


# Test your function with the following:
print(average([1, 5, 9]))
print(average(range(11)))
