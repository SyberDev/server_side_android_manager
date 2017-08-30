var grid_PhoneNmuber;
var PhoneNmuber_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

PhoneNmuber_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};
PhoneNmuber_connection.get = function () {
    var param = {"act": "PhoneNmuber_get"};
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.get_call_back, "POST");
};
//_____________ delete function
PhoneNmuber_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};

PhoneNmuber_connection.delete = function (id) {
    var param = {
        act: "PhoneNmuber_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.delete_call_back, "POST");
};
//_____________ set function
PhoneNmuber_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};

PhoneNmuber_connection.set = function (number, contactid, creationdate) {
    var param = {
        act: "PhoneNmuber_set",
        number: number, contactid: contactid, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.set_call_back, "POST");
};
//_____________ grid function
PhoneNmuber_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }

    grid_PhoneNmuber = new PSCO_grid('grid_PhoneNmuber');

    grid_PhoneNmuber.cols = [
        {name: 'id', hidden: false, type: 'text'}, {name: 'number', hidden: false, type: 'text'}, {
            name: 'contactid',
            hidden: false,
            type: 'text'
        }, {name: 'creationdate', hidden: false, type: 'text'}, {name: 'createdby', hidden: false, type: 'text'}];

    grid_PhoneNmuber.RightToLeft = false;

    // grid_PhoneNmuber.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_PhoneNmuber.data = data;

    grid_PhoneNmuber.render();

};
PhoneNmuber_connection.get_grid = function () {
    var param = {"act": "PhoneNmuber_get"};
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.get_grid_call_back, "POST");
};
//________________get functions
PhoneNmuber_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};
PhoneNmuber_connection.get_by_id = function (id) {
    var param = {
        "act": "PhoneNmuber_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.get_by_id_call_back, "POST");
};

PhoneNmuber_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "PhoneNmuber_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.get_grid_call_back, "POST");
};
PhoneNmuber_connection.get_by_number_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};
PhoneNmuber_connection.get_by_number = function (number) {
    var param = {
        "act": "PhoneNmuber_get_by_number",
        number: number
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.get_by_number_call_back, "POST");
};

PhoneNmuber_connection.get_by_number_grid = function (number) {
    var param = {
        "act": "PhoneNmuber_get_by_number",
        number: number
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.get_grid_call_back, "POST");
};
PhoneNmuber_connection.get_by_contactid_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};
PhoneNmuber_connection.get_by_contactid = function (contactid) {
    var param = {
        "act": "PhoneNmuber_get_by_contactid",
        contactid: contactid
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.get_by_contactid_call_back, "POST");
};

PhoneNmuber_connection.get_by_contactid_grid = function (contactid) {
    var param = {
        "act": "PhoneNmuber_get_by_contactid",
        contactid: contactid
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.get_grid_call_back, "POST");
};
PhoneNmuber_connection.get_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};
PhoneNmuber_connection.get_by_creationdate = function (creationdate) {
    var param = {
        "act": "PhoneNmuber_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.get_by_creationdate_call_back, "POST");
};

PhoneNmuber_connection.get_by_creationdate_grid = function (creationdate) {
    var param = {
        "act": "PhoneNmuber_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.get_grid_call_back, "POST");
};
PhoneNmuber_connection.get_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};
PhoneNmuber_connection.get_by_createdby = function (createdby) {
    var param = {
        "act": "PhoneNmuber_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.get_by_createdby_call_back, "POST");
};

PhoneNmuber_connection.get_by_createdby_grid = function (createdby) {
    var param = {
        "act": "PhoneNmuber_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.get_grid_call_back, "POST");
};

//________________edit functions
PhoneNmuber_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};
PhoneNmuber_connection.edit_by_id = function (id, number, contactid, creationdate, createdby) {
    var param = {
        "act": "PhoneNmuber_edit_by_id",
        id: id, number: number, contactid: contactid, creationdate: creationdate, createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.edit_by_id_call_back, "POST");
};
PhoneNmuber_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};
PhoneNmuber_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "PhoneNmuber_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.edit_id_by_id_call_back, "POST");
};
PhoneNmuber_connection.edit_by_number_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};
PhoneNmuber_connection.edit_by_number = function (id, number, contactid, creationdate, createdby) {
    var param = {
        "act": "PhoneNmuber_edit_by_number",
        id: id, number: number, contactid: contactid, creationdate: creationdate, createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.edit_by_number_call_back, "POST");
};
PhoneNmuber_connection.edit_number_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};
PhoneNmuber_connection.edit_number_by_id = function (id, number) {
    var param = {
        "act": "PhoneNmuber_edit_number_by_id",
        number: number,
        id: id
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.edit_number_by_id_call_back, "POST");
};
PhoneNmuber_connection.edit_by_contactid_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};
PhoneNmuber_connection.edit_by_contactid = function (id, number, contactid, creationdate, createdby) {
    var param = {
        "act": "PhoneNmuber_edit_by_contactid",
        id: id, number: number, contactid: contactid, creationdate: creationdate, createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.edit_by_contactid_call_back, "POST");
};
PhoneNmuber_connection.edit_contactid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};
PhoneNmuber_connection.edit_contactid_by_id = function (id, contactid) {
    var param = {
        "act": "PhoneNmuber_edit_contactid_by_id",
        contactid: contactid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.edit_contactid_by_id_call_back, "POST");
};
PhoneNmuber_connection.edit_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};
PhoneNmuber_connection.edit_by_creationdate = function (id, number, contactid, creationdate, createdby) {
    var param = {
        "act": "PhoneNmuber_edit_by_creationdate",
        id: id, number: number, contactid: contactid, creationdate: creationdate, createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.edit_by_creationdate_call_back, "POST");
};
PhoneNmuber_connection.edit_creationdate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};
PhoneNmuber_connection.edit_creationdate_by_id = function (id, creationdate) {
    var param = {
        "act": "PhoneNmuber_edit_creationdate_by_id",
        creationdate: creationdate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.edit_creationdate_by_id_call_back, "POST");
};
PhoneNmuber_connection.edit_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};
PhoneNmuber_connection.edit_by_createdby = function (id, number, contactid, creationdate, createdby) {
    var param = {
        "act": "PhoneNmuber_edit_by_createdby",
        id: id, number: number, contactid: contactid, creationdate: creationdate, createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.edit_by_createdby_call_back, "POST");
};
PhoneNmuber_connection.edit_createdby_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (PhoneNmuber_connection.debug_mode) {
        console.log(data);
    }
};
PhoneNmuber_connection.edit_createdby_by_id = function (id, createdby) {
    var param = {
        "act": "PhoneNmuber_edit_createdby_by_id",
        createdby: createdby,
        id: id
    };
    ajax.sender_data_json_by_url_callback(PhoneNmuber_connection.controller_url, param, PhoneNmuber_connection.edit_createdby_by_id_call_back, "POST");
};