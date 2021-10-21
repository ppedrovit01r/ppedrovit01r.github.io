print()
# ask the user for the age and height of the first person
first_age = int(input("What is the age of the first rider? "))
first_height = float(input("What is the height of the first rider? "))
second_rider = input("Is there a second rider (yes/no)? ")
if second_rider.lower() == "yes":
    second_age = int(input("What is the age of the second rider? "))
    second_height = float(input("What is the height of the second rider? "))
    
can_ride = False # declaring a variable
if first_height >= 36 and (second_rider.lower() == "no" or second_height >= 36):
    golden_pass = input("Do they have a golden pass (yes/no)? ")
    if second_rider.lower() == "no" and (first_age >= 18 or golden_pass.lower() == "yes") and first_height >= 62:
        can_ride = True
    elif second_rider.lower() == "yes":
        if (second_age >= 18 or golden_pass.lower() == "yes") and second_height >= 62:
            can_ride = True
        elif (first_age >= 14 and second_age >= 16) or (first_age >= 16 and second_age >= 14):
            can_ride = True
        elif first_height >= 52 and second_height >= 52 and first_age >= 12 and second_age >= 12:
            can_ride = True
else: 
    can_ride = False

if can_ride:
    print("Congratulations! You can ride!\n")
else:
    print("Sorry, you cannot ride. Bring a tall friend next time!\n")