var grid_get_contacts;
var get_contacts_connection = {
    controller_url: 'controller/controller_get_contacts.php'
    , debug_mode: false
    //controller/controller_users.php
};

get_contacts_connection.get_call_back = function (data) {
    var Tag = '<div><ul>';
    for (var i = 0; i < data.length; i++) {
        Tag += '<li onclick="getContactNumb(this)" data-contactID="' + data[i].number + '"><h5>' + data[i].name + '</h5><h6 style="text-align: left;">'+data[i].number+'</h6></li>';
    }
    Tag += '</ul></div>';
    document.getElementById('phoneBook').innerHTML = Tag;
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.get = function () {
    var param = {"act": "get_contacts_get_by_deviceid"};
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_call_back, "POST");
};
//_____________ delete function
get_contacts_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};

get_contacts_connection.delete = function (id) {
    var param = {
        act: "get_contacts_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.delete_call_back, "POST");
};
//_____________ set function
get_contacts_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};

get_contacts_connection.set = function (name, contactid, deviceid, cid, number, createdby) {
    var param = {
        act: "get_contacts_set",
        name: name, contactid: contactid, deviceid: deviceid, cid: cid, number: number, createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.set_call_back, "POST");
};
//_____________ grid function
get_contacts_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }

    grid_get_contacts = new PSCO_grid('grid_get_contacts');

    grid_get_contacts.cols = [
        {name: 'id', hidden: true, type: 'text'},
        {name: 'name', hidden: false, type: 'text'},
        {name: 'contactid',
            hidden: true,
            type: 'text'
        },
        {name: 'deviceid', hidden: true, type: 'text'},
        {name: 'cid', hidden: true, type: 'text'},
        {name: 'number',
            hidden: false,
            type: 'text'
        },
        {name: 'createdby', hidden: true, type: 'text'},
        {name: 'creationdate', hidden: false, type: 'text'}];

    grid_get_contacts.RightToLeft = true;

    // grid_get_contacts.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_get_contacts.data = data;

    grid_get_contacts.render();

};
get_contacts_connection.get_grid = function () {
    var param = {"act": "get_contacts_get"};
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_grid_call_back, "POST");
};
//________________get functions
get_contacts_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.get_by_id = function (id) {
    var param = {
        "act": "get_contacts_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_by_id_call_back, "POST");
};

get_contacts_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "get_contacts_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_grid_call_back, "POST");
};
get_contacts_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.get_by_name = function (name) {
    var param = {
        "act": "get_contacts_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_by_name_call_back, "POST");
};

get_contacts_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "get_contacts_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_grid_call_back, "POST");
};
get_contacts_connection.get_by_contactid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.get_by_contactid = function (contactid) {
    var param = {
        "act": "get_contacts_get_by_contactid",
        contactid: contactid
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_by_contactid_call_back, "POST");
};

get_contacts_connection.get_by_contactid_grid = function (contactid) {
    var param = {
        "act": "get_contacts_get_by_contactid",
        contactid: contactid
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_grid_call_back, "POST");
};
get_contacts_connection.get_by_deviceid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.get_by_deviceid = function (deviceid) {
    var param = {
        "act": "get_contacts_get_by_deviceid",
        deviceid: deviceid
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_by_deviceid_call_back, "POST");
};

get_contacts_connection.get_by_deviceid_grid = function (deviceid) {
    var param = {
        "act": "get_contacts_get_by_deviceid",
        deviceid: deviceid
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_grid_call_back, "POST");
};
get_contacts_connection.get_by_cid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.get_by_cid = function (cid) {
    var param = {
        "act": "get_contacts_get_by_cid",
        cid: cid
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_by_cid_call_back, "POST");
};

get_contacts_connection.get_by_cid_grid = function (cid) {
    var param = {
        "act": "get_contacts_get_by_cid",
        cid: cid
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_grid_call_back, "POST");
};
get_contacts_connection.get_by_number_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.get_by_number = function (number) {
    var param = {
        "act": "get_contacts_get_by_number",
        number: number
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_by_number_call_back, "POST");
};

