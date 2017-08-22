function checkVerification(id, type, rePass, empty) {
    //_______rePass can be null
    //empty can be null , check fild if not empty , for not important field
    // if one field is not important set empty to yes

    var boxid = id;
    //////////console.log("tiny text="+ getElement(id).value);
    var checkid = "check" + boxid;
    //var labelid = "msg" + boxid;
    var value = document.getElementById(boxid).value;
    var elem = document.getElementById(boxid);

    if (value.length == 0 && elem.getAttribute('data-notrequired') != true) {
        document.getElementById(checkid).value = "false";
        //console.log('null first name' + checkid);
        elem.setAttribute('title', __lang.translate('Please fill this'));
        elem.setAttribute('data-original-title', __lang.translate('Please fill this'));
        $('#' + boxid).tooltip('show');
        return;
    }
    if (empty != null && value.trim != '' || empty == null && empty != 'yes') {

        if (rePass == null) {
            general_validation(boxid, checkid, value, type);
        } else {
            rePass = document.getElementById(rePass);
            check_repeat_password(boxid, checkid, value, rePass.value);
        }
    }
}


/*
 general validation : get a value and a Type , then check that
 */
function general_validation(boxid, checkid, value, type) {
    var mes = "";

    var inputChangerIcon = function (boxid, checkid) {
        var Input = document.getElementById(boxid);
        var checkValue = document.getElementById(checkid).value;
        changeIcon(Input, checkValue);
    };
    switch (type) {
        //call check username
        case'empty':
            value = value.trim();
            check_empty(boxid, checkid, value);
            break;

        case'NationalCode':
            value = value.trim();
            NationalCode(boxid, checkid, value);
            break;

        case'nationalID':
            value = value.trim();
            nationalID(boxid, checkid, value);
            break;


        case 'username':
            value = value.trim();
            check_username(boxid, checkid, value);

            break;
        //call check phone
        case 'phone':
            value = value.trim();
            check_phone(boxid, checkid, value);

            break;

        //call check description
        case 'description':
            value = value.trim();
            check_description(boxid, checkid, value);
            break;

        //call check password
        case 'password':
            check_password(boxid, checkid, value);
            break;

        //call check email
        case 'email':
            value = value.trim();
            check_email(boxid, checkid, value);
            break;

        //call check mobile number
        case 'mobile':
            value = value.trim();
            check_mobile(boxid, checkid, value);
            break;


        //call check area code
        case 'areaCode':
            value = value.trim();
            check_areacode(boxid, checkid, value);
            break;


        //call check home phone number
        case 'homePhone':
            value = value.trim();
            check_home_phone(boxid, checkid, value);
            break;


        //call check organization phone numbers
        case 'organizationPhone':
            value = value.trim();
            check_organization_phone(boxid, checkid, value);
            break;

        //call check name
        case 'name':
            value = value.trim();
            check_name(boxid, checkid, value);
            break;

        //call check address
        case 'address':
            value = value.trim();
            check_address(boxid, checkid, value);
            break;

        //call check url
        case 'url':
            value = value.trim();
            check_url(boxid, checkid, value);
            break;


        //call check check_business_name
        case 'businessName':
            value = value.trim();
            check_business_name(boxid, checkid, value);
            break;

        case 'date':
            value = value.trim();
            //console.log('asd');
            check_date(boxid, checkid, value);
            break;

        //_________________________for adv search


        case 'numeral':
            value = value.trim();
            check_numeral(boxid, checkid, value);
            break;
        case 'tedad':
            value = value.trim();
            check_essential_numeral(boxid, checkid, value);
            break;
        case 'namesearch':
            value = value.trim();
            check_name_search(boxid, checkid, value);
            break;
        case 'zipcode':
            check_zip_code(boxid, checkid, value);
            break;
        case 'instaid':
            check_instaid(boxid, checkid, value);
            break;
        case 'age':
            check_age(boxid, checkid, value);
            break;
        //default
        default:

    }

    inputChangerIcon(boxid, checkid);

}

