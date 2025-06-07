/*Plan: have multiple timers that follow each other in relation to what round they are in. 

Todo list: 
-Code the timer functionality:
--Select the different elements.
--Modify the timer display.
---Figure out how to change the timer text.
---Figure out how to make the timer countdown seconds
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
start.onclick= function startTimer(){
    console.log("Start button clicked");
    actionDisplay.textContent="Timer started";
    timerDisplay.textContent="00:00:10";
};
