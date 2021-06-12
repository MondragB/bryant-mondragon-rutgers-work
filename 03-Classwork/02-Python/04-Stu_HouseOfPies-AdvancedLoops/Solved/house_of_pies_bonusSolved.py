pieList = ['(1) Pecan', '(2) Apple Crisp', '(3) Bean', '(4) Banoffee', '(5) Black Bun',
           '(6) Blueberry', '(7) Buko', '(8) Burek', '(9) Tamale', '(10) Steak']


print("Welcome to the House of Pies! Here are our pies: ")
print("---------------------------------------------------------")
print('(1) Pecan', '(2) Apple Crisp', '(3) Bean', '(4) Banoffee', '(5) Black Bun',
      '(6) Blueberry', '(7) Buko', '(8) Burek', '(9) Tamale', '(10) Steak')

wantMore = 'y'
shoppingList = []

while wantMore == 'y':
    pieType = int(input(
        "Which type of pie would you like to order? Please select the matching number: "))

    print(
        f"Great! We'll have that {pieList[pieType-1]} pie right out for you.")
    shoppingList.append(pieList[pieType-1])

    wantMore = input("Would you like to order another pie? (y)es or (n)o? ")
    if wantMore == 'n':
        print("Here is the list of pies ordered")
        for item in shoppingList:
            print(item)