function changeIcon(elem, isValid) {
    if (isValid == 'true') {
        elem.classList.remove('notTik');
        elem.classList.add('TikInput');
    } else {
        elem.classList.remove('TikInput');
        elem.classList.add('notTik');
    }
    elem.classList.add('removeSelectArrow');

}
//----> for show down arrow of select
$(document).ready(function () {
    $('select').on('focus', function () {
        this.classList.remove('notTik');
        this.classList.remove('TikInput');
        this.classList.remove('removeSelectArrow');
    })
});


/*
 check username function
 */

function check_username(boxid, checkid, value) {
    var message;
    if (value.length > 50) {
        //document.getElementById(labelid).innerHTML = "username must be less than 50 characters";
        document.getElementById(checkid).value = "false";
        message = 'username_cant_more_than_50_charachter';
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('show');

    } else if (value.length < 4) {
        message = 'username_cant_less_than_5_charachter';
        document.getElementById(checkid).value = "false";
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('show');
    }
    else {
        message = '';
        ////document.getElementById(labelid).innerHTML="OK";
        document.getElementById(checkid).value = "true";
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('hide');
        //document.getElementById(boxid).style.color = "#000000";
    }
}
/*
 check description function
 */
function check_description(boxid, checkid, value) {
    var message = '';
    if (value.length > 200) {

        document.getElementById(checkid).value = "false";
        //document.getElementById(boxid).style.color = "#FF0000";
        document.getElementById(boxid).setAttribute('title', 'description must be less than 200 characters');
        document.getElementById(boxid).setAttribute('data-original-title', 'description should be less than 200 characters');
        $('#' + boxid).tooltip('show');

    }
    else if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(value)) {
        document.getElementById(checkid).value = "false";
        setWarningFillForm('input_have_invalid_characters', 'fa');
        message = "input_have_invalid_characters";
        //document.getElementById(boxid).style.color = "#f00";
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('show');
    }
    else {
        ////document.getElementById(labelid).innerHTML="OK";
        document.getElementById(checkid).value = "true";
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('hide');
        //document.getElementById(labelid).innerHTML = "";
        //document.getElementById(boxid).style.color = "#000000";


    }

}


/*
 check password
 */
function check_password(boxid, checkid, value) {
    if (value != null) {
        var message = '';
        //check password length
        if ((value.length < 8)) {
            message = 'password length should be more than 8 chars';
            document.getElementById(checkid).value = "false";
            document.getElementById(boxid).setAttribute('title', __lang.translate(message));
            document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
            $('#' + boxid).tooltip('show');
            //document.getElementById(boxid).style.color = "#FF0000";

        }
        /*        else if (value.length > 11) {
         //document.getElementById(labelid).innerHTML = '<span style="color:#FF0000"> password length should be less than 11 chars </span>';
         document.getElementById(checkid).value = "false";
         setWarningFillForm('password_max_length_11', 'fa' );
         //document.getElementById(boxid).style.color = "#FF0000";
         }*/
        else {
            //document.getElementById(labelid).innerHTML = "";
            document.getElementById(checkid).value = "true";
            document.getElementById(boxid).setAttribute('title', __lang.translate(message));
            document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
            $('#' + boxid).tooltip('hide');
            //document.getElementById(boxid).style.color = "#000000";


        }
    }
    else {
        document.getElementById(checkid).value = "false";
        message = 'Please fill this textbox';
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('show');
        //document.getElementById(boxid).style.color = "#FF0000";

    }

}
/*
 check password and repeat pasword
 */
