/**
 * Created by peymanvalikhanli on 4/17/17 AD.
 */
function get_elem_id(id) {
    return document.getElementById(id);
}
function get_elem_name(name) {
    return document.getElementsByName(name);
}
function get_elem_class(classname) {
    return document.getElementsByClassName(classname);
}

function set_elem(elem) {
    return document.createElement(elem);
}

// ---- check login
var userDetails = {};
function CheckLogin(CallBack) {
    if (CallBack == null)
        CallBack = redirect;
    ajax.sender_data_json_by_url_callback('controller/controller_global.php', {act: 'check_login'}, CallBack)
}
function redirect(Data) {
    if (Data == undefined || Data == null || Data == '') {
        window.location.href = 'login.html';
    } else {
        userDetails = Data;
    }
}

setInterval(function () {
    try {
        CheckLogin();
    }catch (e){}
}, 120000);


//----- get query string
function get_query_string_by_param(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


//----- get data (for fill form)
function GetEditData(queryStringName, param, url) {
    var queryStringValue = get_query_string_by_param(queryStringName);

    if (queryStringValue != null && queryStringValue != '') {
        // create hidden input for id
        var idInput = document.createElement('input');
        idInput.setAttribute('type', 'hidden');
        idInput.setAttribute('id', 'ID');
        document.getElementById('saveForm').appendChild(idInput);

        //----- set id in param
        param[queryStringName] = queryStringValue;

        if (url == null) {
            url = ajax.url;
        }
        ajax.sender_data_json_by_url_callback(url, param, fillForm)
    }
}

//----- fill Edit form
var fillDone = false;
function fillForm(Data) {
    var DataKeys;
    for (var i = 0; i < Data.length; i++) {
        DataKeys = Object.keys(Data[i]);
        for (var a = 0; a < DataKeys.length; a++) {
            try {
                document.getElementById(DataKeys[a]).value = Data[i][DataKeys[a]];
            } catch (e) {
            }
        }
    }
    fillDone = true;
}


//----- set form value
function setForm(FormId, act, url, callback) {
    var check = document.querySelectorAll('.form-group input[type="hidden"]');
    var Flag = true;
    for (var i = 0; i < check.length; i++) {
        if (check[i].value == 'false') {
            Flag = false;
            $('.form-group [data-original-title]').tooltip('show');
            document.getElementById('Error').innerText = __lang.translate('fill_inputs_correctly');
            setTimeout(function () {
                document.getElementById('Error').innerText = '';
            }, 5000);
            break;

        }
    }
    if (Flag) {
        var values = document.querySelectorAll('#' + FormId + ' input , #' + FormId + ' select');

        var parameters = {};
        var paramename;
        for (var i = 0; i < values.length; i++) {
            paramename = values[i].getAttribute('data-realID');
            if (paramename == '' || paramename == null) {
                paramename = values[i].getAttribute('id');
            }
            parameters[paramename] = values[i].value;
        }
        parameters['act'] = act;
        if (callback == null) {
            ajax.sender_data_json_by_url_callback(url, parameters, console.log);
        } else {
            ajax.sender_data_json_by_url_callback(url, parameters, callback);
        }
    }

}

//---- create select

function createSelectTags(Data, id, valueParam, textParam) {
    if (valueParam == null) {
        valueParam = 'ID';
    }
    if (textParam == null) {
        textParam = 'name';
    }
    var dataKeys = Object.keys(Data);
    var opt = '<option value="">انتخاب کنید</option>';
    for (var i = 0; i < dataKeys.length; i++) {
        opt += '<option value="' + Data[dataKeys[i]][valueParam] + '">' + Data[dataKeys[i]][textParam] + '</option>';
    }
    document.getElementById(id).innerHTML = opt;
}

