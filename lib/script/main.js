$(document).ready(function(){
    $(".open-menu-btn").click(function(){
        $("#navmenu").addClass('side-menu-in')
    });
    $(".close-menu-btn").click(function(){
        $("#navmenu").removeClass('side-menu-in')
    });
  });