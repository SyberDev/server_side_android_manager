var grid_custom_file_type;
var custom_file_type_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

custom_file_type_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (custom_file_type_connection.debug_mode) {
        console.log(data);
    }
};
custom_file_type_connection.get = function () {
    var param = {"act": "custom_file_type_get"};
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.get_call_back, "POST");
};
//_____________ delete function
custom_file_type_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (custom_file_type_connection.debug_mode) {
        console.log(data);
    }
};

custom_file_type_connection.delete = function (id) {
    var param = {
        act: "custom_file_type_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.delete_call_back, "POST");
};
//_____________ set function
custom_file_type_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (custom_file_type_connection.debug_mode) {
        console.log(data);
    }
};

custom_file_type_connection.set = function (name, creationdate) {
    var param = {
        act: "custom_file_type_set",
        name: name, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.set_call_back, "POST");
};
//_____________ grid function
custom_file_type_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (custom_file_type_connection.debug_mode) {
        console.log(data);
    }

    grid_custom_file_type = new PSCO_grid('grid_custom_file_type');

    grid_custom_file_type.cols = [
        {name: 'id', hidden: false, type: 'text'}, {name: 'name', hidden: false, type: 'text'}, {
            name: 'creationdate',
            hidden: false,
            type: 'text'
        }, {name: 'createdby', hidden: false, type: 'text'}];

    grid_custom_file_type.RightToLeft = false;

    // grid_custom_file_type.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_custom_file_type.data = data;

    grid_custom_file_type.render();

};
custom_file_type_connection.get_grid = function () {
    var param = {"act": "custom_file_type_get"};
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.get_grid_call_back, "POST");
};
//________________get functions
custom_file_type_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (custom_file_type_connection.debug_mode) {
        console.log(data);
    }
};
custom_file_type_connection.get_by_id = function (id) {
    var param = {
        "act": "custom_file_type_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.get_by_id_call_back, "POST");
};

custom_file_type_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "custom_file_type_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.get_grid_call_back, "POST");
};
custom_file_type_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (custom_file_type_connection.debug_mode) {
        console.log(data);
    }
};
custom_file_type_connection.get_by_name = function (name) {
    var param = {
        "act": "custom_file_type_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.get_by_name_call_back, "POST");
};

custom_file_type_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "custom_file_type_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.get_grid_call_back, "POST");
};
custom_file_type_connection.get_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (custom_file_type_connection.debug_mode) {
        console.log(data);
    }
};
custom_file_type_connection.get_by_creationdate = function (creationdate) {
    var param = {
        "act": "custom_file_type_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.get_by_creationdate_call_back, "POST");
};

custom_file_type_connection.get_by_creationdate_grid = function (creationdate) {
    var param = {
        "act": "custom_file_type_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.get_grid_call_back, "POST");
};
custom_file_type_connection.get_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (custom_file_type_connection.debug_mode) {
        console.log(data);
    }
};
custom_file_type_connection.get_by_createdby = function (createdby) {
    var param = {
        "act": "custom_file_type_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.get_by_createdby_call_back, "POST");
};

custom_file_type_connection.get_by_createdby_grid = function (createdby) {
    var param = {
        "act": "custom_file_type_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.get_grid_call_back, "POST");
};

//________________edit functions
custom_file_type_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (custom_file_type_connection.debug_mode) {
        console.log(data);
    }
};
custom_file_type_connection.edit_by_id = function (id, name, creationdate, createdby) {
    var param = {
        "act": "custom_file_type_edit_by_id",
        id: id, name: name, creationdate: creationdate, createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.edit_by_id_call_back, "POST");
};
custom_file_type_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (custom_file_type_connection.debug_mode) {
        console.log(data);
    }
};
custom_file_type_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "custom_file_type_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.edit_id_by_id_call_back, "POST");
};
custom_file_type_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (custom_file_type_connection.debug_mode) {
        console.log(data);
    }
};
custom_file_type_connection.edit_by_name = function (id, name, creationdate, createdby) {
    var param = {
        "act": "custom_file_type_edit_by_name",
        id: id, name: name, creationdate: creationdate, createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.edit_by_name_call_back, "POST");
};
custom_file_type_connection.edit_name_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (custom_file_type_connection.debug_mode) {
        console.log(data);
    }
};
custom_file_type_connection.edit_name_by_id = function (id, name) {
    var param = {
        "act": "custom_file_type_edit_name_by_id",
        name: name,
        id: id
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.edit_name_by_id_call_back, "POST");
};
custom_file_type_connection.edit_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (custom_file_type_connection.debug_mode) {
        console.log(data);
    }
};
custom_file_type_connection.edit_by_creationdate = function (id, name, creationdate, createdby) {
    var param = {
        "act": "custom_file_type_edit_by_creationdate",
        id: id, name: name, creationdate: creationdate, createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.edit_by_creationdate_call_back, "POST");
};
custom_file_type_connection.edit_creationdate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (custom_file_type_connection.debug_mode) {
        console.log(data);
    }
};
custom_file_type_connection.edit_creationdate_by_id = function (id, creationdate) {
    var param = {
        "act": "custom_file_type_edit_creationdate_by_id",
        creationdate: creationdate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.edit_creationdate_by_id_call_back, "POST");
};
custom_file_type_connection.edit_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (custom_file_type_connection.debug_mode) {
        console.log(data);
    }
};
custom_file_type_connection.edit_by_createdby = function (id, name, creationdate, createdby) {
    var param = {
        "act": "custom_file_type_edit_by_createdby",
        id: id, name: name, creationdate: creationdate, createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.edit_by_createdby_call_back, "POST");
};
custom_file_type_connection.edit_createdby_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (custom_file_type_connection.debug_mode) {
        console.log(data);
    }
};
custom_file_type_connection.edit_createdby_by_id = function (id, createdby) {
    var param = {
        "act": "custom_file_type_edit_createdby_by_id",
        createdby: createdby,
        id: id
    };
    ajax.sender_data_json_by_url_callback(custom_file_type_connection.controller_url, param, custom_file_type_connection.edit_createdby_by_id_call_back, "POST");
};