function check_repeat_password(boxid, checkid, password, repeat) {
    var message = '';
    if (password != null) {

        if (password === repeat) {
            //document.getElementById(labelid).innerHTML = "";
            document.getElementById(checkid).value = "true";
            document.getElementById(boxid).setAttribute('title', __lang.translate(message));
            document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
            $('#' + boxid).tooltip('hide');
            //document.getElementById(boxid).style.color = "#000000";


        }
        else {
            message = 'These passwords don\'t match.';
            document.getElementById(checkid).value = "false";
            document.getElementById(boxid).setAttribute('title', __lang.translate(message));
            document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
            $('#' + boxid).tooltip('show');
            //document.getElementById(boxid).style.color = "#FF0000";
        }
    }
    else {
        document.getElementById(checkid).value = "false";
        message = 'please fill this textbox';
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('show');
        //document.getElementById(boxid).style.color = "#FF0000";

    }
    //alert( password + "" + repeat);

}


/*
 check email
 */
function check_email(boxid, checkid, value) {
    // output message
    var message = "";
    if (value.length != 0) {
        // email pattern
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // check email pattern is true or not
        var patternTest = pattern.test(value);

        if (value.length == 0) {
            message = '';
            document.getElementById(checkid).value = "true";
            document.getElementById(boxid).setAttribute('title', __lang.translate(message));
            document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
            $('#' + boxid).tooltip('hide');
            //document.getElementById(boxid).style.color = "#000";
        }

        else if (!patternTest) {
            message = "The email notation is incorrect.";
            document.getElementById(checkid).value = "false";
            //document.getElementById(boxid).style.color = "#FF0000";


        }

        // split email , splitter is @
        var splitValue = value.split("@");

        //is email has 2 part then
        if (splitValue.length == 2) {
            // split email to username and host
            var username = splitValue[0];

            var host = splitValue[1];

            if (username.length > 60) {
                message = "The lenght of email ID exceeded maximum length.";
                document.getElementById(checkid).value = "false";
                //document.getElementById(boxid).style.color = "#FF0000";

            }
            else if (host.length > 60) {
                message = "email_username_part_max_length";
                document.getElementById(checkid).value = "false";
                //document.getElementById(boxid).style.color = "#FF0000";


            }
            else {
                document.getElementById(checkid).value = "true";
                document.getElementById(boxid).setAttribute('title', __lang.translate(message));
                document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
                $('#' + boxid).tooltip('hide');
                message = "";
                //document.getElementById(boxid).style.color = "#000000";

            }


        }
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('show');
    } else {
        document.getElementById(checkid).value = "false";
        document.getElementById(boxid).setAttribute('title', 'please fill this');
        document.getElementById(boxid).setAttribute('data-original-title', 'please fill this');
        $('#' + boxid).tooltip('show');
        //document.getElementById(boxid).style.color = "#FF0000";

    }

}


/*
 check mobile number
 */
function check_mobile(boxid, checkid, value) {
    if (value.length != 0) {
        var message = "";

        // check length of mobile number
        if (value.length != 11) {
            message = "mobile_number_length";
            document.getElementById(checkid).value = "false";
            //document.getElementById(boxid).style.color = "#FF0000";

        }

        // check mobile number be at 09--------- format
        else if (value.charAt(0) != '0' || value.charAt(1) != '9') {
            message = "mobile_format_incorrect";
            document.getElementById(checkid).value = "false";
            //document.getElementById(boxid).style.color = "#FF0000";


        }

        // check mobile number just be numeral
        else if (!value.match(/^[0-9]*$/)) {
            message = "input_can_be_just_numeric";
            document.getElementById(checkid).value = "false";
            //document.getElementById(boxid).style.color = "#FF0000";


        }

        else {
            document.getElementById(checkid).value = "true";
            document.getElementById(boxid).setAttribute('title', __lang.translate(message));
            document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
            $('#' + boxid).tooltip('hide');
            message = "";
            //document.getElementById(boxid).style.color = "#000000";

        }

        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('show');
    }
    else {
        document.getElementById(checkid).value = "false";
        document.getElementById(boxid).setAttribute('title', 'please fill this');
        document.getElementById(boxid).setAttribute('data-original-title', 'please fill this');
        $('#' + boxid).tooltip('show');


    }

}
/*
 check mobile number
 */
