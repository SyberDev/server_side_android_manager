var grid_users;
var users_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

users_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.get = function () {
    var param = {"act": "users_get"};
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_call_back, "POST");
};
//_____________ delete function
users_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};

users_connection.delete = function (id) {
    var param = {
        act: "users_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.delete_call_back, "POST");
};
//_____________ set function
users_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};

users_connection.set = function (username, password, email, mobile, avatar, sex, lastlogin, failedcount, lastmodify, isDelete, createby) {
    var param = {
        act: "users_set",
        username: username,
        password: password,
        email: email,
        mobile: mobile,
        avatar: avatar,
        sex: sex,
        lastlogin: lastlogin,
        failedcount: failedcount,
        lastmodify: lastmodify,
        isDelete: isDelete,
        createby: createby
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.set_call_back, "POST");
};
//_____________ grid function
users_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }

    grid_users = new PSCO_grid('grid_users');

    grid_users.cols = [
        {name: 'id', hidden: false, type: 'text'}, {name: 'username', hidden: false, type: 'text'}, {
            name: 'password',
            hidden: false,
            type: 'text'
        }, {name: 'email', hidden: false, type: 'text'}, {name: 'mobile', hidden: false, type: 'text'}, {
            name: 'avatar',
            hidden: false,
            type: 'text'
        }, {name: 'sex', hidden: false, type: 'text'}, {
            name: 'lastlogin',
            hidden: false,
            type: 'text'
        }, {name: 'failedcount', hidden: false, type: 'text'}, {
            name: 'lastmodify',
            hidden: false,
            type: 'text'
        }, {name: 'isDelete', hidden: false, type: 'text'}, {
            name: 'createby',
            hidden: false,
            type: 'text'
        }, {name: 'creationdate', hidden: false, type: 'text'}];

    grid_users.RightToLeft = false;

    // grid_users.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_users.data = data;

    grid_users.render();

};
users_connection.get_grid = function () {
    var param = {"act": "users_get"};
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_grid_call_back, "POST");
};
//________________get functions
users_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.get_by_id = function (id) {
    var param = {
        "act": "users_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_by_id_call_back, "POST");
};

users_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "users_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_grid_call_back, "POST");
};
users_connection.get_by_username_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.get_by_username = function (username) {
    var param = {
        "act": "users_get_by_username",
        username: username
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_by_username_call_back, "POST");
};

users_connection.get_by_username_grid = function (username) {
    var param = {
        "act": "users_get_by_username",
        username: username
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_grid_call_back, "POST");
};
users_connection.get_by_password_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.get_by_password = function (password) {
    var param = {
        "act": "users_get_by_password",
        password: password
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_by_password_call_back, "POST");
};

users_connection.get_by_password_grid = function (password) {
    var param = {
        "act": "users_get_by_password",
        password: password
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_grid_call_back, "POST");
};
users_connection.get_by_email_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.get_by_email = function (email) {
    var param = {
        "act": "users_get_by_email",
        email: email
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_by_email_call_back, "POST");
};

users_connection.get_by_email_grid = function (email) {
    var param = {
        "act": "users_get_by_email",
        email: email
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_grid_call_back, "POST");
};
users_connection.get_by_mobile_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.get_by_mobile = function (mobile) {
    var param = {
        "act": "users_get_by_mobile",
        mobile: mobile
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_by_mobile_call_back, "POST");
};

users_connection.get_by_mobile_grid = function (mobile) {
    var param = {
        "act": "users_get_by_mobile",
        mobile: mobile
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_grid_call_back, "POST");
};
users_connection.get_by_avatar_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.get_by_avatar = function (avatar) {
    var param = {
        "act": "users_get_by_avatar",
        avatar: avatar
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_by_avatar_call_back, "POST");
};

users_connection.get_by_avatar_grid = function (avatar) {
    var param = {
        "act": "users_get_by_avatar",
        avatar: avatar
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_grid_call_back, "POST");
};
users_connection.get_by_sex_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.get_by_sex = function (sex) {
    var param = {
        "act": "users_get_by_sex",
        sex: sex
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_by_sex_call_back, "POST");
};