get_contacts_connection.get_by_number_grid = function (number) {
    var param = {
        "act": "get_contacts_get_by_number",
        number: number
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_grid_call_back, "POST");
};
get_contacts_connection.get_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.get_by_createdby = function (createdby) {
    var param = {
        "act": "get_contacts_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_by_createdby_call_back, "POST");
};

get_contacts_connection.get_by_createdby_grid = function (createdby) {
    var param = {
        "act": "get_contacts_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_grid_call_back, "POST");
};
get_contacts_connection.get_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.get_by_creationdate = function (creationdate) {
    var param = {
        "act": "get_contacts_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_by_creationdate_call_back, "POST");
};

get_contacts_connection.get_by_creationdate_grid = function (creationdate) {
    var param = {
        "act": "get_contacts_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.get_grid_call_back, "POST");
};

//________________edit functions
get_contacts_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.edit_by_id = function (id, name, contactid, deviceid, cid, number, createdby, creationdate) {
    var param = {
        "act": "get_contacts_edit_by_id",
        id: id,
        name: name,
        contactid: contactid,
        deviceid: deviceid,
        cid: cid,
        number: number,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.edit_by_id_call_back, "POST");
};
get_contacts_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "get_contacts_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.edit_id_by_id_call_back, "POST");
};
get_contacts_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.edit_by_name = function (id, name, contactid, deviceid, cid, number, createdby, creationdate) {
    var param = {
        "act": "get_contacts_edit_by_name",
        id: id,
        name: name,
        contactid: contactid,
        deviceid: deviceid,
        cid: cid,
        number: number,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.edit_by_name_call_back, "POST");
};
get_contacts_connection.edit_name_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.edit_name_by_id = function (id, name) {
    var param = {
        "act": "get_contacts_edit_name_by_id",
        name: name,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.edit_name_by_id_call_back, "POST");
};
get_contacts_connection.edit_by_contactid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.edit_by_contactid = function (id, name, contactid, deviceid, cid, number, createdby, creationdate) {
    var param = {
        "act": "get_contacts_edit_by_contactid",
        id: id,
        name: name,
        contactid: contactid,
        deviceid: deviceid,
        cid: cid,
        number: number,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.edit_by_contactid_call_back, "POST");
};
get_contacts_connection.edit_contactid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.edit_contactid_by_id = function (id, contactid) {
    var param = {
        "act": "get_contacts_edit_contactid_by_id",
        contactid: contactid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.edit_contactid_by_id_call_back, "POST");
};
get_contacts_connection.edit_by_deviceid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.edit_by_deviceid = function (id, name, contactid, deviceid, cid, number, createdby, creationdate) {
    var param = {
        "act": "get_contacts_edit_by_deviceid",
        id: id,
        name: name,
        contactid: contactid,
        deviceid: deviceid,
        cid: cid,
        number: number,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.edit_by_deviceid_call_back, "POST");
};
get_contacts_connection.edit_deviceid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.edit_deviceid_by_id = function (id, deviceid) {
    var param = {
        "act": "get_contacts_edit_deviceid_by_id",
        deviceid: deviceid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.edit_deviceid_by_id_call_back, "POST");
};
get_contacts_connection.edit_by_cid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.edit_by_cid = function (id, name, contactid, deviceid, cid, number, createdby, creationdate) {
    var param = {
        "act": "get_contacts_edit_by_cid",
        id: id,
        name: name,
        contactid: contactid,
        deviceid: deviceid,
        cid: cid,
        number: number,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.edit_by_cid_call_back, "POST");
};
get_contacts_connection.edit_cid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.edit_cid_by_id = function (id, cid) {
    var param = {
        "act": "get_contacts_edit_cid_by_id",
        cid: cid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.edit_cid_by_id_call_back, "POST");
};
get_contacts_connection.edit_by_number_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.edit_by_number = function (id, name, contactid, deviceid, cid, number, createdby, creationdate) {
    var param = {
        "act": "get_contacts_edit_by_number",
        id: id,
        name: name,
        contactid: contactid,
        deviceid: deviceid,
        cid: cid,
        number: number,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.edit_by_number_call_back, "POST");
};
get_contacts_connection.edit_number_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.edit_number_by_id = function (id, number) {
    var param = {
        "act": "get_contacts_edit_number_by_id",
        number: number,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.edit_number_by_id_call_back, "POST");
};
get_contacts_connection.edit_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.edit_by_createdby = function (id, name, contactid, deviceid, cid, number, createdby, creationdate) {
    var param = {
        "act": "get_contacts_edit_by_createdby",
        id: id,
        name: name,
        contactid: contactid,
        deviceid: deviceid,
        cid: cid,
        number: number,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.edit_by_createdby_call_back, "POST");
};
get_contacts_connection.edit_createdby_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.edit_createdby_by_id = function (id, createdby) {
    var param = {
        "act": "get_contacts_edit_createdby_by_id",
        createdby: createdby,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.edit_createdby_by_id_call_back, "POST");
};
get_contacts_connection.edit_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.edit_by_creationdate = function (id, name, contactid, deviceid, cid, number, createdby, creationdate) {
    var param = {
        "act": "get_contacts_edit_by_creationdate",
        id: id,
        name: name,
        contactid: contactid,
        deviceid: deviceid,
        cid: cid,
        number: number,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.edit_by_creationdate_call_back, "POST");
};
get_contacts_connection.edit_creationdate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_connection.edit_creationdate_by_id = function (id, creationdate) {
    var param = {
        "act": "get_contacts_edit_creationdate_by_id",
        creationdate: creationdate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_connection.controller_url, param, get_contacts_connection.edit_creationdate_by_id_call_back, "POST");
};