var questions = [
	{
		question: '1 + 1 = ?',
		answer: '2',
		options: ['23', '34', '2', '3']
	},
	{
		question: 'What colour is the sky?',
		answer: 'Blue',
		options: ['Red', 'Blue', 'Orange', 'Green']
	},
	{
		question: '2 x 4 = ?',
		answer: '8',
		options: ['8', '34.225', 'Apple', 'All of the above']
	}
]

var qNo = 0;
var score = 0;

window.onload = function() {

	var submit_btn = document.getElementById('submit-btn');
	var name_input = document.getElementById('name');
	var heading = document.getElementById('heading');
	var name_card = document.getElementById('name-card');
	var quiz_card = document.getElementById('quiz-card');
	var question = document.getElementById('question');
	var options = document.getElementsByClassName('option');
	var results_card = document.getElementById('results-card');
	var result = document.getElementById('result');

	submit_btn.addEventListener('click', function() {
		heading.innerHTML = 'Hello, ' + name_input.value;
		name_card.style.display = 'none';
		quiz_card.style.display = 'block';
		setQuestion();
	});

	for(var i = 0; i < options.length; i++) {
		options[i].addEventListener('click', function(e) {
			if(e.target.innerHTML == questions[qNo].answer)
				score++;
			if(qNo + 1 >= questions.length) {
				quiz_card.style.display = 'none';
				results_card.style.display = 'block';
				result.innerHTML = score + ' / ' + questions.length;
			}
			else {
				qNo++;
				setQuestion();
			}
		});
	}

	function setQuestion() {
		question.innerHTML = questions[qNo].question;
		for(var i = 0; i < options.length; i++) {
			options[i].innerHTML = questions[qNo].options[i];
		}
	}

};