users_connection.get_by_sex_grid = function (sex) {
    var param = {
        "act": "users_get_by_sex",
        sex: sex
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_grid_call_back, "POST");
};
users_connection.get_by_lastlogin_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.get_by_lastlogin = function (lastlogin) {
    var param = {
        "act": "users_get_by_lastlogin",
        lastlogin: lastlogin
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_by_lastlogin_call_back, "POST");
};

users_connection.get_by_lastlogin_grid = function (lastlogin) {
    var param = {
        "act": "users_get_by_lastlogin",
        lastlogin: lastlogin
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_grid_call_back, "POST");
};
users_connection.get_by_failedcount_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.get_by_failedcount = function (failedcount) {
    var param = {
        "act": "users_get_by_failedcount",
        failedcount: failedcount
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_by_failedcount_call_back, "POST");
};

users_connection.get_by_failedcount_grid = function (failedcount) {
    var param = {
        "act": "users_get_by_failedcount",
        failedcount: failedcount
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_grid_call_back, "POST");
};
users_connection.get_by_lastmodify_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.get_by_lastmodify = function (lastmodify) {
    var param = {
        "act": "users_get_by_lastmodify",
        lastmodify: lastmodify
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_by_lastmodify_call_back, "POST");
};

users_connection.get_by_lastmodify_grid = function (lastmodify) {
    var param = {
        "act": "users_get_by_lastmodify",
        lastmodify: lastmodify
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_grid_call_back, "POST");
};
users_connection.get_by_isDelete_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.get_by_isDelete = function (isDelete) {
    var param = {
        "act": "users_get_by_isDelete",
        isDelete: isDelete
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_by_isDelete_call_back, "POST");
};

users_connection.get_by_isDelete_grid = function (isDelete) {
    var param = {
        "act": "users_get_by_isDelete",
        isDelete: isDelete
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_grid_call_back, "POST");
};
users_connection.get_by_createby_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.get_by_createby = function (createby) {
    var param = {
        "act": "users_get_by_createby",
        createby: createby
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_by_createby_call_back, "POST");
};

