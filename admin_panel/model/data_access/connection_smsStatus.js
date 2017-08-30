var grid_smsStatus;
var smsStatus_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

smsStatus_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (smsStatus_connection.debug_mode) {
        console.log(data);
    }
};
smsStatus_connection.get = function () {
    var param = {"act": "smsStatus_get"};
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.get_call_back, "POST");
};
//_____________ delete function
smsStatus_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (smsStatus_connection.debug_mode) {
        console.log(data);
    }
};

smsStatus_connection.delete = function (id) {
    var param = {
        act: "smsStatus_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.delete_call_back, "POST");
};
//_____________ set function
smsStatus_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (smsStatus_connection.debug_mode) {
        console.log(data);
    }
};

smsStatus_connection.set = function (name, createdby) {
    var param = {
        act: "smsStatus_set",
        name: name, createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.set_call_back, "POST");
};
//_____________ grid function
smsStatus_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (smsStatus_connection.debug_mode) {
        console.log(data);
    }

    grid_smsStatus = new PSCO_grid('grid_smsStatus');

    grid_smsStatus.cols = [
        {name: 'id', hidden: false, type: 'text'}, {name: 'name', hidden: false, type: 'text'}, {
            name: 'createdby',
            hidden: false,
            type: 'text'
        }, {name: 'creationdate', hidden: false, type: 'text'}];

    grid_smsStatus.RightToLeft = false;

    // grid_smsStatus.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_smsStatus.data = data;

    grid_smsStatus.render();

};
smsStatus_connection.get_grid = function () {
    var param = {"act": "smsStatus_get"};
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.get_grid_call_back, "POST");
};
//________________get functions
smsStatus_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (smsStatus_connection.debug_mode) {
        console.log(data);
    }
};
smsStatus_connection.get_by_id = function (id) {
    var param = {
        "act": "smsStatus_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.get_by_id_call_back, "POST");
};

smsStatus_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "smsStatus_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.get_grid_call_back, "POST");
};
smsStatus_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (smsStatus_connection.debug_mode) {
        console.log(data);
    }
};
smsStatus_connection.get_by_name = function (name) {
    var param = {
        "act": "smsStatus_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.get_by_name_call_back, "POST");
};

smsStatus_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "smsStatus_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.get_grid_call_back, "POST");
};
smsStatus_connection.get_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (smsStatus_connection.debug_mode) {
        console.log(data);
    }
};
smsStatus_connection.get_by_createdby = function (createdby) {
    var param = {
        "act": "smsStatus_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.get_by_createdby_call_back, "POST");
};

smsStatus_connection.get_by_createdby_grid = function (createdby) {
    var param = {
        "act": "smsStatus_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.get_grid_call_back, "POST");
};
smsStatus_connection.get_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (smsStatus_connection.debug_mode) {
        console.log(data);
    }
};
smsStatus_connection.get_by_creationdate = function (creationdate) {
    var param = {
        "act": "smsStatus_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.get_by_creationdate_call_back, "POST");
};

smsStatus_connection.get_by_creationdate_grid = function (creationdate) {
    var param = {
        "act": "smsStatus_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.get_grid_call_back, "POST");
};

//________________edit functions
smsStatus_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (smsStatus_connection.debug_mode) {
        console.log(data);
    }
};
smsStatus_connection.edit_by_id = function (id, name, createdby, creationdate) {
    var param = {
        "act": "smsStatus_edit_by_id",
        id: id, name: name, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.edit_by_id_call_back, "POST");
};
smsStatus_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (smsStatus_connection.debug_mode) {
        console.log(data);
    }
};
smsStatus_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "smsStatus_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.edit_id_by_id_call_back, "POST");
};
smsStatus_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (smsStatus_connection.debug_mode) {
        console.log(data);
    }
};
smsStatus_connection.edit_by_name = function (id, name, createdby, creationdate) {
    var param = {
        "act": "smsStatus_edit_by_name",
        id: id, name: name, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.edit_by_name_call_back, "POST");
};
smsStatus_connection.edit_name_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (smsStatus_connection.debug_mode) {
        console.log(data);
    }
};
smsStatus_connection.edit_name_by_id = function (id, name) {
    var param = {
        "act": "smsStatus_edit_name_by_id",
        name: name,
        id: id
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.edit_name_by_id_call_back, "POST");
};
smsStatus_connection.edit_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (smsStatus_connection.debug_mode) {
        console.log(data);
    }
};
smsStatus_connection.edit_by_createdby = function (id, name, createdby, creationdate) {
    var param = {
        "act": "smsStatus_edit_by_createdby",
        id: id, name: name, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.edit_by_createdby_call_back, "POST");
};
smsStatus_connection.edit_createdby_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (smsStatus_connection.debug_mode) {
        console.log(data);
    }
};
smsStatus_connection.edit_createdby_by_id = function (id, createdby) {
    var param = {
        "act": "smsStatus_edit_createdby_by_id",
        createdby: createdby,
        id: id
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.edit_createdby_by_id_call_back, "POST");
};
smsStatus_connection.edit_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (smsStatus_connection.debug_mode) {
        console.log(data);
    }
};
smsStatus_connection.edit_by_creationdate = function (id, name, createdby, creationdate) {
    var param = {
        "act": "smsStatus_edit_by_creationdate",
        id: id, name: name, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.edit_by_creationdate_call_back, "POST");
};
smsStatus_connection.edit_creationdate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (smsStatus_connection.debug_mode) {
        console.log(data);
    }
};
smsStatus_connection.edit_creationdate_by_id = function (id, creationdate) {
    var param = {
        "act": "smsStatus_edit_creationdate_by_id",
        creationdate: creationdate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(smsStatus_connection.controller_url, param, smsStatus_connection.edit_creationdate_by_id_call_back, "POST");
};