function check_phone(boxid, checkid, value) {

    var message = "";

    if (value != null) {
        if (!value.match(/^[0-9]*$/)) {
            message = "input_can_be_just_numeric";
            document.getElementById(checkid).value = "false";
            //document.getElementById(boxid).style.color = "#FF0000";

        }

        else if (value.length > 11) {
            message = "phone_length_max_11";
            document.getElementById(checkid).value = "false";
            //document.getElementById(boxid).style.color = "#FF0000";


        }
        else {
            document.getElementById(checkid).value = "true";
            document.getElementById(boxid).setAttribute('title', __lang.translate(message));
            document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
            $('#' + boxid).tooltip('hide');
            message = "";
            //document.getElementById(boxid).style.color = "#000000";

        }

    }


    else {
        document.getElementById(checkid).value = "true";
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('hide');
        message = "";
        //document.getElementById(boxid).style.color = "#000000";

    }

    document.getElementById(boxid).setAttribute('title', __lang.translate(message));
    document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
    $('#' + boxid).tooltip('show');

}


/*
 check area code ( area pre code phone number )
 */
function check_areacode(boxid, checkid, value) {

    var message = "";

    // check length of area code number
    if (value.length != 3) {
        message = "area_code_length_3";
        document.getElementById(checkid).value = "false";
        //document.getElementById(boxid).style.color = "#FF0000";

    }


    // check area code number be at 0-- format
    else if (value.charAt(0) != '0' || value.charAt(1) == '9' || value.charAt(2) == '0') {
        message = "area_code_format_incorrect";
        document.getElementById(checkid).value = "false";
        //document.getElementById(boxid).style.color = "#FF0000";

    }

    // check area code number just be numeral
    else if (!value.match(/^[0-9]*$/)) {
        message = "input_can_be_just_numeric";
        document.getElementById(checkid).value = "false";
        //document.getElementById(boxid).style.color = "#FF0000";

    }

    else {
        document.getElementById(checkid).value = "true";
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('hide');
        message = "";
        //document.getElementById(boxid).style.color = "#000000";

    }

    document.getElementById(boxid).setAttribute('title', __lang.translate(message));
    document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
    $('#' + boxid).tooltip('show');

}


/*
 check home phone
 */
function check_home_phone(boxid, checkid, value) {

    var message = "";

    // check length of home phone number
    if (value.length != 8) {
        message = "home_phone_length_max_8";
        document.getElementById(checkid).value = "false";
        //document.getElementById(boxid).style.color = "#FF0000";

    }

    // check home number cant be be at 0------- format
    else if (value.charAt(0) == '0') {
        message = "home_phone_format_incorrect";
        document.getElementById(checkid).value = "false";
        //document.getElementById(boxid).style.color = "#FF0000";

    }

    // check home number just be numeral
    else if (!value.match(/^[0-9]*$/)) {
        document.getElementById(checkid).value = "false";
        message = "input_can_be_just_numeric";
        //document.getElementById(boxid).style.color = "#FF0000";

    }

    else {
        document.getElementById(checkid).value = "true";
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('hide');
        message = "";
        //document.getElementById(boxid).style.color = "#000000";

    }

    document.getElementById(boxid).setAttribute('title', __lang.translate(message));
    document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
    $('#' + boxid).tooltip('show');
}


/*
 check organization phone
 */
