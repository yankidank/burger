// Code here handles what happens when a user submits a new burger

$(".devour-button").on("click", function(event) {
  var devourId = $(this).attr('id');
  $.ajax({
    url: '/api/'+devourId,
    type: 'DELETE',
    success: function(result) {
      console.log(result);
      console.log("Removing burger...");
    }
  });
});
