print()
grade = float(input("What is your grade percentage? "))

# Converting grade percentage into letter grade
if grade < 60:
    letter = "F"
elif grade < 70:
    letter = "D"
elif grade < 80:
    letter = "C"
elif grade < 90:
    letter = "B"
else:
    letter = "A"

# Adding "+" or "-" signs when needed
if (grade % 10) >= 7:
    signal = "+"
elif (grade % 10) < 3:
    signal = "-"
else:
    # Blank signal for non-"+" or "-" grade
    signal = ""

# Recognizing there's no such thing as "A+"
if grade >= 97:
    signal = ""

# Recognizing there's only "F" 
if letter == "F":
    signal = ""

# Displaying the grade letter
print(f"Your letter grade is: {letter}{signal}")

# Displaying pass or fail and being polite
if grade >= 70:
    print("Congratulations! You passed!")
else:
    print("You didn't pass yet. Keep trying! You will get there!\n")

