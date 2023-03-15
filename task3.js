$(document).ready(function(){
    var $namepattern = /([A-Z]?[a-z]{3})/;
    $('.name').on('keypress keyup keydown', function(){
        if(!$(this).val().match($namepattern)){
            $('.unameerror').removeClass('hide');
            $('.unameerror').show();

            $(".submit").prop('disabled', true);
        }
        else{
            $('.unameerror').addClass('hide');
            $(".submit").prop('disabled', false);
        }
    });
    var $pwdpattern = /^.*(?=.{8,16})(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$#]).*$/;
    $('.pswd').on('keypress keyup keydown', function(){
        if(!$(this).val().match($pwdpattern)){
            $('.pswderror').removeClass('hide');
            $('.pswderror').show();

            $(".submit").prop('disabled', true);
        }
        else{
            $('.pswderror').addClass('hide');
            $(".submit").prop('disabled', false);
        }
    });
    var $emailpattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    $('.email').on('keypress keyup keydown', function(){
        if(!$(this).val().match($emailpattern)){
            $('.emailerror').removeClass('hide');
            $('.emailerror').show();

            $(".submit").prop('disabled', true);
        }
        else{
            $('.emailerror').addClass('hide');
            $(".submit").prop('disabled', false);
        }
    });
    var $phpattern = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    $('.phnum').on('keypress keyup keydown', function(){
        if(!$(this).val().match($phpattern)){
            $('.pherror').removeClass('hide');
            $('.pherror').show();

            $(".submit").prop('disabled', true);
        }
        else{
            $('.pherror').addClass('hide');
            $(".submit").prop('disabled', false);
        }
    });
})