function check_organization_phone(boxid, checkid, value) {

    var message = "";

    // check length of organization phone number
    if (value.length < 4 || value.length > 11) {
        document.getElementById(checkid).value = "false";
        message = "The organizational phone number should be 3 to 11 digits long.";
        //document.getElementById(boxid).style.color = "#FF0000";
    }

    // check organization number cant be be at 0------- format
    else if (value.charAt(0) == '0') {
        document.getElementById(checkid).value = "false";
        message = "Incorrect organization phone number format.";
        //document.getElementById(boxid).style.color = "#FF0000";
    }

    // check organization number just be numeral
    else if (!value.match(/^[0-9]*$/)) {
        document.getElementById(checkid).value = "false";
        message = "Just number digits allowed in phone numbers";
        //document.getElementById(boxid).style.color = "#FF0000";

    }

    else {
        document.getElementById(checkid).value = "true";
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('hide');
        //document.getElementById(boxid).style.color = "#000000";
        message = "";
    }
    //document.getElementById(labelid).innerHTML = '<span style="color:#FF0000">' + message + '</span>';
    //   setWarningFillForm(message, 'fa' );
}
function check_empty(boxid, checkid, value) {
    if (value.length == 0) {
        document.getElementById(checkid).value = "false";
        //console.log('null first name' + checkid);
        document.getElementById(boxid).setAttribute('title', __lang.translate('Please fill this'));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate('Please fill this'));
        $('#' + boxid).tooltip('show');
        //document.getElementById(boxid).style.color = "#FF0000";
    } else {
        document.getElementById(checkid).value = "true";
        document.getElementById(boxid).setAttribute('title', '');
        document.getElementById(boxid).setAttribute('data-original-title', '');
        $('#' + boxid).tooltip('hide');
        ////document.getElementById(labelid).innerHTML = '';
    }
}
/*
 check name
 */
function check_name(boxid, checkid, value) {
    if (value.length != 0) {
        var message = "";

        if (value.length > 50) {

            document.getElementById(checkid).value = "false";
            message = "The name should be at most 50 charaters long";
            //document.getElementById(boxid).style.color = "#FF0000";
        }

        else if ((value.match(/^[a-zA-Z ]*$/))) {//&& !(value.match(/^[\u0600-\u06EF ]*$/)) ) {

            document.getElementById(checkid).value = "true";
            document.getElementById(boxid).setAttribute('title', __lang.translate(message));
            document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
            $('#' + boxid).tooltip('hide');
            message = "";
            //document.getElementById(boxid).style.color = "#000";
        }
        else if ((value.match(/^[\u0600-\u065F\u0670-\u06EF ]*$/))) {//&& !(value.match(/^[\u0600-\u06EF ]*$/)) ) {

            document.getElementById(checkid).value = "true";
            document.getElementById(boxid).setAttribute('title', __lang.translate(message));
            document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
            $('#' + boxid).tooltip('hide');
            message = "";
            //document.getElementById(boxid).style.color = "#000";
        }// \u0600-\u06FF is for persian chars

        else if ((value.match(/^[a-zA-Z\u0600-\u06EF  ]*$/))) {
            document.getElementById(checkid).value = "false";
            message = "The name shouldn't be a mix of more than one language.";
            //document.getElementById(boxid).style.color = "#f00";
        }
        else if ((value.match(/^[a-zA-Z0-9\u0600-\u06FF  ]*$/))) {
            document.getElementById(checkid).value = "false";
            message = "the name shouldn't contain numbers in it.";
            //document.getElementById(boxid).style.color = "#f00";
        }
        else if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(value)) {
            document.getElementById(checkid).value = "false";
            message = "The name contains invalid characters.";
            //document.getElementById(boxid).style.color = "#f00";
        }
        else {

            document.getElementById(checkid).value = "true";
            document.getElementById(boxid).setAttribute('title', __lang.translate(message));
            document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
            $('#' + boxid).tooltip('hide');
            message = "";
            //document.getElementById(boxid).style.color = "#000000";
        }

        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('show');
    }
    else {
        //console.log('null first name' + checkid);
        document.getElementById(checkid).value = "false";
        document.getElementById(boxid).setAttribute('title', 'Please fill this');
        document.getElementById(boxid).setAttribute('data-original-title', 'Please fill this');
        $('#' + boxid).tooltip('show');
        //document.getElementById(boxid).style.color = "#FF0000";

    }

}


