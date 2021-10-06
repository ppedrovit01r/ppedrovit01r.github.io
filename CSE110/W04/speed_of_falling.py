import math
print()
print("Welcome to the velocity calculator. Please enter the following: \n")

m = float(input("Mass (in kg): "))
g = float(input("Gravity (in m/s^2, 9.8 for Earth, 24 for Jupiter): "))
t = float(input("Time (in seconds): "))
p = float(input("Density of the fluid (in kg/m^3, 1.3 for air, 1000 for water): "))
A = float(input("Cross sectional area (in m^2): "))
C = float(input("Drag constant (0.5 for sphere, 1.1 for cylinder): "))

c = (1/2)*p*A*C
print(f"\nThe inner value of c is: {c:.3f}")
velocity = math.sqrt(m * g / c) * (1 - math.exp((- math.sqrt(m * g * c) / m) * t))
print(f"The velocity after {t:.1f} seconds is: {velocity:.3f} m/s")
terminal_velocity = math.sqrt(m*g/c)
print(f"The terminal velocity is: {terminal_velocity:.3f} m/s\n")