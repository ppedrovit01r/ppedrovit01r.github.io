print()
print("Enter a list of numbers, type 0 when finished.")

nums = []
num = 1
while num != 0:
    num = int(input("Enter number: "))
    if num != 0:
        nums.append(num)

#print(nums)

#Compute the sum, or total, of the numbers in the list

total = 0

for num in nums:
    total += num

print(f"The sum is: {total}")

#Compute the average of the numbers in the list

average = total / len(nums)

print(f"The average is: {average}")

#Find the maximum, or largest, number in the list

largest_num = -1

for num in nums:
    if num > largest_num:
        largest_num = num

print(f"The largest number is: {largest_num}")

#Find the smallest positive number

smallest_num = largest_num

for num in nums:
    if num > 0 and num < smallest_num:
        smallest_num = num

print(f"The smallest positive number is: {smallest_num}")

#Sort the numbers in the list and display the new, sorted list

sorted_nums = sorted(nums)
#print(sorted_nums)

for num in sorted_nums:
    print(num)

print()
