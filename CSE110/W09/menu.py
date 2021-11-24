print()

items = []
item_name = ""
action = 0
help_message = "\nPlease select one of the following:\n1. Add item\n2. View cart\n3. Remove item\n4. Compute total\n5. Quit"

print("Welcome to the Shopping Cart Program!")

print(help_message)
while action != 5:
    count = 0
    action = int(input("\nPlease enter an action: "))

    if action == 1:
        item_name = input("What item would you like to add? ")
        #item_price
        items.append(item_name)
        print(f"'{item_name}' has been added to the cart.")
    
    elif action == 2:
        print("The contents of the shopping cart are:")
        for item_name in items:
            count +=1
            print(f"{count}. {item_name}")
    
    #elif action == 3:
        #remove
    
    #elif action == 4:
        #compute

    elif action == 5:
        surety = input("Are you sure you want to quit? ").lower()
        if surety == "y" or surety == "yes" or surety == 5:
            print("Thank you. Goodbye.")

    else:
        print(f"Sorry, that's invalid.{help_message}")

#print(items)

print()