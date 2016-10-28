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