/*
 check address
 */
function check_address(boxid, checkid, value) {
    var message = "";

    // check length of organization phone number
    if (value.length > 255) {
        //document.getElementById("buttonid").disabled= true;
        document.getElementById(checkid).value = "false";
        message = "The maximum address length is 255";
        //document.getElementById(boxid).style.color = "#FF0000";
    }
    // input chars with
    else if (value.match(/--/g) || value.match(/--;/g) || value.match(/-;/g)) {
        document.getElementById(checkid).value = "false";
        message = "The Address contain unallowed characters.";
        //document.getElementById(boxid).style.color = "#FF0000";
    }
    else {
        document.getElementById(checkid).value = "true";
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('hide');
        //document.getElementById(boxid).style.color = "#000000";
        message = "";
    }


    document.getElementById(boxid).setAttribute('title', __lang.translate(message));
    document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
    $('#' + boxid).tooltip('show');
}

/*
 check business name
 */
function check_business_name(boxid, checkid, value) {
    var message = '';
    if (value.length <= 50) {
        ////document.getElementById(labelid).innerHTML = "";
        document.getElementById(checkid).value = "true";
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('hide');
        //document.getElementById(boxid).style.color = "#000000";
    }
    else {
        ////document.getElementById(labelid).innerHTML = '<span style="color:#FF0000">Your business name should be less that 50 chars</span>';
        setWarningFillForm('business_name_max_length_50', 'fa');
        //document.getElementById(boxid).style.color = "#FF0000";
        document.getElementById(checkid).value = "false";
    }
}

/*
 check url
 */
