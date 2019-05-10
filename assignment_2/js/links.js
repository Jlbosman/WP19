var links = "<ul id='list'><li><a href='https://www.google.com' target='_blank'>Google</a></li><li><a href='https://www.facebook.com' target='_blank'>Facebook</a></li><li><a href='https://twitter.com' target='_blank'>Twitter</a></li></ul>";
var input = $('<input type="button" value="Fade in and fade out" id="button"/><br><br>');
var inputfield = $("<input type='text' id='linkname' placeholder='Link name'/><input type='text' id='url' placeholder='URL'/><input type='button' value='Submit' id='button2'/><br><br>");
var input3 = $('<input type="button" value="(de)activate" id="button3"/>');
$(function() {
    $("#links").append(links);
    input.appendTo($("#links"));
    $("#button").click(function() {
        $("#list").toggle();
    });
    inputfield.appendTo($("#links"));
    $("#button2").click(function() {
        $("#list").append("<li a=$('#url').val() target='_blank'>$('#linkname').val()</li>");
    });
    input3.appendTo($("#links"));
    $("#button3").click(function() {
        $("li").click(function() {
            $("this").hide();
        });
    });
});