$(document).ready(function () {

    //------------------------------------
    //GLOBAL VARIABLES
    //------------------------------------
    var time = 2;
    var questions = {

        question1: {
            question: 'Angie is the new spokesperson for which council?',
            answers: ['A. Night Cheese ', 'B. Ham ', 'C. Throwing Wine ', 'D. Cheek (It\'s pronounced \'chic\'. It\'s French!)'],
            correctAnswer: 'B. Ham',
            image: 'assets/images/ham.gif'
        },

        question2: {
            question: 'What southern city does Kenneth the Page call home?',
            answers: ['A. Chattanooga, TN ', 'B. Rocky Face, GA ', 'C. Stone Mountain, GA ', 'D. Deep Step, GA'],
            correctAnswer: 'C. Stone Mountain, GA',
            image: "assets/images/kenneth.gif"
        },

        question3: {
            question: 'What is Jack\'s middle name?',
            answers: ['A. Ellen ', 'B. Joseph ', 'C. David ', 'D. Francis'],
            correctAnswer: 'D. Francis',
            image: "assets/images/jack.webp"
        },

        question4: {
            question: 'Floyd moved to which Ohio City?',
            answers: ['A. Cleveland ', 'B. Toledo ', 'C. Cincinnati ', 'D. Dayton'],
            correctAnswer: 'A. Cleveland',
            image: "assets/images/clevland.gif"
        },

        question5: {
            question: 'Which actor has NOT guest starred as Liz\'s boyfriend on 30 Rock?',
            answers: ['A. Jon Hamm ', 'B. Jason Sudikis ', 'C. Dean Winters ', 'D. Ben Affleck '],
            correctAnswer: 'D. Ben Affleck',
            image: "assets/images/boyfriends.jpg"
        },

        question6: {
            question: 'What time does Jack change into a tuxedo?',
            answers: ['A. 5 PM', 'B. 6 PM', 'C. Noon', 'D. Midnight'],
            correctAnswer: 'B. 6 PM',
            image: "assets/images/tuxedo.gif"
        }

    };

    var intervalId;

    //------------------------------------
    //FUNCTIONS
    //------------------------------------


    //Function to play the game
    var playGame = function () {

        $('.btn').on('click', function () {

            //Testing/debugging
            console.log(questions.question1.question);
            console.log(questions.question1.answers);
            console.log(questions.question1.correctAnswer);
            console.log(questions.question1.image);

            //When button is clicked, remove the button
            $('button').remove();

            //Run quiz function
            quiz();
        });

    }


    //Function to ask questions
    var quiz = function () {

        //Posting question to div
        $("#question").html(questions.question1.question);

        //Posting answers to div
        $("#answerA").html(questions.question1.answers[0]);
        $("#answerB").html(questions.question1.answers[1]);
        $("#answerC").html(questions.question1.answers[2]);
        $("#answerD").html(questions.question1.answers[3]);

        intervalId = setInterval(timeCountdown, 1000);
    }

    //Function to count down time and clear the interval
    var timeCountdown = function () {

        if () {

            //Reduces time in the time counter 
            time--;

            //Update HTML to show time left
            $("#timer").html('Time Remaining: ' + time + ' seconds');

            //Test
            console.log(time);
        }

        //Clears and stops time
        else (time === 0) {
            clearInterval(intervalId);

            //Test
            console.log(true);

            //Update HTML to show time is up!
            $("#timer").html('Time is up!!');

            //Clear question and answers
            $("#question").empty();
            $("#answerA").empty();
            $("#answerB").empty();
            $("#answerC").empty();
            $("#answerD").empty();

            //Update HTML to show answer and image!
            $("#answer").html('The answer is: ' + questions.question1.correctAnswer);
            var imageUpdate = $('<img id="imageUpdate">');
            imageUpdate.attr('src', questions.question1.image);
            imageUpdate.appendTo('#image');
        }

    }

    //------------------------------------
    //MAIN PROCESS
    //------------------------------------

    playGame();


});