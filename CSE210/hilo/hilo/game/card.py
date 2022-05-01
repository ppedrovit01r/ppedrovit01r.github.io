import random


class Card:
    """Individual cards are represented as a number from 1 to 13.

    The responsibility of Die is to give random card values.
   
    Attributes:
        value (int): The number of the card.
    """

    def __init__(self):
        """Constructs a new instance of Card.

        Args:
            self (Card): An instance of Card.
        """
        self.value = 0

    def roll(self):
        """Generates a new random value for Card.
        
        Args:
            self (Card): An instance of Card.
        """
        self.value = random.randint(1, 13)