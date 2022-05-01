print()
#variables:
dataset_list = [] # an index for each line from the file
lowest_value = 999
highest_value = 0
lowest_current_value = 999
highest_current_value = 0
year = 1
min_year = 2022
max_year = 1
year_avg = 0
i = 0

# Load the dataset into the program
with open("life-expectancy.csv") as dataset_file:
    
    # Iterate through the data line by line
    for line in dataset_file:
        line = line.strip()
        parts = line.split(",")
        # Save each line into an array for easy access
        dataset_list.append(parts)

    # Delete the headline
    dataset_list.pop(0)
    
    for i in range(len(dataset_list)):
        # Gathering information to create a range of time to work with:
        # Find the lowest value for year
        if int(dataset_list[i][2]) < min_year:
            min_year = int(dataset_list[i][2])

        # Find the highest value for year
        if int(dataset_list[i][2]) > max_year:
            max_year = int(dataset_list[i][2])

    for i in range(len(dataset_list)):
        """
        For each 'dataset_list[i]':
        [0] = Country Name
        [1] = Country Code
        [2] = Year
        [3] = Life Expectancy (years)
        """
        # Find the lowest value for life expectancy
        if float(dataset_list[i][3]) < lowest_value:
            lowest_value = float(dataset_list[i][3])
            lowest_index = i

        # Find the highest value for life expectancy
        if float(dataset_list[i][3]) > highest_value:
            highest_value = float(dataset_list[i][3])
            highest_index = i

        # Find the highest and lowest values from the highest year available
        if int(dataset_list[i][2]) == max_year and float(dataset_list[i][3]) < lowest_current_value:
            lowest_current_value = float(dataset_list[i][3])
            lowest_current_index = i

        if int(dataset_list[i][2]) == max_year and float(dataset_list[i][3]) > highest_current_value:
            highest_current_value = float(dataset_list[i][3])
            highest_current_index = i


    print("Hello user!")
    print(f"According to a dataset from OurWorldInData.org, we were able to find more than 19,000 lines of data cointaining the life expectancy for different countries in different years (from {min_year} to {max_year}).")
    print("Here's an example of what we can find with this information: ")

    # Printing using the index number
    print()
    print(f"The overall max life expectancy is: {dataset_list[highest_index][3]} from {dataset_list[highest_index][0]} in {dataset_list[highest_index][2]}")
    print(f"The overall min life expectancy is: {dataset_list[lowest_index][3]} from {dataset_list[lowest_index][0]} in {dataset_list[lowest_index][2]}")
    print(f"The countries with the highest and lowest current life expectancy are, respectively, {dataset_list[highest_current_index][0]} with {dataset_list[highest_current_index][3]} and {dataset_list[lowest_current_index][0]} with {dataset_list[lowest_current_index][3]}")
    print()

    print("Interesting, right?")
    print("You can also look for information based on a year:")

    while year != 0:
        print()
        year = int(input("Enter the year of interest: "))
        if year >= min_year and year <= max_year:
            # Resets the variables
            count = 0
            total = 0
            lowest_value = 999
            highest_value = 0
            for i in range(len(dataset_list)):
                if int(dataset_list[i][2]) == year:
                    # Gather information to display the average:
                    count += 1
                    total += float(dataset_list[i][3])

                    # Find the lowest value for life expectancy:
                    if float(dataset_list[i][3]) < lowest_value:
                        lowest_value = float(dataset_list[i][3])
                        lowest_index = i

                    # Find the highest value for life expectancy:
                    if float(dataset_list[i][3]) > highest_value:
                        highest_value = float(dataset_list[i][3])
                        highest_index = i

            if count == 0:
                print(f"Sorry, our database has values from {min_year} to {max_year}, but unfortunately we have no data for {year}.\nPlease, try again.")
            else: 
                # Find the average:
                year_avg = total / count

                # Display using the index number:
                print()
                print(f"For the year {year}:")
                print(f"The average life expectancy across all countries was {year_avg:.2f}")
                print(f"The max life expectancy was in {dataset_list[highest_index][0]} with {dataset_list[highest_index][3]}")
                print(f"The min life expectancy was in {dataset_list[lowest_index][0]} with {dataset_list[lowest_index][3]}")
                print()

                #Ask the user if they want to try again
                invalid = True
                while invalid:
                    try_again = input("Would you like to try another year? ")
                    if try_again.lower() == "no" or try_again.lower() == "n":
                        year = 0
                        invalid = False
                    elif try_again.lower() == "yes" or try_again.lower() == "y":
                        invalid = False
                    else:
                        print(f"Sorry, '{try_again}' is invalid. Type 'yes' or 'no' instead.")

                
        else:
            print(f"Sorry, our database has values from {min_year} to {max_year}\nPlease, try again!")

# The dataset is closed here
print()