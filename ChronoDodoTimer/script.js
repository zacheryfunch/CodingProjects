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
let actionDisplay=document.querySelector("#actionDisplay"); //2do optimise speed by getElementById selector
let start=document.querySelector("#start");
let stop=document.querySelector("#stop");
let timerDisplay=document.querySelector("#timerDisplay");
let secondAmount
let time= 125; // stored in seconds
  

start.onclick= function startTimer(){
    let second = (time%60).toString().padStart(2, "0"); 
    let minute = Math.floor(time / 60);
    console.log("Start button clicked");
    console.log("time is: " + time);
    console.log("seconds" + second);
    console.log(minute + " min" + second + " sec");
    console.log(`${minute} : ${second}`);
    actionDisplay.textContent="Round 1, Step 1 Timer started" + "time is :" + time;;
    timerDisplay.textContent=`${minute} m: ${second} s`;
};
stop.onclick= function stopTimer(){
    console.log("Stop button clicked");
        time++
    actionDisplay.textContent="Round 1, Step 1 Timer started" + "time is :" + time;
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
