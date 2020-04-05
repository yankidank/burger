// Code here handles what happens when a user submits a new burger

$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a newBurger obj
  var newBurger = {
    name: $("#name").val().trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newBurger)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a burger with an alert window
      console.log("Adding burger...");
    });

  // empty each input box by replacing the value with an empty string
  $("#name").val("");

});
