$(document).ready(function(){
    $(".chicken p").click(function(){
        var content = $(this).html();
        var newContent = content + " <strong>I got clicked!</strong> ";
        $(this).html(newContent);
        $(this).toggleClass("red");
        
        $(this).hide("slow", function(){
            alert("It is gone, and will not come back.");
        });
    });
    
    //$(".chicken p:first-child").click();
});