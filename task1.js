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
$("#showani").click(function(){
    $("#jerry").animate({left :'+=800px'},3000);
  }); 
$("#showani").click(function(){
    $("#tom").animate({left :'+=800px'},4000);
    $("#jerry").animate({bottom:'125px'},400);
    $("#tom").animate({bottom :'125px'},200);
    $("#jerry").animate({left:'700px'},400);
    $("#jerry").animate({opacity:'0'},800);
   
  }); 
  $(document).ready(function () {
    $("#anim2").click(function () {
      $("#ani2")
        
        .css({ background: 'purple' })
    });
  });
$("#hovee").hover(function(){
    $("#h3").css({fontSize:"40px"},1000)
    $("#h3").css({color:"green"})
})
 $("#phoneadd").click(function(){
   
     $("#phone").prepend("<img src='/img/phone3.jpeg'>");
 })
 $("#lapadd").click(function(){
   
    $("#lap").append("<img src='/img/lap3.jpeg'>");
})

