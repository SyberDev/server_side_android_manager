var grid_request_device;
var request_device_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

request_device_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.get = function () {
    var param = {"act": "request_device_get"};
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.get_call_back, "POST");
};
//_____________ delete function
request_device_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};

request_device_connection.delete = function (id) {
    var param = {
        act: "request_device_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.delete_call_back, "POST");
};
//_____________ set function
request_device_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};

request_device_connection.set = function (deviceid, type, reqid, createdby) {
    var param = {
        act: "request_device_set",
        deviceid: deviceid, type: type, reqid: reqid, createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.set_call_back, "POST");
};
//_____________ grid function
request_device_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }

    grid_request_device = new PSCO_grid('grid_request_device');

    grid_request_device.cols = [
        {name: 'id', hidden: false, type: 'text'}, {name: 'deviceid', hidden: false, type: 'text'}, {
            name: 'type',
            hidden: false,
            type: 'text'
        }, {name: 'reqid', hidden: false, type: 'text'}, {
            name: 'createdby',
            hidden: false,
            type: 'text'
        }, {name: 'creationdate', hidden: false, type: 'text'}];

    grid_request_device.RightToLeft = false;

    // grid_request_device.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_request_device.data = data;

    grid_request_device.render();

};
request_device_connection.get_grid = function () {
    var param = {"act": "request_device_get"};
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.get_grid_call_back, "POST");
};
//________________get functions
request_device_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.get_by_id = function (id) {
    var param = {
        "act": "request_device_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.get_by_id_call_back, "POST");
};

request_device_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "request_device_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.get_grid_call_back, "POST");
};
request_device_connection.get_by_deviceid_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.get_by_deviceid = function (deviceid) {
    var param = {
        "act": "request_device_get_by_deviceid",
        deviceid: deviceid
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.get_by_deviceid_call_back, "POST");
};

request_device_connection.get_by_deviceid_grid = function (deviceid) {
    var param = {
        "act": "request_device_get_by_deviceid",
        deviceid: deviceid
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.get_grid_call_back, "POST");
};
request_device_connection.get_by_type_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.get_by_type = function (type) {
    var param = {
        "act": "request_device_get_by_type",
        type: type
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.get_by_type_call_back, "POST");
};

request_device_connection.get_by_type_grid = function (type) {
    var param = {
        "act": "request_device_get_by_type",
        type: type
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.get_grid_call_back, "POST");
};
request_device_connection.get_by_reqid_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.get_by_reqid = function (reqid) {
    var param = {
        "act": "request_device_get_by_reqid",
        reqid: reqid
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.get_by_reqid_call_back, "POST");
};

request_device_connection.get_by_reqid_grid = function (reqid) {
    var param = {
        "act": "request_device_get_by_reqid",
        reqid: reqid
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.get_grid_call_back, "POST");
};
request_device_connection.get_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.get_by_createdby = function (createdby) {
    var param = {
        "act": "request_device_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.get_by_createdby_call_back, "POST");
};

request_device_connection.get_by_createdby_grid = function (createdby) {
    var param = {
        "act": "request_device_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.get_grid_call_back, "POST");
};
request_device_connection.get_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.get_by_creationdate = function (creationdate) {
    var param = {
        "act": "request_device_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.get_by_creationdate_call_back, "POST");
};

request_device_connection.get_by_creationdate_grid = function (creationdate) {
    var param = {
        "act": "request_device_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.get_grid_call_back, "POST");
};

//________________edit functions
request_device_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.edit_by_id = function (id, deviceid, type, reqid, createdby, creationdate) {
    var param = {
        "act": "request_device_edit_by_id",
        id: id, deviceid: deviceid, type: type, reqid: reqid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.edit_by_id_call_back, "POST");
};
request_device_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "request_device_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.edit_id_by_id_call_back, "POST");
};
request_device_connection.edit_by_deviceid_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.edit_by_deviceid = function (id, deviceid, type, reqid, createdby, creationdate) {
    var param = {
        "act": "request_device_edit_by_deviceid",
        id: id, deviceid: deviceid, type: type, reqid: reqid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.edit_by_deviceid_call_back, "POST");
};
request_device_connection.edit_deviceid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.edit_deviceid_by_id = function (id, deviceid) {
    var param = {
        "act": "request_device_edit_deviceid_by_id",
        deviceid: deviceid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.edit_deviceid_by_id_call_back, "POST");
};
request_device_connection.edit_by_type_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.edit_by_type = function (id, deviceid, type, reqid, createdby, creationdate) {
    var param = {
        "act": "request_device_edit_by_type",
        id: id, deviceid: deviceid, type: type, reqid: reqid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.edit_by_type_call_back, "POST");
};
request_device_connection.edit_type_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.edit_type_by_id = function (id, type) {
    var param = {
        "act": "request_device_edit_type_by_id",
        type: type,
        id: id
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.edit_type_by_id_call_back, "POST");
};
request_device_connection.edit_by_reqid_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.edit_by_reqid = function (id, deviceid, type, reqid, createdby, creationdate) {
    var param = {
        "act": "request_device_edit_by_reqid",
        id: id, deviceid: deviceid, type: type, reqid: reqid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.edit_by_reqid_call_back, "POST");
};
request_device_connection.edit_reqid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.edit_reqid_by_id = function (id, reqid) {
    var param = {
        "act": "request_device_edit_reqid_by_id",
        reqid: reqid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.edit_reqid_by_id_call_back, "POST");
};
request_device_connection.edit_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.edit_by_createdby = function (id, deviceid, type, reqid, createdby, creationdate) {
    var param = {
        "act": "request_device_edit_by_createdby",
        id: id, deviceid: deviceid, type: type, reqid: reqid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.edit_by_createdby_call_back, "POST");
};
request_device_connection.edit_createdby_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.edit_createdby_by_id = function (id, createdby) {
    var param = {
        "act": "request_device_edit_createdby_by_id",
        createdby: createdby,
        id: id
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.edit_createdby_by_id_call_back, "POST");
};
request_device_connection.edit_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.edit_by_creationdate = function (id, deviceid, type, reqid, createdby, creationdate) {
    var param = {
        "act": "request_device_edit_by_creationdate",
        id: id, deviceid: deviceid, type: type, reqid: reqid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.edit_by_creationdate_call_back, "POST");
};
request_device_connection.edit_creationdate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (request_device_connection.debug_mode) {
        console.log(data);
    }
};
request_device_connection.edit_creationdate_by_id = function (id, creationdate) {
    var param = {
        "act": "request_device_edit_creationdate_by_id",
        creationdate: creationdate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(request_device_connection.controller_url, param, request_device_connection.edit_creationdate_by_id_call_back, "POST");
};