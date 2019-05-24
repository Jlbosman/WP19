function checkName(){
    let name_input = $('#name');
    let cur_val = name_input.val();
    let name_regex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
    if (cur_val.match(name_regex) && cur_val !== ''){
        name_input.removeClass('is-invalid');
        name_input.addClass('is-valid');
        return true;
    } else{
        name_input.removeClass('is-valid');
        name_input.addClass('is-invalid');
        return false;
    }
}

function checkAge() {
    let age_input = $('#age');
    let cur_val = age_input.val();
    let age_regex = /\s[0-1]{1}[0-9]{0,2}/;
    if (cur_val.match(age_regex) && cur_val !== ''){
        age_input.removeClass('is-invalid');
        age_input.addClass('is-valid');
        return true;
    } else{
        age_input.removeClass('is-valid');
        age_input.addClass('is-invalid');
        return false;
    }
}

function checkMail() {
    let mail_input = $('#mail');
    let cur_val = mail_input.val();
    let mail_regex = "^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$";
    if (cur_val.match(mail_regex) && cur_val !== ''){
        mail_input.removeClass('is-invalid');
        mail_input.addClass('is-valid');
        return true;
    } else{
        mail_input.removeClass('is-valid');
        mail_input.addClass('is-invalid');
        return false;
    }
}

function checkResidence() {
    let residence_input = $('#place');
    let cur_val = residence_input.val();
    let residence_regex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
    if (cur_val.match(residence_regex) && cur_val !== ''){
        residence_input.removeClass('is-invalid');
        residence_input.addClass('is-valid');
        return true;
    } else{
        residence_input.removeClass('is-valid');
        residence_input.addClass('is-invalid');
        return false;
    }
}

$(function() {
    $('#name').onkeyup(function () {
        checkName();
    });
    $('#age').onkeyup(function () {
        checkAge();
    });
    $('#mail').onkeyup(function () {
        checkMail();
    });
    $('#place').onkeyup(function () {
        checkResidence();
    });
    $('#submit').click(function () {
        if (checkName() && checkAge() && checkMail() && checkResidence()){
            $('form').submit()
        }
    })
});