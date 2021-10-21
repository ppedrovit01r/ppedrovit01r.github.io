# This line imports or includes the library we will need
from PIL import Image

# This line opens the image and loads it into a variable called "image_original"
image_original = Image.open("beach.jpg")

# This line attempts to open a new window to display the image.
image_original.show()

# This line gets the size of the image
width, height = image_original.size

# This line gets the pixels information of the image and stores them
pixels_original = image_original.load()

# This line accesses the RGB values of the coordinates (x,y) of the image
x = 100
y = 200
r, g, b = pixels_original[x, y]
print(pixels_original[x,y])

# This line sets new RGB values for the pixel selected to purple (255, 0, 255)
pixels_original[x, y] = (255, 0, 0)
print(pixels_original[x, y])

# This line saves an image
image_original.save("the_file_goes_here.jpg")