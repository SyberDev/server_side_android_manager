var grid_device;
var device_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

device_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};
device_connection.get = function () {
    var param = {"act": "device_get"};
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.get_call_back, "POST");
};
//_____________ delete function
device_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};

device_connection.delete = function (id) {
    var param = {
        act: "device_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.delete_call_back, "POST");
};
//_____________ set function
device_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};

device_connection.set = function (name, IMEI, createdby) {
    var param = {
        act: "device_set",
        name: name, IMEI: IMEI, createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.set_call_back, "POST");
};
//_____________ grid function
device_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }

    grid_device = new PSCO_grid('grid_device');

    grid_device.cols = [
        {name: 'id', hidden: false, type: 'text'}, {name: 'name', hidden: false, type: 'text'}, {
            name: 'IMEI',
            hidden: false,
            type: 'text'
        }, {name: 'createdby', hidden: false, type: 'text'}, {name: 'creationdate', hidden: false, type: 'text'}];

    grid_device.RightToLeft = false;

    // grid_device.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_device.data = data;

    grid_device.render();

};
device_connection.get_grid = function () {
    var param = {"act": "device_get"};
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.get_grid_call_back, "POST");
};
//________________get functions
device_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};
device_connection.get_by_id = function (id) {
    var param = {
        "act": "device_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.get_by_id_call_back, "POST");
};

device_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "device_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.get_grid_call_back, "POST");
};
device_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};
device_connection.get_by_name = function (name) {
    var param = {
        "act": "device_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.get_by_name_call_back, "POST");
};

device_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "device_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.get_grid_call_back, "POST");
};
device_connection.get_by_IMEI_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};
device_connection.get_by_IMEI = function (IMEI) {
    var param = {
        "act": "device_get_by_IMEI",
        IMEI: IMEI
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.get_by_IMEI_call_back, "POST");
};

device_connection.get_by_IMEI_grid = function (IMEI) {
    var param = {
        "act": "device_get_by_IMEI",
        IMEI: IMEI
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.get_grid_call_back, "POST");
};
device_connection.get_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};
device_connection.get_by_createdby = function (createdby) {
    var param = {
        "act": "device_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.get_by_createdby_call_back, "POST");
};

device_connection.get_by_createdby_grid = function (createdby) {
    var param = {
        "act": "device_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.get_grid_call_back, "POST");
};
device_connection.get_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};
device_connection.get_by_creationdate = function (creationdate) {
    var param = {
        "act": "device_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.get_by_creationdate_call_back, "POST");
};

device_connection.get_by_creationdate_grid = function (creationdate) {
    var param = {
        "act": "device_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.get_grid_call_back, "POST");
};

//________________edit functions
device_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};
device_connection.edit_by_id = function (id, name, IMEI, createdby, creationdate) {
    var param = {
        "act": "device_edit_by_id",
        id: id, name: name, IMEI: IMEI, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.edit_by_id_call_back, "POST");
};
device_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};
device_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "device_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.edit_id_by_id_call_back, "POST");
};
device_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};
device_connection.edit_by_name = function (id, name, IMEI, createdby, creationdate) {
    var param = {
        "act": "device_edit_by_name",
        id: id, name: name, IMEI: IMEI, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.edit_by_name_call_back, "POST");
};
device_connection.edit_name_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};
device_connection.edit_name_by_id = function (id, name) {
    var param = {
        "act": "device_edit_name_by_id",
        name: name,
        id: id
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.edit_name_by_id_call_back, "POST");
};
device_connection.edit_by_IMEI_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};
device_connection.edit_by_IMEI = function (id, name, IMEI, createdby, creationdate) {
    var param = {
        "act": "device_edit_by_IMEI",
        id: id, name: name, IMEI: IMEI, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.edit_by_IMEI_call_back, "POST");
};
device_connection.edit_IMEI_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};
device_connection.edit_IMEI_by_id = function (id, IMEI) {
    var param = {
        "act": "device_edit_IMEI_by_id",
        IMEI: IMEI,
        id: id
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.edit_IMEI_by_id_call_back, "POST");
};
device_connection.edit_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};
device_connection.edit_by_createdby = function (id, name, IMEI, createdby, creationdate) {
    var param = {
        "act": "device_edit_by_createdby",
        id: id, name: name, IMEI: IMEI, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.edit_by_createdby_call_back, "POST");
};
device_connection.edit_createdby_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};
device_connection.edit_createdby_by_id = function (id, createdby) {
    var param = {
        "act": "device_edit_createdby_by_id",
        createdby: createdby,
        id: id
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.edit_createdby_by_id_call_back, "POST");
};
device_connection.edit_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};
device_connection.edit_by_creationdate = function (id, name, IMEI, createdby, creationdate) {
    var param = {
        "act": "device_edit_by_creationdate",
        id: id, name: name, IMEI: IMEI, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.edit_by_creationdate_call_back, "POST");
};
device_connection.edit_creationdate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (device_connection.debug_mode) {
        console.log(data);
    }
};
device_connection.edit_creationdate_by_id = function (id, creationdate) {
    var param = {
        "act": "device_edit_creationdate_by_id",
        creationdate: creationdate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(device_connection.controller_url, param, device_connection.edit_creationdate_by_id_call_back, "POST");
};