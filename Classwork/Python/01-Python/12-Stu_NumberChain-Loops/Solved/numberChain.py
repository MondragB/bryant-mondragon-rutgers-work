numAmount = int(input("How many numbers do you want to chain? "))
originalAmount = numAmount
counter = 0
user_choice = 'y'

while (user_choice == 'y'):
    while (numAmount > 0):
        print(counter)
        counter += 1
        numAmount -= 1
    user_choice = input("Would you like to continue? (y)es or (n)o? ")
    if(user_choice == 'y'):
        numAmount = originalAmount
    else:
        break
