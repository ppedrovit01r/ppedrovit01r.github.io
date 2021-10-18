"""

The Adventure Game has 11 options of endings (being 6 of them GOOD)
There's at least one GOOD ending for each level 3 question (the trick question is not considered a different level, as both answers end up on the same place)

"""

print()
print("Welcome to the Adveture Game! Your goal will be to cross the woods into the Bad Witch's house and save your little brother.")

# ---------- Configurations ----------
error_message = "Sorry, that's not an option. Let's try again: " # Variable to be displayed when the user inputs a wrong value
i = 0 # used for while function first level counting
j = 0 # used for while function second level counting
k = 0 # used for while function third level counting

while i == 0: # will repeat the code until the user types one of the available answers
    option_one = input("In order to save your little brother, you follow the Witch's traces into the woods. It's too dark to see and you only have your father's non-reliable flashlight with you. Will you go back home to get your PHONE or will you use the FLASHLIGHT? Write your answer: ")
    if option_one.upper() == "PHONE": 
        i = 1 # will prevent the code to ask the question again, since the input was one of the options
        
        option_trick = input("You run back to your house in order to get your phone. You lost some time, but you are sure it's going to be worth it. Let's face the witch: will you go LEFT or RIGHT? ")
        while j == 0:
            if option_trick.upper() == "FRONT" or option_trick.upper() == "STRAIGHT":
                option_two = input("Oh, nice answer... Someone's attentive! You know the only way to get to the Witch's hut is going straight! But should you RUN or stay SILENT? ")

            else:
                option_two = input("That was a tricky question... You know the only way to get to the Witch's hut is going straight! But should you RUN or stay SILENT? ")

            if option_two.upper() == "RUN":
                j = 1 # just like before, it will prevent the code to ask the question again, since the input was one of the options

                while k == 0: 
                    option_three = input("You decide not to waste any more time! You end up running and screaming through the forest until you find the house of the Witch. She's in front of the door, just wating for you - as you announced your arrival with all that shouting! She offers you a deal: If you win ROCK, PAPER, SCISSORS, you get your brother back, so what will it be? ")
                    print(f"You chose {option_three.upper()}, she chose PAPER... ")
                    if option_three.upper() == "ROCK":
                        print("IN WHICH WORLD WOULD A PIECE OF PAPER WIN FROM A CHUNK OF BRUTE ROCK!? To prove your point, you throw a rock at her while the Witch holds a piece of paper in front of her face... She pass out with the hit, and you take advantage of it to run back to safety with your brother. ") #Ending 1.1.1 - GOOD
                        k = 1 # could be replaced by a "break", but I chose "k = 1" instead for cohesiveness

                    elif option_three.upper() == "PAPER":
                        print("She had warned you that a draw would mean you lost. As a person of word, crestfallen, you leave your brother forever, knowing you did everything you could... Yeah... That's it... Sad story....") #Ending 1.1.2 - BAD
                        k = 1

                    elif option_three.upper() == "SCISSORS":
                        print("You win! The witch is forced to hand your brother back to you. That's it... No violence, everything can be resolved with a good match of ROCK, PAPER, SCISSORS.") #Ending 1.1.2 - GOOD
                        k = 1

                    else:
                        print(error_message) # a line will warn the user that the input is invalid before asking the question again
                    
            elif option_two.upper() == "SILENT":
                j = 1
                count = 0 

                while count < 5: # this will prevent the loop to happen more than 5 times.
                    option_three = input("Even though you try to cross the forest silently, every step hits the dead leaves on the ground like they were put there just to delate you. When you get to the hut, the Witch is waiting for you outside: She wants something from you in exchange for your brother... What will you give her? ")
                    if option_three.upper() == "PHONE" or option_three.upper() == "CELLPHONE":
                        print("The Witch is fascinated by your bright crystal that's capable of showing her everything! She's mostly excited about these 'series' you told her about. She accepts your exchange and you and your brother leave there as fast as you can - before she discovers about having to charge the phone...") #Ending 1.2.1 - GOOD
                        k = 1

                    elif option_three.upper() == "MONEY":
                        bribe_money = float(input("But how much money are we talking about? $"))
                        if bribe_money >= 25:
                            print("Nice try, but you don't have this much money with you... Try something else!")
                            count+=1 # this answer will take you back to the previous question
                            k = 1

                        elif bribe_money <= 5:
                            print("You show her a bunch of coins you have in your pocket. She's delighted on how shiny they are, accepting your offer. Later on, you mock your brother on how much he's worth, but everything is fine.") #Ending 1.2.2 - GOOD
                            count = 6 # this answer will end the loop
                            k = 1

                        else:
                            print("She was just kidding... She doesn't want your money, try something else!") 
                            count+1
                            k = 1

                    else:
                        print(f"No, she doesn't want a {option_three}... Let's try it again...")
                        count+=1

                if count == 5: # if the loop goes on for more than 5 times, a BAD ending will occur
                    print("The Witch doesn't want to exchange anymore. She shuts the door, leaving you alone and desperate, without your brother...") #Ending 1.2.3 - BAD
                    k = 1

            else:
                print(error_message)

    elif option_one.upper() == "FLASHLIGHT": 
        i = 1

        while j == 0:
            option_two = input("At first, you think the lantern will hold until you get to the Witch's house, but your big mouth spoils everything: the battery runs out a couple yards from where you believe her hut is and you're alone in the darkness. Should you FOLLOW your gut into the woods or go BACK? ")
            if option_two.upper() == "FOLLOW":
                j = 1

                while k == 0: 
                    option_three = input("Sometimes it's hard to understand exactly what the gut is telling us: Is it telling you to go 90-degrees to the LEFT, RIGHT, or to keep going STRAIGHT? ")
                    if option_three.upper() == "STRAIGHT":
                        print("What can I say? Someone did not pay much attention to Elder Utchdorf's talk last Conference. You believe you're going straight, but at dawn you discover you've been walking in circles the whole night... You weren't a hero this time... ") #Ending 2.1.1 - BAD
                        k = 1

                    elif option_three.upper() == "LEFT":
                        print("After a few minutes, you find the Witch's hut. You're so confident in yourself, that you break into her house and demand your brother's freedom. She's so astonished with your bravery that she stays paralyzed as you untie the cords from the child and just leave... After that day, you became a new person: someone who always follows their feelings. ") #Ending 2.1.2 - GOOD
                        k = 1

                    elif option_three.upper() == "RIGHT":
                        print("Well, you may not have found the Witch's hut, but you had an interesting evening: You almost felt from a cliff, got chased by wild animals, and ended up right where you started a few times before giving up... Now you know right is not always the right way...") #Ending 2.1.3 - BAD
                        k = 1

                    else:
                        print(error_message)
                    
            elif option_two.upper() == "BACK":
                j = 1

                while k == 0:
                    option_three = input("You start to notice it wasn't the best idea to go back: even though you can't see anything, you're pretty sure you've been wandering in circles for the past few minutes. As if the situation wasn't bad enough, you hear an animal approaching: Should you start to SCREAM while you run for your life, hoping that your brother will reach back or should you RUN to the opposite direction from the beast and hope it would take you somewhere? ")
                    if option_three.upper() == "SCREAM":
                        print("Surprisingly, all that screaming worked: the wild animal gave up on you and you ended up exactly in front of the Witch's hut. She had fleed as well, afraid of your screaming, so you took your brother, a torch, and you were both home that night, with an incredible story to tell.") #Ending 2.2.1 - GOOD
                        k = 1

                    elif option_three.upper() == "RUN":
                        print("You run for your life and succeed from escaping the animal! Unfortunately, somewhere in the way, you trip over a root of a tree, falling at your face and completely lose your memory. In the morning, when you wake up, you don't know who you are nor why you're in the middle of a forest. It's not the best ending, but at least you won't feel guilty from letting the witch escape... ") #Ending 2.2.2 - BAD
                        k = 1

                    else:
                        print(error_message)

            else:
                print(error_message)

    else:
        print(error_message)

print("THE END")
print()