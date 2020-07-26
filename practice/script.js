var show = "";
var string = "";
$(document).ready(function () {
  $("#1").click(function () {
    show += "1";
    string += "1";
    $("#show").html(show);
  });
  $("#2").click(function () {
    show += "2";
    string += "2";
    $("#show").html(show);
  });
  $("#3").click(function () {
    show += "3";
    string += "3";
    $("#show").html(show);
  });
  $("#4").click(function () {
    show += "4";
    string += "4";
    $("#show").html(show);
  });
  $("#5").click(function () {
    show += "5";
    string += "5";
    $("#show").html(show);
  });
  $("#6").click(function () {
    show += "6";
    string += "6";
    $("#show").html(show);
  });
  $("#7").click(function () {
    show += "7";
    string += "7";
    $("#show").html(show);
  });
  $("#8").click(function () {
    show += "8";
    string += "8";
    $("#show").html(show);
  });
  $("#9").click(function () {
    show += "9";
    string += "9";
    $("#show").html(show);
  });
  $("#0").click(function () {
    show += "0";
    string += "0";
    $("#show").html(show);
  });

  $("#divide").click(function () {
    show += "/";
    string += "/";
    $("#show").html(show);
  });
  $("#multiply").click(function () {
    show += "x";
    string += "x";
    $("#show").html(show);
  });
  $("#plus").click(function () {
    show += "+";
    string += "+";
    $("#show").html(show);
  });
  $("#minus").click(function () {
    show += "-";
    string += "-";
    $("#show").html(show);
  });
  $("#dot").click(function () {
    show += ".";
    string += ".";
    $("#show").html(show);
  });
  $("#square").click(function () {
    var k = "";
    var l = "";
    show += "<sup>2</sup>";
    for (let i = string.length - 1; i >= 0; i--) {
      if (parseFloat(string[i]) || string[i] == 0) {
        k += string[i];
      } else {
        break;
      }
    }
    for (let j = k.length - 1; j >= 0; j--) {
      l += k[j];
    }
    string += "x";
    string += l;

    $("#show").html(show);
  });
  $("#clear").click(function () {
    var a = show.length - 1;
    show = show.slice(0, a);
    a = string.length - 1;
    string = string.slice(0, a);

    $("#show").html(show);
  });
  $("#clearAll").click(function () {
    show = "";
    string = "";
    $("#show").html(show);
  });
  $("#eq").click(function () {
    string += "!";
    var p = "";
    var val = [];
    for (let i = 0; i < string.length; i++) {
      if (
        string[i] == "x" ||
        string[i] == "/" ||
        string[i] == "+" ||
        string[i] == "-" ||
        string[i] == "!"
      ) {
        val.push(parseFloat(p));
        p = "";
        if (
          string[i] == "x" ||
          string[i] == "/" ||
          string[i] == "+" ||
          string[i] == "-"
        ) {
          val.push(string[i]);
        }
      } else if (parseFloat(string[i]) || string[i] == 0) {
        p += string[i];
      }
    }

    console.log(val);
    var i = 0;
    var cm = 0;
    var cd = 0;
    var cp = 0;
    var cs = 0;
    while (i <= val.length) {
      if (val[i] == "x") {
        cm++;
      } else if (val[i] == "/") {
        cd++;
      } else if (val[i] == "+") {
        cp++;
      } else if (val[i] == "-") {
        cs++;
      }
      i++;
    }
    for (i = 1; i <= cd; i++) {
      var a = val.indexOf("/");
      val.splice(a - 1, 3, val[a - 1] / val[a + 1]);
    }
    for (i = 1; i <= cm; i++) {
      var a = val.indexOf("x");
      val.splice(a - 1, 3, val[a - 1] * val[a + 1]);
    }
    for (i = 1; i <= cs; i++) {
      var a = val.indexOf("-");
      if (a == 0) {
        val.splice(0, 2, -val[1]);
      } else {
        val.splice(a - 1, 3, val[a - 1] - val[a + 1]);
      }
    }
    for (i = 1; i <= cp; i++) {
      var a = val.indexOf("+");
      val.splice(a - 1, 3, val[a - 1] + val[a + 1]);
    }
    console.log("Result = ", val);
    $("#show").text(val);
  });
});
