names = []
for _ in range(5):
    name = input("Please enter the name of someone you know. ")
    names.append(name)

# @TODO: Use a list comprehension to create a list of lowercased names
lowercased = [name.lower() for name in names]

# @TODO: Use a list comprehension to create a list of capitalize names
# https://www.programiz.com/python-programming/methods/string/capitalize
caps = [name.upper() for name in names]

invitations = [
    f"Dear {name}, please come to the wedding this Saturday!" for name in caps]

for invitation in invitations:
    print(invitation)

    # BONUS
# Create a thank you note to be addressed to all guests using
# f-string and print the statement using `title()` function.
# The thank you note should be: "Dear guest name, thanks for coming and celebrating with us!"

titledInvitations = [
    f'Dear {name}, thanks for coming and celebrating with us!' for name in names]

for invitation in titledInvitations:
    print(invitation.title())
