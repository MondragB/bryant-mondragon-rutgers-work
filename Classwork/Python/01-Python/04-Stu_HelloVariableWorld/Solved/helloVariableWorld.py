name = 'Bryant Mondragon'
country = 'United States of America'

age = 28
hourly_wage = 50

print(f"I am {age} years old.")

satisfied = True

daily_wage = hourly_wage * 8

# We need to cast integers to string to allow the print function to work properly.

print("My name is " + name + ", I'm from " + country + ". I am " +
      str(age) + " years old and I want to make " + str(hourly_wage) + " dollars per hour.")

# These statements print out the same way, it seems like f or the percent do the same thing. f-string were added in the latest version is probably what I shoud start using.

print("My daily wage is %s. I am satisfied? %s." % (daily_wage, satisfied))

print(f"My daily wage is {daily_wage}. I am satisfied? {satisfied}.")
