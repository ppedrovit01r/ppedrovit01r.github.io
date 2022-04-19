"""
Tic-Tac-Toe
Author: Pedro Vitor
"""

# main function
def main():
    player = next_player("")
    board = create_board()
    print("LET'S PLAY TIC-TAC-TOE!")
    while not (win(board) or draw(board)):
        print_board(board)
        make_move(player, board)
        player = next_player(player)
    print_board(board)
    if win(board):
        print(f"PLAYER '{next_player(player)}' WON!")
    elif draw(board):
        print("Yeah... It's a draw...")
    print("Good game. Thanks for playing!") 

# function that creates an array from 1 to 9 and returns it
def create_board():
    board = []
    for square in range(9):
        board.append(square +1)
    return board

# function to print the board every round
def print_board(board):
    print()
    print(f" {board[0]} | {board[1]} | {board[2]}")
    print("---+---+---")
    print(f" {board[3]} | {board[4]} | {board[5]}")
    print("---+---+---")
    print(f" {board[6]} | {board[7]} | {board[8]}")
    print()

# asks te user for their movement
def make_move(player, board):
    while True:
        square = int(input(f"{player}'s turn to choose a square (1-9): "))
        if (square < 1 or square > 9):
            print("Invalid command. Try again.")
        else:
            break
    board[square - 1] = player

# switches between symbols
def next_player(current):
    if current == "" or current == "O":
        return "X"
    elif current == "X":
        return "O"

# function to return "True" when someone wins
def win(board):
    return (board[0] == board[1] == board[2] or
            board[3] == board[4] == board[5] or
            board[6] == board[7] == board[8] or
            board[0] == board[3] == board[6] or
            board[1] == board[4] == board[7] or
            board[2] == board[5] == board[8] or
            board[0] == board[4] == board[8] or
            board[2] == board[4] == board[6])

# function to return "True" when there are no more numbers in the board
def draw(board):
    for square in range(9):
        if board[square] != "X" and board[square] != "O":
            return False
    return True 

print()
# boilerplate code
if __name__ == "__main__":
    main()
print()

"""
Some things I still would like to do:
- Add different colors
- Prevent a user to replace the other's symbol
"""