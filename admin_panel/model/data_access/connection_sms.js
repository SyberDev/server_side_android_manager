var grid_sms;
var sms_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

sms_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.get = function () {
    var param = {"act": "sms_get"};
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_call_back, "POST");
};
//_____________ delete function
sms_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};

sms_connection.delete = function (id) {
    var param = {
        act: "sms_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.delete_call_back, "POST");
};
//_____________ set function
sms_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};

sms_connection.set = function (number, text, smsId, registerDate, status, type, deviceid, reqnumber, createdby) {
    var param = {
        act: "sms_set",
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        type: type,
        deviceid: deviceid,
        reqnumber: reqnumber,
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.set_call_back, "POST");
};
//_____________ grid function
sms_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }

    grid_sms = new PSCO_grid('grid_sms');

    grid_sms.cols = [
        {name: 'id', hidden: false, type: 'text'}, {name: 'number', hidden: false, type: 'text'}, {
            name: 'text',
            hidden: false,
            type: 'text'
        }, {name: 'smsId', hidden: false, type: 'text'}, {
            name: 'registerDate',
            hidden: false,
            type: 'text'
        }, {name: 'status', hidden: false, type: 'text'}, {
            name: 'type',
            hidden: false,
            type: 'text'
        }, {name: 'deviceid', hidden: false, type: 'text'}, {
            name: 'reqnumber',
            hidden: false,
            type: 'text'
        }, {name: 'createdby', hidden: false, type: 'text'}, {name: 'creationdate', hidden: false, type: 'text'}];

    grid_sms.RightToLeft = false;

    // grid_sms.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_sms.data = data;

    grid_sms.render();

};
sms_connection.get_grid = function () {
    var param = {"act": "sms_get"};
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_grid_call_back, "POST");
};
//________________get functions
sms_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.get_by_id = function (id) {
    var param = {
        "act": "sms_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_by_id_call_back, "POST");
};

sms_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "sms_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_grid_call_back, "POST");
};
sms_connection.get_by_number_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.get_by_number = function (number) {
    var param = {
        "act": "sms_get_by_number",
        number: number
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_by_number_call_back, "POST");
};

sms_connection.get_by_number_grid = function (number) {
    var param = {
        "act": "sms_get_by_number",
        number: number
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_grid_call_back, "POST");
};
sms_connection.get_by_text_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.get_by_text = function (text) {
    var param = {
        "act": "sms_get_by_text",
        text: text
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_by_text_call_back, "POST");
};

sms_connection.get_by_text_grid = function (text) {
    var param = {
        "act": "sms_get_by_text",
        text: text
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_grid_call_back, "POST");
};
sms_connection.get_by_smsId_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.get_by_smsId = function (smsId) {
    var param = {
        "act": "sms_get_by_smsId",
        smsId: smsId
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_by_smsId_call_back, "POST");
};

sms_connection.get_by_smsId_grid = function (smsId) {
    var param = {
        "act": "sms_get_by_smsId",
        smsId: smsId
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_grid_call_back, "POST");
};
sms_connection.get_by_registerDate_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.get_by_registerDate = function (registerDate) {
    var param = {
        "act": "sms_get_by_registerDate",
        registerDate: registerDate
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_by_registerDate_call_back, "POST");
};

sms_connection.get_by_registerDate_grid = function (registerDate) {
    var param = {
        "act": "sms_get_by_registerDate",
        registerDate: registerDate
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_grid_call_back, "POST");
};
sms_connection.get_by_status_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.get_by_status = function (status) {
    var param = {
        "act": "sms_get_by_status",
        status: status
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_by_status_call_back, "POST");
};

sms_connection.get_by_status_grid = function (status) {
    var param = {
        "act": "sms_get_by_status",
        status: status
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_grid_call_back, "POST");
};
sms_connection.get_by_type_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.get_by_type = function (type) {
    var param = {
        "act": "sms_get_by_type",
        type: type
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_by_type_call_back, "POST");
};

