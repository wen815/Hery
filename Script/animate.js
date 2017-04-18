$(function(){
    $("#bg1").addClass("bg1");
    
    $("ul li").hover(function(){
 $(this).find(".bg").animate({height:"100px"});       
   $(this).siblings().find(".bg").animate({height:"0px"});  
    });
     $("ul li").click(function(){
 $(this).find(".bg").animate({height:"100px"});  
  $(this).siblings().find(".bg").animate({height:"0px"}); 
  $("#s1").fadeIn(2000);
     });
});