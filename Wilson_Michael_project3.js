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
	
var suitcaseNames = [ "Mom's suitcase", "Dad's suitcase", "Daughters suitcase" ],
	minutesToPack = [ 25, 15, 45 ];
var packOneSuitcase = function() {
	var suitcaseName = suitcaseNames[suitcaseNumber],
		minutesThisSuitcase = minutesToPack[suitcaseNumber];
	console.log("I am going to pack " + suitcaseName + " It should take me " + minutesThisSuitcase + " minutes.");
	for (var minutes = 0; minutes < minutesThisSuitcase; minutes += 5) {
		var minutesRemain = minutesThisSuitcase - minutes;
		console.log(minutes + " minutes have gone by, " + minutesRemain + " minutes left to go!");
	}
	console.log("I am done packing " + suitcaseName + ".");
	};
for (var suitcaseNumber = 0; suitcaseNumber < suitcaseNames.length; suitcaseNames ++) {
	packOneSuitcase();
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