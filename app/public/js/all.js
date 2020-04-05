// Code here handles what how the page displays all of the burgers
// It pings the server. The server then pings the database and displays all of the burgers.

// make a get request to our api to grab every burger
$.get("/api/all", function(data) {
  var waiting = data.filter((burger) => burger.devoured === false );
  var devoured = data.filter((burger) => burger.devoured === true );
  for (var i = 0; i < waiting.length; i++) {
    var burgersWaiting = $("<div>");
    burgersWaiting.addClass("burger");
    // add an id to the burger to mark which burger it is
    burgersWaiting.attr("id", "burger-" + i);
    // append the burger to the burger section
    $("#burger-section").append(burgersWaiting);    
    $("#burger-" + i).append("<div class='burger-name'>" + waiting[i].name + "</div><div class='devour-button' id='devour-"+i+"'>Devour</div>");
  }
  $("#burger-section").append("<div id='burger-spacer'></div>");  
  for (var i = 0; i < devoured.length; i++) {
    var burgersDevoured = $("<div>");
    burgersDevoured.addClass("burger");
    // add an id to the burger to mark which burger it is
    burgersDevoured.attr("id", "burger-" + i);
    // append the burger to the burger section
    $("#burger-section").append(burgersDevoured);    
    $("#burger-" + i).append("<div class='burger-name'>" + devoured[i].name + "</div>");
  }
});
