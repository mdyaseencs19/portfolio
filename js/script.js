$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.slider').slider({full_Width:true});
});

$(document).ready(function () {
    $("body").on("contextmenu",function(e){
        return false;
    });
});

//Disables Cut,Copy & Paste...
$(document).ready(function () {
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
});

function toggleModal(){
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}

