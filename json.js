// JS Data Structures
// Author: Michael J Wilson
// data file

//friends we visit on the first day
var json = {
	"Friends": {
		"friend1": {
			"Name": "Lea",
			"Status": "Mom"
		},
		"friend2": {
			"Name": "James",
			"Status": "Dad"
		},
		"friend3": {
			"Name": "Josh",
			"Status": "Son"
		},
		"friend4": {
			"Name": "Trev",
			"Status": "oldestSon"
		}
	}
}

for (var key in json.Friends) {
	json.Friends[key]
};