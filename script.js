var crystal ={
	blue:
	{
		name: "Blue",
		value: 0
	},

	green:
	{
		name: "Green",
		value: 0
	},

	red:
	{
		name: "Red",
		value: 0
	},

	yellow:
	{
		name: "Yellow",
		value: 0
	}
};

var setScore = 0; //currentScore
var newScore = 0; //targetScore

var wins = 0;
var losses = 0;



/////Helper Fuctions/////


var randomize= function(min, max) {
	return Math.floor(Math.random()*(max-min + 1)) + min;
};

var startGame = function (){
	setScore = 0;

		newScore = getRandom(19, 120);

	crystal.blue.value = getRandom(1, 12);
	crystal.red.value = getRandom(1, 12);
	crystal.green.value = getRandom(1, 12);
	crystal.yellow.value = getRandom(1, 12);

	$("#score").html(currentScore);
	$("#newScore").html(targetScore);

	

	var winChecker = function(){
		if (setScore > newScore) {
			alert("You lost sucker");
			console.log("lost");

			losses ++;


			$("#losses").html(losses);

			startGame();

		}

		else if (setScore === newScore){
			alert("Good Shit Dude Your are Crystal Wiz");
			console.log("win");

			wins++;

			$("#wins").html(wins);

			startGame();

		} 
	};

	var setValues = function(crystalClicked){

		setScore += crystalClicked.value;

		$("#playerScore").html(setScore);



		console.log("#playerScore");

		winChecker();

		console.log("Your Score:" + setScore);


	};

		startGame();

		$("#blue").click(function(){
			setValues.(crystal.blue);

		});


		$("#red").click(function(){
			setValues.(crystal.red);

		});


		$("#green").click(function(){
			setValues.(crystal.green);

		});


		$("#yellow").click(function(){
			setValues.(crystal.yellow);

		});
























}