from game.card import Card


class Director:
    """A person who directs the game. 
    
    The responsibility of a Director is to see if the number guessed by the player is higher or lower than the previous card.

    Attributes:
        dice (List[Die]): A list of Die instances.
        is_playing (boolean): Whether or not the game is being played.
        score (int): The score for one round of play.
        total_score (int): The score for the entire game.
    """

    def __init__(self):
        """Constructs a new Director.
        
        Args:
            self (Director): an instance of Director.
        """
        self.card = Card()
        self.is_playing = True
        self.previous_card = 0
        self.next_card = 0
        self.higher_lower = ""
        self.total_score = 300

    def start_game(self):
        """Starts the game by running the main game loop.
        
        Args:
            self (Director): an instance of Director.
        """
        while self.is_playing:
            self.get_input()
            self.get_next()
            self.do_score()

    def get_input(self):
        """Draw the first card and asks if the next value will be higher or lower.

        Args:
            self (Director): An instance of Director.
        """
        self.previous_card = self.card.roll()
        print(f"The card is: {self.previous_card}")
        self.higher_lower = input("Higher or lower? [h/l] ")
       
    def get_next(self):
        """Draws another card.

        Args:
            self (Director): An instance of Director.
        """
        self.next_card = self.card.roll()
        while self.next_card == self.previous_card:
            self.next_card = self.card.roll()
        print(f"Next card was: {self.next_card}")

    def do_score(self):
        """Adds score. 

        Args:
            self (Director): An instance of Director.
        """
        if self.higher_lower == "h":
            if self.previous_card < self.next_card:
                points = -75
            else:
                points = 100
        elif self.higher_lower == "l":
            if self.previous_card > self.next_card:
                points = -75
            else:
                points = 100
        self.total_score += points
        if self.total_score > 0:
            play_again = input("Play again? [y/n] ")
            self.is_playing = (play_again == "y")
        else:
            self.is_playing = False
            print("Game Over")