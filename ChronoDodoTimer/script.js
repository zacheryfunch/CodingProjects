/*Plan: have multiple timers that follow each other in relation to what round they are in. 
++More features:
--Make the buttons interact with the display.
-Add a Timer End () : notification inwindow popup
--add a sound
--add a vibration.
-Figure out how to store the Rounds timer options. ?Maybe Array or list?
*/
/* Todo list: 
-Code the timer functionality:
x--Select the different elements.
x--Modify the timer display.    document.queryselector(#id)
x---Figure out how to change the timer text.             =>Reassign the value of the html element with document.querySelector(#id)
x---Figure out how to make the timer countdown seconds   =>setInterval(() => {},1000); //Executes a function every 1000 milliseconds (1sec)
x---Assign a variable to the amount of seconds (time) and insert it into the setInterval. 
x---Fix amount of zeros in timer display                 => .padStart(2, "0") adds "0" until 2 characters are present.
x---how to turn the integer into a string                => number.String()
--how to stop,reset,update timer from list?              => clearInterval() stops the timer but how does it work?
                    const myInterval = setInterval(myTimer, 1000); clearInterval(myInterval);

--Add a dropdown menu to select the timer to run.       => <select> element with options
                              
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
let reset = document.querySelector("#reset"); //not sure how this will work if the time keeps changing

let timerDisplay = document.querySelector("#timerDisplay");
let time = 125; // stored in seconds amount of seconds for the timer to run.
let timeValue = document.querySelector("#timeValue"); 
  
set.onclick= function setTimer(){
    time = 125; //update global variable
    let second = (time%60).toString().padStart(2, "0"); //display of seconds with 2 digits
    let minute = Math.floor(time / 60).toString().padStart(2, "0"); //minute display with 2 digits
    actionDisplay.textContent = "Round 1, Step 1 Timer started" + " time is :" + time;;
    timerDisplay.textContent=`${minute} m: ${second} s`;
    timeValue.textContent = time;
};
let intervalTimer

start.onclick= function startTimer(){
    intervalTimer = setInterval(() => {
        time--; //1 second less (1000 milliseconds)

        let second = (time%60).toString().padStart(2, "0"); 
        let minute = Math.floor(time / 60).toString().padStart(2, "0");
        timerDisplay.textContent=`${minute} m: ${second} s`;
        actionDisplay.textContent="Round 1, Step 1 Timer started" + " time is :" + time;
        timeValue.textContent = time;
    }, 1000);
}; 

/*debugging variables 
    console.log("Start button clicked");
    console.log("time is: " + time);
    console.log("seconds" + second);
    console.log(minute + " min" + second + " sec");
    console.log(`${minute} : ${second}`);
*/
stop.onclick= function stopTimer(){
clearInterval(intervalTimer);
};

/*function runs every sec; it updates the timerDisplay by one 
 !Possible problem displaying 00:1 instead of 00:01  --Todo later ->    .padStart(2, '0')
 Todo:
 -define second minute value
 -update timerDisplay.
 -define Timer end event

*/
const secondCounter = setInterval(() => {},1000);
