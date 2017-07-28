$(document).ready(function(){

    $("input[type='email'],input[type='tel'],:password,:text").after("<span></span>")
    $("#email").focus();

    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear();
    var dateText = ((month < 10) ? '0' + month : month) + "/";
    dateText += ((day < 10) ? '0' + day : day) + "/";
    dateText += year;
    $("#start_date").val(dateText);

    $("#member_form").submit(function(event){
        var isValid = true;

        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        var email = $("#email").val();
        if(email == ""){
            $("#email").next().text("This field is required.");
            isValid =  false;
        } else if(!emailPattern.test(email)){
            $("#email").next().text("Must be a valid email address.");
			isValid = false;
        } else {
            $("#email").next().text("");
        }

        var password = $("#password").val();
        if(password.length < 6) {
            $("#password").next().text("Must be 6 or more characters.");
            isValid = false;
        } else {
            $("#password").next().text("");
        }

        if ($("#verify").val() == "") { 
            $("#verify").next().text("This field is required.");
            isValid = false; 
		} else if ($("#verify").val() !== $("#password").val() ) { 
            $("#verify").next().text("Must equal first password entry.");
            isValid = false;
        } else {
            $("#verify").next().text("");
        }
            
        var firstName = $("#first_name").val().trim();
		if (firstName == "") {
            $("#first_name").next().text("This field is required.");
            isValid = false;
		} 
		else {
            $("#first_name").val(firstName);
            $("#first_name").next().text("");
        }
        
        var lastName = $("#last_name").val().trim();
        if (lastName == "") {
            $("#last_name").next().text("This field is required.");
            isValid = false;
        } 
        else {
            $("#last_name").val(lastName);
            $("#last_name").next().text("");
        }

        $("#state").next().text("");

        var zipPattern = /^\d{5}(-\d{4})?$/;
        var zip = $("#zip").val();
        if (zip == "") {
            $("#zip").next().text("This field is required.");
            isValid = false;
        } else if ( !zipPattern.test(zip) ) {
            $("#zip").next().text("Use either 99999 or 99999-9999 format.");
            isValid = false;
        }
        else {
            $("#zip").next().text("");
        }

        if ($("#phone").val() == "") { 
            $("#phone").next().text("This field is required.");
            isValid = false; 
        } else {
            $("#phone").next().text("");
        }

        $("#start_date").next().text("");

        if (isValid == false) {
            event.preventDefault();				
        }
    });
});