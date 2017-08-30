var grid_RequestType;
var RequestType_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

RequestType_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (RequestType_connection.debug_mode) {
        console.log(data);
    }
};
RequestType_connection.get = function () {
    var param = {"act": "RequestType_get"};
    ajax.sender_data_json_by_url_callback(RequestType_connection.controller_url, param, RequestType_connection.get_call_back, "POST");
};
//_____________ delete function
RequestType_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (RequestType_connection.debug_mode) {
        console.log(data);
    }
};

RequestType_connection.delete = function (id) {
    var param = {
        act: "RequestType_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(RequestType_connection.controller_url, param, RequestType_connection.delete_call_back, "POST");
};
//_____________ set function
RequestType_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (RequestType_connection.debug_mode) {
        console.log(data);
    }
};

RequestType_connection.set = function (name) {
    var param = {
        act: "RequestType_set",
        name: name
    };
    ajax.sender_data_json_by_url_callback(RequestType_connection.controller_url, param, RequestType_connection.set_call_back, "POST");
};
//_____________ grid function
RequestType_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (RequestType_connection.debug_mode) {
        console.log(data);
    }

    grid_RequestType = new PSCO_grid('grid_RequestType');

    grid_RequestType.cols = [
        {name: 'id', hidden: false, type: 'text'}, {name: 'name', hidden: false, type: 'text'}];

    grid_RequestType.RightToLeft = false;

    // grid_RequestType.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_RequestType.data = data;

    grid_RequestType.render();

};
RequestType_connection.get_grid = function () {
    var param = {"act": "RequestType_get"};
    ajax.sender_data_json_by_url_callback(RequestType_connection.controller_url, param, RequestType_connection.get_grid_call_back, "POST");
};
//________________get functions
RequestType_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (RequestType_connection.debug_mode) {
        console.log(data);
    }
};
RequestType_connection.get_by_id = function (id) {
    var param = {
        "act": "RequestType_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(RequestType_connection.controller_url, param, RequestType_connection.get_by_id_call_back, "POST");
};

RequestType_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "RequestType_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(RequestType_connection.controller_url, param, RequestType_connection.get_grid_call_back, "POST");
};
RequestType_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (RequestType_connection.debug_mode) {
        console.log(data);
    }
};
RequestType_connection.get_by_name = function (name) {
    var param = {
        "act": "RequestType_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(RequestType_connection.controller_url, param, RequestType_connection.get_by_name_call_back, "POST");
};

RequestType_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "RequestType_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(RequestType_connection.controller_url, param, RequestType_connection.get_grid_call_back, "POST");
};

//________________edit functions
RequestType_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (RequestType_connection.debug_mode) {
        console.log(data);
    }
};
RequestType_connection.edit_by_id = function (id, name) {
    var param = {
        "act": "RequestType_edit_by_id",
        id: id, name: name
    };
    ajax.sender_data_json_by_url_callback(RequestType_connection.controller_url, param, RequestType_connection.edit_by_id_call_back, "POST");
};
RequestType_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (RequestType_connection.debug_mode) {
        console.log(data);
    }
};
RequestType_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "RequestType_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(RequestType_connection.controller_url, param, RequestType_connection.edit_id_by_id_call_back, "POST");
};
RequestType_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (RequestType_connection.debug_mode) {
        console.log(data);
    }
};
RequestType_connection.edit_by_name = function (id, name) {
    var param = {
        "act": "RequestType_edit_by_name",
        id: id, name: name
    };
    ajax.sender_data_json_by_url_callback(RequestType_connection.controller_url, param, RequestType_connection.edit_by_name_call_back, "POST");
};
RequestType_connection.edit_name_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (RequestType_connection.debug_mode) {
        console.log(data);
    }
};
RequestType_connection.edit_name_by_id = function (id, name) {
    var param = {
        "act": "RequestType_edit_name_by_id",
        name: name,
        id: id
    };
    ajax.sender_data_json_by_url_callback(RequestType_connection.controller_url, param, RequestType_connection.edit_name_by_id_call_back, "POST");
};