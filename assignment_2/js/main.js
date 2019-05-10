function validateForm(){
    let namestr = $("#name").val();
    let res = namestr.match(/^[A-Za-z]+$/);
    if (res === ""){
        $("#form-alert").show();
    }

    let agestr = $("#age").val();
    let emp = agestr.match(/[0-9]*/);
    if (emp === "") {
        $("#form-alert").show();
    }

    let citystr = $("#city").val();
    let exp = citystr.match(/^[A-Za-z]+$/);
    if (exp === "") {
        $("#form-alert").show();
    }

    let emailstr = $("#emailaddress").val();
    let test = emailstr.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9\-.]+).([a-zA-Z]{2,5})$/);
    if (test === "") {
        $("#form-alert").show();
    }

    let phonestr = $("#phone").val();
    let regex = phonestr.match(/[0-9]*/);
    if (regex === "") {
        $("#form-alert").show();
    }

    var object = {
        name: namestr,
        age: agestr,
        city: citystr,
        emailaddress: emailstr,
        phonenumber: phonestr
    };
}

$(function() {
    $('#submit').on('click', function() {
        validateForm();
    });
    $('#erase').on('click', function() {
        $("#form-content").hide();
        $("#form-alert").hide();
        $(".input").attr("type", "hidden");
    });
    $("#link-tab").click(function(){
        $("#links").show();
        $("#contact").hide();
        $("#link-tab").addClass("active");
        $("#contact-tab").removeClass("active");
    });
    $("#contact-tab").click(function () {
        $("#contact").show();
        $("#links").hide();
        $("#link-tab").removeClass("active");
        $("#contact-tab").addClass("active");
    });
});
