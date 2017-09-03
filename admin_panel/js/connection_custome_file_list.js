var grid_custome_file_list;
var custome_file_list_connection = {
    controller_url: 'controller/controller_custome_file_list.php'
    , debug_mode: false,
    imagesData: [], // for Gallery
    typeIDs: []// for Gallery
};

custome_file_list_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.get = function () {
    var param = {"act": "custome_file_list_get"};
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_call_back, "POST");
};
//_____________ delete function
custome_file_list_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};

custome_file_list_connection.delete = function (id) {
    var param = {
        act: "custome_file_list_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.delete_call_back, "POST");
};
//_____________ set function
custome_file_list_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};

custome_file_list_connection.set = function (filename, time, type) {
    // var deviceid = global.DeviceID;
    var creationdate = DateTime.getTimeNowTimeStamp();
    var param = {
        act: "custome_file_list_set",
        deviceid: deviceid, filename: filename, path: '', time: time, type: type, creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.set_call_back, "POST");
};
//_____________ grid function
custome_file_list_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }

    grid_custome_file_list = new PSCO_grid('grid_custome_file_list');

    grid_custome_file_list.cols = [
        {name: 'id', hidden: true, type: 'text'},
        {name: 'deviceid', hidden: true, type: 'text'},
        {
            name: 'filename',
            hidden: false,
            type: 'text'
        },
        {name: 'time', hidden: true, type: 'text'},
        {
            name: 'type',
            hidden: true,
            type: 'text'
        },
        {name: 'creationdate', hidden: false, type: 'text'},
        {name: 'path', hidden: false, type: 'text'},
        {name: 'createdby', hidden: true, type: 'text'}];

    for (var i = 0; i < data.length; i++) {
        data[i].path = {
            value: data[i].path,
            htmlTag: '<a href="' + data[i].path + '" download title="' + __lang.translate('download') + '"><i class=" glyphicon glyphicon-eye-open"></i></a>'
        }
    }


    grid_custome_file_list.data = data;

    grid_custome_file_list.render();

};
custome_file_list_connection.get_grid = function () {
    var param = {"act": "custome_file_list_get"};
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_grid_call_back, "POST");
};
//________________get functions
custome_file_list_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.get_by_id = function (id) {
    var param = {
        "act": "custome_file_list_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_by_id_call_back, "POST");
};

custome_file_list_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "custome_file_list_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_grid_call_back, "POST");
};
custome_file_list_connection.get_by_deviceid_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.get_by_deviceid = function (deviceid) {
    var param = {
        "act": "custome_file_list_get_by_deviceid",
        deviceid: deviceid
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_by_deviceid_call_back, "POST");
};

custome_file_list_connection.get_by_deviceid_grid = function (deviceid) {
    var param = {
        "act": "custome_file_list_get_by_deviceid",
        deviceid: deviceid
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_grid_call_back, "POST");
};
custome_file_list_connection.get_by_filename_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.get_by_filename = function (filename) {
    var param = {
        "act": "custome_file_list_get_by_filename",
        filename: filename
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_by_filename_call_back, "POST");
};

custome_file_list_connection.get_by_filename_grid = function (filename) {
    var param = {
        "act": "custome_file_list_get_by_filename",
        filename: filename
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_grid_call_back, "POST");
};
custome_file_list_connection.get_by_path_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.get_by_path = function (path) {
    var param = {
        "act": "custome_file_list_get_by_path",
        path: path
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_by_path_call_back, "POST");
};

custome_file_list_connection.get_by_path_grid = function (path) {
    var param = {
        "act": "custome_file_list_get_by_path",
        path: path
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_grid_call_back, "POST");
};
custome_file_list_connection.get_by_time_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.get_by_time = function (time) {
    var param = {
        "act": "custome_file_list_get_by_time",
        time: time
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_by_time_call_back, "POST");
};

custome_file_list_connection.get_by_time_grid = function (time) {
    var param = {
        "act": "custome_file_list_get_by_time",
        time: time
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_grid_call_back, "POST");
};
custome_file_list_connection.get_by_type_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.get_images = function () {
    custome_file_list_connection.typeIDs = ['2', '12', '13', '17', '18'];

    for (var i = 0; i < typeIDs.length; i++) {
        var param = {
            "act": "custome_file_list_get_by_type",
            type: typeIDs[i]
        };
        ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.getImages, "POST");
    }
};

var counter = 0;
custome_file_list_connection.getImages = function (data) {
    custome_file_list_connection.imagesData.push(data);
    counter++;
    if (custome_file_list_connection.typeIDs.length == counter) {
        var Tag = '';
        for (var i = 0; i < custome_file_list_connection.imagesData.length; i++) {
            Tag += '<div class="col-xs-6 col-md-4">' +
                '<a href="" data-lightbox="gallery" data-title="' + custome_file_list_connection.imagesData.filename + '">' +
                '<img src="' + custome_file_list_connection.imagesData.path + '"/>' +
                '</a>' +
                '</div>';
        }
        document.getElementById('galleryDiv').innerHTML = Tag;
    }

};

custome_file_list_connection.get_by_type = function (type) {
    var param = {
        "act": "custome_file_list_get_by_type",
        type: type
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_by_type_call_back, "POST");
};

