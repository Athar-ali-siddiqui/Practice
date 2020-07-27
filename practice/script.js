var comp = ["rock", "paper", "scissor"];
function check(human, comptr) {
  if (human == comptr) {
    return "You tied !";
  } else if (
    (human == comp[0] && comptr == comp[1]) ||
    (human == comp[1] && comptr == comp[2]) ||
    (human == comp[2] && comptr == comp[0])
  ) {
    return "You lost !";
  } else if (
    (human == comp[0] && comptr == comp[2]) ||
    (human == comp[1] && comptr == comp[0]) ||
    (human == comp[2] && comptr == comp[1])
  ) {
    return "You win !";
  }
}
function rpsGame(yourChoice) {
  var allsrc = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper"),
    scissor: document.getElementById("scissor").src,
  };
  var index = Math.floor(Math.random() * 3);
  var human = yourChoice.id;
  var message =
    "<h1 id='text' class='text-center pt-3'> " +
    check(human, comp[index]) +
    "</h1>";
  var compId = comp[index];
  var compsrc = document.getElementById(compId).src;
  var humansrc = yourChoice.src;

  $("#scissor").attr("src", compsrc);
  $("#scissor").attr("id", "right");
  $("#rock").attr("src", humansrc);
  $("#rock").attr("id", "left");
  $("#second").html(message);
  window.allsrc = allsrc;
}

$("#reset").click(function () {
  $("#right").attr("id", "scissor");
  $("#left").attr("id", "rock");
  $("#scissor").attr("src", allsrc.scissor);
  $("#rock").attr("src", allsrc.rock);

  $("#second").html(allsrc.paper);
});
