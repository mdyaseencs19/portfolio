$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.slider').slider({full_Width:true});
});

function toggleModal(){
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}