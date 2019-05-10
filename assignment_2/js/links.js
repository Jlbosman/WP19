var links ="<ul><li><a href='https://www.google.com' target='_blank'>Google</a></li><li><a href='https://www.facebook.com' target='_blank'>Facebook</a></li><li><a href='https://twitter.com' target='_blank'>Twitter</a></li></ul>";

$(function() {
    $("#links").append(links);
    var input = $('<input type="button" value="Fade in and out" />');
    input.appendTo($("#links"));
    input.click(function() {
        $("links").toggle();
    });
});