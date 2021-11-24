# Variables
items = []
item_name = ""
prices = []
item_price = ""
action = 0
total = 0
help_message = "\nPlease select one of the following:\n1. Add item\n2. View cart\n3. Remove item\n4. Compute total\n5. Quit"

print()
print("Welcome to the Shopping Cart Program!")
print(help_message)
while action != 5:
    count = 0
    action = int(input("\nPlease enter an action: "))

    if action == 1:
        # Add
        item_name = input("What item would you like to add? ")
        item_price = float(input(f"What is the price of '{item_name}'? $"))
        # Confirmation
        confirm = input(f"Add '{item_name}' for ${item_price:.2f}? ").lower()
        if confirm == "y" or confirm == "yes": 
            # Appending the values to the lists
            items.append(item_name)
            prices.append(item_price)
            print(f"'{item_name}' has been added to the cart.")
        else:
            print(f"'{item_name}' was NOT added to the cart.")
    
    elif action == 2:
        # View cart
        print("The contents of the shopping cart are:")
        # Resets the index
        i = 0
        for i in range(len(items)): # len(items) == len(prices)
            j = i +1
            print(f"{j}. {items[i]} - ${prices[i]:.2f}")
    
    elif action == 3:
        # Remove
        remove = int(input("Which item would you like to remove? "))
        if remove <= 0 or remove > len(items):
            print("Sorry, that is not a valid item number.")
        else:
            i = remove -1
            # Confirmation
            confirm = input(f"Remove '{items[i]}'? ").lower()
            if confirm == "y" or confirm == "yes": 
                items.pop(i)
                prices.pop(i)
                print("Item removed.")
            else:
                print("No changes were made.")
    
    elif action == 4:
        # Compute
        # Resets the index
        i = 0
        # Resets the total
        total = 0
        for i in range(len(prices)): # len(items) == len(prices)
            total += prices[i]
        print(f"The total price of the items in the shopping cart is ${total:.2f}")
        # Confirmation
        confirm = input(f"Would you like to finish the purchase? ").lower()
        if confirm == "y" or confirm == "yes":
            payment = float(input("What is the payment amount? $"))
            change = payment - total
            while change < 0:
                print(f"\tInvalid Payment. Try Again.\n")
                payment = float(input("What is the payment amount? $"))
                change = payment - total
            else:
                print(f"Change: ${change:.2f}")

            print("\n\tThank you for your purchase!\n")
            #Finishes the program
            action = 5
        else:
            print("Okay. Going back to the menu.")

    elif action == 5:
        confirm = input("Are you sure you want to quit? ").lower()
        if confirm == "y" or confirm == "yes" or confirm == 5:
            print("Thank you. Goodbye.")
        else:
            action = 0

    else:
        print(f"Sorry, that's invalid.{help_message}")

    # Reset the confirm variable
    confirm = ""

#print(items)

print()