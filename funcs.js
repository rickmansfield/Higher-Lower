//Get range & validate
let rangeNum = get_range("Enter max play range 1-N as a number:");

function get_range(prompt){
    let valid_input = false;
    let range, input;
    let instructions_message = document.getElementById("instructions");
    
    while(!valid_input) {
        input = window.prompt(prompt);

        range = Math.round(Number(input));
        console.log(range);
       
       if (isNaN(range)) {
            alert("please enter a valid number");
        }
        else if ( range == 0 || range == null){
            alert("range can't be zero, null, or empty set. Enter valid numerical range");
        }
        else if ( range < 0) {
            alert("Lets keep things positive.")
        }
        else {
            valid_input = true;
            instructions_message.innerHTML = "Remember to guess between 1 and " + range;
            
        }
    }
    return range;
}


//On Load Generate Random Number 1-N
 //function generate_random() {
  
        let randnum = Math.floor(Math.random() * rangeNum) + 1;
        console.log(randnum); //uncomment to test
   // }



    
// collect user guess convert from string to number & validate
function validate_guess() {
    let guess = Number(document.getElementById("uguess").value);
   console.log(guess); //uncomment to test thus far


    // assign message paragraph a usable variable    
    let message = document.getElementById("results-messages");

    
    
    //validation and comparison screenings
    if(isNaN(guess)){
        alert("That's not a number! Use Numerical Values");
    } 
    else if(guess > rangeNum || guess < 1) {
        alert("That number is not in range, try again.");
    }
    else if(guess == randnum){
        message.innerHTML = "You got it!";
    } 
    else if(guess > randnum) {
        message.innerHTML = "No, try a lower number.";
    }
    else if ( guess < randnum) {
        message.innerHTML ="No, try a higher number.";
    }

}
// on load initialize new array
let guessed = [];

// collect input and push to array
function build_array(){
let guess = Number(document.getElementById("uguess").value);
guessed.push(guess);
console.log(guessed)
}