custome_file_list_connection.get_by_type_grid = function (type) {
    var param = {
        "act": "custome_file_list_get_by_type",
        type: type
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_grid_call_back, "POST");
};
custome_file_list_connection.get_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.get_by_creationdate = function (creationdate) {
    var param = {
        "act": "custome_file_list_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_by_creationdate_call_back, "POST");
};

custome_file_list_connection.get_by_creationdate_grid = function (creationdate) {
    var param = {
        "act": "custome_file_list_get_by_creationdate",
        creationdate: creationdate
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_grid_call_back, "POST");
};
custome_file_list_connection.get_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.get_by_createdby = function (createdby) {
    var param = {
        "act": "custome_file_list_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_by_createdby_call_back, "POST");
};

custome_file_list_connection.get_by_createdby_grid = function (createdby) {
    var param = {
        "act": "custome_file_list_get_by_createdby",
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.get_grid_call_back, "POST");
};

//________________edit functions
custome_file_list_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.edit_by_id = function (id, deviceid, filename, path, time, type, creationdate, createdby) {
    var param = {
        "act": "custome_file_list_edit_by_id",
        id: id,
        deviceid: deviceid,
        filename: filename,
        path: path,
        time: time,
        type: type,
        creationdate: creationdate,
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.edit_by_id_call_back, "POST");
};
custome_file_list_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "custome_file_list_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.edit_id_by_id_call_back, "POST");
};
custome_file_list_connection.edit_by_deviceid_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.edit_by_deviceid = function (id, deviceid, filename, path, time, type, creationdate, createdby) {
    var param = {
        "act": "custome_file_list_edit_by_deviceid",
        id: id,
        deviceid: deviceid,
        filename: filename,
        path: path,
        time: time,
        type: type,
        creationdate: creationdate,
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.edit_by_deviceid_call_back, "POST");
};
custome_file_list_connection.edit_deviceid_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.edit_deviceid_by_id = function (id, deviceid) {
    var param = {
        "act": "custome_file_list_edit_deviceid_by_id",
        deviceid: deviceid,
        id: id
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.edit_deviceid_by_id_call_back, "POST");
};
custome_file_list_connection.edit_by_filename_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.edit_by_filename = function (id, deviceid, filename, path, time, type, creationdate, createdby) {
    var param = {
        "act": "custome_file_list_edit_by_filename",
        id: id,
        deviceid: deviceid,
        filename: filename,
        path: path,
        time: time,
        type: type,
        creationdate: creationdate,
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.edit_by_filename_call_back, "POST");
};
custome_file_list_connection.edit_filename_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.edit_filename_by_id = function (id, filename) {
    var param = {
        "act": "custome_file_list_edit_filename_by_id",
        filename: filename,
        id: id
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.edit_filename_by_id_call_back, "POST");
};
custome_file_list_connection.edit_by_path_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.edit_by_path = function (id, deviceid, filename, path, time, type, creationdate, createdby) {
    var param = {
        "act": "custome_file_list_edit_by_path",
        id: id,
        deviceid: deviceid,
        filename: filename,
        path: path,
        time: time,
        type: type,
        creationdate: creationdate,
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.edit_by_path_call_back, "POST");
};
custome_file_list_connection.edit_path_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.edit_path_by_id = function (id, path) {
    var param = {
        "act": "custome_file_list_edit_path_by_id",
        path: path,
        id: id
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.edit_path_by_id_call_back, "POST");
};
custome_file_list_connection.edit_by_time_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.edit_by_time = function (id, deviceid, filename, path, time, type, creationdate, createdby) {
    var param = {
        "act": "custome_file_list_edit_by_time",
        id: id,
        deviceid: deviceid,
        filename: filename,
        path: path,
        time: time,
        type: type,
        creationdate: creationdate,
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.edit_by_time_call_back, "POST");
};
custome_file_list_connection.edit_time_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.edit_time_by_id = function (id, time) {
    var param = {
        "act": "custome_file_list_edit_time_by_id",
        time: time,
        id: id
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.edit_time_by_id_call_back, "POST");
};
custome_file_list_connection.edit_by_type_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.edit_by_type = function (id, deviceid, filename, path, time, type, creationdate, createdby) {
    var param = {
        "act": "custome_file_list_edit_by_type",
        id: id,
        deviceid: deviceid,
        filename: filename,
        path: path,
        time: time,
        type: type,
        creationdate: creationdate,
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.edit_by_type_call_back, "POST");
};
custome_file_list_connection.edit_type_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.edit_type_by_id = function (id, type) {
    var param = {
        "act": "custome_file_list_edit_type_by_id",
        type: type,
        id: id
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.edit_type_by_id_call_back, "POST");
};
custome_file_list_connection.edit_by_creationdate_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.edit_by_creationdate = function (id, deviceid, filename, path, time, type, creationdate, createdby) {
    var param = {
        "act": "custome_file_list_edit_by_creationdate",
        id: id,
        deviceid: deviceid,
        filename: filename,
        path: path,
        time: time,
        type: type,
        creationdate: creationdate,
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.edit_by_creationdate_call_back, "POST");
};
custome_file_list_connection.edit_creationdate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.edit_creationdate_by_id = function (id, creationdate) {
    var param = {
        "act": "custome_file_list_edit_creationdate_by_id",
        creationdate: creationdate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.edit_creationdate_by_id_call_back, "POST");
};
custome_file_list_connection.edit_by_createdby_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.edit_by_createdby = function (id, deviceid, filename, path, time, type, creationdate, createdby) {
    var param = {
        "act": "custome_file_list_edit_by_createdby",
        id: id,
        deviceid: deviceid,
        filename: filename,
        path: path,
        time: time,
        type: type,
        creationdate: creationdate,
        createdby: createdby
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.edit_by_createdby_call_back, "POST");
};
custome_file_list_connection.edit_createdby_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (custome_file_list_connection.debug_mode) {
        console.log(data);
    }
};
custome_file_list_connection.edit_createdby_by_id = function (id, createdby) {
    var param = {
        "act": "custome_file_list_edit_createdby_by_id",
        createdby: createdby,
        id: id
    };
    ajax.sender_data_json_by_url_callback(custome_file_list_connection.controller_url, param, custome_file_list_connection.edit_createdby_by_id_call_back, "POST");
};