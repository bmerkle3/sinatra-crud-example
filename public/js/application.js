$(document).ready(function() {

  // figure out what to bind our event to in the dom
    // do we need we need to an an id or class to that thing?

  // is the thing that I'm binding to always there when the page loads?
  //  (do I need event delegation)
  // decide what event you are binding
  // decide if you need to prevent a default behavior
  // make sure your event is bound console.log!!

  // prepare ajax request
    // url
    // method/type (GET, POST, PUT, DELETE)
    // data - do I need send any?
    // dataType - "JSON"
  // set up the done, and console.log the response

  // move the the controller
    // what do you need to do to maintain functionality
    // and return back just the piece you need (request.xhr?, partial, locals)

  // back in the javascript
  // what do we do with what came back? (.done)  (append it somewhere?, parse it?)
  // do we need to hide or show anything else?

  // what to do if there was a 500 or an error on the server?
    // .fail


  $("#create-game-link").on("click", function(event){
    event.preventDefault();

    var $link = $(this);

    var request = $.ajax({
      url: $link.attr("href")
    });

    request.done(processGetForm);
    request.fail(processGenericError);

  });

  $("body").on("submit", "#new-game-form", function(event){
    event.preventDefault();

    var $form = $(this);

    var request = $.ajax({
      url: $form.attr("action"),
      method: $form.attr("method"),
      data: $form.serialize()
    })

    request.done(function(response){
      $("ul").append(response);
      $("#create-game-link").show();
      $form.remove();
      console.log("YO!");
    })

    request.fail(function(response){
      alert(response.responseText);
    })
  })

});

function processGetForm(response){
  $("body").append(response);
  $("#create-game-link").hide();
}

function processGenericError(response){
  console.log(response);
}
