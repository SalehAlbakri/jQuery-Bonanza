$('.fade button').click(function(){
    $('.fade button').append($('.fade p'));
    $('.fade button').find($('.fade p')).remove();
})
$('.append button').click(function(){
    $('.append p').append("<br> some text");
})
$('.color button').click(function(){
    $('.color p').css("color","red");
})