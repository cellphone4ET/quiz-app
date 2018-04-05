
const STORE = [
	
	{
		number: 1,
		questionText: "1. How would Trump qualify his own intelligence?",
		answer1: "A. He’s a genius… a stable genius!",
		answer2: "B. He recognizes his need to read a book. Or, at least his daily briefings.",
		correctAnswer: "A",
		correctAnswerText: "... Unfortunately.",
		incorrectAnswerText: "Who are you kidding, Trump doesn't read."
	},

	{
		number: 2,
		questionText: "2. What are Trump’s favorite eats?",
		answer1: "A. Gourmet food flown in from France.",
		answer2: "B. McD’s.",
		correctAnswer: "B",
		correctAnswerText: "Nobody can attempt to poison you in-the-moment if what you're eating is already made\
		before you order it! His genius at work, guys.",
		incorrectAnswerText: "I'm pretty sure the only thing from France Trump eats are French Fries,\
		and he's also probably one of those weirdos who insists on calling them freedom fries."
	},

	{
		number: 3,
		questionText: "3. What does Trump think of Ivanka, his daughter from his first marriage?",
		answer1: "A. She’s a great beauty, six feet tall, has the best body. If she weren’t his daughter,\
		he'd be dating her.",
		answer2: "B. She should be at home with her kids and taking care of the house.",
		correctAnswer: "A",
		correctAnswerText: "Internal screaming is also an acceptable response to this question.",
		incorrectAnswerText: "Not that this answer was any better, but.... yeah. Just... yeah."
	},

	{
		number: 4, 
		questionText: "4. As commander in chief of our armed forces, has Trump ever served in the military?",
		answer1: "A. Yes",
		answer2: "B. No",
		correctAnswer: "B",
		correctAnswerText: "No, he has not. Around the time of the draft in the late 60's he developed\
		'bone spurs' in his heels that cleared up on their own a few years later. Riiight.",
		incorrectAnswerText: "He has not... and yet, he has the gall to take shots at POWs like John McCain.\
		A real winner, Trump is."
	},

	{
		number: 5,
		questionText: "5. Does Trump believe in global warming?",
		answer1: "A. No",
		answer2: "B. Yes",
		correctAnswer: "A",
		correctAnswerText: "No, Trump does not believe in global warming. Except for when he is cold and wants\
		it to make an appearance because, given that he is a white man over the age of 60, his comfort and happiness\
		should obviously trump (pun itended!) the earth’s overall well-being. God forbid he be cold once in awhile.",
		incorrectAnswerText: "If he did believe in global warming, he wouldn't be pulling out of the Paris Agreement."
	},

	{
		number: 6,
		questionText: "6. According to Trump, which countries are the \"shit-hole\" countries?",
		answer1: "A. Denmark, Kazakhstan, Chile",
		answer2: "B. Haiti, El Salvador, and \"African nations\"",
		correctAnswer: "B",
		correctAnswerText: "Apparently, we elected someone who thinks Africa is one country. Cool.",
		incorrectAnswerText: "Denmark, Kazakhstan, Chile are some great countries, as are Haiti, El Salvador, and\
		all 54 independent states located in Africa."
	},

	{
		number: 7,
		questionText: "7. Which high ranking member of Trump's administration famously called Trump a \"moron\"?",
		answer1: "A. Secretary of State Rex Tillerson",
		answer2: "B. All of them.",
		correctAnswer: "A",
		correctAnswerText: "This is the correct answer for the purposes of this quiz, but lets be honest here, it's B. ",
		incorrectAnswerText: "But real talk, this is (probably) the real answer. But in celebration of\
		factual evidence in a time when its virtues are deplored, this answer will be considered false\
		until further proof to the contrary is furnished."
	},

	{
		number: 8,
		questionText: "8. What is the projected number of golf outings Trump is expected to make if he (somehow) manages to\
		complete a 4 year term?",
		answer1: "A. 256",
		answer2: "B. 324",
		correctAnswer: "B",
		correctAnswerText: "324. For all the hoopla Trump made about President Obama's golf habit, throughout the\
		 entirety of President Obama's eight year term he only went golfing 306 times. If Trump is reelected in 2020,\
		 current projections put his total golf outings for an eight year term at 649.",
		incorrectAnswerText: "If only it were 256."
	},

	{
		number: 9,
		questionText: "9. According to the book Fire and Fury by Michael Wolf, did Trump really want to be president?",
		answer1: "A. Of course, he's a megalomaniac and couldn't wait to get his hands on arguably the most coveted\
		position of power in the western world.",
		answer2: "B. No, he just wanted the publicity that running a presidential campaign would bring. He never thoguht he\
		would actually win.",
		correctAnswer: "B",
		correctAnswerText: "According to Wolf, Trump was initially \"horrified\" of his own victory.",
		incorrectAnswerText: "Both options sucked, you just happened to pick the wrong one. Cheers."
	},

	{
		number: 10,
		questionText: "10. When Trump speaks of \"Little Rocket Man\" to whom is he referring?",
		answer1: "A. Elton John, obviously.",
		answer2: "B. North Korean Dictator Kim Jong-Un",
		correctAnswer: "B",
		correctAnswerText: "Their name-calling feud has also included insults such as \"short\", \"fat\", and \"dotard\".\
		Maturity is their strong suit, apprently.",
		incorrectAnswerText: "Sing with me!**And I think it's gonna be a long, long time.... til Trump is goooone.**"
	}

];

