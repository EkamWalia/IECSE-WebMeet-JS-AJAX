// Array of questions, answers and options
var questions = [
	{
		question: '1 + 1 = ?',
		answer: '2',
		options: ['23', '34', '2', '3'],
		ansId: 2
	},
	{
		question: 'What colour is the sky?',
		answer: 'Blue',
		options: ['Red', 'Blue', 'Orange', 'Green'],
		ansId: 1
	},
	{
		question: '2 x 4 = ?',
		answer: '8',
		options: ['8', '34.225', 'Apple', 'All of the above'],
		ansId: 0
	},
	{
		question: 'Javascript is ______ ?',
		answer: 'Oh my God, Wow',
		options: ['Awesome', 'Amazing', 'Life', 'Oh my God, Wow'],
		ansId: 3
	}
];

// Initial question number and score
var qNo = 0;
var score = 0;

// Code that runs once the window is loaded
window.onload = function() {

	// Referencing DOM elements
	var submit_btn = document.getElementById('submit-btn');
	var name_input = document.getElementById('name');
	var heading = document.getElementById('heading');
	var name_card = document.getElementById('name-card');
	var quiz_card = document.getElementById('quiz-card');
	var question = document.getElementById('question');
	var options = document.getElementsByClassName('option');
	var results_card = document.getElementById('results-card');
	var result = document.getElementById('result');

	// When submit is clicked, title is changed to a greeting and question is loaded
	submit_btn.addEventListener('click', function() {
		if(name_input.value) { // If the input box is not empty

			// Heading ('QUIZ') is changed to a greeting ('Hello <name>')
			heading.innerHTML = 'Hello, ' + name_input.value;

			// The card for name input is hiddenn and the quiz card is displayed
			name_card.style.display = 'none';
			quiz_card.style.display = 'block';

			// The current question (qNo) is loaded
			setQuestion();
		}
	});

	// Loads question and options
	function setQuestion() {
		question.innerHTML = questions[qNo].question;
		for(var i = 0; i < options.length; i++) {

			// Removes indicators if any
			options[i].classList.remove('incorrect');
			options[i].classList.remove('correct');

			options[i].innerHTML = questions[qNo].options[i];
		}
	}

	// Listeners for 'click' event are added to options
	for(var i = 0; i < options.length; i++)
		// onOptionClick function runs when an option is clicked
		options[i].addEventListener('click', onOptionClick);

	function onOptionClick(e) { // e is the event (here click event)

		// Turns correct option green
		// Adds 'correct' class to the option's div
		var correct_option_index = questions[qNo].ansId;
		options[correct_option_index].classList.add('correct');
		
		if(e.target.innerHTML == questions[qNo].answer) // If the chosen answer is correct 
			score++;
		else 
			// Turns chosen option red
			e.target.classList.add('incorrect');

		// Waits 1 second and runs function
		setTimeout(function() {
			if(qNo + 1 >= questions.length) { // If questions are done

				// Hide quiz card and show score card with score
				quiz_card.style.display = 'none';
				results_card.style.display = 'block';
				result.innerHTML = score + ' / ' + questions.length;
			}
			else { // Questions still left

				//Loads the next question
				qNo++;
				setQuestion();
			}
		}, 1000);
	}

};
