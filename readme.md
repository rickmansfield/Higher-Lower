BE SURE your add blocker is turned OFF. Some browsers will not function properly if add blocker is on because this app uses a pop up prompt

Here are the highlights of the featrues demonstrated with this application. 

1. Prompt for Max Number
Instead of locking the game into a number between 1 and 20, use the prompt() method to ask the user what the maximum number should be. The prompt should be in a loop with validation as demonstrated previously in the course making sure that the inputted value is a positive number. If the user inputs a decimal, simply round it.

When a valid number is inputted, change the content of the instructions to specify guesses between 1 and N.

Criteria
The application prompts for a maximum number and uses it in the logic appropriately.
The application additionally validates the user input and does not allow invalid entries (negative numbers, 0, or non-numbers), re-prompting the user if an invalid entry is provided.

2. Validate the Guess
When the user presses the guess button, validate the input:

If the guess is not a number, display a message: "That is not a number!"
If the guess is out of range (1 to N), display a message: "That number is not in range, try again."
Criteria
The application prevents invalid entries (not a number, out of range).
The application provides appropriate error messages for each type of invalid entry.

3. Track the Guesses
Using an array, keep track of each guess by the user. When the user wins the game by guessing correctly, add the number of guesses and the list of guesses to the victory message. For example:

"You got it! It took you 5 tries and your guesses were 3, 14, 7, 9, 5"

Do not count invalid guesses (not numbers NaN or out of range).

The application correctly initializes an array and uses the push() function to add the guesses.
The application correctly formats the win message to include the comma-delimited guesses as part of the output.
The application uses the length property and does not use an extra variable to count the number of guesses.

4. Prevent Duplicate Guesses
Since you are tracking the guesses, add validation to check if a number has already been guessed. If it has, display a message and do not count it as a guess.

The application correctly checks the array for a guess first using any means (loop, find(), etc.).
The application correctly displays the validation message.