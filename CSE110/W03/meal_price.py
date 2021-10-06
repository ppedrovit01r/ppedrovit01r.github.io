print()
child_meal_price = float(input("What is the price of a child's meal? $"))
adult_meal_price = float(input("What is the price of an adult's meal? $"))
children = int(input("How many children are there? "))
adults = int(input("How many adults are there? "))
# Would you like to include drinks for $0.99 with each meal?
# include toy
tax_rate = float(input("What is the sales tax rate? "))

price = child_meal_price * children + adult_meal_price * adults
print(f"\nSubtotal: ${str(price)}\n")
# Sales Tax
# Total

# Would you like to pay our services a 10% tip? 
# Payment
# Change