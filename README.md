# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Sally Lei**

Time spent: **6** hours spent in total

Link to project: [https://glitch.com/~lightsoundmemorygame](https://glitch.com/~lightsoundmemorygame)

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
- [https://javascript.info/settimeout-setinterval](https://javascript.info/settimeout-setinterval)
- [https://www.w3schools.com/jsref/met_win_clearinterval.asp](https://www.w3schools.com/jsref/met_win_clearinterval.asp)
- [https://www.w3schools.com/jsref/met_win_setinterval.asp](https://www.w3schools.com/jsref/met_win_setinterval.asp)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)   
A challenge I encountered when creating this submission was when I was working on adding the “ticking clock” as a feature to my project. Although I had an overall idea of how the setInterval function worked as given in the Prework tutorial, I wasn’t sure how I can implement it and what function should be the first parameter of the setInterval function. At first, I was going to put the entire playClueSequence function as the first parameter but I realized that was not going to work since that would mean the playClueSequence would only play the sequence of buttons being clicked for the amount of time I set. Figuring this is not what I was trying to do, I decided to take a closer look at the setInterval function in the given site and I gained a clearer understanding of what the setInterval was. The second parameter would be how long the function passed into the first parameter ran for. Thus, I figured I can write a function for the first parameter that changes the timer text to reflect the amount of seconds left. This text would be updated every one second as the function will run again after the time passed as the second parameter (which is one second) is up. After implementing this, my timer worked fine the first time I clicked start but the timer was not working when it had to reset. I realized this was because I had to use the clearInterval function. I called the clearInterval function when the timer reached 0. However, I found that this issue still persisted. I analyzed this error and realized it’s because there are times when the timer never gets to reach 0. I figured out the possible scenarios when the timer never reaches 0 which is when the game stops and when the winner moves onto the next sequence. After narrowing it down to these scenarios, I called the clearInterval function in the stopGame function and right before calling the next pattern when the user successfully clicks through the buttons.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)   
After completing this submission, I learned a lot about web development but I also have more questions about web development. One question I have is how do we efficiently test our web application extensively? When I was testing out my submission to make sure that everything was working as it should, it was a manual process that was time-consuming. I had to manually play with the web application after every change. I lowered the variable values to fasten the process, but I was wondering if there is a more efficient way to test the site. Another question I have is how do I store a log of user input? In the question below, I mentioned wanting to add a scoreboard to the site. How would I store the history of the scores of the user. If I want to make it so that users can compete with other users, how would I differentiate between and save all the separate data from different users?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)   
If I had more time for this project, I’d work on adding more features. One feature I think would be good to add is a scoreboard. The scoreboard would allow the user to keep track of their personal top scores as well as the top scores of all players of the site. For example, the scoreboard can have a “Personal Best” tab that displays the top ten scores of the player and another tab labeled “Global Best” with the top 10 scores of all players along with the players’ usernames. I think such a feature would make the website engaging in that it would motivate users to revisit the site to try to beat their personal best or other players’ scores. Another feature might be adding levels so that when the user wins a round, they can move onto the next level with more tiles. I would also like to brush up on the design so that it looks more appealing to players.



## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
