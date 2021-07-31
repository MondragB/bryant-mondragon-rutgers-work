# The list of candies to print to the screen
candy_list = ["Snickers", "Kit Kat", "Sour Patch Kids", "Juicy Fruit",
              "Swedish Fish", "Skittles", "Hershey Bar", "Starbursts", "M&Ms"]

# The amount of candy the user will be allowed to choose
allowance = 5

# The list used to store all of the candies selected inside of
candy_cart = []

# Print out options
for candy in range(len(candy_list)):
    print("[" + str(candy) + "] " + candy_list[candy])

while allowance > 0:
    user_choice = input(
        "Please pick a candy using the index number of the candy ('[x]') ")
    candy_cart.append(candy_list[int(user_choice)])
    allowance = allowance - 1

for cart in candy_cart:
    print(candy_cart[cart])
