$(document).ready(function(){
    $('.mais-btn').on('click', function(){
        $(this).parent().parent().find(".sinopse").toggleClass("active");
    });
});