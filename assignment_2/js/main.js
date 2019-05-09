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
        $("#form").reset();
    });
    $("#link-tab").click(function(){
        $("#links").show();
        $("#contact").hide();
    });
    $("#contact-tab").click(function () {
        $("#contact").show();
        $("#links").hide();
    });
});