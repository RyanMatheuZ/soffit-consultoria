$(function() {
    $("#contact-form").validate({
        rules: {
            inputName: {
                required: true,
                minlength: 4
            },

            inputEmail: {
                required: true,
                email: true
            },

            inputMessage: {
                required: true,
                minlength: 10
            }
        },

        messages: {
            inputName: {
                required: "Por favor, insira seu nome!",
                minlength: "O mínimo de caracteres é 4!"
            },

            inputEmail: {
                required: "Por favor, insira seu E-mail!",
                email: "Informe um E-mail válido!"
            },

            inputMessage: {
                required: "Por favor, insira sua mensagem!",
                minlength: "O mínimo de caracteres é 10!"
            }
        }
    });
});
