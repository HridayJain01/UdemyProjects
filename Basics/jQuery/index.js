$("h1").click(function()
{
    $("h1").css("color","purple");
});

$(".btn").click(function()
{
   $("h1").animate({padding :"0px 400px"});
});

$("input").keypress(function(event)
{
   $("h1").text(event.key);
});

