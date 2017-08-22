/**
 * Created by peymanvalikhanli on 5/2/17 AD.
 */
/*function btn_login() {
    var email = document.getElementById('txt_user').value;
    var pass = document.getElementById('txt_pass').value;
    var constraints = {from: {email: true}};
    var error_valid = '';
    var chkvalid = new datavalid();
    if (chkvalid.isnull(email) || validate({from: email}, constraints) != undefined) {
        error_valid = error_valid + '<br>' + lang.email_error_datavalid;
    }
    if (chkvalid.isnull(pass)) {
        error_valid = error_valid + '<br>' + lang.pass_error_datavalid;
    }
    if (error_valid != '') {
        message.show(error_valid,"dataval","warning");
        return;
    }
    ajax.sender_data({'email': email, 'pass': pass, 'act': 'login'});
}*/

function login() {
    var txt_user = document.getElementById('txt_user').value;
    var txt_pass = document.getElementById('txt_pass').value;
    ajax.sender_data_json_by_url_callback('/controller/controller_global.php', {
        act: 'login',
        UserName: txt_user,
        Pasword: txt_pass
    }, console.log)
}