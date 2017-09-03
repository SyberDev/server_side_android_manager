var grid_get_contacts_todo;
var get_contacts_todo_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

get_contacts_todo_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.get = function () {
    var param = {"act": "get_contacts_todo_get"};
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_call_back, "POST");
};
//_____________ delete function
get_contacts_todo_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};

get_contacts_todo_connection.delete = function (id) {
    var param = {
        act: "get_contacts_todo_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.delete_call_back, "POST");
};
//_____________ set function
get_contacts_todo_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};

get_contacts_todo_connection.set = function (deviceid, type, reqid, createdby, creationdate, name, contactid, cid) {
    var param = {
        act: "get_contacts_todo_set",
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        name: name,
        contactid: contactid,
        cid: cid
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.set_call_back, "POST");
};
//_____________ grid function
get_contacts_todo_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }

    grid_get_contacts_todo = new PSCO_grid('grid_get_contacts_todo');

    grid_get_contacts_todo.cols = [
        {name: 'id', hidden: false, type: 'text'}, {name: 'deviceid', hidden: false, type: 'text'}, {
            name: 'type',
            hidden: false,
            type: 'text'
        }, {name: 'reqid', hidden: false, type: 'text'}, {
            name: 'createdby',
            hidden: false,
            type: 'text'
        }, {name: 'creationdate', hidden: false, type: 'text'}, {
            name: 'name',
            hidden: false,
            type: 'text'
        }, {name: 'contactid', hidden: false, type: 'text'}, {
            name: 'cid',
            hidden: false,
            type: 'text'
        }, {name: 'number', hidden: false, type: 'text'}];

    grid_get_contacts_todo.RightToLeft = false;

    // grid_get_contacts_todo.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_get_contacts_todo.data = data;

    grid_get_contacts_todo.render();

};
get_contacts_todo_connection.get_grid = function () {
    var param = {"act": "get_contacts_todo_get"};
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_grid_call_back, "POST");
};
//________________get functions
get_contacts_todo_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.get_by_id = function (id) {
    var param = {
        "act": "get_contacts_todo_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_by_id_call_back, "POST");
};

get_contacts_todo_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "get_contacts_todo_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_grid_call_back, "POST");
};
get_contacts_todo_connection.get_by_deviceid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.get_by_deviceid = function (deviceid) {
    var param = {
        "act": "get_contacts_todo_get_by_deviceid",
        deviceid: deviceid
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_by_deviceid_call_back, "POST");
};

get_contacts_todo_connection.get_by_deviceid_grid = function (deviceid) {
    var param = {
        "act": "get_contacts_todo_get_by_deviceid",
        deviceid: deviceid
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_grid_call_back, "POST");
};
get_contacts_todo_connection.get_by_type_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.get_by_type = function (type) {
    var param = {
        "act": "get_contacts_todo_get_by_type",
        type: type
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_by_type_call_back, "POST");
};

get_contacts_todo_connection.get_by_type_grid = function (type) {
    var param = {
        "act": "get_contacts_todo_get_by_type",
        type: type
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_grid_call_back, "POST");
};
get_contacts_todo_connection.get_by_reqid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.get_by_reqid = function (reqid) {
    var param = {
        "act": "get_contacts_todo_get_by_reqid",
        reqid: reqid
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_by_reqid_call_back, "POST");
};

