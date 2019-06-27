$(document).ready(function () {

    //------------------------------------
    //GLOBAL VARIABLES
    //------------------------------------
    var time = 30;
    var questions = {

        question1: {
            question: 'Angie is the new spokesperson for which council?',
            answers: ['A. Night Cheese', 'B. Ham', 'C. Throwing wine', 'D. Cheek (It\'s pronounced \'chic\'. It\'s French.)'],
            correctAnswer: 'B. Ham',
            image: "assets/images/ham.gif"
        },

        question2: {
            question: 'What southern city does Kenneth the Page call home?',
            answers: ['A. Chattanooga, TN', 'B. Rocky Face, GA', 'C. Stone Mountain, GA', 'D. Deep Step, GA'],
            correctAnswer: 'C. Stone Mountain, GA',
            image: "assets/images/kenneth.gif"
        },

        question3: {
            question: 'What is Jack\'s middle name?',
            answers: ['A. Ellen', 'B. Joseph', 'C. David', 'D. Francis'],
            correctAnswer: 'D. Francis',
            image: "assets/images/jack.webp"
        },

        question4: {
            question: 'Floyd moved to which Ohio City?',
            answers: ['A. Cleveland', 'B. Toledo', 'C. Cincinnati', 'D. Dayton'],
            correctAnswer: 'A. Cleveland',
            image: "assets/images/clevland.gif"
        },

        question5: {
            question: 'Which actor has NOT guest starred as Liz\'s boyfriend on 30 Rock?',
            answers: ['A. Jon Hamm', 'B. Jason Sudikis', 'C. Dean Winters', 'D. Ben Affleck'],
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

    //Function to initialize/start the game



    //Function to play the game
    var playGame = function () {

        $('.btn').on('click', function () {

            console.log(questions.question1.question);
            console.log(questions.question1.answers);
            console.log(questions.question1.correctAnswer);
            //When button with class '.startBtn' is clicked, remove all buttons with the class '.btn'
            $('button').remove();


            //Run quiz function
            //quiz();
        });

    }

    playGame();

    //Function to ask questions
    var quiz = function () {

        intervalId = setInterval(timecount, 30000);
    }

    //Function to count down time and clear the interval
    var timeCountdown = function () {

        //Reduces time in the time counter 
        time--;

        //Test
        console.log(time);

        //Clears and stops time
        if (time === 0) {
            clearInterval(intervalId);

            //Test
            console.log(true);
        }
    }

    //------------------------------------
    //MAIN PROCESS
    //------------------------------------



});