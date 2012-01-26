alert("JavaScript works!");


//does string follow a phone number pattern
var phoneNumber = function (myNumber) {
        var numberCheck = /^(\d{3})-(\d{3})-(\d{4})$/;
        if (myNumber.match(numberCheck)) {
            numberGood = myNumber + " is a valid phone number.";
            return numberGood;
        } else {
            numberBad = "Sorry, " + myNumber + " is not a valid phone number. Please use this format: XXX-XXX-XXXX";
            return numberBad;
        }
};

//does string follow an email format
var checkEmail = function (address) {
        var newAddress = address.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        if (newAddress) {
            good = address + "This is a valid email address.";
            return good;
        } else {
            invalid = address + "This is an invalid email address, please use this format abc123@youremail.com.";
            return invalid;
        }
};

//does string follow url format
var isURL = function (myURL) {
        var urlCheck = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (myURL.match(urlCheck)) {
            urlGood = "This url " + myURL + ", is a valid address you may continue.";
            return urlGood;
        } else {
            urlBad = "Your url " + myURL + ", does not follow the proper format. Please use this format http://www.mywebsite.com.";
            return urlBad;
        }
};

//format a number to use specific decimal places
var cartTotal = function (cost) {
        var yourTotal = cost.toFixed(3);
        return yourTotal;
};

//Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects
var smallParty = function (partyGoers) {
        function sortParty(a, b) {
            return a.place - b.place;
        }
        var orderedParty = (partyGoers.sort(sortParty));
        return orderedParty;
};