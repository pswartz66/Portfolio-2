


$('#email-send-button').on('click', function(e) {
    e.preventDefault();

    var fromAddress = $('#email-address').val().trim();
    /* var subject = $('#email-subject').val().trim(); */
    var emailMessage = $('#email-message').val().trim();


    var template_params = {
        "reply_to": fromAddress,
        "from_name": "philswartz.portfolio@gmail.com",
        "to_name": "Phil",
        "message_html": emailMessage
     }
     
     var service_id = "portfoliogmailservice";
     var template_id = "template_6DdrviwH";

     emailjs.send(service_id, template_id, template_params);

});