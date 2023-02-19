$(document).ready(function(){
    $('#open-menu').click(function() {
        $('.nav-menu').addClass('navmenu-in');
    });
    $('#close-menu').click(function() {
        $('#navmenu').removeClass('navmenu-in');
    });
});

