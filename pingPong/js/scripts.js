function pingPong(number) {
  var array = [];
  if(number > 0) {
    for(var i = 1; i < number+1; i++) {
      if (i % 15 === 0) {
        array.push("ping pong");
      }
      else if (i % 5 === 0) {
        array.push("pong");
      }
      else if (i % 3 === 0) {
        array.push("ping");
      }
      else {
        array.push(i);
      }
    }
  }
  else if(number < 0){
    for(var i = -1; i > number-1; i--) {
      if (i % 15 === 0) {
        array.push("ping pong");
      }
      else if (i % 5 === 0) {
        array.push("pong");
      }
      else if (i % 3 === 0) {
        array.push("ping");
      }
      else {
        array.push(i);
      }
    }
  }
  return array;
}


$(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    $('#outputToUser').children().remove();
    var userInput = parseInt($('input#userInput').val());
    if(!userInput || userInput === 0) {
      $('#outputToUser').append('<li>Please enter a whole, non-zero number</li>');
    }
    else {
      pingPong(userInput).forEach(function(output) {
        if(output === "ping") {
          $('#outputToUser').append('<li class="left">' + output + '</li><div class="ball ball-left"></div>');
        }
        else if(output === "pong") {
          $('#outputToUser').append('<li class="right">' + output + '</li><div class="ball ball-right"></div>');
        }
        else if(output === "ping pong") {
          $('#outputToUser').append('<li class="middle">' + output + '</li>');
        }
        else {
          $('#outputToUser').append('<li>' + output + '</li>');
        }
        $('#outputToUser').append('<li>|</li>');
      });
    }
    $('input#userInput').val('');
  });
});
