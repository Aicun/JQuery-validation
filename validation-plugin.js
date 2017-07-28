// http://jqueryvalidation.org

$(document).ready(function(){

    $("#email").focus();

    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear();
    var dateText = ((month < 10) ? '0' + month : month) + "/";
    dateText += ((day < 10) ? '0' + day : day) + "/";
    dateText += year;
    $("#start_date").val(dateText);

    $("#member_form").validate({
        rules: {
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6
            },
            verify: {
                required:true,
                equalTo:'#password'
            },
            first_name: {
                required:true
            },
            last_name: {
				required: true
            },
            state: {
                required: true,
				rangelength: [2, 2]
            },
            zip: {
				required: true,
				rangelength: [5, 10]
            },
            phone: {
				required: true,
				phoneUS: true
			},
            start_date: {
				required: true,
				date: true
			},
			card_number: {
				required: true,
				creditcard: true
			},
			expiry_date: {
				required: true
			}
        },
        messages: {
            state: {
                rangelength:"Please enter a two-character state code"
            }
        }
    });

});