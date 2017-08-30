var grid_directory;
var directory_connection = {
    controller_url: '' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

directory_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get = function () {
    var param = {"act": "directory_get"};
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_call_back, "POST");
};
//_____________ delete function
directory_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};

directory_connection.delete = function (id) {
    var param = {
        act: "directory_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.delete_call_back, "POST");
};
//_____________ set function
directory_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};

directory_connection.set = function (name, fileType, parent, deviceId, isDownload, downloadDate, creationDate) {
    var param = {
        act: "directory_set",
        name: name,
        fileType: fileType,
        parent: parent,
        deviceId: deviceId,
        isDownload: isDownload,
        downloadDate: downloadDate,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.set_call_back, "POST");
};
//_____________ grid function
directory_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }

    grid_directory = new PSCO_grid('grid_directory');

    grid_directory.cols = [
        {name: 'id', hidden: false, type: 'text'}, {name: 'name', hidden: false, type: 'text'}, {
            name: 'fileType',
            hidden: false,
            type: 'text'
        }, {name: 'parent', hidden: false, type: 'text'}, {
            name: 'deviceId',
            hidden: false,
            type: 'text'
        }, {name: 'isDownload', hidden: false, type: 'text'}, {
            name: 'downloadDate',
            hidden: false,
            type: 'text'
        }, {name: 'creationDate', hidden: false, type: 'text'}, {name: 'createdBy', hidden: false, type: 'text'}];

    grid_directory.RightToLeft = false;

    // grid_directory.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_directory.data = data;

    grid_directory.render();

};
directory_connection.get_grid = function () {
    var param = {"act": "directory_get"};
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
//________________get functions
directory_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get_by_id = function (id) {
    var param = {
        "act": "directory_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_id_call_back, "POST");
};

directory_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "directory_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
directory_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get_by_name = function (name) {
    var param = {
        "act": "directory_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_name_call_back, "POST");
};

directory_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "directory_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
directory_connection.get_by_fileType_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get_by_fileType = function (fileType) {
    var param = {
        "act": "directory_get_by_fileType",
        fileType: fileType
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_fileType_call_back, "POST");
};

directory_connection.get_by_fileType_grid = function (fileType) {
    var param = {
        "act": "directory_get_by_fileType",
        fileType: fileType
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
directory_connection.get_by_parent_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get_by_parent = function (parent) {
    var param = {
        "act": "directory_get_by_parent",
        parent: parent
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_parent_call_back, "POST");
};

directory_connection.get_by_parent_grid = function (parent) {
    var param = {
        "act": "directory_get_by_parent",
        parent: parent
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
directory_connection.get_by_deviceId_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get_by_deviceId = function (deviceId) {
    var param = {
        "act": "directory_get_by_deviceId",
        deviceId: deviceId
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_deviceId_call_back, "POST");
};

directory_connection.get_by_deviceId_grid = function (deviceId) {
    var param = {
        "act": "directory_get_by_deviceId",
        deviceId: deviceId
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
directory_connection.get_by_isDownload_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get_by_isDownload = function (isDownload) {
    var param = {
        "act": "directory_get_by_isDownload",
        isDownload: isDownload
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_isDownload_call_back, "POST");
};

directory_connection.get_by_isDownload_grid = function (isDownload) {
    var param = {
        "act": "directory_get_by_isDownload",
        isDownload: isDownload
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
directory_connection.get_by_downloadDate_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get_by_downloadDate = function (downloadDate) {
    var param = {
        "act": "directory_get_by_downloadDate",
        downloadDate: downloadDate
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_downloadDate_call_back, "POST");
};

directory_connection.get_by_downloadDate_grid = function (downloadDate) {
    var param = {
        "act": "directory_get_by_downloadDate",
        downloadDate: downloadDate
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
directory_connection.get_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get_by_creationDate = function (creationDate) {
    var param = {
        "act": "directory_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_creationDate_call_back, "POST");
};

directory_connection.get_by_creationDate_grid = function (creationDate) {
    var param = {
        "act": "directory_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
directory_connection.get_by_createdBy_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get_by_createdBy = function (createdBy) {
    var param = {
        "act": "directory_get_by_createdBy",
        createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_createdBy_call_back, "POST");
};

directory_connection.get_by_createdBy_grid = function (createdBy) {
    var param = {
        "act": "directory_get_by_createdBy",
        createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};

//________________edit functions
directory_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_id = function (id, name, fileType, parent, deviceId, isDownload, downloadDate, creationDate, createdBy) {
    var param = {
        "act": "directory_edit_by_id",
        id: id,
        name: name,
        fileType: fileType,
        parent: parent,
        deviceId: deviceId,
        isDownload: isDownload,
        downloadDate: downloadDate,
        creationDate: creationDate,
        createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_id_call_back, "POST");
};
directory_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "directory_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_id_by_id_call_back, "POST");
};
directory_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_name = function (id, name, fileType, parent, deviceId, isDownload, downloadDate, creationDate, createdBy) {
    var param = {
        "act": "directory_edit_by_name",
        id: id,
        name: name,
        fileType: fileType,
        parent: parent,
        deviceId: deviceId,
        isDownload: isDownload,
        downloadDate: downloadDate,
        creationDate: creationDate,
        createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_name_call_back, "POST");
};
directory_connection.edit_name_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_name_by_id = function (id, name) {
    var param = {
        "act": "directory_edit_name_by_id",
        name: name,
        id: id
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_name_by_id_call_back, "POST");
};
directory_connection.edit_by_fileType_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_fileType = function (id, name, fileType, parent, deviceId, isDownload, downloadDate, creationDate, createdBy) {
    var param = {
        "act": "directory_edit_by_fileType",
        id: id,
        name: name,
        fileType: fileType,
        parent: parent,
        deviceId: deviceId,
        isDownload: isDownload,
        downloadDate: downloadDate,
        creationDate: creationDate,
        createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_fileType_call_back, "POST");
};
directory_connection.edit_fileType_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_fileType_by_id = function (id, fileType) {
    var param = {
        "act": "directory_edit_fileType_by_id",
        fileType: fileType,
        id: id
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_fileType_by_id_call_back, "POST");
};
directory_connection.edit_by_parent_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_parent = function (id, name, fileType, parent, deviceId, isDownload, downloadDate, creationDate, createdBy) {
    var param = {
        "act": "directory_edit_by_parent",
        id: id,
        name: name,
        fileType: fileType,
        parent: parent,
        deviceId: deviceId,
        isDownload: isDownload,
        downloadDate: downloadDate,
        creationDate: creationDate,
        createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_parent_call_back, "POST");
};
directory_connection.edit_parent_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_parent_by_id = function (id, parent) {
    var param = {
        "act": "directory_edit_parent_by_id",
        parent: parent,
        id: id
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_parent_by_id_call_back, "POST");
};
directory_connection.edit_by_deviceId_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_deviceId = function (id, name, fileType, parent, deviceId, isDownload, downloadDate, creationDate, createdBy) {
    var param = {
        "act": "directory_edit_by_deviceId",
        id: id,
        name: name,
        fileType: fileType,
        parent: parent,
        deviceId: deviceId,
        isDownload: isDownload,
        downloadDate: downloadDate,
        creationDate: creationDate,
        createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_deviceId_call_back, "POST");
};
directory_connection.edit_deviceId_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_deviceId_by_id = function (id, deviceId) {
    var param = {
        "act": "directory_edit_deviceId_by_id",
        deviceId: deviceId,
        id: id
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_deviceId_by_id_call_back, "POST");
};
directory_connection.edit_by_isDownload_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_isDownload = function (id, name, fileType, parent, deviceId, isDownload, downloadDate, creationDate, createdBy) {
    var param = {
        "act": "directory_edit_by_isDownload",
        id: id,
        name: name,
        fileType: fileType,
        parent: parent,
        deviceId: deviceId,
        isDownload: isDownload,
        downloadDate: downloadDate,
        creationDate: creationDate,
        createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_isDownload_call_back, "POST");
};
directory_connection.edit_isDownload_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_isDownload_by_id = function (id, isDownload) {
    var param = {
        "act": "directory_edit_isDownload_by_id",
        isDownload: isDownload,
        id: id
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_isDownload_by_id_call_back, "POST");
};
directory_connection.edit_by_downloadDate_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_downloadDate = function (id, name, fileType, parent, deviceId, isDownload, downloadDate, creationDate, createdBy) {
    var param = {
        "act": "directory_edit_by_downloadDate",
        id: id,
        name: name,
        fileType: fileType,
        parent: parent,
        deviceId: deviceId,
        isDownload: isDownload,
        downloadDate: downloadDate,
        creationDate: creationDate,
        createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_downloadDate_call_back, "POST");
};
directory_connection.edit_downloadDate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_downloadDate_by_id = function (id, downloadDate) {
    var param = {
        "act": "directory_edit_downloadDate_by_id",
        downloadDate: downloadDate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_downloadDate_by_id_call_back, "POST");
};
directory_connection.edit_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_creationDate = function (id, name, fileType, parent, deviceId, isDownload, downloadDate, creationDate, createdBy) {
    var param = {
        "act": "directory_edit_by_creationDate",
        id: id,
        name: name,
        fileType: fileType,
        parent: parent,
        deviceId: deviceId,
        isDownload: isDownload,
        downloadDate: downloadDate,
        creationDate: creationDate,
        createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_creationDate_call_back, "POST");
};
directory_connection.edit_creationDate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_creationDate_by_id = function (id, creationDate) {
    var param = {
        "act": "directory_edit_creationDate_by_id",
        creationDate: creationDate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_creationDate_by_id_call_back, "POST");
};
directory_connection.edit_by_createdBy_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_createdBy = function (id, name, fileType, parent, deviceId, isDownload, downloadDate, creationDate, createdBy) {
    var param = {
        "act": "directory_edit_by_createdBy",
        id: id,
        name: name,
        fileType: fileType,
        parent: parent,
        deviceId: deviceId,
        isDownload: isDownload,
        downloadDate: downloadDate,
        creationDate: creationDate,
        createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_createdBy_call_back, "POST");
};
directory_connection.edit_createdBy_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_createdBy_by_id = function (id, createdBy) {
    var param = {
        "act": "directory_edit_createdBy_by_id",
        createdBy: createdBy,
        id: id
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_createdBy_by_id_call_back, "POST");
};