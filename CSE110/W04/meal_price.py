print()
child_meal_price = float(input("What is the price of a child's meal? $"))
adult_meal_price = float(input("What is the price of an adult's meal? $"))
children = int(input("How many children are there? "))
adults = int(input("How many adults are there? "))
drinks = int(input("How many drinks would you like to include for $0.49? "))
toy_price = 0
if children > 0:
    toy = input("Would you like to add toys to each child meal for $0.99? ")
    if toy.lower() == "y" or toy.lower() == "yes":
        toy_price = .99 * children
        if children > 1:
            print(f"\t{str(children)} toys were added.")
        else:
            print(f"\t1 toy was added.")
    else:
        print(f"No toys were added.")
tax_rate = float(input("What is the sales tax rate? (in %) "))

price = child_meal_price * children + adult_meal_price * adults + .49 * drinks + toy_price
print(f"\nSubtotal: ${price:.2f}\n")
tip_prompt = input("Would you like to pay a 15% tip for our services? ")
if tip_prompt.lower() == "y" or tip_prompt.lower() == "yes":
    tip = price * .15
    print(f"\tThank you! Your ${tip:.2f} tip was added to the price.\n")
else:
    tip = 0
    print(f"\tNo tip will be added to the price.\n")
print(f"Subtotal: ${price:.2f}")
tax = price * (tax_rate/100)
print(f"Sales Tax: ${tax:.2f}")
print(f"Tip: ${tip:.2f}")
price += (tax + tip)
print(f"Total: ${price:.2f}\n")

payment = float(input("What is the payment amount? $"))
change = payment - price
while change < 0:
    print(f"\tInvalid Payment. Try Again.\n")
    payment = float(input("What is the payment amount? $"))
    change = payment - price
else:
    print(f"Change: ${change:.2f}")

print("\n\tThank you for your purchase!\n")