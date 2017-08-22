function PSCO_grid(name) {
    this.develop_mode = false;
    //___________global property of class
    this.name = name;
    this.table_class = undefined;
    this.ContainerID = 'PGrid';
    this.RightToLeft = true;
    this.type = undefined;
    this.embeddedRow = undefined; //[[{name:"" ,id:"", type : "" } , {name:"" ,id:"", type : "" }] , [{name:"" ,id:"", type : "" } , {name:"" ,id:"", type : "" }]]
    this.button = undefined; // [{name: "" , type:'none' , attribute:[{name , value}] , ClassName:""}]
    this.cols = undefined; // [{name:"" ,mainid:"", type : "" , hidden : 'true' , sortBy: 'true' , slect : 'true'  , searchMode : 'select' , notSearch:true}]    ---> search Mode for input type and create search on hidden Cols ---> mainid for select or input that have hidden value for search and sort ... ---> notSearch true ::> search not done on this cols
    this.actions = undefined; // [{name: "" , type:'none' , attribute:[{name , value}] , ClassName:""}]
    this.rows = undefined; //[{name: "" , value:"" , type :"" }] ---> NAME CAN BE OBJECT {name:'',htmlTag:''}
    this.searchResultData = undefined; //[{name: "" , value:"" , type :"" }]
    this.data = undefined; // {data payload }
    this.row_Selected = undefined; //[1,2,3,4,....,n]
    this.paging_row_count = 10;
    this.currentPage = 1;
    this.SearchcurrentPage = 1;
    this.RowIDName = undefined;
    this.DatePickerFunc = undefined;
    //////////
    this.serverSorted = undefined;
    this.find_in_server = false;
    this.serverSerch = undefined;
    this.server_finder_function = undefined;
    this.serverPaging = undefined; //____ numberOfData
    this.serverPagingfuncName = undefined; //____ onclick FuncName


    this.render = function () {
        var Container = document.getElementById(this.ContainerID);
        Container.classList.add('PGrid');

        var i, a, button, tr, td, cols, table, p; //____ varable

        //________________ table Classes
        table = document.createElement('table');
        table.setAttribute('id', this.ContainerID + '_table');
        //_____ set Table Direction
        if (this.RightToLeft) {
            table.style.direction = 'rtl';
            Container.style.direction = 'rtl';
        }
        else {
            table.style.direction = 'ltr';
            Container.style.direction = 'ltr';
        }
        //_____ setTable Classes
        if (this.table_class == undefined) {
            if (this.table_class == undefined) {
                table.setAttribute('class', 'table table-bordered table-responsive table-hover table-striped table-condensed text-center');
            } else {
                table.setAttribute('class', this.table_class);
            }

            // type for tmpalte data grid exm: mail data grid or global format grid
            if (this.type != undefined && this.type != null && this.type.trim() != 'none'.trim()) {

            }
            var BtnDivider = '';
            //_____create button of grid
            if (this.button != undefined && this.button != null) {
                //______________ Create Btn Divider
                BtnDivider = document.createElement('div');
                BtnDivider.setAttribute('class', 'col-xs-3 pull-right');

                for (i = 0; i < this.button.length; i++) {

                    button = document.createElement('span');

                    //________ set Name
                    if (this.button[i].name != '' && this.button[i].name != null) {
                        button.innerHTML = this.button[i].name;
                    }

                    if (this.button[i].attribute != '' && this.button[i].attribute != null) {

                        for (a = 0; a < this.button[i].attribute.length; a++) {
                            button.setAttribute(this.button[i].attribute[a].name, this.button[i].attribute[a].value);
                        }
                    }

                    //________ set Class Of Btn
                    button.classList.add('btn');
                    if (this.button[i].ClassName == '' || this.button[i].ClassName == null) {
                        button.classList.add('btn-default');
                    } else {
                        var clName = this.button[i].ClassName.split(' ');
                        for (var c = 0; c < clName.length; c++) {
                            button.classList.add(clName[c]);
                        }
                    }

                    //________ set Type Of Btn
                    if (this.button[i].type == '' || this.button[i].type == null) {

                    } else {

                    }
                    BtnDivider.appendChild(button);
                }
            }

            //_____ create fast finder grid

            //______ search Divider
            var FastSearchDivider = document.createElement('div');
            FastSearchDivider.setAttribute('class', 'col-xs-3 pull-left');
            FastSearchDivider.setAttribute('id', this.ContainerID + 'FastSearchDivider');


            // _____ collapse Btn
            var collapseBtn = document.createElement('span');
            collapseBtn.setAttribute('class', 'btn btn-primary btn-block');
            collapseBtn.setAttribute('data-toggle', 'collapse');
            collapseBtn.setAttribute('data-target', '#collapse' + this.ContainerID);
            collapseBtn.setAttribute('aria-controls', 'collapse' + this.ContainerID);
            collapseBtn.setAttribute('aria-expanded', 'false');

            var colapseIcon = document.createElement('i');
            colapseIcon.setAttribute('class', 'glyphicon glyphicon-search');

            //____ append
            collapseBtn.appendChild(colapseIcon);
            collapseBtn.innerHTML += 'Advance Search';
            //FastSearchDivider.appendChild(collapseBtn);

            /*   //_______search Btn
             var searchBtn = document.createElement('span');
             searchBtn.setAttribute('class', 'btn btn-success');
             searchBtn.setAttribute('onclick', this.name + '.FastSearch()');
             var searchIcon = document.createElement('i');
             searchIcon.setAttribute('class', 'glyphicon glyphicon-search');

             //______ append
             searchBtn.appendChild(searchIcon);
             FastSearchDivider.appendChild(searchBtn);*/
            //_____ search input
            var FastSearch = document.createElement('input');
            FastSearch.setAttribute('class', 'form-control form-inline fastSearch');
            FastSearch.setAttribute('placeholder', 'Search ...');
            FastSearch.setAttribute('id', this.ContainerID + '_searchBox');
            FastSearch.setAttribute('onkeyup', this.name + '.FastSearch()');

            //____ Create Collapse Search
            var colapseDivider = document.createElement('div');
            colapseDivider.setAttribute('class', 'col-xs-12');
            var collapse = document.createElement('div');
            collapse.setAttribute('class', 'collapse');
            collapse.setAttribute('id', 'collapse' + this.ContainerID);
            var wellDiv = document.createElement('div');
            wellDiv.setAttribute('class', 'well');
            var formInline = document.createElement('div');
            formInline.setAttribute('class', 'form-inline');
            var formGP, label, inputCheck, inputText;
            for (i = 0; i < this.cols.length; i++) {
                if (this.cols[i].hidden != 'true' && this.cols[i].hidden != true || this.cols[i].searchMode != undefined) {

                    formGP = document.createElement('div');
                    formGP.setAttribute('class', 'form-group');


                    p = document.createElement('p');
                    if (this.cols[i].thname != undefined) {
                        p.innerHTML = this.cols[i].thname;
                    } else {
                        p.innerHTML = __lang.translate(this.cols[i].name);
                    }

                    inputCheck = document.createElement('input');
                    inputCheck.setAttribute('type', 'checkbox');

                    inputCheck.setAttribute('class', 'checkbox form-control');

                    if (this.cols[i].searchMode == 'select') {
                        inputText = document.createElement('select');
                        inputText.setAttribute('type', 'text');
                        inputText.setAttribute('onfocuse', 'check(this)');
                        inputText.setAttribute('onblur', 'check(this)');
                    } else {
                        inputText = document.createElement('input');
                        inputText.setAttribute('type', 'text');
                        inputText.setAttribute('onchange', 'check(this)');
                        try {
                            if (this.cols[i].searchMode.toLowerCase() == 'datepicker' && this.DatePickerFunc != undefined) {
                                inputText.setAttribute('onclick', this.DatePickerFunc);
                            }
                        } catch (err) {
                        }
                        if (this.cols[i].thname != undefined) { //____ set th name in searchBox PlaceHolder
                            inputText.setAttribute('placeholder', this.cols[i].thname);
                        } else {
                            inputText.setAttribute('placeholder', __lang.translate(this.cols[i].name));
                        }
                    }

                    inputText.setAttribute('class', 'form-control');
                    //___ set Ids and label

                    label = document.createElement('label');

                    if (this.cols[i].mainid != undefined && this.cols[i].mainid != null) {
                        inputText.setAttribute('id', this.cols[i].mainid);
                        label.setAttribute('for', this.cols[i].mainid);
                        inputCheck.setAttribute('data-id', this.cols[i].mainid); //___set input Id
                    } else {
                        inputText.setAttribute('id', this.ContainerID + this.cols[i].name);
                        label.setAttribute('for', this.ContainerID + this.cols[i].name);
                        inputCheck.setAttribute('data-id', this.cols[i].name); //___set input Id
                    }

                    //____ append
                    label.appendChild(p);
                    label.appendChild(inputCheck);
                    label.appendChild(inputText);

                    formGP.appendChild(label);
                    formInline.appendChild(formGP);

                }
                // ____ append
                Container.appendChild(collapseBtn);
                wellDiv.appendChild(formInline);
                collapse.appendChild(wellDiv);
                colapseDivider.appendChild(collapse);
                Container.appendChild(colapseDivider);

                // ______ append Btn
                if (BtnDivider != '') {
                    Container.appendChild(BtnDivider);
                }
                FastSearchDivider.appendChild(FastSearch);
                Container.appendChild(FastSearchDivider);

            }

            //_____ set and cancel btn of filter
            var accepetFilterBtn = document.createElement('span');
            var cancelFilterBtn = document.createElement('span');
            var accepetFilterIcon = document.createElement('i');
            var cancelFilterIcon = document.createElement('i');
            accepetFilterIcon.setAttribute('class', 'glyphicon glyphicon-filter');
            cancelFilterIcon.setAttribute('class', 'glyphicon glyphicon-remove');

            accepetFilterBtn.setAttribute('class', 'btn btn-small btn-success');
            cancelFilterBtn.setAttribute('class', 'btn btn-small btn-danger');
            if (this.serverSerch != undefined) {
                accepetFilterBtn.setAttribute('onclick', this.serverSerch + '()');
            } else {
                accepetFilterBtn.setAttribute('onclick', this.name + '.AdvanceSearch()');
            }
            accepetFilterBtn.appendChild(accepetFilterIcon);
            accepetFilterBtn.innerHTML += 'Search';

            cancelFilterBtn.appendChild(cancelFilterIcon);
            cancelFilterBtn.innerHTML += 'Remove Filter';
            cancelFilterBtn.setAttribute('onclick', this.name + '.RemoveAdvanceSearch()'); // todo: remove filter of server search

            wellDiv.appendChild(accepetFilterBtn);
            wellDiv.appendChild(cancelFilterBtn);


            //_______ search
            //TODO: create colaps of finder on table header
            //TODO: set function on
            if (this.find_in_server) {
                this.ServerSearch = function () {
                    var checkedInput = document.querySelectorAll('#collapse' + this.name + ' input:checked');
                    var searchOn = {};
                    var temp, tempkey;
                    for (var i = 0; i < checkedInput.length; i++) {
                        tempkey = checkedInput[i].getAttribute('data-id');
                        temp = document.getElementById(tempkey);
                        searchOn[tempkey] = temp.value;
                    }
                }
            } else {

            }


            //_____create cols of grid
            if (this.cols != undefined && this.cols != null) {

                var THead = document.createElement('thead'); //______ set thead
                tr = document.createElement('tr'); // _____ set tr
                //___ for number col
                cols = document.createElement('th');
                cols.innerHTML = '#';
                tr.appendChild(cols);
                for (i = 0; i < this.cols.length; i++) {
                    cols = document.createElement('th'); // ___ set th
                    cols.setAttribute('data-name', this.cols[i].name); // for sort by ...
                    try {

                        var sorteIcon = document.createElement('i'); // sort Icon
                        /*  sorteIcon.setAttribute('class', 'glyphicon glyphicon-sort');*/
                        cols.appendChild(sorteIcon);

                        if (this.serverSorted != undefined && this.serverSorted != null) { // sort function on server !
                            cols.setAttribute('onclick', this.serverSorted + '(this)');
                        }

                        if (this.cols[i].thname != null && this.cols[i].thname != '' && this.cols[i].thname != undefined) {
                            cols.innerHTML += this.cols[i].thname; // ___ set th name
                        } else {
                            cols.innerHTML += __lang.translate(this.cols[i].name); // ___ set th name
                        }

                    } catch (er) {
                    }
                    if (this.cols[i].hidden != undefined && this.cols[i].hidden == true) {
                        cols.style.display = 'none';
                    }
                    tr.appendChild(cols);

                }
                if (this.actions != undefined) {
                    //___ for act col
                    for (i = 0; i < this.actions.length; i++) {
                        cols = document.createElement('th');
                        cols.innerHTML = __lang.translate(this.actions[i].name);
                        tr.appendChild(cols);
                    }
                }
                /* type of cols set in Data */
                THead.appendChild(tr);
                table.appendChild(THead);

            }


            /*     //_____save Data in row with Row Format !!! TODO: must be understand what this Fucking Row
             if (this.data != undefined && this.data != null) {
             for (i = 0; i < this.data.length; i++) {
             var Data = this.data[i];
             var DataKeys = Object.keys(Data); //____ get Cols key
             for (a = 0; a < DataKeys.length; a++) {

             }
             }
             }
             */
            //_____create rows of grid
            if (this.data != undefined && this.data != null) {

                // TODO: set rows and filling the table
                var tbody = document.createElement('tbody');

                this.setRow();
                if (this.embeddedRow != undefined && this.embeddedRow != null) { //____ for embedded
                    var embeddedrow = embeddedRowCreateor(this.embeddedRow);
                    tbody.appendChild(embeddedrow);
                }
                var baseIndex = (this.currentPage - 1) * this.paging_row_count;
                for (i = baseIndex; i < baseIndex + this.paging_row_count; i++) {
                    try {
                        // var ActionDivider = actionCreator(this.actions);
                        tr = trCreateor(this.rows[i], this.cols, this.RightToLeft, this.name, this.actions, i);
                    } catch (er) {
                    }
                    tbody.appendChild(tr);
                }

                table.appendChild(tbody);
            }
            Container.appendChild(table);

            //_______ create paging of the grid
            if (this.serverPaging != undefined) {
                BtnDivider = this.createPaging(this.serverPaging);
                Container.appendChild(BtnDivider);
            }
            else if (this.rows != undefined && this.rows != null && this.rows.length > this.paging_row_count) {
                /*                var pageBtn_number = this.data.length / this.paging_row_count;
                 if (!Number.isInteger(pageBtn_number)) {
                 pageBtn_number = parseInt(pageBtn_number) + 1;
                 }
                 BtnDivider = document.createElement('div');
                 BtnDivider.setAttribute('class', 'panel-footer page-divider pull-right');
                 for (i = 0; i < pageBtn_number; i++) {
                 var btn = document.createElement('span');
                 btn.setAttribute('class', 'btn btn-primary');
                 btn.setAttribute('onclick', this.name + '.GoToPage(' + (i + 1) + " , '" + this.name + "')");
                 btn.innerHTML = i + 1;
                 BtnDivider.appendChild(btn);
                 }*/
                BtnDivider = this.createPaging(this.rows);
                Container.appendChild(BtnDivider);
            }

        }
    };

    this.finder = function () {


    };

    var button_type = function (type) {

        switch (type) {

            case 'addnew':


                break;

            case 'edit':
            case 'update':

                break;
            case 'delete':


                break;

            case 'none':
            default:


        }
    };

    //___________ tr onclick
    this.SelectedThisRow = function (Trelem, classname) {

        var classes = get_class_pointer(classname);
        var AllTr = document.querySelectorAll('#' + classes[0].ContainerID + ' tr');
        for (var i = 0; i < AllTr.length; i++) {
            AllTr[i].style.cssText = '';
        }

        Trelem.style.backgroundColor = 'rgba(128, 199, 210, 0.5)';
        var Selectedid = Trelem.getAttribute('data-rowid');
        Selectedid = Selectedid.split('_');
        classes[0].row_Selected = Selectedid[1];

    };

    var col_type = function (type) {
        var result;
        result = document.createElement('input');
        switch (type) {


            case 'inputText':
            case 'inputtext':
            case 'InputText':
            case 'textinput':
            case 'TextInput':
            case 'textInput':
                result.setAttribute('type', 'text');
                break;

            case 'check':
            case 'Check':
            case 'CheckBox':
            case 'Check_Box':
            case 'check_box':
            case 'checkbox':

                result.setAttribute('type', 'checkbox');


                break;

            case 'calender':
            case 'Calender':

                break;

            case 'radio':
            case 'Radio':
                result.setAttribute('type', 'radio');
                break;

            case 'toggle':
            case 'Toggle':
            case 'toggle_button':
            case 'togglebutton':
            case 'toggleButton':

                break;
            case 'btn':
            case 'button':
            case 'Button':
                result.setAttribute('type', 'button');

                break;
            case 'img':
            case 'image':
            case 'pic':
                result = document.createElement('img');

                break;
            case 'text':
            case 'Text':
            case '':
            default:
                result = 'Text';
                break;
        }
        return result;

    };


    //____ create Action
    var actionCreator = function (actions, tr) {
        var ActionDivider = ''; //_____ ToDO Set Action.type
        //_____create action button on more rows of grid
        if (actions != undefined && actions != null) {
            //ActionDivider = document.createElement('div');
            for (var c = 0; c < actions.length; c++) {
                ActionDivider = document.createElement('td');
                var action = actions[c];
                var Actionicon = document.createElement('span'); //____ CREATE ACTION span
                try {
                    Actionicon.setAttribute('title', action.name);
                } catch (er) {
                }

                for (a = 0; a < action.attribute.length; a++) {
                    Actionicon.setAttribute(action.attribute[a].name, action.attribute[a].value); //_____ set Attribute
                }
                if (action.ClassName != undefined && action.ClassName != '') {
                    var Classes = action.ClassName;
                    Classes = Classes.split(' ');
                    for (a = 0; a < Classes.length; a++) {
                        Actionicon.classList.add(Classes[a]);
                    }
                }
                Actionicon.classList.add('Pointer');
                ActionDivider.appendChild(Actionicon);
                tr.appendChild(ActionDivider);
            }

        }
    };

    var embeddedRowCreateor = function (Erow) {
        for (var i = 0; i < Erow.length; i++) {
            var tr = document.createElement('tr'); //___ set tr
            for (var c = 0; c < Erow[i].length; c++) {
                var td = document.createElement('td');
                var ColsType = col_type(Erow[i][c].type);
                if (ColsType.nodeName == 'img') {
                    ColsType.setAttribute('src', Erow[i][c].src);
                }
                else if (ColsType.nodeName == 'INPUT' && ColsType.type == 'text') {
                    ColsType.setAttribute('placeholder', Erow[i][c].name);
                }
                else if (ColsType.nodeName == 'INPUT' && ColsType.type == 'button') {
                    ColsType.setAttribute('value', Erow[i][c].name);
                }
                else if (ColsType != 'Text') {
                    try {
                        //____ for checkbox or RADIO cols
                        if (RightToLeft == true) {
                            ColsType.style.float = 'right';
                        } else {
                            ColsType.style.float = 'left';
                        }
                        var inputlabel = document.createElement('label');
                        inputlabel.innerHTML = Erow[i][c].name;
                        inputlabel.append(ColsType);
                        td.appendChild(inputlabel); //____ set element in td
                    } catch (er) {
                    }
                } else {
                    try {
                        if (Erow[i][c].name.htmlTag == undefined) {
                            td.innerHTML = Erow[i][c].name; //____ set text of td
                        } else {
                            td.innerHTML = Erow[i][c].name.htmlTag;
                        }
                    } catch (e) {
                    }

                }
                if (Erow[i][c].id != undefined) {
                    try {
                        ColsType.setAttribute('id', Erow[i][c].id);
                    } catch (e) {
                    }
                }
                if (Erow[i][c].attribute != undefined) {
                    for (var a = 0; a < Erow[i][c].attribute.length; a++) {
                        try {
                            ColsType.setAttribute(Erow[i][c].attribute[a].name, Erow[i][c].attribute[a].value);
                        } catch (e) {
                        }
                    }
                }
                try {
                    td.appendChild(ColsType);
                } catch (err) {
                }
                tr.appendChild(td);
            }
        }
        return tr;
    };
    //____ Create tr for Grid

    var trCreateor = function (DataRow, cols, RightToLeft, class_name, Actions, rowIndex, i) {

        var tr = document.createElement('tr'); //___ set tr
        if (class_name.RowIDName == undefined && DataRow.id != undefined) {
            tr.setAttribute('id', 'tr_' + DataRow.id); //___set tr id
        } else if (class_name.RowIDName != undefined) {
            tr.setAttribute('id', 'tr_' + DataRow[class_name.RowIDName]); //___set tr id
        } else {
            tr.setAttribute('id', 'tr_' + class_name + rowIndex); //___set tr id
        }
        if (i == null) {
            tr.setAttribute('data-Rowid', 'tr_' + rowIndex); //___set tr id
        } else {
            tr.setAttribute('data-Rowid', 'tr_' + i); //___set tr id
        }
        tr.setAttribute('onclick', class_name + ".SelectedThisRow(this,'" + class_name + "')"); //___set tr Selected function

        var Data = DataRow;
        //var DataKeys = Object.keys(Data); //____ get Cols key
        var DataKeys = cols;
        /*var Keyslength = DataKeys.length + 2;*/
        for (var a = 0; a < DataKeys.length; a++) {

            if (a == 0) {
                var numbTd = document.createElement('td');
                numbTd.innerHTML = rowIndex + 1;
                tr.appendChild(numbTd);
            }
            var td = document.createElement('td');

            if (cols[a].hidden != undefined && cols[a].hidden == true) { //________ if hidden is true !
                td.style.display = 'none';
            }

            var ColsType = col_type(cols[a].type); //____ type of cols

            if (ColsType.nodeName == 'img') {
                ColsType.setAttribute('src', Data[DataKeys[a]]);
            }
            else if (ColsType != 'Text') {
                try {
                    //____ for checkbox or RADIO cols
                    if (RightToLeft == true) {
                        ColsType.style.float = 'right';
                    } else {
                        ColsType.style.float = 'left';
                    }
                    var inputlabel = document.createElement('label');
                    inputlabel.innerHTML = Data[DataKeys[a]['name']];
                    inputlabel.append(ColsType);
                    td.appendChild(inputlabel); //____ set element in td
                } catch (er) {
                }
            } else {
                if (Data[DataKeys[a]['name']].htmlTag == undefined) {
                    td.innerHTML = Data[DataKeys[a]['name']]; //____ set text of td
                } else {
                    td.innerHTML = Data[DataKeys[a]['name']].htmlTag; //____ set text of td
                }
            }

            tr.appendChild(td);

            //____ create Action td in Row

            if (a == DataKeys.length - 1) {
                try {
                    actionCreator(Actions , tr);
                } catch (err) {
                }
                /*var actionTd = document.createElement('td');
                 actionTd.appendChild(ActionDivider);
                 tr.appendChild(actionTd);*/
             }

        }
        return tr;

    };

    this.GoToPage = function (thisPage, class_name, searchMode) {

        var classes = get_class_pointer(class_name);

        classes[0].currentPage = thisPage;
        var Data = classes[0].rows;
        var baseIndex = (classes[0].currentPage - 1) * classes[0].paging_row_count;
        if (searchMode != null) {
            Data = classes[0].searchResultData;
            baseIndex = (thisPage - 1) * classes[0].paging_row_count;
        }
        var Tbody = document.querySelectorAll('#' + classes[0].ContainerID + '_table > tbody'); // ____ get Tbody
        Tbody[0].innerHTML = '';

        //embedded Row Creator
        if (this.embeddedRow != undefined && this.embeddedRow != null) { //____ for embedded
            var embeddedrow = embeddedRowCreateor(this.embeddedRow);
            Tbody[0].appendChild(embeddedrow);
        }
        for (var i = baseIndex; i < baseIndex + classes[0].paging_row_count; i++) {
            try {
                //var ActionDivider = actionCreator(classes[0].actions);
                var tr = trCreateor(Data[i], classes[0].cols, classes[0].RightToLeft, classes[0].name, classes[0].actions, i);
            } catch (er) {
            }
            try {
                Tbody[0].appendChild(tr);
            } catch (err) {
            }
        }
    };

    //______ for ServerSide paging
    this.create_otherPageRows = function (data, searchBtnDividerId) {
        var Tbody = document.querySelectorAll('#' + this.ContainerID + '_table > tbody'); // ____ get Tbody
        Tbody[0].innerHTML = '';
        this.data = data;
        this.setRow();


        //embedded Row Creator
        if (this.embeddedRow != undefined && this.embeddedRow != null) { //____ for embedded
            var embeddedrow = embeddedRowCreateor(this.embeddedRow);
            Tbody[0].appendChild(embeddedrow);
        }

        var numberOfrow = (this.currentPage - 1) * this.paging_row_count;
        for (var i = 0; i < this.rows.length; i++) {
            try {

               // var ActionDivider = actionCreator(this.actions);
                var tr = trCreateor(this.rows[i], this.cols, this.RightToLeft, this.name, this.actions, numberOfrow, i);
                numberOfrow++;
            } catch (er) {
            }
            Tbody[0].appendChild(tr);
        }
        this.createPaging(this.serverPaging, searchBtnDividerId);

    };

    //_____ for server Paging set DataNumb (this.serverpaging)
    this.createPaging = function (data, btnDividerId, searchMode) {
        var pageBtn_number;

        if (!isNaN(data)) {
            pageBtn_number = data / this.paging_row_count; //____ for server Paging
        } else {
            pageBtn_number = data.length / this.paging_row_count;
        }
        if (!Number.isInteger(pageBtn_number)) {
            pageBtn_number = parseInt(pageBtn_number) + 1;
        }
        var BtnDivider;
        if (btnDividerId == null) {
            BtnDivider = document.createElement('div');
            BtnDivider.setAttribute('class', 'panel-footer page-divider pull-right');
            BtnDivider.setAttribute('id', this.name + '_PageBtnDivider');
        } else if (btnDividerId == 'default') {
            BtnDivider = document.getElementById(this.name + '_PageBtnDivider'); //____ for pageing in search Mode
            BtnDivider.innerHTML = '';
        }
        else {
            BtnDivider = document.getElementById(btnDividerId); //____ for pageing in search Mode
            BtnDivider.innerHTML = '';
        }
        for (i = 0; i < pageBtn_number; i++) {
            var btn = document.createElement('span');
            btn.setAttribute('class', 'btn btn-primary');

            if (isNaN(data)) { //____ if not server Paging ...
                if (searchMode == null) {
                    btn.setAttribute('onclick', this.name + '.GoToPage(' + (i + 1) + " , '" + this.name + "')");
                } else {
                    btn.setAttribute('onclick', this.name + '.GoToPage(' + (i + 1) + " , '" + this.name + "' , 'search')");
                }
            } else {
                btn.setAttribute('onclick', this.serverPagingfuncName + "('" + (i + 1) + "')");
            }

            btn.innerHTML = i + 1;
            BtnDivider.appendChild(btn);
        }

        return BtnDivider;

    };
    /*    this.searchResult = function () {
     var Tbody = document.querySelectorAll('#' + this.ContainerID + '_table > tbody'); // ____ get Tbody
     Tbody[0].innerHTML = '';
     for (var i = 0; i < this.paging_row_count; i++) {
     try {
     var ActionDivider = actionCreator(this.actions);
     var tr = trCreateor(this.searchResultData[i], this.cols, this.RightToLeft, this.name, ActionDivider);
     } catch (er) {
     }
     Tbody[0].appendChild(tr);
     }

     };*/


    this.AdvanceSearch = function () {
        var checkedInput = document.querySelectorAll('#collapse' + this.ContainerID + ' input:checked');
        var inputValues = [];
        var searchResult = [];
        var i;
        for (i = 0; i < checkedInput.length; i++) {
            var InputID = checkedInput[i].getAttribute('data-id');
            var InputValue = document.getElementById(this.ContainerID + InputID).value;
            inputValues.push({key: InputID, value: InputValue});
        }

        for (var a = 0; a < this.rows.length; a++) {
            var flag = true;
            for (i = 0; i < inputValues.length; i++) {
                var RowData;
                if (this.rows[a][[inputValues[i].key]].htmlTag == undefined) {
                    RowData = this.rows[a][[inputValues[i].key]].toLowerCase();
                } else {
                    RowData = this.rows[a][[inputValues[i].key]].value.toLowerCase();
                }
                var searchData = inputValues[i].value.toLowerCase();
                //if (inputValues[i].value.toLowerCase() != this.rows[a][[inputValues[i].key]]) { //TODO Search on this .search()
                if (RowData.search(searchData) == -1) {
                    //console.log('val : '+inputValues[i].value+', key : ' + this.rows[a][[inputValues[i].key]]);
                    flag = false;
                }
            }
            if (flag) {
                searchResult.push(this.rows[a]);
            }
        }
        this.searchResultData = RemoveRepeate(searchResult);
        this.GoToPage(1, this.name, 'searchMode');
        this.createPaging(this.searchResultData, this.name + '_PageBtnDivider', 'searchMode'); //_____ create paging
    };
    this.RemoveAdvanceSearch = function () {
        this.GoToPage(1, this.name);
        this.createPaging(this.rows, this.name + '_PageBtnDivider');
    };


    this.setRow = function () {

        this.rows = [];
        for (i = 0; i < this.data.length; i++) {
            try {

                var row = {}; //____ set this.Data in This.Row
                var Data = this.data[i];
                var DataKeys = Object.keys(Data); //____ get Cols key

                for (a = 0; a < DataKeys.length; a++) {
                    row[DataKeys[a]] = Data[DataKeys[a]]; //____ set cols
                }
                this.rows.push(row);
            } catch (err) {
            }
        }
    };

    this.FastSearch = function (class_name) {
        //var classes = get_class_pointer(class_name);
        var searchVal = document.getElementById(this.ContainerID + '_searchBox');
        searchVal = searchVal.value.toLowerCase();
        this.searchResultData = [];
        if (searchVal != '') {

            for (var i = 0; i < this.rows.length; i++) {
                for (var c = 0; c < this.cols.length; c++) {
                    if ((this.cols[c].hidden != true || this.cols[c].hidden == undefined) && this.cols[c].notSearch != true) {
                        if (this.rows[i][this.cols[c].name].htmlTag == undefined) { //----> check html property in row
                            if (this.rows[i][this.cols[c].name].toLowerCase().search(searchVal) != -1) {
                                this.searchResultData.push(this.rows[i]);
                            }
                        } else {
                            if (this.rows[i][this.cols[c].name].value.toLowerCase().search(searchVal) != -1) { //---> if have html search on name
                                this.searchResultData.push(this.rows[i]);
                            }
                        }
                    }
                }
            }
            this.searchResultData = RemoveRepeate(this.searchResultData);
            this.SearchcurrentPage = 1;
            this.GoToPage(1, this.name, 'searchMode');
            this.createPaging(this.searchResultData, this.name + '_PageBtnDivider', 'searchMode'); //_____ create paging
            var btn = document.createElement('div');
            btn.setAttribute('class', 'btn btn-block btn-danger deleteSearch-btn');
            btn.setAttribute('id', this.name + '_closeSearch');
            btn.setAttribute('onclick', this.name + '.CloseSearch()');
            btn.innerHTML = 'Show All';
            try {
                var lastSearchBtn = document.getElementById(this.name + '_closeSearch'); //___ remove BtnRemove for Lastsearch !!!
                lastSearchBtn.parentNode.removeChild(lastSearchBtn);
            } catch (err) {
            }
            document.getElementById(this.ContainerID + 'FastSearchDivider').appendChild(btn);
        } else {
            this.CloseSearch();
        }

    };
    this.CloseSearch = function () {
        this.GoToPage(1, this.name);
        this.createPaging(this.rows, this.name + '_PageBtnDivider');
        var btn = document.getElementById(this.name + '_closeSearch');
        btn.parentNode.removeChild(btn);
        document.getElementById(this.ContainerID + '_searchBox').value = '';
    };

    //______ for onclick Action ...
    this.get_field_of_row = function (elem, fieldName) {
        elem = elem.parentElement.parentElement;
        elem = elem.getAttribute('data-rowid');
        elem = elem.split('_');
        elem = elem[1];
        if (this.rows[elem][fieldName].htmlTag == undefined) {
            return this.rows[elem][fieldName];
        } else {
            return this.rows[elem][fieldName].value;
        }

    }

}

