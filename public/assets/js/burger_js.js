// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".change-burger").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newburger");
      var newBurgerState = {
        devoured: newBurger
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed devoured to", newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // This section posts a burger

    $("#create-burger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      console.log("click successful");
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: "FALSE"
      };
  
      console.log(newBurger)

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });


    // This section deletes a burger

    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          location.reload();
        }
      );
    });


});
  