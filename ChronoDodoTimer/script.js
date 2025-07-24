
/* Product Plan: / Todo list: 
Chronododo Timer
v0.1 Get started, Basic UI
 x- Select the different elements.
 x- Modify the timer display.                            => document.queryselector(#id)

 v0.2 Functionality: Timer works countdown, time set in global scope.
 x- Make the buttons interact with the display.
 x- Figure out how to change the timer text.             => Reassign the value of the html element with document.querySelector(#id)
 x- Figure out how to make the timer countdown seconds   => setInterval(() => {},1000); //Executes a function every 1000 milliseconds (1sec)
 x- Assign a variable to the amount of seconds (time)
 x- Insert time variable it into the setInterval. 
 x! Fix amount of zeros in timer display                 => .padStart(2, "0") adds "0" until 2 characters are present.
 x- How to turn the integer into a string                => number.String()
 x! How to stop,reset,update timer from list?            => clearInterval() stops the timer but how does it work?
                    const myInterval = setInterval(myTimer, 1000); clearInterval(myInterval);

*/
/* v0.3 store the routine, so timers can follow eachother.
 - Store values in an array to display text and time values for each step in the round.
 ! Possible problem with how i'm dividing values in the array. find ref website!
 - Add a button to select the previous/next step timer.
 ! Figure out how to store the Rounds timer options. ?Maybe Array or list?
*/ 
/* v0.4 Chronododo full routine 
 - Array for Day1-7+ step 1-12 ?
 - Add a Timer End () : notification inwindow popup
 -- Add with a sound
 -- Add vibration.

v0.8 Compatability test
 ! Does it work on android, iphone?

v0.9 Cosmetic update
 - Pretty buttons, images, transitions, placements UI/UX, animations
 - Add a dropdown menu to select the timer to run.       => <select> element with options
 - Make it pretty with CSS
 - Add color, borders, interaction.

 v1.0 Release product.
- Add affiliate link to buy the amazon book
- Give credit to the author, email and website
*/
/*    Info: list of used ids (Dom Respected positions)
     timer(all of the timer elements),
        timerDisplay(00:00:00),
        buttons(div of the 3 buttons), 
            set, start, stop, reset,
        display(div of the words and menus), 
            actionDisplay(text Wait 1 min says what to do),
            currentRound(Round 1 Step 1 2do update it),
            programSelect(drop down menu to select which timer to run)*/

let actionDisplay = document.querySelector("#actionDisplay"); //2do optimise speed by getElementById selector
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let timerDisplay = document.querySelector("#timerDisplay");
let time = 125; // stored in seconds amount of seconds for the timer to run.

//Array of Routine rounds times :
/*const routineList = [
  { "wait 1 min, then 10 sec visit", 60 },
  { "wait 2 min, then 10 sec visit", 120 },
  { "wait 3 min, then 10 sec visit", 180 },
  { "2 min Hug", 120 }
]; // {actionDisplay, time value} 
*/
set.onclick= function setTimer(){
    let second = (time%60).toString().padStart(2, "0"); //display of seconds with 2 digits
    let minute = Math.floor(time / 60).toString().padStart(2, "0"); //minute display with 2 digits
    actionDisplay.textContent="Round 1, Step 1 Timer started" + " time is :" + time;;
    timerDisplay.textContent=`${minute} m: ${second} s`;
};
let intervalTimer

start.onclick= function startTimer(){
    intervalTimer = setInterval(() => {
        time--; //1 second less (1000 milliseconds)

        let second = (time%60).toString().padStart(2, "0"); 
        let minute = Math.floor(time / 60).toString().padStart(2, "0");
        timerDisplay.textContent=`${minute} m: ${second} s`;
        actionDisplay.textContent="Round 1, Step 1 Timer started" + "time is :" + time;
    }, 1000);
}; 

stop.onclick= function stopTimer(){
clearInterval(intervalTimer);
};
