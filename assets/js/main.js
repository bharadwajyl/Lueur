//Global variables
var username = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/, mail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, pssd = /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/;


//Detect onclick signup button
$(".signup").on("click", function(){
    event.preventDefault();
    if ($(".alert").length > 0) { $(".alert").remove(); }
    if ($("input").css("border", "1px solid #f2645c").length > 1 ) { $("input").css("border", "1px solid var(--lite)");  }
    let fname = $("input[name='fname']");
    let mob = $("input[name='mob']");
    let email = $("input[name='email']");
    let country = $("input[name='country']");
    let address = $("input[name='address']");
    let password = $("input[name='pssd']");
    let cpassword = $("input[name='cpssd']");
    if (fname.val() == "") {
        fname.parent().append('<sub class="alert">Required</sub>');
        fname.css('border','1px solid #f2645c');
    } else if (mob.val() == "") {
        mob.parent().append('<sub class="alert">Required</sub>');
        mob.css('border','1px solid #f2645c');
    } else if (email.val() == "") {
        email.parent().append('<sub class="alert">Required</sub>');
        email.css('border','1px solid #f2645c');
    } else if (country.val() == "") {
        country.parent().append('<sub class="alert">Required</sub>');
    } else if (address.val() == "") {
        address.parent().append('<sub class="alert">Required</sub>');
        address.css('border','1px solid #f2645c');
    } else if (password.val() == "") {
        password.parent().append('<sub class="alert">Required</sub>');
        password.css('border','1px solid #f2645c');
    } else if (cpassword.val() == "") {
        cpassword.parent().append('<sub class="alert">Required</sub>');
        cpassword.css('border','1px solid #f2645c');
    } else {
        if (username.test(fname.val()) == true || fname.val().length > 80) {
            alert("Enter a valid name");
            fname.css('border','1px solid #f2645c');
        } else if (mob.val().indexOf(" ")!=-1 || mob.val().length > 10) {
            alert("Enter a valid phone format without country code");
            mob.css('border','1px solid #f2645c');
        } else if (mail.test(email.val()) == false || email.val().length > 100) {
            alert("Enter a valid email address");
            email.css('border','1px solid #f2645c');
        } else if (!pssd.test(password.val())) {
            alert("Password: 1 uppercase, 1 lowercase, 1digit, 1special char");
            password.css('border','1px solid #f2645c');
        } else if (password.val() != cpassword.val()) {
            alert("Confirmation password missmatch");
            cpassword.css('border','1px solid #f2645c');
        } else {
            //Add ajax 
            //post request here...
            alert("Successfully Passed: Ajax post users inputs to backend");
        }   
    }
});
