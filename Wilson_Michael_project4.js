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
var checkEmail = function (addy) {
        var newAddy = addy.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        if (newAddy) {
            good = addy + "This is a valid email address.";
            return good;
        } else {
            invalid = addy + "This is an invalid email address, please use this format abc123@youremail.com.";
            return invalid;
        }
};

