alert("JavaScript works!");
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

if (Trip == E)
	{
	console.log("We need to pack our suitcase");
}
	
var Mom = {
	name: "Jamie",
	age: "26",
	role: "Caretaker",
	sayPacked: function () {
		console.log ("All the suitcases are packed");
	}
};

for (var key in Mom) {
	console.log("Mom - " + key + ": " + Mom[key]);
};

var Dad = {
	name: "Mike",
	age: "30",
	role: "Student",
	sayLoaded: function () {
		console.log ("I have all the suitcases in the van");
	}
};

for (var key1 in Dad) {
	console.log("Dad - " + key1 + ": " + Dad[key1]);
};

var Daughter = {
	name: "Shayla",
	age: "4",
	role: "Just here to be cute",
	sayBoard: function () {
		console.log ("I am board, where is my toy!!");
	}
};

for (var key2 in Daughter) {
	console.log("Daughter - " + key2 + ": " + Daughter[key2]);
};
	
var suitcaseNames = [ "Moms", "Dads", "Daughters" ],
	minutesToPack = [ 25, 15, 45 ];
var packOneSuitcase = function() {
	var suitcaseName = suitcaseNames[suitcaseNumber],
		minutesThisSuitcase = minutesToPack[suitcaseNumber];
	console.log("I am going to pack " + suitcaseName + " suitcase, It should take me " + minutesThisSuitcase + " minutes.");
	for (var minutes = 0; minutes < minutesThisSuitcase; minutes += 5) {
		var minutesRemain = minutesThisSuitcase - minutes;
		console.log(minutes + " minutes have gone by, " + minutesRemain + " minutes left to go!");
	}
	console.log("I am done packing " + suitcaseName + ".");
	};
for (var suitcaseNumber = 0; suitcaseNumber < suitcaseNames.length; suitcaseNames ++) {
	packOneSuitcase();
	}

var letsLeave = "We are ready to set out on our trip";

console.log(letsLeave);

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