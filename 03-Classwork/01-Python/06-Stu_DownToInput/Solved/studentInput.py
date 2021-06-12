myFirstName = input("What is your first name? ")

neighborsFirstname = input("What is your neighbors first name? ")

myExperience = int(input("How many months have you been coding for? "))

neighborsExperience = int(input(
    "How many months has your neighbor been coding for? "))

print(f"My first name is {myFirstName} and I have been coding for {myExperience} months. I live next to {neighborsFirstname} who has been coding for {neighborsExperience} months. For a total of {myExperience+neighborsExperience} months.")
