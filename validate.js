$(function () {
    $("#register").validate({
        rules: {
            email: {
                required: true,
                email: true
            },

            fname: {
                required: true,
                noSpace: true
            }

        },
        message: {
            email: {
                required: 'please enter email.',
                email: 'enter a valid email!'
            },
            fname: {
                required: 'enter name'
            }
        }


    })
})
/*this area is for the display of an error when users keeps typing spaces*/
$.validator.addMethod("noSpace", function (value, element) {
    return value == '' || value.trim().length != 0
}, "spaces are not allowed")








/*$(function () {
    var $registerForm = $("#register");
    if ($registerForm.length) {
        $registerForm.validate({
            rules: {
                email: {
                    required: true,
                }
            },
            message: {
                email: {
                    required: 'please enter email!'
                }
            }

        })
    }
})*/