function check(elem) {
    var parent = elem.parentNode;
    var checkBox = parent.children[1];
    if (elem.value != '') {
        checkBox.checked = true;
    } else {
        checkBox.checked = false;
    }
}


function get_class_pointer(name) {
    var objects = [];
    for (var key in window) {
        var value = window[key];
        if (value instanceof PSCO_grid && value.name != undefined && value.name == name) {
            // foo instance found in the global scope, named by key
            objects.push(value)
        }
    }
    return objects;
}


/*//______ for onclick Action ...
 function get_field_of_row(elem, fieldName , gridName) {
 elem = elem.parentElement.parentElement.parentElement;
 elem = elem.getAttribute('data-rowid');
 elem = elem.split('_');
 elem = elem[1];
 return gridName.rows[elem][fieldName];
 }*/

//_______ Remove repeated obj
function RemoveRepeate(arr) {
    return arr.reduce(function (p, c) {

        // create an identifying id from the object values
        var id = [c.x, c.y].join('|');

        // if the id is not found in the temp array
        // add the object to the output array
        // and add the key to the temp array
        if (p.temp.indexOf(id) === -1) {
            p.out.push(c);
            p.temp.push(id);
        }
        return p;

        // return the deduped array
    }, {temp: [], out: []}).out;
}


/*

 var fooObjects = [];
 for(var key in window) {
 var value = window[key];
 if (value instanceof foo) {
 // foo instance found in the global scope, named by key
 fooObjects.push(value)
 }
 }
 */