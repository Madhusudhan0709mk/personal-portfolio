/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
$(document).ready(function(){
    $(".main_content").waypoint(function(){
        $(".main_content").addClass("animate__animated animate__fadeInLeft");
    },{offset:"50%"});
});

$(document).ready(function(){
    $(".main1_content").waypoint(function(){
        $(".main1_content").addClass("animate__animated animate__fadeInLeft");
    },{offset:"50%"});
});


$(document).ready(function(){
    $(".main2_content").waypoint(function(){
        $(".main2_content").addClass("animate__animated animate__fadeInDown");
    },{offset:"75%"});
});

$(document).ready(function(){
    $(".main3_content").waypoint(function(){
        $(".main3_content").addClass("animate__animated animate__fadeInDown");
    },{offset:"75%"});
});