get_contacts_todo_connection.get_by_reqid_grid = function (reqid) {
    var param = {
        "act": "get_contacts_todo_get_by_reqid",
        reqid: reqid
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_grid_call_back, "POST");
};
get_contacts_todo_connection.get_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.get_by_createdby = function (createdby) {
    var param = {
        "act": "get_contacts_todo_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_by_createdby_call_back, "POST");
};

get_contacts_todo_connection.get_by_createdby_grid = function (createdby) {
    var param = {
        "act": "get_contacts_todo_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_grid_call_back, "POST");
};
get_contacts_todo_connection.get_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.get_by_creationdate = function (creationdate) {
    var param = {
        "act": "get_contacts_todo_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_by_creationdate_call_back, "POST");
};

get_contacts_todo_connection.get_by_creationdate_grid = function (creationdate) {
    var param = {
        "act": "get_contacts_todo_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_grid_call_back, "POST");
};
get_contacts_todo_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.get_by_name = function (name) {
    var param = {
        "act": "get_contacts_todo_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_by_name_call_back, "POST");
};

get_contacts_todo_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "get_contacts_todo_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_grid_call_back, "POST");
};
get_contacts_todo_connection.get_by_contactid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.get_by_contactid = function (contactid) {
    var param = {
        "act": "get_contacts_todo_get_by_contactid",
        contactid: contactid
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_by_contactid_call_back, "POST");
};

get_contacts_todo_connection.get_by_contactid_grid = function (contactid) {
    var param = {
        "act": "get_contacts_todo_get_by_contactid",
        contactid: contactid
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_grid_call_back, "POST");
};
get_contacts_todo_connection.get_by_cid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.get_by_cid = function (cid) {
    var param = {
        "act": "get_contacts_todo_get_by_cid",
        cid: cid
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_by_cid_call_back, "POST");
};

get_contacts_todo_connection.get_by_cid_grid = function (cid) {
    var param = {
        "act": "get_contacts_todo_get_by_cid",
        cid: cid
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_grid_call_back, "POST");
};
get_contacts_todo_connection.get_by_number_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.get_by_number = function (number) {
    var param = {
        "act": "get_contacts_todo_get_by_number",
        number: number
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_by_number_call_back, "POST");
};

get_contacts_todo_connection.get_by_number_grid = function (number) {
    var param = {
        "act": "get_contacts_todo_get_by_number",
        number: number
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.get_grid_call_back, "POST");
};

//________________edit functions
get_contacts_todo_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_by_id = function (id, deviceid, type, reqid, createdby, creationdate, name, contactid, cid, number) {
    var param = {
        "act": "get_contacts_todo_edit_by_id",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        name: name,
        contactid: contactid,
        cid: cid,
        number: number
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_by_id_call_back, "POST");
};
get_contacts_todo_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "get_contacts_todo_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_id_by_id_call_back, "POST");
};
get_contacts_todo_connection.edit_by_deviceid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_by_deviceid = function (id, deviceid, type, reqid, createdby, creationdate, name, contactid, cid, number) {
    var param = {
        "act": "get_contacts_todo_edit_by_deviceid",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        name: name,
        contactid: contactid,
        cid: cid,
        number: number
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_by_deviceid_call_back, "POST");
};
get_contacts_todo_connection.edit_deviceid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_deviceid_by_id = function (id, deviceid) {
    var param = {
        "act": "get_contacts_todo_edit_deviceid_by_id",
        deviceid: deviceid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_deviceid_by_id_call_back, "POST");
};
get_contacts_todo_connection.edit_by_type_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_by_type = function (id, deviceid, type, reqid, createdby, creationdate, name, contactid, cid, number) {
    var param = {
        "act": "get_contacts_todo_edit_by_type",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        name: name,
        contactid: contactid,
        cid: cid,
        number: number
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_by_type_call_back, "POST");
};
get_contacts_todo_connection.edit_type_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_type_by_id = function (id, type) {
    var param = {
        "act": "get_contacts_todo_edit_type_by_id",
        type: type,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_type_by_id_call_back, "POST");
};
get_contacts_todo_connection.edit_by_reqid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_by_reqid = function (id, deviceid, type, reqid, createdby, creationdate, name, contactid, cid, number) {
    var param = {
        "act": "get_contacts_todo_edit_by_reqid",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        name: name,
        contactid: contactid,
        cid: cid,
        number: number
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_by_reqid_call_back, "POST");
};
get_contacts_todo_connection.edit_reqid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_reqid_by_id = function (id, reqid) {
    var param = {
        "act": "get_contacts_todo_edit_reqid_by_id",
        reqid: reqid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_reqid_by_id_call_back, "POST");
};
get_contacts_todo_connection.edit_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_by_createdby = function (id, deviceid, type, reqid, createdby, creationdate, name, contactid, cid, number) {
    var param = {
        "act": "get_contacts_todo_edit_by_createdby",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        name: name,
        contactid: contactid,
        cid: cid,
        number: number
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_by_createdby_call_back, "POST");
};
get_contacts_todo_connection.edit_createdby_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_createdby_by_id = function (id, createdby) {
    var param = {
        "act": "get_contacts_todo_edit_createdby_by_id",
        createdby: createdby,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_createdby_by_id_call_back, "POST");
};
get_contacts_todo_connection.edit_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_by_creationdate = function (id, deviceid, type, reqid, createdby, creationdate, name, contactid, cid, number) {
    var param = {
        "act": "get_contacts_todo_edit_by_creationdate",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        name: name,
        contactid: contactid,
        cid: cid,
        number: number
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_by_creationdate_call_back, "POST");
};
get_contacts_todo_connection.edit_creationdate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_creationdate_by_id = function (id, creationdate) {
    var param = {
        "act": "get_contacts_todo_edit_creationdate_by_id",
        creationdate: creationdate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_creationdate_by_id_call_back, "POST");
};
get_contacts_todo_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_by_name = function (id, deviceid, type, reqid, createdby, creationdate, name, contactid, cid, number) {
    var param = {
        "act": "get_contacts_todo_edit_by_name",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        name: name,
        contactid: contactid,
        cid: cid,
        number: number
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_by_name_call_back, "POST");
};
get_contacts_todo_connection.edit_name_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_name_by_id = function (id, name) {
    var param = {
        "act": "get_contacts_todo_edit_name_by_id",
        name: name,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_name_by_id_call_back, "POST");
};
get_contacts_todo_connection.edit_by_contactid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_by_contactid = function (id, deviceid, type, reqid, createdby, creationdate, name, contactid, cid, number) {
    var param = {
        "act": "get_contacts_todo_edit_by_contactid",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        name: name,
        contactid: contactid,
        cid: cid,
        number: number
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_by_contactid_call_back, "POST");
};
get_contacts_todo_connection.edit_contactid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_contactid_by_id = function (id, contactid) {
    var param = {
        "act": "get_contacts_todo_edit_contactid_by_id",
        contactid: contactid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_contactid_by_id_call_back, "POST");
};
get_contacts_todo_connection.edit_by_cid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_by_cid = function (id, deviceid, type, reqid, createdby, creationdate, name, contactid, cid, number) {
    var param = {
        "act": "get_contacts_todo_edit_by_cid",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        name: name,
        contactid: contactid,
        cid: cid,
        number: number
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_by_cid_call_back, "POST");
};
get_contacts_todo_connection.edit_cid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_cid_by_id = function (id, cid) {
    var param = {
        "act": "get_contacts_todo_edit_cid_by_id",
        cid: cid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_cid_by_id_call_back, "POST");
};
get_contacts_todo_connection.edit_by_number_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_by_number = function (id, deviceid, type, reqid, createdby, creationdate, name, contactid, cid, number) {
    var param = {
        "act": "get_contacts_todo_edit_by_number",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        name: name,
        contactid: contactid,
        cid: cid,
        number: number
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_by_number_call_back, "POST");
};
get_contacts_todo_connection.edit_number_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_contacts_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_contacts_todo_connection.edit_number_by_id = function (id, number) {
    var param = {
        "act": "get_contacts_todo_edit_number_by_id",
        number: number,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_contacts_todo_connection.controller_url, param, get_contacts_todo_connection.edit_number_by_id_call_back, "POST");
};