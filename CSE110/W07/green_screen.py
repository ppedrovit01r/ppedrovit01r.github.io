# This line imports or includes the library we will need
from PIL import Image

print()

# This line prompts the user for which image they want to use:
invalid_background = True
background_name = ""
while invalid_background:
    background_name = input("Choose a location: BEACH, DESERT, EARTH, FIELD, FOREST, SNOWSCAPE, or SUNSET: ").lower()
    if background_name == "beach" or background_name == "desert" or background_name == "earth" or background_name == "field" or background_name == "forest" or background_name == "snowscape" or background_name == "sunset":
        invalid_background = False
    else:
        print("Invalid input. Please try again.")

invalid_added = True
added_name = ""
while invalid_added:
    added_name = input("Choose a object or animal: BOAT, CACTUS, CAT, HARVESTER, HIKER, KITTY, PENGUIN, or SPACESHUTTLE: ").lower()
    if added_name == "boat" or added_name == "cactus" or added_name == "cat" or added_name == "harvester" or added_name == "hiker" or added_name == "kitty" or added_name == "penguin" or added_name == "spaceshuttle":
        invalid_added = False
    else:
        print("Invalid input. Please try again.")

# This line opens the image and loads it into a variable
if added_name == "kitty":
    added_name = "cat_small"

image_background = Image.open(background_name + ".jpg")
image_added = Image.open(added_name + ".jpg")

# This line attempts to open a new window to display the image. FOR TESTING PURPOSES.
# image_background.show()
# image_added.show()

# This line gets the pixels information of the image and stores them
pixels_background = image_background.load()
pixels_added = image_added.load()

# Create a new image in RGB format that is the same size as image_original
image_new = Image.new("RGB", image_background.size)
pixels_new = image_new.load()

# This line gets the size of the images
width, height = image_new.size

x = 0
y = 0
for x in range(1, width):
    for y in range(1, height):
        # Access the RGB values of the desired coordinates (x,y) of the image
        r_background, g_background, b_background = pixels_background[x, y]
        r_added, g_added, b_added = pixels_added[x, y]

        # Ckeck if the green value is GREATER than 195 and that the red and blue values are LESS than 87 and 62 respectively
        if (g_added > 180) and (r_added < 95 and b_added < 70):
            pixels_new[x, y] = (r_background, g_background, b_background)
        else:
            pixels_new[x, y] = (r_added, g_added, b_added)

# This line attempts to open a new window to display the image. 
print("\nLet's see the result...\n")
image_new.show()

# Ending message
ending_message = "\nThank you for using our program!\n"

# Asks the user if they want to save the file
invalid_save = True
while invalid_save:
    save = input("Would you like to save the image? (Yes/No) ").lower()
    if save == "no" or save == "n":
        invalid_save = False
        second_attempt = input("Are you sure? ").lower()
        if second_attempt == "yes" or second_attempt == "y":
            print(ending_message)
    elif save == "yes" or save == "y":
        invalid_save = False
        # This line saves an image
        image_new.save(added_name + "_in_" + background_name + ".jpg")
        print(f"Successfully saved as {added_name}_in_{background_name}.jpg")
        print(ending_message)



