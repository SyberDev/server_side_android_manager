var grid_smstype;
var smstype_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

smstype_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (smstype_connection.debug_mode) {
        console.log(data);
    }
};
smstype_connection.get = function () {
    var param = {"act": "smstype_get"};
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.get_call_back, "POST");
};
//_____________ delete function
smstype_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (smstype_connection.debug_mode) {
        console.log(data);
    }
};

smstype_connection.delete = function (id) {
    var param = {
        act: "smstype_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.delete_call_back, "POST");
};
//_____________ set function
smstype_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (smstype_connection.debug_mode) {
        console.log(data);
    }
};

smstype_connection.set = function (name, createdby) {
    var param = {
        act: "smstype_set",
        name: name, createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.set_call_back, "POST");
};
//_____________ grid function
smstype_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (smstype_connection.debug_mode) {
        console.log(data);
    }

    grid_smstype = new PSCO_grid('grid_smstype');

    grid_smstype.cols = [
        {name: 'id', hidden: false, type: 'text'}, {name: 'name', hidden: false, type: 'text'}, {
            name: 'createdby',
            hidden: false,
            type: 'text'
        }, {name: 'creationdate', hidden: false, type: 'text'}];

    grid_smstype.RightToLeft = false;

    // grid_smstype.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_smstype.data = data;

    grid_smstype.render();

};
smstype_connection.get_grid = function () {
    var param = {"act": "smstype_get"};
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.get_grid_call_back, "POST");
};
//________________get functions
smstype_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (smstype_connection.debug_mode) {
        console.log(data);
    }
};
smstype_connection.get_by_id = function (id) {
    var param = {
        "act": "smstype_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.get_by_id_call_back, "POST");
};

smstype_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "smstype_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.get_grid_call_back, "POST");
};
smstype_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (smstype_connection.debug_mode) {
        console.log(data);
    }
};
smstype_connection.get_by_name = function (name) {
    var param = {
        "act": "smstype_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.get_by_name_call_back, "POST");
};

smstype_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "smstype_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.get_grid_call_back, "POST");
};
smstype_connection.get_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (smstype_connection.debug_mode) {
        console.log(data);
    }
};
smstype_connection.get_by_createdby = function (createdby) {
    var param = {
        "act": "smstype_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.get_by_createdby_call_back, "POST");
};

smstype_connection.get_by_createdby_grid = function (createdby) {
    var param = {
        "act": "smstype_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.get_grid_call_back, "POST");
};
smstype_connection.get_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (smstype_connection.debug_mode) {
        console.log(data);
    }
};
smstype_connection.get_by_creationdate = function (creationdate) {
    var param = {
        "act": "smstype_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.get_by_creationdate_call_back, "POST");
};

smstype_connection.get_by_creationdate_grid = function (creationdate) {
    var param = {
        "act": "smstype_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.get_grid_call_back, "POST");
};

//________________edit functions
smstype_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (smstype_connection.debug_mode) {
        console.log(data);
    }
};
smstype_connection.edit_by_id = function (id, name, createdby, creationdate) {
    var param = {
        "act": "smstype_edit_by_id",
        id: id, name: name, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.edit_by_id_call_back, "POST");
};
smstype_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (smstype_connection.debug_mode) {
        console.log(data);
    }
};
smstype_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "smstype_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.edit_id_by_id_call_back, "POST");
};
smstype_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (smstype_connection.debug_mode) {
        console.log(data);
    }
};
smstype_connection.edit_by_name = function (id, name, createdby, creationdate) {
    var param = {
        "act": "smstype_edit_by_name",
        id: id, name: name, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.edit_by_name_call_back, "POST");
};
smstype_connection.edit_name_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (smstype_connection.debug_mode) {
        console.log(data);
    }
};
smstype_connection.edit_name_by_id = function (id, name) {
    var param = {
        "act": "smstype_edit_name_by_id",
        name: name,
        id: id
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.edit_name_by_id_call_back, "POST");
};
smstype_connection.edit_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (smstype_connection.debug_mode) {
        console.log(data);
    }
};
smstype_connection.edit_by_createdby = function (id, name, createdby, creationdate) {
    var param = {
        "act": "smstype_edit_by_createdby",
        id: id, name: name, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.edit_by_createdby_call_back, "POST");
};
smstype_connection.edit_createdby_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (smstype_connection.debug_mode) {
        console.log(data);
    }
};
smstype_connection.edit_createdby_by_id = function (id, createdby) {
    var param = {
        "act": "smstype_edit_createdby_by_id",
        createdby: createdby,
        id: id
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.edit_createdby_by_id_call_back, "POST");
};
smstype_connection.edit_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (smstype_connection.debug_mode) {
        console.log(data);
    }
};
smstype_connection.edit_by_creationdate = function (id, name, createdby, creationdate) {
    var param = {
        "act": "smstype_edit_by_creationdate",
        id: id, name: name, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.edit_by_creationdate_call_back, "POST");
};
smstype_connection.edit_creationdate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (smstype_connection.debug_mode) {
        console.log(data);
    }
};
smstype_connection.edit_creationdate_by_id = function (id, creationdate) {
    var param = {
        "act": "smstype_edit_creationdate_by_id",
        creationdate: creationdate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(smstype_connection.controller_url, param, smstype_connection.edit_creationdate_by_id_call_back, "POST");
};