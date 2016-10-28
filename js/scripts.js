function pingPong(inputNumber) {
  var outputArray = [];
  if(inputNumber > 0) {
    for(var i = 1; i < inputNumber+1; i++) {
      if (i % 15 === 0) {
        outputArray.push("ping pong");
      }
      else if (i % 5 === 0) {
        outputArray.push("pong");
      }
      else if (i % 3 === 0) {
        outputArray.push("ping");
      }
      else {
        outputArray.push(i);
      }
    }
  }
  else if(inputNumber < 0){
    for(var i = -1; i > inputNumber-1; i--) {
      if (i % 15 === 0) {
        outputArray.push("ping pong");
      }
      else if (i % 5 === 0) {
        outputArray.push("pong");
      }
      else if (i % 3 === 0) {
        outputArray.push("ping");
      }
      else {
        outputArray.push(i);
      }
    }
  }
  return outputArray;
}


$(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    $('.outline').show();
    $('#outputToUser').children().remove();
    var userInput = parseInt($('input#userInput').val());
    if(!userInput || userInput === 0) {
      $('#outputToUser').append('<li>Please enter a whole, non-zero number</li>');
    }
    else {
      pingPong(userInput).forEach(function(output) {
        if(output === "ping") {
          $('#outputToUser').append('<li class="left">' + output + '<div class="ball ball-left"></div></li>');
          $('#outputToUser').append('<li class="li-left">|</li>');
        }
        else if(output === "pong") {
          $('#outputToUser').append('<li class="right">' + output + '<div class="ball ball-right"></div></li>');
          $('#outputToUser').append('<li class="li-right">|</li>');
        }
        else if(output === "ping pong") {
          $('#outputToUser').append('<li>' + output + '</li>');
          $('#outputToUser').append('<li>|</li>');
        }
        else {
          $('#outputToUser').append('<li>' + output + '</li>');
          $('#outputToUser').append('<li>|</li>');
        }
      });
    }
    $('input#userInput').val('');
  });
});
