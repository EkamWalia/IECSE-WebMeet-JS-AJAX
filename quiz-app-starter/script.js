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

};
