function createButton() {
    var button1 = $('<input type="button" value="fade" id="button"/>');
}


$(function() {
    $('#links').append( $("ul") );
    $("ul").append("<li><a href='https://www.google.com'>Google</a></li>");
    $("ul").append("<li><a href='https://www.facebook.com'>Facebook</a></li>");
    $("ul").append("<li><a href='https://twitter.com'>Facebook</a></li>");
    $("ul").append("<li><a href='https://www.instagram.com'>Instagram</a></li>");
    $("#links").append()

    $("#button").on('click', function() {
        $("ul").toggle();
    })
};