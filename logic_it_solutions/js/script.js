$(document).ready(function(){

    $('#menu-icon').click(function(){
        $(this).toggleClass('is-opened');
        $('#menu-list').toggleClass('is-opened');
    });
});