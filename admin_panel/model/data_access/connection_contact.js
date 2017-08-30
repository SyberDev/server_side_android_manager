var grid_contact;
var contact_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

contact_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.get = function () {
    var param = {"act": "contact_get"};
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.get_call_back, "POST");
};
//_____________ delete function
contact_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};

contact_connection.delete = function (id) {
    var param = {
        act: "contact_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.delete_call_back, "POST");
};
//_____________ set function
contact_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};

contact_connection.set = function (name, contactid, deviceid, createdby) {
    var param = {
        act: "contact_set",
        name: name, contactid: contactid, deviceid: deviceid, createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.set_call_back, "POST");
};
//_____________ grid function
contact_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }

    grid_contact = new PSCO_grid('grid_contact');

    grid_contact.cols = [
        {name: 'id', hidden: false, type: 'text'}, {name: 'name', hidden: false, type: 'text'}, {
            name: 'contactid',
            hidden: false,
            type: 'text'
        }, {name: 'deviceid', hidden: false, type: 'text'}, {
            name: 'createdby',
            hidden: false,
            type: 'text'
        }, {name: 'creationdate', hidden: false, type: 'text'}];

    grid_contact.RightToLeft = false;

    // grid_contact.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_contact.data = data;

    grid_contact.render();

};
contact_connection.get_grid = function () {
    var param = {"act": "contact_get"};
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.get_grid_call_back, "POST");
};
//________________get functions
contact_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.get_by_id = function (id) {
    var param = {
        "act": "contact_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.get_by_id_call_back, "POST");
};

contact_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "contact_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.get_grid_call_back, "POST");
};
contact_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.get_by_name = function (name) {
    var param = {
        "act": "contact_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.get_by_name_call_back, "POST");
};

contact_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "contact_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.get_grid_call_back, "POST");
};
contact_connection.get_by_contactid_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.get_by_contactid = function (contactid) {
    var param = {
        "act": "contact_get_by_contactid",
        contactid: contactid
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.get_by_contactid_call_back, "POST");
};

contact_connection.get_by_contactid_grid = function (contactid) {
    var param = {
        "act": "contact_get_by_contactid",
        contactid: contactid
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.get_grid_call_back, "POST");
};
contact_connection.get_by_deviceid_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.get_by_deviceid = function (deviceid) {
    var param = {
        "act": "contact_get_by_deviceid",
        deviceid: deviceid
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.get_by_deviceid_call_back, "POST");
};

contact_connection.get_by_deviceid_grid = function (deviceid) {
    var param = {
        "act": "contact_get_by_deviceid",
        deviceid: deviceid
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.get_grid_call_back, "POST");
};
contact_connection.get_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.get_by_createdby = function (createdby) {
    var param = {
        "act": "contact_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.get_by_createdby_call_back, "POST");
};

contact_connection.get_by_createdby_grid = function (createdby) {
    var param = {
        "act": "contact_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.get_grid_call_back, "POST");
};
contact_connection.get_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.get_by_creationdate = function (creationdate) {
    var param = {
        "act": "contact_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.get_by_creationdate_call_back, "POST");
};

contact_connection.get_by_creationdate_grid = function (creationdate) {
    var param = {
        "act": "contact_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.get_grid_call_back, "POST");
};

//________________edit functions
contact_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.edit_by_id = function (id, name, contactid, deviceid, createdby, creationdate) {
    var param = {
        "act": "contact_edit_by_id",
        id: id, name: name, contactid: contactid, deviceid: deviceid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.edit_by_id_call_back, "POST");
};
contact_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "contact_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.edit_id_by_id_call_back, "POST");
};
contact_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.edit_by_name = function (id, name, contactid, deviceid, createdby, creationdate) {
    var param = {
        "act": "contact_edit_by_name",
        id: id, name: name, contactid: contactid, deviceid: deviceid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.edit_by_name_call_back, "POST");
};
contact_connection.edit_name_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.edit_name_by_id = function (id, name) {
    var param = {
        "act": "contact_edit_name_by_id",
        name: name,
        id: id
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.edit_name_by_id_call_back, "POST");
};
contact_connection.edit_by_contactid_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.edit_by_contactid = function (id, name, contactid, deviceid, createdby, creationdate) {
    var param = {
        "act": "contact_edit_by_contactid",
        id: id, name: name, contactid: contactid, deviceid: deviceid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.edit_by_contactid_call_back, "POST");
};
contact_connection.edit_contactid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.edit_contactid_by_id = function (id, contactid) {
    var param = {
        "act": "contact_edit_contactid_by_id",
        contactid: contactid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.edit_contactid_by_id_call_back, "POST");
};
contact_connection.edit_by_deviceid_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.edit_by_deviceid = function (id, name, contactid, deviceid, createdby, creationdate) {
    var param = {
        "act": "contact_edit_by_deviceid",
        id: id, name: name, contactid: contactid, deviceid: deviceid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.edit_by_deviceid_call_back, "POST");
};
contact_connection.edit_deviceid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.edit_deviceid_by_id = function (id, deviceid) {
    var param = {
        "act": "contact_edit_deviceid_by_id",
        deviceid: deviceid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.edit_deviceid_by_id_call_back, "POST");
};
contact_connection.edit_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.edit_by_createdby = function (id, name, contactid, deviceid, createdby, creationdate) {
    var param = {
        "act": "contact_edit_by_createdby",
        id: id, name: name, contactid: contactid, deviceid: deviceid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.edit_by_createdby_call_back, "POST");
};
contact_connection.edit_createdby_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.edit_createdby_by_id = function (id, createdby) {
    var param = {
        "act": "contact_edit_createdby_by_id",
        createdby: createdby,
        id: id
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.edit_createdby_by_id_call_back, "POST");
};
contact_connection.edit_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.edit_by_creationdate = function (id, name, contactid, deviceid, createdby, creationdate) {
    var param = {
        "act": "contact_edit_by_creationdate",
        id: id, name: name, contactid: contactid, deviceid: deviceid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.edit_by_creationdate_call_back, "POST");
};
contact_connection.edit_creationdate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (contact_connection.debug_mode) {
        console.log(data);
    }
};
contact_connection.edit_creationdate_by_id = function (id, creationdate) {
    var param = {
        "act": "contact_edit_creationdate_by_id",
        creationdate: creationdate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(contact_connection.controller_url, param, contact_connection.edit_creationdate_by_id_call_back, "POST");
};