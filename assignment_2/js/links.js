var links = "<ul id='list'><li><a href='https://www.google.com' target='_blank'>Google</a></li><li><a href='https://www.facebook.com' target='_blank'>Facebook</a></li><li><a href='https://twitter.com' target='_blank'>Twitter</a></li></ul>";

$(function() {
    $("#links").append(links);
    var input = $('<input type="button" value="Fade in and out" id="button"/>');
    input.appendTo($("#links"));
    $("#button").click(function() {
        $("#list").toggle();
    });
    var inputfield = "<input type='text'/><input type='text'/><input type='button' value='Submit'/>";
    inputfield.appendTo($("#links"));
});