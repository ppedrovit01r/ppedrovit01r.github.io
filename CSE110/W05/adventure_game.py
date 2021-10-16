print()
print("Welcome to the Adveture Game! Your goal will be to cross the woods into the Bad Witch's castle and save your little brother.")
error_message = "Sorry, that's not an option. Let's try again: " # Variable to be displayed when the user inputs a wrong value
while True:
    option_one = input("In order to save your little brother, you follow the Witch's traces into the woods. It's too dark to see and you only have your father's non-reliable flashlight with you. Will you go back home to get your PHONE or will you use the FLASHLIGHT? Write your answer: ")
    if option_one.upper() == "PHONE": # The user chose PHONE
        while True:
            option_two = input("You pick up the match and strike it, and for an instant, the forest around you is illuminated. You see a large grizzly bear, and then the match burns out. Do you want to RUN, or HIDE behind a tree? ")
            if option_two.upper() == "RUN":
                while True: 
                    option_three = input("Text if you chose RUN? Choose between EGGS and GARLIC. ")
                    if option_three.upper() == "EGGS":
                        print("Text if you chose EGGS") #Ending 1.1.1
                        break
                    elif option_three.upper() == "GARLIC":
                        print("Text if you chose GARLIC") #Ending 1.1.2
                        break
                    else:
                        print(error_message)
                    break
            elif option_two.upper() == "HIDE":
                while True:
                    option_three = input("Text if you chose RUN? Choose between ROCK and PAPER. ")
                    if option_three.upper() == "ROCK":
                        print("Text if you chose ROCK") #Ending 1.2.1
                        break
                    elif option_three.upper() == "PAPER":
                        print("Text if you chose PAPER") #Ending 1.2.2
                        break
                    else:
                        print(error_message)
                    break
        break
    elif option_one.upper() == "FLASHLIGHT": #The user chose FLASHLIGHT
        while True:
            option_two = input("At first, you think the lantern will hold until you get to the Witch's house, but your big mouth spoils everything: the battery runs out a couple yards from where you believe her hut is and you're alone in the darkness. Should you FOLLOW your gut into the woods or go BACK? ")
            if option_two.upper() == "FOLLOW":
                while True: 
                    option_three = input("Text if you chose RUN? Choose between EGGS and GARLIC. ")
                    if option_three.upper() == "EGGS":
                        print("Text if you chose EGGS") #Ending 2.1.1
                        break
                    elif option_three.upper() == "GARLIC":
                        print("Text if you chose GARLIC") #Ending 2.1.2
                        break
                    else:
                        print(error_message)
                    break
            elif option_two.upper() == "BACK":
                while True:
                    option_three = input("You start to notice it wasn't the best idea to go back: even though you can't see anything, you're pretty sure you've been wandering in circles for the past few minutes. As if the situation wasn't bad enough, you hear an animal approaching: Should you start to SCREAM while you run for your life, hoping that your brother will reach back or should you RUN to the opposite direction from the beast and hope it would take you somewhere? ")
                    if option_three.upper() == "SCREAM":
                        print("Surprisingly, all that screaming worked: the wild animal gave up on you and you ended up exactly in front of the Witch's hut. She had fleed as well, afraid of your screaming, so you took your brother, a torch, and you were both home that night, with an incredible story to tell.") #Ending 2.2.1
                        break
                    elif option_three.upper() == "RUN":
                        print("You run for your life and succeed from escaping the animal! Unfortunately, somewhere in the way, you trip over a root of a tree, falling at your face and completely lose your memory. In the morning, when you wake up, you don't know who you are nor why you're in the middle of a forest. It's not the best ending, but at least you won't feel guilty from letting the witch escape... ") #Ending 2.2.2
                        break
                    else:
                        print(error_message)
                    break
            break
    else:
        print(error_message)
    break
print()