let globalScore = 0;
let globalCurrentQuestion = 0;

function hideStartPage() {
	$('.js-start-element').hide();
}

function startButton () {
	$('.js-start-button').on('click', event => {
		generateQuestion();
		hideStartPage();
	});
}

function quizQuestionTemplate() {

	return `<div class="js-question-template"><p class="question">${STORE[globalCurrentQuestion].questionText}</p></div>

		<form id="submit-form" class="js-question-template">
			<fieldset class="fieldset">
	  		<div class="radios">
		  		<label class="submit-label">
		  			<input type="radio" name="answer-option" value="A">${STORE[globalCurrentQuestion].answer1}</input>
		  		</label>
		  		<label>
		  			<input type="radio" name="answer-option" value="B">${STORE[globalCurrentQuestion].answer2}</input>
		  		</label>
		  	</fieldset>
		  	</div>


	      <div class="js-submit-question js-question-template">
	        <button name="question-submit" id="js-question-submit-button" class="submit-button">Submit Answer</button>
	      </div>
      </form>

		<div class="current-question-score js-question-template">
        <div class="question-div"><p class="js-question-template" id="current-question">Question <span>${STORE[globalCurrentQuestion].number}</span>/10</p></div>
        <div class="score-div"><p class="js-question-template" id="score">Score <span>${globalScore}</span>/10</p>
    </div>`;
}

function generateQuestion() {
	console.log(`generateQuestion ran`)
	$('.js-question-element').append(quizQuestionTemplate);
}

function hideQuestionElement() {
	console.log(`hide Question ran`)
	$('.js-question-template').hide();
}

function submitQuestion() {
	$('.js-question-element').on('submit', '#submit-form', function(event) {
		event.preventDefault();
		console.log("submitQuestion ran");
  		questionAnswerDetermination();
	});
}

function updateScore() {
	console.log('updateScore ran');
	globalScore++;
}

function updateCurrentQuestion() {
	console.log('updateCurrentQuestion ran')
	globalCurrentQuestion++;
}

function correctAnswerTemplate() {
	return `<div class="js-answer-box">
	    <p class="answertext">Your answer is <span id="answerinput">correct</span>!</p>
	    <p class="answertext"><span>${STORE[globalCurrentQuestion].correctAnswerText}</span></p>
	</div>
	
	<div class="js-submit-question js-answer-box">
		<button class="js-answer-box next-button" name="next-question id="js-next-question">Next Question</button>
	</div>`
}

function incorrectAnswerTemplate() {
	return `<div class="js-answer-box">
		<p class="answertext">Your answer is <span id="answerinput">incorrect</span>.</p>
		<p class="answertext"><span>${STORE[globalCurrentQuestion].incorrectAnswerText}</span></p>
	</div>
	
	<div class="js-submit-question js-answer-box">
		<button class="js-answer-box next-button" name="next-question id="js-next-question">Next Question</button>
	</div>`
}

function correctAnswerGenerator() {
	$('.js-answer-element').append(correctAnswerTemplate);
}

function incorrectAnswerGenerator() {
	$('.js-answer-element').append(incorrectAnswerTemplate);
}

function questionAnswerDetermination() {
	console.log('question answer determination ran');

		if (!$("#submit-form input[name='answer-option']:checked").val()) {
			return alert('Please select an answer.');

		}
		else {
			var selected = $("#submit-form input[name='answer-option']:checked").val();
		}


	let answer = ("answer: " + selected, selected === STORE[globalCurrentQuestion].correctAnswer);
	
	if (answer === true) {
		$('.js-question-template').detach();
		updateScore();
		correctAnswerGenerator();
		updateCurrentQuestion();
	}
		
	else {
		$('.js-question-template').detach();
		incorrectAnswerGenerator();
		updateCurrentQuestion();
	};
}	

function hideAnswerTemplate () {
	console.log('hide answer template ran');
	$('.js-answer-box').hide(); 
}

function nextQuestion() {
  console.log('next question ran');
	  $('.js-answer-element').on('click', $('#js-next-question'), event => {
	    if (globalCurrentQuestion === 10) {
	      hideAnswerTemplate();
	      generateResults();
	    }
	    else {
	      hideAnswerTemplate();
	      generateQuestion();
	    }
    }
  );
}

function generateResults() {
	$('.js-results-element').append(resultsTemplate);
}

function resultsTemplate() {
	return `<div class="js-results-template">
		<p class="results-text resultsbold">You got ${globalScore} questions out of 10 right!</p>
		<p class="results-text">No matter the score... You're fired!!! Because with Trump,\
		we all lose.</p>
		<img src="https://amp.businessinsider.com/images/55918a4b6da811695ab77f22-750-562.jpg" alt="Trump firing someone" class="final-image">

		<div class="js-results-template">
        	<button class="js-results-template restartquiz-button" type="button" name="restart-quiz" id="js-restart-button">Restart Quiz</button>
      	</div>
    </div>`;
}

function restartQuizButton() {
  $('.js-results-element').on('click', $('#js-restart-button'), event => {
    console.log('restart ran');
    resetQuiz();
  });
}

function resetQuiz() {
	console.log('reset quiz ran');
	globalCurrentQuestion = 0
	globalScore = 0
	$('.js-results-template').hide();
	$('.js-question-element').append(quizQuestionTemplate);
}
	
function handleButtons() {
	startButton();
	submitQuestion();
	nextQuestion();
	restartQuizButton();
}

handleButtons();