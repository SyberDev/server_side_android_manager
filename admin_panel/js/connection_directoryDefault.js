var grid_directoryDefault;
var directoryDefault_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

directoryDefault_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (directoryDefault_connection.debug_mode) {
        console.log(data);
    }
};
directoryDefault_connection.get = function () {
    var param = {"act": "directoryDefault_get"};
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.get_call_back, "POST");
};
//_____________ delete function
directoryDefault_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (directoryDefault_connection.debug_mode) {
        console.log(data);
    }
};

directoryDefault_connection.delete = function (id) {
    var param = {
        act: "directoryDefault_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.delete_call_back, "POST");
};
//_____________ set function
directoryDefault_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (directoryDefault_connection.debug_mode) {
        console.log(data);
    }
};

directoryDefault_connection.set = function (name, creationDate) {
    var param = {
        act: "directoryDefault_set",
        name: name, creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.set_call_back, "POST");
};
//_____________ grid function
directoryDefault_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (directoryDefault_connection.debug_mode) {
        console.log(data);
    }

    grid_directoryDefault = new PSCO_grid('grid_directoryDefault');

    grid_directoryDefault.cols = [
        {name: 'id', hidden: false, type: 'text'}, {name: 'name', hidden: false, type: 'text'}, {
            name: 'creationDate',
            hidden: false,
            type: 'text'
        }, {name: 'createdBy', hidden: false, type: 'text'}];

    grid_directoryDefault.RightToLeft = false;

    // grid_directoryDefault.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_directoryDefault.data = data;

    grid_directoryDefault.render();

};
directoryDefault_connection.get_grid = function () {
    var param = {"act": "directoryDefault_get"};
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.get_grid_call_back, "POST");
};
//________________get functions
directoryDefault_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directoryDefault_connection.debug_mode) {
        console.log(data);
    }
};
directoryDefault_connection.get_by_id = function (id) {
    var param = {
        "act": "directoryDefault_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.get_by_id_call_back, "POST");
};

directoryDefault_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "directoryDefault_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.get_grid_call_back, "POST");
};
directoryDefault_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (directoryDefault_connection.debug_mode) {
        console.log(data);
    }
};
directoryDefault_connection.get_by_name = function (name) {
    var param = {
        "act": "directoryDefault_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.get_by_name_call_back, "POST");
};

directoryDefault_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "directoryDefault_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.get_grid_call_back, "POST");
};
directoryDefault_connection.get_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (directoryDefault_connection.debug_mode) {
        console.log(data);
    }
};
directoryDefault_connection.get_by_creationDate = function (creationDate) {
    var param = {
        "act": "directoryDefault_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.get_by_creationDate_call_back, "POST");
};

directoryDefault_connection.get_by_creationDate_grid = function (creationDate) {
    var param = {
        "act": "directoryDefault_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.get_grid_call_back, "POST");
};
directoryDefault_connection.get_by_createdBy_call_back = function (data) {
    //TODO: set code after the server response
    if (directoryDefault_connection.debug_mode) {
        console.log(data);
    }
};
directoryDefault_connection.get_by_createdBy = function (createdBy) {
    var param = {
        "act": "directoryDefault_get_by_createdBy",
        createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.get_by_createdBy_call_back, "POST");
};

directoryDefault_connection.get_by_createdBy_grid = function (createdBy) {
    var param = {
        "act": "directoryDefault_get_by_createdBy",
        createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.get_grid_call_back, "POST");
};

//________________edit functions
directoryDefault_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directoryDefault_connection.debug_mode) {
        console.log(data);
    }
};
directoryDefault_connection.edit_by_id = function (id, name, creationDate, createdBy) {
    var param = {
        "act": "directoryDefault_edit_by_id",
        id: id, name: name, creationDate: creationDate, createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.edit_by_id_call_back, "POST");
};
directoryDefault_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directoryDefault_connection.debug_mode) {
        console.log(data);
    }
};
directoryDefault_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "directoryDefault_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.edit_id_by_id_call_back, "POST");
};
directoryDefault_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (directoryDefault_connection.debug_mode) {
        console.log(data);
    }
};
directoryDefault_connection.edit_by_name = function (id, name, creationDate, createdBy) {
    var param = {
        "act": "directoryDefault_edit_by_name",
        id: id, name: name, creationDate: creationDate, createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.edit_by_name_call_back, "POST");
};
directoryDefault_connection.edit_name_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directoryDefault_connection.debug_mode) {
        console.log(data);
    }
};
directoryDefault_connection.edit_name_by_id = function (id, name) {
    var param = {
        "act": "directoryDefault_edit_name_by_id",
        name: name,
        id: id
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.edit_name_by_id_call_back, "POST");
};
directoryDefault_connection.edit_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (directoryDefault_connection.debug_mode) {
        console.log(data);
    }
};
directoryDefault_connection.edit_by_creationDate = function (id, name, creationDate, createdBy) {
    var param = {
        "act": "directoryDefault_edit_by_creationDate",
        id: id, name: name, creationDate: creationDate, createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.edit_by_creationDate_call_back, "POST");
};
directoryDefault_connection.edit_creationDate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directoryDefault_connection.debug_mode) {
        console.log(data);
    }
};
directoryDefault_connection.edit_creationDate_by_id = function (id, creationDate) {
    var param = {
        "act": "directoryDefault_edit_creationDate_by_id",
        creationDate: creationDate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.edit_creationDate_by_id_call_back, "POST");
};
directoryDefault_connection.edit_by_createdBy_call_back = function (data) {
    //TODO: set code after the server response
    if (directoryDefault_connection.debug_mode) {
        console.log(data);
    }
};
directoryDefault_connection.edit_by_createdBy = function (id, name, creationDate, createdBy) {
    var param = {
        "act": "directoryDefault_edit_by_createdBy",
        id: id, name: name, creationDate: creationDate, createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.edit_by_createdBy_call_back, "POST");
};
directoryDefault_connection.edit_createdBy_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directoryDefault_connection.debug_mode) {
        console.log(data);
    }
};
directoryDefault_connection.edit_createdBy_by_id = function (id, createdBy) {
    var param = {
        "act": "directoryDefault_edit_createdBy_by_id",
        createdBy: createdBy,
        id: id
    };
    ajax.sender_data_json_by_url_callback(directoryDefault_connection.controller_url, param, directoryDefault_connection.edit_createdBy_by_id_call_back, "POST");
};