users_connection.get_by_createby_grid = function (createby) {
    var param = {
        "act": "users_get_by_createby",
        createby: createby
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_grid_call_back, "POST");
};
users_connection.get_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.get_by_creationdate = function (creationdate) {
    var param = {
        "act": "users_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_by_creationdate_call_back, "POST");
};

users_connection.get_by_creationdate_grid = function (creationdate) {
    var param = {
        "act": "users_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.get_grid_call_back, "POST");
};

//________________edit functions
users_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_by_id = function (id, username, password, email, mobile, avatar, sex, lastlogin, failedcount, lastmodify, isDelete, createby, creationdate) {
    var param = {
        "act": "users_edit_by_id",
        id: id,
        username: username,
        password: password,
        email: email,
        mobile: mobile,
        avatar: avatar,
        sex: sex,
        lastlogin: lastlogin,
        failedcount: failedcount,
        lastmodify: lastmodify,
        isDelete: isDelete,
        createby: createby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_by_id_call_back, "POST");
};
users_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "users_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_id_by_id_call_back, "POST");
};
users_connection.edit_by_username_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_by_username = function (id, username, password, email, mobile, avatar, sex, lastlogin, failedcount, lastmodify, isDelete, createby, creationdate) {
    var param = {
        "act": "users_edit_by_username",
        id: id,
        username: username,
        password: password,
        email: email,
        mobile: mobile,
        avatar: avatar,
        sex: sex,
        lastlogin: lastlogin,
        failedcount: failedcount,
        lastmodify: lastmodify,
        isDelete: isDelete,
        createby: createby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_by_username_call_back, "POST");
};
users_connection.edit_username_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_username_by_id = function (id, username) {
    var param = {
        "act": "users_edit_username_by_id",
        username: username,
        id: id
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_username_by_id_call_back, "POST");
};
users_connection.edit_by_password_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_by_password = function (id, username, password, email, mobile, avatar, sex, lastlogin, failedcount, lastmodify, isDelete, createby, creationdate) {
    var param = {
        "act": "users_edit_by_password",
        id: id,
        username: username,
        password: password,
        email: email,
        mobile: mobile,
        avatar: avatar,
        sex: sex,
        lastlogin: lastlogin,
        failedcount: failedcount,
        lastmodify: lastmodify,
        isDelete: isDelete,
        createby: createby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_by_password_call_back, "POST");
};
users_connection.edit_password_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_password_by_id = function (id, password) {
    var param = {
        "act": "users_edit_password_by_id",
        password: password,
        id: id
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_password_by_id_call_back, "POST");
};
users_connection.edit_by_email_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_by_email = function (id, username, password, email, mobile, avatar, sex, lastlogin, failedcount, lastmodify, isDelete, createby, creationdate) {
    var param = {
        "act": "users_edit_by_email",
        id: id,
        username: username,
        password: password,
        email: email,
        mobile: mobile,
        avatar: avatar,
        sex: sex,
        lastlogin: lastlogin,
        failedcount: failedcount,
        lastmodify: lastmodify,
        isDelete: isDelete,
        createby: createby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_by_email_call_back, "POST");
};
users_connection.edit_email_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_email_by_id = function (id, email) {
    var param = {
        "act": "users_edit_email_by_id",
        email: email,
        id: id
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_email_by_id_call_back, "POST");
};
users_connection.edit_by_mobile_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_by_mobile = function (id, username, password, email, mobile, avatar, sex, lastlogin, failedcount, lastmodify, isDelete, createby, creationdate) {
    var param = {
        "act": "users_edit_by_mobile",
        id: id,
        username: username,
        password: password,
        email: email,
        mobile: mobile,
        avatar: avatar,
        sex: sex,
        lastlogin: lastlogin,
        failedcount: failedcount,
        lastmodify: lastmodify,
        isDelete: isDelete,
        createby: createby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_by_mobile_call_back, "POST");
};
users_connection.edit_mobile_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_mobile_by_id = function (id, mobile) {
    var param = {
        "act": "users_edit_mobile_by_id",
        mobile: mobile,
        id: id
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_mobile_by_id_call_back, "POST");
};
users_connection.edit_by_avatar_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_by_avatar = function (id, username, password, email, mobile, avatar, sex, lastlogin, failedcount, lastmodify, isDelete, createby, creationdate) {
    var param = {
        "act": "users_edit_by_avatar",
        id: id,
        username: username,
        password: password,
        email: email,
        mobile: mobile,
        avatar: avatar,
        sex: sex,
        lastlogin: lastlogin,
        failedcount: failedcount,
        lastmodify: lastmodify,
        isDelete: isDelete,
        createby: createby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_by_avatar_call_back, "POST");
};
users_connection.edit_avatar_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_avatar_by_id = function (id, avatar) {
    var param = {
        "act": "users_edit_avatar_by_id",
        avatar: avatar,
        id: id
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_avatar_by_id_call_back, "POST");
};
users_connection.edit_by_sex_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_by_sex = function (id, username, password, email, mobile, avatar, sex, lastlogin, failedcount, lastmodify, isDelete, createby, creationdate) {
    var param = {
        "act": "users_edit_by_sex",
        id: id,
        username: username,
        password: password,
        email: email,
        mobile: mobile,
        avatar: avatar,
        sex: sex,
        lastlogin: lastlogin,
        failedcount: failedcount,
        lastmodify: lastmodify,
        isDelete: isDelete,
        createby: createby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_by_sex_call_back, "POST");
};
users_connection.edit_sex_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_sex_by_id = function (id, sex) {
    var param = {
        "act": "users_edit_sex_by_id",
        sex: sex,
        id: id
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_sex_by_id_call_back, "POST");
};
users_connection.edit_by_lastlogin_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_by_lastlogin = function (id, username, password, email, mobile, avatar, sex, lastlogin, failedcount, lastmodify, isDelete, createby, creationdate) {
    var param = {
        "act": "users_edit_by_lastlogin",
        id: id,
        username: username,
        password: password,
        email: email,
        mobile: mobile,
        avatar: avatar,
        sex: sex,
        lastlogin: lastlogin,
        failedcount: failedcount,
        lastmodify: lastmodify,
        isDelete: isDelete,
        createby: createby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_by_lastlogin_call_back, "POST");
};
users_connection.edit_lastlogin_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_lastlogin_by_id = function (id, lastlogin) {
    var param = {
        "act": "users_edit_lastlogin_by_id",
        lastlogin: lastlogin,
        id: id
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_lastlogin_by_id_call_back, "POST");
};
users_connection.edit_by_failedcount_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_by_failedcount = function (id, username, password, email, mobile, avatar, sex, lastlogin, failedcount, lastmodify, isDelete, createby, creationdate) {
    var param = {
        "act": "users_edit_by_failedcount",
        id: id,
        username: username,
        password: password,
        email: email,
        mobile: mobile,
        avatar: avatar,
        sex: sex,
        lastlogin: lastlogin,
        failedcount: failedcount,
        lastmodify: lastmodify,
        isDelete: isDelete,
        createby: createby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_by_failedcount_call_back, "POST");
};
users_connection.edit_failedcount_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_failedcount_by_id = function (id, failedcount) {
    var param = {
        "act": "users_edit_failedcount_by_id",
        failedcount: failedcount,
        id: id
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_failedcount_by_id_call_back, "POST");
};
users_connection.edit_by_lastmodify_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_by_lastmodify = function (id, username, password, email, mobile, avatar, sex, lastlogin, failedcount, lastmodify, isDelete, createby, creationdate) {
    var param = {
        "act": "users_edit_by_lastmodify",
        id: id,
        username: username,
        password: password,
        email: email,
        mobile: mobile,
        avatar: avatar,
        sex: sex,
        lastlogin: lastlogin,
        failedcount: failedcount,
        lastmodify: lastmodify,
        isDelete: isDelete,
        createby: createby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_by_lastmodify_call_back, "POST");
};
users_connection.edit_lastmodify_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_lastmodify_by_id = function (id, lastmodify) {
    var param = {
        "act": "users_edit_lastmodify_by_id",
        lastmodify: lastmodify,
        id: id
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_lastmodify_by_id_call_back, "POST");
};
users_connection.edit_by_isDelete_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_by_isDelete = function (id, username, password, email, mobile, avatar, sex, lastlogin, failedcount, lastmodify, isDelete, createby, creationdate) {
    var param = {
        "act": "users_edit_by_isDelete",
        id: id,
        username: username,
        password: password,
        email: email,
        mobile: mobile,
        avatar: avatar,
        sex: sex,
        lastlogin: lastlogin,
        failedcount: failedcount,
        lastmodify: lastmodify,
        isDelete: isDelete,
        createby: createby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_by_isDelete_call_back, "POST");
};
users_connection.edit_isDelete_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_isDelete_by_id = function (id, isDelete) {
    var param = {
        "act": "users_edit_isDelete_by_id",
        isDelete: isDelete,
        id: id
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_isDelete_by_id_call_back, "POST");
};
users_connection.edit_by_createby_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_by_createby = function (id, username, password, email, mobile, avatar, sex, lastlogin, failedcount, lastmodify, isDelete, createby, creationdate) {
    var param = {
        "act": "users_edit_by_createby",
        id: id,
        username: username,
        password: password,
        email: email,
        mobile: mobile,
        avatar: avatar,
        sex: sex,
        lastlogin: lastlogin,
        failedcount: failedcount,
        lastmodify: lastmodify,
        isDelete: isDelete,
        createby: createby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_by_createby_call_back, "POST");
};
users_connection.edit_createby_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_createby_by_id = function (id, createby) {
    var param = {
        "act": "users_edit_createby_by_id",
        createby: createby,
        id: id
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_createby_by_id_call_back, "POST");
};
users_connection.edit_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_by_creationdate = function (id, username, password, email, mobile, avatar, sex, lastlogin, failedcount, lastmodify, isDelete, createby, creationdate) {
    var param = {
        "act": "users_edit_by_creationdate",
        id: id,
        username: username,
        password: password,
        email: email,
        mobile: mobile,
        avatar: avatar,
        sex: sex,
        lastlogin: lastlogin,
        failedcount: failedcount,
        lastmodify: lastmodify,
        isDelete: isDelete,
        createby: createby,
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_by_creationdate_call_back, "POST");
};
users_connection.edit_creationdate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (users_connection.debug_mode) {
        console.log(data);
    }
};
users_connection.edit_creationdate_by_id = function (id, creationdate) {
    var param = {
        "act": "users_edit_creationdate_by_id",
        creationdate: creationdate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(users_connection.controller_url, param, users_connection.edit_creationdate_by_id_call_back, "POST");
};