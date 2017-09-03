var grid_gps;
var gps_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

gps_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.get = function () {
    var param = {"act": "gps_get"};
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.get_call_back, "POST");
};
//_____________ delete function
gps_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};

gps_connection.delete = function (id) {
    var param = {
        act: "gps_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.delete_call_back, "POST");
};
//_____________ set function
gps_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};

gps_connection.set = function (lat, long, deviceid, createdby) {
    var param = {
        act: "gps_set",
        lat: lat, long: long, deviceid: deviceid, createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.set_call_back, "POST");
};
//_____________ grid function
gps_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }

    grid_gps = new PSCO_grid('grid_gps');

    grid_gps.cols = [
        {name: 'id', hidden: false, type: 'text'}, {name: 'lat', hidden: false, type: 'text'}, {
            name: 'long',
            hidden: false,
            type: 'text'
        }, {name: 'deviceid', hidden: false, type: 'text'}, {
            name: 'createdby',
            hidden: false,
            type: 'text'
        }, {name: 'creationdate', hidden: false, type: 'text'}];

    grid_gps.RightToLeft = false;

    // grid_gps.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_gps.data = data;

    grid_gps.render();

};
gps_connection.get_grid = function () {
    var param = {"act": "gps_get"};
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.get_grid_call_back, "POST");
};
//________________get functions
gps_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.get_by_id = function (id) {
    var param = {
        "act": "gps_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.get_by_id_call_back, "POST");
};

gps_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "gps_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.get_grid_call_back, "POST");
};
gps_connection.get_by_lat_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.get_by_lat = function (lat) {
    var param = {
        "act": "gps_get_by_lat",
        lat: lat
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.get_by_lat_call_back, "POST");
};

gps_connection.get_by_lat_grid = function (lat) {
    var param = {
        "act": "gps_get_by_lat",
        lat: lat
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.get_grid_call_back, "POST");
};
gps_connection.get_by_long_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.get_by_long = function (long) {
    var param = {
        "act": "gps_get_by_long",
        long: long
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.get_by_long_call_back, "POST");
};

gps_connection.get_by_long_grid = function (long) {
    var param = {
        "act": "gps_get_by_long",
        long: long
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.get_grid_call_back, "POST");
};
gps_connection.get_by_deviceid_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.get_by_deviceid = function (deviceid) {
    var param = {
        "act": "gps_get_by_deviceid",
        deviceid: deviceid
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.get_by_deviceid_call_back, "POST");
};

gps_connection.get_by_deviceid_grid = function (deviceid) {
    var param = {
        "act": "gps_get_by_deviceid",
        deviceid: deviceid
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.get_grid_call_back, "POST");
};
gps_connection.get_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.get_by_createdby = function (createdby) {
    var param = {
        "act": "gps_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.get_by_createdby_call_back, "POST");
};

gps_connection.get_by_createdby_grid = function (createdby) {
    var param = {
        "act": "gps_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.get_grid_call_back, "POST");
};
gps_connection.get_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.get_by_creationdate = function (creationdate) {
    var param = {
        "act": "gps_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.get_by_creationdate_call_back, "POST");
};

gps_connection.get_by_creationdate_grid = function (creationdate) {
    var param = {
        "act": "gps_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.get_grid_call_back, "POST");
};

//________________edit functions
gps_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.edit_by_id = function (id, lat, long, deviceid, createdby, creationdate) {
    var param = {
        "act": "gps_edit_by_id",
        id: id, lat: lat, long: long, deviceid: deviceid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.edit_by_id_call_back, "POST");
};
gps_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "gps_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.edit_id_by_id_call_back, "POST");
};
gps_connection.edit_by_lat_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.edit_by_lat = function (id, lat, long, deviceid, createdby, creationdate) {
    var param = {
        "act": "gps_edit_by_lat",
        id: id, lat: lat, long: long, deviceid: deviceid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.edit_by_lat_call_back, "POST");
};
gps_connection.edit_lat_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.edit_lat_by_id = function (id, lat) {
    var param = {
        "act": "gps_edit_lat_by_id",
        lat: lat,
        id: id
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.edit_lat_by_id_call_back, "POST");
};
gps_connection.edit_by_long_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.edit_by_long = function (id, lat, long, deviceid, createdby, creationdate) {
    var param = {
        "act": "gps_edit_by_long",
        id: id, lat: lat, long: long, deviceid: deviceid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.edit_by_long_call_back, "POST");
};
gps_connection.edit_long_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.edit_long_by_id = function (id, long) {
    var param = {
        "act": "gps_edit_long_by_id",
        long: long,
        id: id
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.edit_long_by_id_call_back, "POST");
};
gps_connection.edit_by_deviceid_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.edit_by_deviceid = function (id, lat, long, deviceid, createdby, creationdate) {
    var param = {
        "act": "gps_edit_by_deviceid",
        id: id, lat: lat, long: long, deviceid: deviceid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.edit_by_deviceid_call_back, "POST");
};
gps_connection.edit_deviceid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.edit_deviceid_by_id = function (id, deviceid) {
    var param = {
        "act": "gps_edit_deviceid_by_id",
        deviceid: deviceid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.edit_deviceid_by_id_call_back, "POST");
};
gps_connection.edit_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.edit_by_createdby = function (id, lat, long, deviceid, createdby, creationdate) {
    var param = {
        "act": "gps_edit_by_createdby",
        id: id, lat: lat, long: long, deviceid: deviceid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.edit_by_createdby_call_back, "POST");
};
gps_connection.edit_createdby_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.edit_createdby_by_id = function (id, createdby) {
    var param = {
        "act": "gps_edit_createdby_by_id",
        createdby: createdby,
        id: id
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.edit_createdby_by_id_call_back, "POST");
};
gps_connection.edit_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.edit_by_creationdate = function (id, lat, long, deviceid, createdby, creationdate) {
    var param = {
        "act": "gps_edit_by_creationdate",
        id: id, lat: lat, long: long, deviceid: deviceid, createdby: createdby, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.edit_by_creationdate_call_back, "POST");
};
gps_connection.edit_creationdate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (gps_connection.debug_mode) {
        console.log(data);
    }
};
gps_connection.edit_creationdate_by_id = function (id, creationdate) {
    var param = {
        "act": "gps_edit_creationdate_by_id",
        creationdate: creationdate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(gps_connection.controller_url, param, gps_connection.edit_creationdate_by_id_call_back, "POST");
};