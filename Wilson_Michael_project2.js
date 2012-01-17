alert("JavaScript works!");
// Author: Michael Wilson
// 01-11-2012
// Project 2
// Heros VS Villans

//standard variable
var E = true,
	F = false,
	G = false,
	Trip,
	Call = "Call Friends",
	friends,
	Well,
	Ill
;

if (Trip == E)
	{
	console.log(Call);
	}else{
	console.log("We are not going to washington");
	}

//Given: (Well ^ Ill) v Ill
if ((E && F) || G)
	{
	console.log("Are friends are Well");
	}else{
	console.log("Are friends are Ill");
	}
	
if (friends == Well)
	{
	console.log("It well take us two days to reach seattle, 7 hours the first day and 11 hours the second day");
	}
	
var heros = ["friends are well",
	"family is happy",
	"2 days to travel to seattle"
];

for (var i=0; i < 3; i++) {
	console.log(heros[i]);
	}
	
//first days trip
var hours = 7
while (hours > 0) {
	console.log(hours + "hours left to friends house");
	hours--;
	}
	
var hours = 18;
var firstday = 7;

var getsecondday = function (hours, firstday) {
	var secondday = hours - firstday;
	return secondday;
	};
		
var reportsecondday = function(secondday, message){
	console.log("The time left to drive for tomorrow is "  + secondday +  " hours");
	};

reportsecondday(11);
	
//sencond days trip
var hours = 11
while (hours > 0) {
	console.log(hours + "hours left to seattle from friends house");
	hours--;
	}
	
if (friends == Ill)
	{
	console.log("We have to travel streight to seattle in 18hours");
	}
	
var villians = ["friends are ill",
	"family is unhappy",
	"travel to seattle in one day"
];

for (var i=0; i < 3; i++) {
	console.log(villians[i]);
	}
	
var hours = 18
while (hours > 0) {
	console.log(hours + "hours left to reach seattle");
	hours--;
	}