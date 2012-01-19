// JS Data Structures
// Author: Michael J Wilson
// data file

//friends we visit on the first day
var json = {
	"Friends": {
		"friend1": {
			"Name": "Lea",
			"ID": "Mom"
		},
		"friend2": {
			"Name": "James",
			"ID": "Dad"
		},
		"friend3": {
			"Name": "Josh",
			"ID": "Son"
		},
		"friend4": {
			"Name": "Trev",
			"ID": "oldestSon"
		}
	}
}

for (var key in json.Friends) {
	json.Friends[key]
};