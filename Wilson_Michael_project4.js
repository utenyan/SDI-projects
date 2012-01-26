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