function check_url(boxid, checkid, value) {
    var message = '';
    var urlregex = /^((https?|ftp|):\/\/|)([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    if (urlregex.test(value)) {
        ////document.getElementById(labelid).innerHTML = "";
        document.getElementById(checkid).value = "true";
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('hide');
        //document.getElementById(boxid).style.color = "#000000";

    }
    else {
        ////document.getElementById(labelid).innerHTML = '<span style="color:#FF0000">URL has no correct type</span>';
        //document.getElementById(boxid).style.color = "#FF0000";
        setWarningFillForm('url_format_incorrect', 'fa');
        document.getElementById(checkid).value = "false";
    }

    //return this.optional(value) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
    //return ( value.length  >= 50 ? "OK" : "Your business name should be less that 50 chars");
}
//added by Nabi.
/*
 check date format - 4-8-95
 */
function check_date(boxid, checkid, date) {
    // regular expression to match required date format
    console.log('date: ' + date.toString());
    date = date.toString();
    var allowBlank = true;
    var minYear = 1300;
    var maxYear = (new Date()).getFullYear();

    var check = document.getElementById(checkid);

    var errorMsg = "";

    // regular expression to match required date format
    //re = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
    re = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
    console.log('re:' + re);
    regs = date.match(re);
    console.log('regs:' + regs);
    if (date != '') {
        if (regs) {
            if (regs[3] < 1 || regs[3] > 31) {

                errorMsg = "Invalid_value_for_day";// + regs[1];
            } else if (regs[2] < 1 || regs[2] > 12) {
                errorMsg = "Invalid_value_for_month";// " + regs[2];
            } else if (regs[1] < minYear || regs[1] > maxYear) {
                errorMsg = "Invalid_value_for_year";//: " + regs[3] + " - must be between " + minYear + " and " + maxYear;
            }
        } else {
            errorMsg = "Invalid_date_format";//: " + field;
        }
    } else if (!allowBlank) {
        errorMsg = "Empty_date_not_allowed";
    }

    if (errorMsg != "") {
        check.value = 'false';
        ////document.getElementById(labelid).innerHTML = '<span style="color:#FF0000">' + errorMsg + '</span>';
        //document.getElementById(boxid).style.color = "#FF0000";
        alert(errorMsg);
        //prepare_message(errorMsg , 'fa' , 'wrn');
        setWarningFillForm(errorMsg, 'fa');
        //field.focus();
        console.log(errorMsg);
        return false;
    }
    console.log('end');
    ////document.getElementById(labelid).innerHTML = '<span style="color:#FF0000"></span>';

    check.value = 'true';
    return true;
}


//_____________________________for search

/*
 check numeral for phone in search
 */
function check_numeral(boxid, checkid, value) {

    var message = "";
    var res = true;

    if (!value.match(/^[0-9]*$/)) {
        document.getElementById(checkid).value = "false";
        message = "input_can_be_just_numeric";
        //document.getElementById(boxid).style.color = "#FF0000";
        res = false;
    }

    else {
        document.getElementById(checkid).value = "true";
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('hide');
        message = "";
        //document.getElementById(boxid).style.color = "#000000";

    }

    document.getElementById(boxid).setAttribute('title', __lang.translate(message));
    document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
    $('#' + boxid).tooltip('show');
    return res;

}

function NationalCode(boxid, checkid, value) {
    var message = "";
    // check number
    var res = check_numeral(boxid, checkid, value);
    if (res) {
        if (value.length != 10) {
            document.getElementById(checkid).value = "false";
            message = "this_input_must_have_10_digit";
        } else {
            message = '';
        }
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('show');
    }
}
function nationalID(boxid, checkid, value) {
    var message = "";
    // check number
    var res = check_numeral(boxid, checkid, value);
    if (res) {
        if (value.length != 11) {
            document.getElementById(checkid).value = "false";
            message = "this_input_must_have_11_digit";
        } else {
            message = '';
        }
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('show');
    }
}
/*
 check essential numeral
 */
function check_essential_numeral(boxid, checkid, value) {

    var message = "";
    if (value.length == 0) {
        document.getElementById(checkid).value = "false";
        message = "please_fill_this_filed";
        //document.getElementById(boxid).style.color = "#FF0000";
    }

    else if (!value.match(/^[0-9]*$/)) {
        document.getElementById(checkid).value = "false";
        message = "input_can_be_just_numeric";
        //document.getElementById(boxid).style.color = "#FF0000";

    }

    else {
        document.getElementById(checkid).value = "true";
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('hide');
        message = "";
        //document.getElementById(boxid).style.color = "#000000";

    }
    document.getElementById(boxid).setAttribute('title', __lang.translate(message));
    document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
    $('#' + boxid).tooltip('show');
}


/*
 check name
 */
function check_name_search(boxid, checkid, value) {
    if (value.length != 0) {
        var message = "";

        if (value.length > 50) {

            document.getElementById(checkid).value = "false";
            message = "name_max_length_50";
            //document.getElementById(boxid).style.color = "#FF0000";
        }
        else if ((value.match(/^[a-zA-Z ]*$/))) {//&& !(value.match(/^[\u0600-\u06EF ]*$/)) ) {

            document.getElementById(checkid).value = "true";
            document.getElementById(boxid).setAttribute('title', __lang.translate(message));
            document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
            $('#' + boxid).tooltip('hide');
            message = "";
            document.getElementById(boxid).style.color = "#000";
        }
        else if ((value.match(/^[\u0600-\u06EF ]*$/))) {//&& !(value.match(/^[\u0600-\u06EF ]*$/)) ) {

            document.getElementById(checkid).value = "true";
            document.getElementById(boxid).setAttribute('title', __lang.translate(message));
            document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
            $('#' + boxid).tooltip('hide');
            message = "";
            //document.getElementById(boxid).style.color = "#000";
        }// \u0600-\u06FF is for persian chars

        else if ((value.match(/^[a-zA-Z\u0600-\u06EF  ]*$/))) {
            document.getElementById(checkid).value = "false";
            message = "input_cant_be_mix_of_some_lang";
        }
        else if ((value.match(/^[a-zA-Z0-9\u0600-\u06FF  ]*$/))) {
            document.getElementById(checkid).value = "false";
            message = "input_cant_have_digits";
        }
        else {

            document.getElementById(checkid).value = "true";
            document.getElementById(boxid).setAttribute('title', __lang.translate(message));
            document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
            $('#' + boxid).tooltip('hide');
            message = "";
            //document.getElementById(boxid).style.color = "#000000";
        }

        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('show');
    }

}


function check_zip_code(boxid, checkid, value) {

    var message = "";

    // check length of zipcode number
    if (value.length != 10) {
        message = "zip_code_length";
        document.getElementById(checkid).value = "false";


    }


    // check zip code number just be numeral
    else if (!value.match(/^[0-9]*$/)) {
        message = "input_can_be_just_numeric";
        document.getElementById(checkid).value = "false";


    }

    else {
        document.getElementById(checkid).value = "true";
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('hide');
        message = "";


    }

    document.getElementById(boxid).setAttribute('title', __lang.translate(message));
    document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
    $('#' + boxid).tooltip('show');

}

function check_instaid(boxid, checkid, value) {

    var message = "";

    // check length of zipcode number
    if (value.length > 255) {
        message = "instaid_length";
        document.getElementById(checkid).value = "false";
        ////document.getElementById(boxid).style.color = "#FF0000";

    }

    else {
        document.getElementById(checkid).value = "true";
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('hide');
        message = "";
        ////document.getElementById(boxid).style.color = "#000000";

    }

    document.getElementById(boxid).setAttribute('title', __lang.translate(message));
    document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
    setWarningFillForm(message, 'fa');

}

function check_age(boxid, checkid, value) {

    var message = "";

    // check length of zipcode number
    if (value.length > 3) {
        message = "age_length";
        document.getElementById(checkid).value = "false";
        ////document.getElementById(boxid).style.color = "#FF0000";

    }


    // check zip code number just be numeral
    else if (!value.match(/^[0-9]*$/)) {
        message = "input_can_be_just_numeric";
        document.getElementById(checkid).value = "false";
        ////document.getElementById(boxid).style.color = "#FF0000";

    }

    else {
        document.getElementById(checkid).value = "true";
        document.getElementById(boxid).setAttribute('title', __lang.translate(message));
        document.getElementById(boxid).setAttribute('data-original-title', __lang.translate(message));
        $('#' + boxid).tooltip('hide');
        message = "";
        //document.getElementById(boxid).style.color = "#000000";

    }

    var elem = document.getElementById(boxid);
    elem.setAttribute('title', __lang.translate(message));
    elem.setAttribute('data-original-title', __lang.translate(message));
    $('#' + boxid).tooltip('show');


}


function setWarningFillForm(msg, lang) {
    /*$.when($.get("/Main/lang/lang.xml", function (xml) {
     var xmlDoc = xml;

     var msgt = 'msg';
     var x = xmlDoc.getElementsByTagName(msg); // get all msg tags as array, and x = first msg tag

     //console.log(x);
     if (x.length == 0) {

     //show_modal( msgt , msg  , 'fa');
     return;
     }
     var persianMsg = x[0].firstElementChild.innerHTML; // get persian data of a message
     var englishMsg = x[0].firstElementChild.nextElementSibling.innerHTML; // set y = x's child node
     var type = x[0].lastElementChild.innerHTML;

     //alert(type);

     //console.log( persianMsg );
     switch (lang) {
     case 'fa':
     ////document.getElementById(labelid).innerHTML = '<span style="color:#FF0000">' + persianMsg + '</span>';

     break;
     case 'en':
     ////document.getElementById(labelid).value = englishMsg;

     break;
     default:
     ////document.getElementById(labelid).value = persianMsg;
     break;
     }


     }));*/

}

