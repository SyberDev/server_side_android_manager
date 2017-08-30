var grid_userRoles;
var userRoles_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

userRoles_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (userRoles_connection.debug_mode) {
        console.log(data);
    }
};
userRoles_connection.get = function () {
    var param = {"act": "userRoles_get"};
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.get_call_back, "POST");
};
//_____________ delete function
userRoles_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (userRoles_connection.debug_mode) {
        console.log(data);
    }
};

userRoles_connection.delete = function (userid) {
    var param = {
        act: "userRoles_delete",
        userid: userid
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.delete_call_back, "POST");
};
//_____________ set function
userRoles_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (userRoles_connection.debug_mode) {
        console.log(data);
    }
};

userRoles_connection.set = function (roleid, createby) {
    var param = {
        act: "userRoles_set",
        roleid: roleid, createby: createby
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.set_call_back, "POST");
};
//_____________ grid function
userRoles_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (userRoles_connection.debug_mode) {
        console.log(data);
    }

    grid_userRoles = new PSCO_grid('grid_userRoles');

    grid_userRoles.cols = [
        {name: 'userid', hidden: false, type: 'text'}, {name: 'roleid', hidden: false, type: 'text'}, {
            name: 'createby',
            hidden: false,
            type: 'text'
        }, {name: 'creationdate', hidden: false, type: 'text'}];

    grid_userRoles.RightToLeft = false;

    // grid_userRoles.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_userRoles.data = data;

    grid_userRoles.render();

};
userRoles_connection.get_grid = function () {
    var param = {"act": "userRoles_get"};
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.get_grid_call_back, "POST");
};
//________________get functions
userRoles_connection.get_by_userid_call_back = function (data) {
    //TODO: set code after the server response
    if (userRoles_connection.debug_mode) {
        console.log(data);
    }
};
userRoles_connection.get_by_userid = function (userid) {
    var param = {
        "act": "userRoles_get_by_userid",
        userid: userid
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.get_by_userid_call_back, "POST");
};

userRoles_connection.get_by_userid_grid = function (userid) {
    var param = {
        "act": "userRoles_get_by_userid",
        userid: userid
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.get_grid_call_back, "POST");
};
userRoles_connection.get_by_roleid_call_back = function (data) {
    //TODO: set code after the server response
    if (userRoles_connection.debug_mode) {
        console.log(data);
    }
};
userRoles_connection.get_by_roleid = function (roleid) {
    var param = {
        "act": "userRoles_get_by_roleid",
        roleid: roleid
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.get_by_roleid_call_back, "POST");
};

userRoles_connection.get_by_roleid_grid = function (roleid) {
    var param = {
        "act": "userRoles_get_by_roleid",
        roleid: roleid
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.get_grid_call_back, "POST");
};
userRoles_connection.get_by_createby_call_back = function (data) {
    //TODO: set code after the server response
    if (userRoles_connection.debug_mode) {
        console.log(data);
    }
};
userRoles_connection.get_by_createby = function (createby) {
    var param = {
        "act": "userRoles_get_by_createby",
        createby: createby
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.get_by_createby_call_back, "POST");
};

userRoles_connection.get_by_createby_grid = function (createby) {
    var param = {
        "act": "userRoles_get_by_createby",
        createby: createby
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.get_grid_call_back, "POST");
};
userRoles_connection.get_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (userRoles_connection.debug_mode) {
        console.log(data);
    }
};
userRoles_connection.get_by_creationdate = function (creationdate) {
    var param = {
        "act": "userRoles_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.get_by_creationdate_call_back, "POST");
};

userRoles_connection.get_by_creationdate_grid = function (creationdate) {
    var param = {
        "act": "userRoles_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.get_grid_call_back, "POST");
};

//________________edit functions
userRoles_connection.edit_by_userid_call_back = function (data) {
    //TODO: set code after the server response
    if (userRoles_connection.debug_mode) {
        console.log(data);
    }
};
userRoles_connection.edit_by_userid = function (userid, roleid, createby, creationdate) {
    var param = {
        "act": "userRoles_edit_by_userid",
        userid: userid, roleid: roleid, createby: createby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.edit_by_userid_call_back, "POST");
};
userRoles_connection.edit_userid_by_userid_call_back = function (data) {
    //TODO: set code after the server response
    if (userRoles_connection.debug_mode) {
        console.log(data);
    }
};
userRoles_connection.edit_userid_by_userid = function (userid, userid) {
    var param = {
        "act": "userRoles_edit_userid_by_userid",
        userid: userid,
        userid: userid
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.edit_userid_by_userid_call_back, "POST");
};
userRoles_connection.edit_by_roleid_call_back = function (data) {
    //TODO: set code after the server response
    if (userRoles_connection.debug_mode) {
        console.log(data);
    }
};
userRoles_connection.edit_by_roleid = function (userid, roleid, createby, creationdate) {
    var param = {
        "act": "userRoles_edit_by_roleid",
        userid: userid, roleid: roleid, createby: createby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.edit_by_roleid_call_back, "POST");
};
userRoles_connection.edit_roleid_by_userid_call_back = function (data) {
    //TODO: set code after the server response
    if (userRoles_connection.debug_mode) {
        console.log(data);
    }
};
userRoles_connection.edit_roleid_by_userid = function (userid, roleid) {
    var param = {
        "act": "userRoles_edit_roleid_by_userid",
        roleid: roleid,
        userid: userid
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.edit_roleid_by_userid_call_back, "POST");
};
userRoles_connection.edit_by_createby_call_back = function (data) {
    //TODO: set code after the server response
    if (userRoles_connection.debug_mode) {
        console.log(data);
    }
};
userRoles_connection.edit_by_createby = function (userid, roleid, createby, creationdate) {
    var param = {
        "act": "userRoles_edit_by_createby",
        userid: userid, roleid: roleid, createby: createby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.edit_by_createby_call_back, "POST");
};
userRoles_connection.edit_createby_by_userid_call_back = function (data) {
    //TODO: set code after the server response
    if (userRoles_connection.debug_mode) {
        console.log(data);
    }
};
userRoles_connection.edit_createby_by_userid = function (userid, createby) {
    var param = {
        "act": "userRoles_edit_createby_by_userid",
        createby: createby,
        userid: userid
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.edit_createby_by_userid_call_back, "POST");
};
userRoles_connection.edit_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (userRoles_connection.debug_mode) {
        console.log(data);
    }
};
userRoles_connection.edit_by_creationdate = function (userid, roleid, createby, creationdate) {
    var param = {
        "act": "userRoles_edit_by_creationdate",
        userid: userid, roleid: roleid, createby: createby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.edit_by_creationdate_call_back, "POST");
};
userRoles_connection.edit_creationdate_by_userid_call_back = function (data) {
    //TODO: set code after the server response
    if (userRoles_connection.debug_mode) {
        console.log(data);
    }
};
userRoles_connection.edit_creationdate_by_userid = function (userid, creationdate) {
    var param = {
        "act": "userRoles_edit_creationdate_by_userid",
        creationdate: creationdate,
        userid: userid
    };
    ajax.sender_data_json_by_url_callback(userRoles_connection.controller_url, param, userRoles_connection.edit_creationdate_by_userid_call_back, "POST");
};