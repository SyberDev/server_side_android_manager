//---- loader


function CreateLoader(Main) {
    var div = document.createElement('div');
    var img = document.createElement('img');
    div.setAttribute('class', 'loader');
    if (Main != null) {
        div.style.cssText = 'position: absolute;width:100%;height:100%;    background-color: rgba(255, 255, 255, 0.98);z-index:999999999999;top:0;left:0;background-image: url(template/build/images/loader.gif);background-position: center 66px;background-repeat: no-repeat;';
        document.getElementById('MainPage').appendChild(div);
    } else {
        div.style.cssText = 'position: fixed;width:100%;height:100%;    background-color: rgba(255, 255, 255, 0.98);z-index:999999999999;top:0;left:0;background-image: url(template/build/images/loader.gif);background-position: center;background-repeat: no-repeat;';
        document.body.appendChild(div);
    }
}
function removeLoader() {

    var loaders = document.getElementsByClassName('loader');
    var length = loaders.length;
    for (var i = 0; i < length; i++) {
        loaders[0].parentNode.removeChild(loaders[0]);
    }
}

CreateLoader();
setTimeout(function () {
    removeLoader();
},8000);
//------ EndLoader

__require("plugin/global/main.js");
__require("plugin/network/ajax.js");
__require("plugin/lang/lang.js");
__require("values/entity/menu.js");
__require("values/entity/user.js");
__require("plugin/w3pa_grid/w3paGrid.js");//grid Script
__require("plugin/datavalidation/validator.js");//validator
__require("plugin/sweetalert/msg.js");//message Handler
__require("plugin/sweetalert/sweetalert2.js");//Sweet Alert

__css_require("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"); //Bootstrap
//__css_require("template/vendors/bootstrap/dist/css/bootstrap.min.css"); //Bootstrap

__css_require("template/vendors/font-awesome/css/font-awesome.min.css"); //Font Awesome

__css_require("template/css/style.css"); // Style

__css_require("template/vendors/nprogress/nprogress.css"); //NProgress

__css_require("template/vendors/google-code-prettify/bin/prettify.min.css"); //bootstrap-wysiwyg

__css_require("template/build/css/custom.min.css"); //Custom styling plus plugins

__css_require("plugin/sweetalert/sweetalert2.css"); //Sweet Alert

__css_require("plugin/w3pa_grid/PGridStyle.css"); //grid style

function load_menu() {
    __require("plugin/masterPage/main.js");
}
function loader_script() {

    __require("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"); //Bootstrap
    //__require("template/vendors/bootstrap/dist/js/bootstrap.min.js"); //Bootstrap

    __require("template/vendors/fastclick/lib/fastclick.js"); //FastClick
    //   __require("template/vendors/nprogress/nprogress.js"); //NProgress

    __require("template/build/js/custom.min.js"); //Custom Theme Scripts


}