sms_connection.get_by_type_grid = function (type) {
    var param = {
        "act": "sms_get_by_type",
        type: type
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_grid_call_back, "POST");
};
sms_connection.get_by_deviceid_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.get_by_deviceid = function (deviceid) {
    var param = {
        "act": "sms_get_by_deviceid",
        deviceid: deviceid
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_by_deviceid_call_back, "POST");
};

sms_connection.get_by_deviceid_grid = function (deviceid) {
    var param = {
        "act": "sms_get_by_deviceid",
        deviceid: deviceid
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_grid_call_back, "POST");
};
sms_connection.get_by_reqnumber_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.get_by_reqnumber = function (reqnumber) {
    var param = {
        "act": "sms_get_by_reqnumber",
        reqnumber: reqnumber
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_by_reqnumber_call_back, "POST");
};

sms_connection.get_by_reqnumber_grid = function (reqnumber) {
    var param = {
        "act": "sms_get_by_reqnumber",
        reqnumber: reqnumber
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_grid_call_back, "POST");
};
sms_connection.get_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.get_by_createdby = function (createdby) {
    var param = {
        "act": "sms_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_by_createdby_call_back, "POST");
};

sms_connection.get_by_createdby_grid = function (createdby) {
    var param = {
        "act": "sms_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_grid_call_back, "POST");
};
sms_connection.get_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.get_by_creationdate = function (creationdate) {
    var param = {
        "act": "sms_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_by_creationdate_call_back, "POST");
};

sms_connection.get_by_creationdate_grid = function (creationdate) {
    var param = {
        "act": "sms_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.get_grid_call_back, "POST");
};

//________________edit functions
sms_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_by_id = function (id, number, text, smsId, registerDate, status, type, deviceid, reqnumber, createdby, creationdate) {
    var param = {
        "act": "sms_edit_by_id",
        id: id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        type: type,
        deviceid: deviceid,
        reqnumber: reqnumber,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_by_id_call_back, "POST");
};
sms_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "sms_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_id_by_id_call_back, "POST");
};
sms_connection.edit_by_number_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_by_number = function (id, number, text, smsId, registerDate, status, type, deviceid, reqnumber, createdby, creationdate) {
    var param = {
        "act": "sms_edit_by_number",
        id: id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        type: type,
        deviceid: deviceid,
        reqnumber: reqnumber,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_by_number_call_back, "POST");
};
sms_connection.edit_number_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_number_by_id = function (id, number) {
    var param = {
        "act": "sms_edit_number_by_id",
        number: number,
        id: id
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_number_by_id_call_back, "POST");
};
sms_connection.edit_by_text_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_by_text = function (id, number, text, smsId, registerDate, status, type, deviceid, reqnumber, createdby, creationdate) {
    var param = {
        "act": "sms_edit_by_text",
        id: id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        type: type,
        deviceid: deviceid,
        reqnumber: reqnumber,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_by_text_call_back, "POST");
};
sms_connection.edit_text_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_text_by_id = function (id, text) {
    var param = {
        "act": "sms_edit_text_by_id",
        text: text,
        id: id
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_text_by_id_call_back, "POST");
};
sms_connection.edit_by_smsId_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_by_smsId = function (id, number, text, smsId, registerDate, status, type, deviceid, reqnumber, createdby, creationdate) {
    var param = {
        "act": "sms_edit_by_smsId",
        id: id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        type: type,
        deviceid: deviceid,
        reqnumber: reqnumber,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_by_smsId_call_back, "POST");
};
sms_connection.edit_smsId_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_smsId_by_id = function (id, smsId) {
    var param = {
        "act": "sms_edit_smsId_by_id",
        smsId: smsId,
        id: id
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_smsId_by_id_call_back, "POST");
};
sms_connection.edit_by_registerDate_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_by_registerDate = function (id, number, text, smsId, registerDate, status, type, deviceid, reqnumber, createdby, creationdate) {
    var param = {
        "act": "sms_edit_by_registerDate",
        id: id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        type: type,
        deviceid: deviceid,
        reqnumber: reqnumber,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_by_registerDate_call_back, "POST");
};
sms_connection.edit_registerDate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_registerDate_by_id = function (id, registerDate) {
    var param = {
        "act": "sms_edit_registerDate_by_id",
        registerDate: registerDate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_registerDate_by_id_call_back, "POST");
};
sms_connection.edit_by_status_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_by_status = function (id, number, text, smsId, registerDate, status, type, deviceid, reqnumber, createdby, creationdate) {
    var param = {
        "act": "sms_edit_by_status",
        id: id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        type: type,
        deviceid: deviceid,
        reqnumber: reqnumber,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_by_status_call_back, "POST");
};
sms_connection.edit_status_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_status_by_id = function (id, status) {
    var param = {
        "act": "sms_edit_status_by_id",
        status: status,
        id: id
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_status_by_id_call_back, "POST");
};
sms_connection.edit_by_type_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_by_type = function (id, number, text, smsId, registerDate, status, type, deviceid, reqnumber, createdby, creationdate) {
    var param = {
        "act": "sms_edit_by_type",
        id: id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        type: type,
        deviceid: deviceid,
        reqnumber: reqnumber,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_by_type_call_back, "POST");
};
sms_connection.edit_type_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_type_by_id = function (id, type) {
    var param = {
        "act": "sms_edit_type_by_id",
        type: type,
        id: id
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_type_by_id_call_back, "POST");
};
sms_connection.edit_by_deviceid_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_by_deviceid = function (id, number, text, smsId, registerDate, status, type, deviceid, reqnumber, createdby, creationdate) {
    var param = {
        "act": "sms_edit_by_deviceid",
        id: id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        type: type,
        deviceid: deviceid,
        reqnumber: reqnumber,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_by_deviceid_call_back, "POST");
};
sms_connection.edit_deviceid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_deviceid_by_id = function (id, deviceid) {
    var param = {
        "act": "sms_edit_deviceid_by_id",
        deviceid: deviceid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_deviceid_by_id_call_back, "POST");
};
sms_connection.edit_by_reqnumber_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_by_reqnumber = function (id, number, text, smsId, registerDate, status, type, deviceid, reqnumber, createdby, creationdate) {
    var param = {
        "act": "sms_edit_by_reqnumber",
        id: id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        type: type,
        deviceid: deviceid,
        reqnumber: reqnumber,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_by_reqnumber_call_back, "POST");
};
sms_connection.edit_reqnumber_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_reqnumber_by_id = function (id, reqnumber) {
    var param = {
        "act": "sms_edit_reqnumber_by_id",
        reqnumber: reqnumber,
        id: id
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_reqnumber_by_id_call_back, "POST");
};
sms_connection.edit_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_by_createdby = function (id, number, text, smsId, registerDate, status, type, deviceid, reqnumber, createdby, creationdate) {
    var param = {
        "act": "sms_edit_by_createdby",
        id: id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        type: type,
        deviceid: deviceid,
        reqnumber: reqnumber,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_by_createdby_call_back, "POST");
};
sms_connection.edit_createdby_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_createdby_by_id = function (id, createdby) {
    var param = {
        "act": "sms_edit_createdby_by_id",
        createdby: createdby,
        id: id
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_createdby_by_id_call_back, "POST");
};
sms_connection.edit_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_by_creationdate = function (id, number, text, smsId, registerDate, status, type, deviceid, reqnumber, createdby, creationdate) {
    var param = {
        "act": "sms_edit_by_creationdate",
        id: id,
        number: number,
        text: text,
        smsId: smsId,
        registerDate: registerDate,
        status: status,
        type: type,
        deviceid: deviceid,
        reqnumber: reqnumber,
        createdby: createdby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_by_creationdate_call_back, "POST");
};
sms_connection.edit_creationdate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (sms_connection.debug_mode) {
        console.log(data);
    }
};
sms_connection.edit_creationdate_by_id = function (id, creationdate) {
    var param = {
        "act": "sms_edit_creationdate_by_id",
        creationdate: creationdate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(sms_connection.controller_url, param, sms_connection.edit_creationdate_by_id_call_back, "POST");
};