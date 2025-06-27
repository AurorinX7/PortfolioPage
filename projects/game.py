import random

def get_user_choice():
    choice = input("Enter rock, paper, or scissors: ").lower()
    while choice not in ['rock', 'paper', 'scissors']:
        choice = input("Invalid choice. Please enter rock, paper, or scissors: ").lower()
    return choice

def get_computer_choice():
    return random.choice(['rock', 'paper', 'scissors'])

def determine_winner(user, computer):
    if user == computer:
        return "tie"
    elif (user == 'rock' and computer == 'scissors') or \
         (user == 'paper' and computer == 'rock') or \
         (user == 'scissors' and computer == 'paper'):
        return "user"
    else:
        return "computer"

def play():
    user_score = 0
    computer_score = 0
    winning_score = 3

    print("Welcome to Rock, Paper, Scissors!")
    print(f"First to {winning_score} wins the game!\n")

    while user_score < winning_score and computer_score < winning_score:
        user_choice = get_user_choice()
        computer_choice = get_computer_choice()

        print(f"\nYou chose: {user_choice}")
        print(f"Computer chose: {computer_choice}")

        winner = determine_winner(user_choice, computer_choice)

        if winner == "user":
            user_score += 1
            print("You win this round!")
        elif winner == "computer":
            computer_score += 1
            print("Computer wins this round!")
        else:
            print("This round is a tie!")

        print(f"Score => You: {user_score} | Computer: {computer_score}\n")

    if user_score > computer_score:
        print("🎉 Congratulations! You won the game!")
    else:
        print("💻 The computer wins the game. Better luck next time!")

if __name__ == "__main__":
    play()
