$(document).ready(function () {

    //click on button with id start to remove button
    $('#start').on('click', function () {
        $('#start').remove();
        game.loadQuestion();
    })

    //click on an answer to run clicked function
    $(document).on('click', '.answer-button', function (e) {
        game.clicked(e);
    })

    //click on button with reset id to reset game
    $(document).on('click', '#reset', function () {
        game.reset();
    })

    //defines questions variable as an object containing question, answers, correct answers, and image properties
    var questions = [
        {
            question: 'Angie is the new spokesperson for which council?',
            answers: ['A. Night Cheese', 'B. Ham', 'C. Throwing Wine', 'D. Cheek (It\'s pronounced \'chic\'. It\'s French!)'],
            correctAnswer: 'B. Ham',
            image: 'assets/images/ham.gif'
        },

        {
            question: 'What southern city does Kenneth the Page call home?',
            answers: ['A. Chattanooga, TN', 'B. Rocky Face, GA', 'C. Stone Mountain, GA', 'D. Deep Step, GA'],
            correctAnswer: 'C. Stone Mountain, GA',
            image: 'assets/images/kenneth.gif'
        },

        {
            question: 'What is Jack\'s middle name?',
            answers: ['A. Ellen', 'B. Joseph', 'C. David', 'D. Francis'],
            correctAnswer: 'D. Francis',
            image: 'assets/images/jack.webp'
        },

        {
            question: 'Floyd moved to which Ohio city?',
            answers: ['A. Cleveland', 'B. Toledo', 'C. Cincinnati', 'D. Dayton'],
            correctAnswer: 'A. Cleveland',
            image: 'assets/images/cleveland.gif'
        },

        {
            question: 'Which actor has NOT guest starred as Liz\'s boyfriend on 30 Rock?',
            answers: ['A. Jon Hamm', 'B. Jason Sudikis', 'C. Dean Winters', 'D. Ben Affleck'],
            correctAnswer: 'D. Ben Affleck',
            image: 'assets/images/boyfriends.jpg'
        },

        {
            question: 'What time does Jack change into a tuxedo?',
            answers: ['A. 5 PM', 'B. 6 PM', 'C. Noon', 'D. Midnight'],
            correctAnswer: 'B. 6 PM',
            image: 'assets/images/tuxedo.gif'
        }

    ];

    //Game variable that is an option with various properties such as current question, counter, and multiple functions
    var game = {
        questions: questions,
        currentQuestion: 0,
        counter: 30,
        correct: 0,
        incorrect: 0,
        unanswered: 0,

        //function to count down game counter
        countdown: function () {

            //count down game counter
            game.counter--;

            //print count down on html 
            $('#counter').html(game.counter);

            //if game counter is less than or equal to 0, run the timeUp function
            if (game.counter <= 0) {

                //test
                console.log("Time is up!");

                //run the timeUp function
                game.timeUp();
            }
        },

        //function to load each quiz question
        loadQuestion: function () {

            //set interval of timer with timer variable
            timer = setInterval(game.countdown, 1000);

            //print timer to html
            $('#subwrapper').html('<h2>TIME REMAINING: <span id="counter">30</span> Seconds</h2>');

            //print quiz question in subwrapper div
            $('#subwrapper').append('<h2>' + questions[game.currentQuestion].question + '</h2>');

            //for each answer to the question, print answer choices in subwrapper div
            for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
                $('#subwrapper').append('<button class="answer-button btn btn-primary" id="button-' + i + '" data-name= "' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
            }
        },

        //function called to load next quiz question
        nextQuestion: function () {

            //resets counter back to 30 seconds
            game.counter = 30;

            //print count down on html 
            $('#counter').html(game.counter);

            //calls next question
            game.currentQuestion++;

            //function called to load each quiz function
            game.loadQuestion();
        },

        timeUp: function () {

            //clear timer
            clearInterval(timer);

            //increase the unanswered questions count
            game.unanswered++;

            //update HTML to tell user time is up
            $('#subwrapper').html('<h2>TIME IS UP!</h2>');

            //update HTML to tell user the correct answer
            $('#subwrapper').append('<h3>The correct answer is: ' + questions[game.currentQuestion].correctAnswer + '</h3>');

            //update HTML to show image
            var imageUpdate = $('<img id="imageUpdate">');
            imageUpdate.attr('src', questions[game.currentQuestion].image);
            imageUpdate.appendTo('#subwrapper');

            //keep answer on screen for 3 seconds before moving to next question
            if (game.currentQuestion == questions.length - 1) {
                setTimeout(game.results, 3000);
            } else {
                setTimeout(game.nextQuestion, 3000);
            }
        },

        results: function () {

            //clear timer
            clearInterval(timer);

            //update HTML with correct, incorrect, and unanswered values
            $('#subwrapper').html('<h2>YOU\'RE DONE!</h2>');
            $('#subwrapper').append('<h3>Correct: ' + game.correct + ' </h3>');
            $('#subwrapper').append('<h3>Incorrect: ' + game.incorrect + ' </h3>');
            $('#subwrapper').append('<h3>Unanswered: ' + game.unanswered + ' </h3>');

            //append html with reset button
            $('#subwrapper').append('<button class="btn btn-primary" id="reset">CLICK HERE TO PLAY AGAIN!</button>');
        },

        //function to run when an answer is clicked
        clicked: function (e) {

            //clear timer
            clearInterval(timer);

            //if else statement to take action depending on if question is answered correctly or not
            if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
                game.answerCorrect();
            } else {
                game.answerIncorrect();
            }
        },

        //function to run when correct answer is picked
        answerCorrect: function () {

            //test
            console.log("You got it!");
            console.log(questions[game.currentQuestion].image);

            //clear timer
            clearInterval(timer);

            //increase the number of correct answers
            game.correct++;

            //update HTML to tell user they got the answer right
            $('#subwrapper').html('<h2>YOU GOT IT RIGHT!</h2>');

            //update HTML to tell user the correct answer
            $('#subwrapper').append('<h3>The correct answer is: ' + questions[game.currentQuestion].correctAnswer + '</h3>');

            //update HTML to show image
            var imageUpdate = $('<img id="imageUpdate" class="col-md-4">');
            imageUpdate.attr('src', questions[game.currentQuestion].image);
            imageUpdate.appendTo('#subwrapper');

            //keep answer on screen for 3 seconds before moving to next question
            if (game.currentQuestion == questions.length - 1) {
                setTimeout(game.results, 4000);
            } else {
                setTimeout(game.nextQuestion, 4000);
            }
        },

        //function to run when incorrect answer is picked
        answerIncorrect: function () {

            //test
            console.log("Wrong!");
            console.log(questions[game.currentQuestion].image);

            //clear timer
            clearInterval(timer);

            //increase the number of incorrect answers
            game.incorrect++;

            //update HTML to tell user they got the answer wrong
            $('#subwrapper').html('<h2>YOU GOT IT WRONG!</h2>');

            //update HTML to tell user the correct answer
            $('#subwrapper').append('<h3>The correct answer is: ' + questions[game.currentQuestion].correctAnswer + '</h3>');

            //update HTML to show image
            var imageUpdate = $('<img id="imageUpdate">');
            imageUpdate.attr('src', questions[game.currentQuestion].image);
            imageUpdate.appendTo('#subwrapper');

            //keep answer on screen for 3 seconds before moving to next question
            if (game.currentQuestion == questions.length - 1) {
                setTimeout(game.results, 3000);
            } else {
                setTimeout(game.nextQuestion, 3000);
            }
        },

        //function to reset values to restart game
        reset: function () {

            //clear timer
            clearInterval(timer);

            //reseting initial values
            game.currentQuestion = 0;
            game.counter = 30;
            game.correct = 0;
            game.incorrect = 0;
            game.unanswered = 0;

            //function to call each quiz question
            game.loadQuestion();
        }
    }
});