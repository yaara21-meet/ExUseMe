var student = document.getElementById("firOp");
var chiled = document.getElementById("secOp");
var friend = document.getElementById("thirOp");
var yourself = document.getElementById("fourOp");

var fristEx = document.getElementById("fristEx");
var secondEx = document.getElementById("secondEx");
var thirdEx = document.getElementById("thirdEx");
var fourthEx = document.getElementById("fourthEx");
var fifthEx = document.getElementById("fifthEx");
var sixthEx = document.getElementById("sixthEx");


var stdA = "I’ve been working on the assignment but I really want to give it my best effort and I don’t think I’ll be able to do that within the given time frame. Could I have a little more time to work on it to submit my best quality work?";
var stdB = "Sorry for being late, I just have to take the bus to school and I accidently took the wrong line today, won’t happen again!";
var stdC = "Don’t say anything - just sit down.";
var stdD = "I know I should have gone at break, but I was busy during break working on some assignment for another class. I really can’t hold it in much longer, please I won’t do this again!";
var stdE = "Sorry Ms./Sir, I was just explaining the notes to him and I didn’t want to interrupt your class.";
var stdF = "Apologies for not coming to school yesterday, I was feeling really sick. I would really appreciate it if you could give me the material I missed out on while I was away.";

var chlA = "Sorry, I went to (respectable friend’s) house and I got caught up with their parents about academics.";
var chlB = "I need to go to (smart friend’s) house to go study for the biology test next week!";
var chlC = "I would like to help, but I’m really busy with school work and I lose my focus after doing the chores.";
var chlD = "I don’t often ask for this but I just need a little money to buy something I’ve wanted for quite a while. Know that I appreciate that you provide for me and this is a one off case.";
var chlE = "Although I did do (whatever email was concerning), this teacher always exaggerates everything and doesn’t know how to manage their class, sorry, I’m just being honest - ask anybody else.";

var friA = "I wish I could but my mother told me to stay with my little sister at home.";
var friB = "I don't know the material, I've missed all the lessons this week.";
var friC = "I don't have time to get ready for the test, my cousin is getting married.";

var youA = "I could work out if I wanted to, but who cares, it's not worth the time and effort to just be in better shape, I just don’t have time, I’m too busy - that's the problem.";
var youB = "I would like to eat healthy but it's too expensive for me, plus, I can’t give up on all the delicious food that I eat now, it's really just not worth it.";
var youC = "I wish I had time, but I really don't. I'm constantly going from one thing to another and I can’t be bothered to go out of my way to go after some useless hobby, I’m fine with the way things are now.";
var youD = "I could try harder and do better if I wanted, but I’ll do that later, I want to have fun now! ";

student.onclick = function(){studentExcuses()};
chiled.onclick = function(){chiledExcuses()};
friend.onclick = function(){friendExcuses()};
yourself.onclick = function(){yourselfExcuses()};

function studentExcuses()
{
	fristEx.innerHTML = stdA;
	fristEx.innerHTML = stdB;
	fristEx.innerHTML = stdC;
	fristEx.innerHTML = stdD;
	fristEx.innerHTML = stdE;
	fristEx.innerHTML = stdF;
	



}
function getvalueof(name){
	var url = window.location.toString();
	var params = url.split("?")[1];
	var all_params = params.split("&");
	for (var i = 0; i < all_params.length; i++) {
		if (all_params[i].startsWith(name+"=")){
			return all_params[i].split("=")[1];
		}
	}
}

function chiledExcuses()
{

}

function friendExcuses()
{

}

function yourselfExcuses()
{

}