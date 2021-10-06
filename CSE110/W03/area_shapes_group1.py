import math
print()
side_square = float(input("What is the length of a side of the square in centimeters? "))
area_square_centimeter = side_square ** 2
print("The area of the square is: " + str(area_square_centimeter) + " cm^2\n")
area_square = area_square_centimeter/10000
print("The area of the square is: " + str(area_square) + " m^2\n")

length_rectangle = float(input("What is the length of the rectangle in centimeters? "))
width_rectangle = float(input("What is the width of the rectangle in centimeters? "))
area_rectangle_centimeter = length_rectangle * width_rectangle
print("The area of the rectangle is: " + str(area_rectangle_centimeter) + "cm^2\n")
area_rectangle = area_rectangle_centimeter/10000
print("The area of the rectangle is: " + str(area_rectangle) + "m^2\n")

radius_circle = float(input("What is the radius of the circle in centimeters? "))
area_circle_centimeter = math.pi * radius_circle ** 2
print("The area of the circle is: " + str(area_circle_centimeter) + "cm^2\n")
area_circle = area_circle_centimeter/10000
print("The area of the circle is: " + str(area_circle) + "m^2\n")

single_length = float(input("Now, let me show you something fun:\nWrite a single length value: "))
# the area of the square
single_length_square = single_length ** 2
print("The area of a square with that length of side: " + str(single_length_square) + "\n")
# the area of the circle
single_length_circle = math.pi * single_length ** 2
print("The area of a circle with that length of radius: " + str(single_length_circle) + "\n")
# the volume of the cube
single_length_cube = single_length_square * single_length
print("The volume of a cube with that length of side: " + str(single_length_cube) + "\n")
# the volume of the sphere
single_length_sphere = single_length_circle * single_length * 4 / 3
print("The volume of a sphere with that length of radius: " + str(single_length_sphere) + "\n")