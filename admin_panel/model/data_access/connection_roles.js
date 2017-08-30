var grid_roles;
var roles_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

roles_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (roles_connection.debug_mode) {
        console.log(data);
    }
};
roles_connection.get = function () {
    var param = {"act": "roles_get"};
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.get_call_back, "POST");
};
//_____________ delete function
roles_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (roles_connection.debug_mode) {
        console.log(data);
    }
};

roles_connection.delete = function (id) {
    var param = {
        act: "roles_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.delete_call_back, "POST");
};
//_____________ set function
roles_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (roles_connection.debug_mode) {
        console.log(data);
    }
};

roles_connection.set = function (role, createby) {
    var param = {
        act: "roles_set",
        role: role, createby: createby
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.set_call_back, "POST");
};
//_____________ grid function
roles_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (roles_connection.debug_mode) {
        console.log(data);
    }

    grid_roles = new PSCO_grid('grid_roles');

    grid_roles.cols = [
        {name: 'id', hidden: false, type: 'text'}, {name: 'role', hidden: false, type: 'text'}, {
            name: 'createby',
            hidden: false,
            type: 'text'
        }, {name: 'creationdate', hidden: false, type: 'text'}];

    grid_roles.RightToLeft = false;

    // grid_roles.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_roles.data = data;

    grid_roles.render();

};
roles_connection.get_grid = function () {
    var param = {"act": "roles_get"};
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.get_grid_call_back, "POST");
};
//________________get functions
roles_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (roles_connection.debug_mode) {
        console.log(data);
    }
};
roles_connection.get_by_id = function (id) {
    var param = {
        "act": "roles_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.get_by_id_call_back, "POST");
};

roles_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "roles_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.get_grid_call_back, "POST");
};
roles_connection.get_by_role_call_back = function (data) {
    //TODO: set code after the server response
    if (roles_connection.debug_mode) {
        console.log(data);
    }
};
roles_connection.get_by_role = function (role) {
    var param = {
        "act": "roles_get_by_role",
        role: role
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.get_by_role_call_back, "POST");
};

roles_connection.get_by_role_grid = function (role) {
    var param = {
        "act": "roles_get_by_role",
        role: role
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.get_grid_call_back, "POST");
};
roles_connection.get_by_createby_call_back = function (data) {
    //TODO: set code after the server response
    if (roles_connection.debug_mode) {
        console.log(data);
    }
};
roles_connection.get_by_createby = function (createby) {
    var param = {
        "act": "roles_get_by_createby",
        createby: createby
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.get_by_createby_call_back, "POST");
};

roles_connection.get_by_createby_grid = function (createby) {
    var param = {
        "act": "roles_get_by_createby",
        createby: createby
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.get_grid_call_back, "POST");
};
roles_connection.get_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (roles_connection.debug_mode) {
        console.log(data);
    }
};
roles_connection.get_by_creationdate = function (creationdate) {
    var param = {
        "act": "roles_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.get_by_creationdate_call_back, "POST");
};

roles_connection.get_by_creationdate_grid = function (creationdate) {
    var param = {
        "act": "roles_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.get_grid_call_back, "POST");
};

//________________edit functions
roles_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (roles_connection.debug_mode) {
        console.log(data);
    }
};
roles_connection.edit_by_id = function (id, role, createby, creationdate) {
    var param = {
        "act": "roles_edit_by_id",
        id: id, role: role, createby: createby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.edit_by_id_call_back, "POST");
};
roles_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (roles_connection.debug_mode) {
        console.log(data);
    }
};
roles_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "roles_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.edit_id_by_id_call_back, "POST");
};
roles_connection.edit_by_role_call_back = function (data) {
    //TODO: set code after the server response
    if (roles_connection.debug_mode) {
        console.log(data);
    }
};
roles_connection.edit_by_role = function (id, role, createby, creationdate) {
    var param = {
        "act": "roles_edit_by_role",
        id: id, role: role, createby: createby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.edit_by_role_call_back, "POST");
};
roles_connection.edit_role_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (roles_connection.debug_mode) {
        console.log(data);
    }
};
roles_connection.edit_role_by_id = function (id, role) {
    var param = {
        "act": "roles_edit_role_by_id",
        role: role,
        id: id
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.edit_role_by_id_call_back, "POST");
};
roles_connection.edit_by_createby_call_back = function (data) {
    //TODO: set code after the server response
    if (roles_connection.debug_mode) {
        console.log(data);
    }
};
roles_connection.edit_by_createby = function (id, role, createby, creationdate) {
    var param = {
        "act": "roles_edit_by_createby",
        id: id, role: role, createby: createby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.edit_by_createby_call_back, "POST");
};
roles_connection.edit_createby_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (roles_connection.debug_mode) {
        console.log(data);
    }
};
roles_connection.edit_createby_by_id = function (id, createby) {
    var param = {
        "act": "roles_edit_createby_by_id",
        createby: createby,
        id: id
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.edit_createby_by_id_call_back, "POST");
};
roles_connection.edit_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (roles_connection.debug_mode) {
        console.log(data);
    }
};
roles_connection.edit_by_creationdate = function (id, role, createby, creationdate) {
    var param = {
        "act": "roles_edit_by_creationdate",
        id: id, role: role, createby: createby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.edit_by_creationdate_call_back, "POST");
};
roles_connection.edit_creationdate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (roles_connection.debug_mode) {
        console.log(data);
    }
};
roles_connection.edit_creationdate_by_id = function (id, creationdate) {
    var param = {
        "act": "roles_edit_creationdate_by_id",
        creationdate: creationdate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(roles_connection.controller_url, param, roles_connection.edit_creationdate_by_id_call_back, "POST");
};