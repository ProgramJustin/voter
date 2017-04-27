// business logic
// var age = parseInt(("what is your age?"));

//user interface logic
$(document).ready(function() {

  $("form#userForm").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("#voter").val());

    if (age > 18) {
      $('#ofAge').show();
      $('#underAge').hide();

    } else if (age < 18) {
      $('#underAge').show();
      $('#ofAge').hide();
    }

  });




});
