var grid_get_sms_todo;
var get_sms_todo_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

get_sms_todo_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get = function () {
    var param = {"act": "get_sms_todo_get"};
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_call_back, "POST");
};
//_____________ delete function
get_sms_todo_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};

get_sms_todo_connection.delete = function (id) {
    var param = {
        act: "get_sms_todo_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.delete_call_back, "POST");
};
//_____________ set function
get_sms_todo_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};

get_sms_todo_connection.set = function (deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy) {
    var param = {
        act: "get_sms_todo_set",
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.set_call_back, "POST");
};
//_____________ grid function
get_sms_todo_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }

    grid_get_sms_todo = new PSCO_grid('grid_get_sms_todo');

    grid_get_sms_todo.cols = [
        {name: 'id', hidden: false, type: 'text'}, {name: 'deviceid', hidden: false, type: 'text'}, {
            name: 'type',
            hidden: false,
            type: 'text'
        }, {name: 'reqid', hidden: false, type: 'text'}, {
            name: 'createdby',
            hidden: false,
            type: 'text'
        }, {name: 'creationdate', hidden: false, type: 'text'}, {
            name: 'sms_id',
            hidden: false,
            type: 'text'
        }, {name: 'number', hidden: false, type: 'text'}, {name: 'text', hidden: false, type: 'text'}, {
            name: 'smsId',
            hidden: false,
            type: 'text'
        }, {name: 'registerDate', hidden: false, type: 'text'}, {
            name: 'status',
            hidden: false,
            type: 'text'
        }, {name: 'sms_type', hidden: false, type: 'text'}, {
            name: 'device_id',
            hidden: false,
            type: 'text'
        }, {name: 'reqnumber', hidden: false, type: 'text'}, {
            name: 'sms_createdBy',
            hidden: false,
            type: 'text'
        }, {name: 'sms_creationDate', hidden: false, type: 'text'}];

    grid_get_sms_todo.RightToLeft = false;

    // grid_get_sms_todo.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_get_sms_todo.data = data;

    grid_get_sms_todo.render();

};
get_sms_todo_connection.get_grid = function () {
    var param = {"act": "get_sms_todo_get"};
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
//________________get functions
get_sms_todo_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_id = function (id) {
    var param = {
        "act": "get_sms_todo_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_id_call_back, "POST");
};

get_sms_todo_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "get_sms_todo_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
get_sms_todo_connection.get_by_deviceid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_deviceid = function (deviceid) {
    var param = {
        "act": "get_sms_todo_get_by_deviceid",
        deviceid: deviceid
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_deviceid_call_back, "POST");
};

get_sms_todo_connection.get_by_deviceid_grid = function (deviceid) {
    var param = {
        "act": "get_sms_todo_get_by_deviceid",
        deviceid: deviceid
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
get_sms_todo_connection.get_by_type_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_type = function (type) {
    var param = {
        "act": "get_sms_todo_get_by_type",
        type: type
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_type_call_back, "POST");
};

get_sms_todo_connection.get_by_type_grid = function (type) {
    var param = {
        "act": "get_sms_todo_get_by_type",
        type: type
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
get_sms_todo_connection.get_by_reqid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_reqid = function (reqid) {
    var param = {
        "act": "get_sms_todo_get_by_reqid",
        reqid: reqid
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_reqid_call_back, "POST");
};

get_sms_todo_connection.get_by_reqid_grid = function (reqid) {
    var param = {
        "act": "get_sms_todo_get_by_reqid",
        reqid: reqid
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
get_sms_todo_connection.get_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_createdby = function (createdby) {
    var param = {
        "act": "get_sms_todo_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_createdby_call_back, "POST");
};

get_sms_todo_connection.get_by_createdby_grid = function (createdby) {
    var param = {
        "act": "get_sms_todo_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
get_sms_todo_connection.get_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_creationdate = function (creationdate) {
    var param = {
        "act": "get_sms_todo_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_creationdate_call_back, "POST");
};

get_sms_todo_connection.get_by_creationdate_grid = function (creationdate) {
    var param = {
        "act": "get_sms_todo_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
get_sms_todo_connection.get_by_sms_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_sms_id = function (sms_id) {
    var param = {
        "act": "get_sms_todo_get_by_sms_id",
        sms_id: sms_id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_sms_id_call_back, "POST");
};

get_sms_todo_connection.get_by_sms_id_grid = function (sms_id) {
    var param = {
        "act": "get_sms_todo_get_by_sms_id",
        sms_id: sms_id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
get_sms_todo_connection.get_by_number_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_number = function (number) {
    var param = {
        "act": "get_sms_todo_get_by_number",
        number: number
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_number_call_back, "POST");
};

get_sms_todo_connection.get_by_number_grid = function (number) {
    var param = {
        "act": "get_sms_todo_get_by_number",
        number: number
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
get_sms_todo_connection.get_by_text_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_text = function (text) {
    var param = {
        "act": "get_sms_todo_get_by_text",
        text: text
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_text_call_back, "POST");
};

get_sms_todo_connection.get_by_text_grid = function (text) {
    var param = {
        "act": "get_sms_todo_get_by_text",
        text: text
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
get_sms_todo_connection.get_by_smsId_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_smsId = function (smsId) {
    var param = {
        "act": "get_sms_todo_get_by_smsId",
        smsId: smsId
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_smsId_call_back, "POST");
};

get_sms_todo_connection.get_by_smsId_grid = function (smsId) {
    var param = {
        "act": "get_sms_todo_get_by_smsId",
        smsId: smsId
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
get_sms_todo_connection.get_by_registerDate_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_registerDate = function (registerDate) {
    var param = {
        "act": "get_sms_todo_get_by_registerDate",
        registerDate: registerDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_registerDate_call_back, "POST");
};

get_sms_todo_connection.get_by_registerDate_grid = function (registerDate) {
    var param = {
        "act": "get_sms_todo_get_by_registerDate",
        registerDate: registerDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
get_sms_todo_connection.get_by_status_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_status = function (status) {
    var param = {
        "act": "get_sms_todo_get_by_status",
        status: status
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_status_call_back, "POST");
};

get_sms_todo_connection.get_by_status_grid = function (status) {
    var param = {
        "act": "get_sms_todo_get_by_status",
        status: status
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
get_sms_todo_connection.get_by_sms_type_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_sms_type = function (sms_type) {
    var param = {
        "act": "get_sms_todo_get_by_sms_type",
        sms_type: sms_type
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_sms_type_call_back, "POST");
};

get_sms_todo_connection.get_by_sms_type_grid = function (sms_type) {
    var param = {
        "act": "get_sms_todo_get_by_sms_type",
        sms_type: sms_type
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
get_sms_todo_connection.get_by_device_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_device_id = function (device_id) {
    var param = {
        "act": "get_sms_todo_get_by_device_id",
        device_id: device_id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_device_id_call_back, "POST");
};

get_sms_todo_connection.get_by_device_id_grid = function (device_id) {
    var param = {
        "act": "get_sms_todo_get_by_device_id",
        device_id: device_id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
get_sms_todo_connection.get_by_reqnumber_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_reqnumber = function (reqnumber) {
    var param = {
        "act": "get_sms_todo_get_by_reqnumber",
        reqnumber: reqnumber
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_reqnumber_call_back, "POST");
};

get_sms_todo_connection.get_by_reqnumber_grid = function (reqnumber) {
    var param = {
        "act": "get_sms_todo_get_by_reqnumber",
        reqnumber: reqnumber
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
get_sms_todo_connection.get_by_sms_createdBy_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_sms_createdBy = function (sms_createdBy) {
    var param = {
        "act": "get_sms_todo_get_by_sms_createdBy",
        sms_createdBy: sms_createdBy
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_sms_createdBy_call_back, "POST");
};

get_sms_todo_connection.get_by_sms_createdBy_grid = function (sms_createdBy) {
    var param = {
        "act": "get_sms_todo_get_by_sms_createdBy",
        sms_createdBy: sms_createdBy
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};
get_sms_todo_connection.get_by_sms_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.get_by_sms_creationDate = function (sms_creationDate) {
    var param = {
        "act": "get_sms_todo_get_by_sms_creationDate",
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_by_sms_creationDate_call_back, "POST");
};

get_sms_todo_connection.get_by_sms_creationDate_grid = function (sms_creationDate) {
    var param = {
        "act": "get_sms_todo_get_by_sms_creationDate",
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.get_grid_call_back, "POST");
};

//________________edit functions
get_sms_todo_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_id = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_id",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "get_sms_todo_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_id_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_by_deviceid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_deviceid = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_deviceid",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_deviceid_call_back, "POST");
};
get_sms_todo_connection.edit_deviceid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_deviceid_by_id = function (id, deviceid) {
    var param = {
        "act": "get_sms_todo_edit_deviceid_by_id",
        deviceid: deviceid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_deviceid_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_by_type_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_type = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_type",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_type_call_back, "POST");
};
get_sms_todo_connection.edit_type_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_type_by_id = function (id, type) {
    var param = {
        "act": "get_sms_todo_edit_type_by_id",
        type: type,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_type_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_by_reqid_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_reqid = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_reqid",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_reqid_call_back, "POST");
};
get_sms_todo_connection.edit_reqid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_reqid_by_id = function (id, reqid) {
    var param = {
        "act": "get_sms_todo_edit_reqid_by_id",
        reqid: reqid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_reqid_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_createdby = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_createdby",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_createdby_call_back, "POST");
};
get_sms_todo_connection.edit_createdby_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_createdby_by_id = function (id, createdby) {
    var param = {
        "act": "get_sms_todo_edit_createdby_by_id",
        createdby: createdby,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_createdby_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_creationdate = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_creationdate",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_creationdate_call_back, "POST");
};
get_sms_todo_connection.edit_creationdate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_creationdate_by_id = function (id, creationdate) {
    var param = {
        "act": "get_sms_todo_edit_creationdate_by_id",
        creationdate: creationdate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_creationdate_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_by_sms_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_sms_id = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_sms_id",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_sms_id_call_back, "POST");
};
get_sms_todo_connection.edit_sms_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_sms_id_by_id = function (id, sms_id) {
    var param = {
        "act": "get_sms_todo_edit_sms_id_by_id",
        sms_id: sms_id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_sms_id_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_by_number_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_number = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_number",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_number_call_back, "POST");
};
get_sms_todo_connection.edit_number_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_number_by_id = function (id, number) {
    var param = {
        "act": "get_sms_todo_edit_number_by_id",
        number: number,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_number_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_by_text_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_text = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_text",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_text_call_back, "POST");
};
get_sms_todo_connection.edit_text_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_text_by_id = function (id, text) {
    var param = {
        "act": "get_sms_todo_edit_text_by_id",
        text: text,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_text_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_by_smsId_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_smsId = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_smsId",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_smsId_call_back, "POST");
};
get_sms_todo_connection.edit_smsId_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_smsId_by_id = function (id, smsId) {
    var param = {
        "act": "get_sms_todo_edit_smsId_by_id",
        smsId: smsId,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_smsId_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_by_registerDate_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_registerDate = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_registerDate",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_registerDate_call_back, "POST");
};
get_sms_todo_connection.edit_registerDate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_registerDate_by_id = function (id, registerDate) {
    var param = {
        "act": "get_sms_todo_edit_registerDate_by_id",
        registerDate: registerDate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_registerDate_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_by_status_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_status = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_status",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_status_call_back, "POST");
};
get_sms_todo_connection.edit_status_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_status_by_id = function (id, status) {
    var param = {
        "act": "get_sms_todo_edit_status_by_id",
        status: status,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_status_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_by_sms_type_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_sms_type = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_sms_type",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_sms_type_call_back, "POST");
};
get_sms_todo_connection.edit_sms_type_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_sms_type_by_id = function (id, sms_type) {
    var param = {
        "act": "get_sms_todo_edit_sms_type_by_id",
        sms_type: sms_type,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_sms_type_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_by_device_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_device_id = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_device_id",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_device_id_call_back, "POST");
};
get_sms_todo_connection.edit_device_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_device_id_by_id = function (id, device_id) {
    var param = {
        "act": "get_sms_todo_edit_device_id_by_id",
        device_id: device_id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_device_id_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_by_reqnumber_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_reqnumber = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_reqnumber",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_reqnumber_call_back, "POST");
};
get_sms_todo_connection.edit_reqnumber_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_reqnumber_by_id = function (id, reqnumber) {
    var param = {
        "act": "get_sms_todo_edit_reqnumber_by_id",
        reqnumber: reqnumber,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_reqnumber_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_by_sms_createdBy_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_sms_createdBy = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_sms_createdBy",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_sms_createdBy_call_back, "POST");
};
get_sms_todo_connection.edit_sms_createdBy_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_sms_createdBy_by_id = function (id, sms_createdBy) {
    var param = {
        "act": "get_sms_todo_edit_sms_createdBy_by_id",
        sms_createdBy: sms_createdBy,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_sms_createdBy_by_id_call_back, "POST");
};
get_sms_todo_connection.edit_by_sms_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_by_sms_creationDate = function (id, deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_by_sms_creationDate",
        id: id,
        deviceid: deviceid,
        type: type,
        reqid: reqid,
        createdby: createdby,
        creationdate: creationdate,
        sms_id: sms_id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        sms_type: sms_type,
        device_id: device_id,
        reqnumber: reqnumber,
        sms_createdBy: sms_createdBy,
        sms_creationDate: sms_creationDate
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_by_sms_creationDate_call_back, "POST");
};
get_sms_todo_connection.edit_sms_creationDate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (get_sms_todo_connection.debug_mode) {
        console.log(data);
    }
};
get_sms_todo_connection.edit_sms_creationDate_by_id = function (id, sms_creationDate) {
    var param = {
        "act": "get_sms_todo_edit_sms_creationDate_by_id",
        sms_creationDate: sms_creationDate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(get_sms_todo_connection.controller_url, param, get_sms_todo_connection.edit_sms_creationDate_by_id_call_back, "POST");
};