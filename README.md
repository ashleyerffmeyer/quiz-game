# 30 Rock Quiz Game

A jQuery powered, 30 Rock themed quiz game complete with timers!

[Link to game!](https://erffmea.github.io/quiz-game/) 

## Authors
Ashley Erffmeyer, with major support from KU's Coding Boot Camp staff members:
* Ryan LaRue (Instructor)
* Jenny Dean (TA)
* Jacqueline Kolze (TA)
* Eli Vargas (TA)

## Languages/Libraries Used
* JavaScript
* jQuery
* CSS
* HTML

## Prerequisites & Installations
None

Note: Added the following script lines in index.html to allow for bootstrap and jQuery functionality

```html
<!--Enabling bootstrap functionality-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

<!-- Importing the jQuery library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!--Importing my game logic JavaScript-->
<script type="text/javascript" src="assets/javascript/game.js"></script>

<!--Importing Bootstrap JavaScript-->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```

## Design Notes

None

## Game Overview

### Instructions

* The 30 Rock Trivia Game! is a game that shows only one question until the player answers it or their time runs out.

* If the player selects the correct answer, a screen will congratulate them for choosing the right option. After a few seconds, the game will display the next question without user input.

* The scenario is similar for wrong answers and time-outs:

  * If the player runs out of time, they are told time is up and the correct answer will display. After a few seconds, the next question will pop up on screen.
  * If the player chooses the wrong answer, they are told they selected the wrong option and the correct answer is displayed. After a few seconds, the next question will pop up on screen.

* The final screen will show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
