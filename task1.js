$(document).ready(function(){
    $("#div1").click(
        function(){
            $("#log-form").toggle(2000,"slow",$("#reg-form").hide());
        }
    );
});
$(document).ready(function(){
    $("#div2").click(
        function(){
            $("#reg-form").toggle(2000,"slow",$("#log-form").hide());
        }
    );
});

$(document).ready(function(){
    $("#showani").click(function()
    {
        $("#tom").animate({left:"+=300px"});
        $("#jerry").animate({left:"+=300px"});
    });
});
