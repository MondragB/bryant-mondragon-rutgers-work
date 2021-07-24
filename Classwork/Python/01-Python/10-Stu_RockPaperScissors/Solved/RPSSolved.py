# Incorporate the random library
import random

# Print Title
print("Let's Play Rock Paper Scissors!")

# Specify the three options
options = ["r", "p", "s"]

# Computer Selection
computer_choice = random.choice(options)

# User Selection
user_choice = input("Make your Choice: (r)ock, (p)aper, (s)cissors? ")

# Run Conditionals
if (user_choice == computer_choice):
    print("Draw")
elif (user_choice == 'r') and (computer_choice == 'p'):
    print("We lose")
elif (user_choice == 'r') and (computer_choice == 's'):
    print("We Win")
elif (user_choice == 'p') and (computer_choice == 'r'):
    print("We Win")
elif (user_choice == 'p') and (computer_choice == 's'):
    print("We Lose")
elif (user_choice == 's') and (computer_choice == 'r'):
    print("We Lose")
elif (user_choice == 's') and (computer_choice == 'p'):
    print("We Win")
else:
    print("Please choose a correct choice")
