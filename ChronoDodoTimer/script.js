/*Plan: have multiple timers that follow each other in relation to what round they are in. 

Todo list: 
-Code the timer functionality:
--Select the different elements.
--Modify the timer display.
---Figure out how to change the timer text.             =>Reassign the value of the html element with document.querySelector(#id)
---Figure out how to make the timer countdown seconds   =>setInterval(() => {},1000); //Executes a function every 1000 milliseconds (1sec)
----Assign a variable to the amount of seconds and insert it into the setInterval. 
// Execute a function every 1 second
const intervalId = setInterval(() => {
    console.log('Interval executed every 1 second');
}, 1000);

--Make the buttons interact with the display.
-Add a Timer End () : notification inwindow popup
--add with a sound
--add vibration.
-Figure out how to store the Rounds timer options. ?Maybe Array or list?
-
*/
/*    list of used ids (Dom Respected positions)
     timer(all of the timer elements),
        timerDisplay(00:00:00),
        buttons(div of the 3 buttons), 
            start, stop, reset,
        display(div of the words and menus), 
            actionDisplay(text Wait 1 min says what to do),
            currentRound(Round 1 Step 1 2do update it),
            programSelect(drop down menu to select which timer to run)*/

//
let actionDisplay=document.querySelector("#actionDisplay");
let start=document.querySelector("#start");
let timerDisplay=document.querySelector("#timerDisplay");
let secondAmount
let second = 1; // =time%60
let minute = 10; //=time/60
start.onclick= function startTimer(){
    console.log("Start button clicked");
        console.log(second);        console.log(minute + second);
    console.log(`${minute} : ${second}`);
    actionDisplay.textContent="Round 1, Step1 Timer started";
    timerDisplay.textContent=`${minute} m: ${second} s`;
};

/*function runs every sec; it updates the timerDisplay by one 
 !Possible problem displaying 00:1 instead of 00:01  --Todo later ->    .padStart(2, '0')
 Todo:
 -define second minute value
 -update timerDisplay.
 -define Timer end event

*/
const secondCounter = setInterval(() => {},1000);
