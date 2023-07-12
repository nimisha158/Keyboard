function method(val) {
  if (temp == 1 || n == 1) {
    document.getElementById("box").value += val.toUpperCase();
    n = 0;
  } else {
    document.getElementById("box").value += val.toLowerCase();
  }
}
function number(val) {
  document.getElementById("box").value += val;
}

function num(val) {
  if (inp == 1) {
    document.getElementById("box").value += val;
  } else {
    document.getElementsByClassName("num").disabled;
  }
}

function del() {
  document.getElementById("box").value = " ";
}
count = 0;
function opr(val) {
  a = document.getElementById("box").value;
  document.getElementById("box").value = " ";
  operator = val;
  count = 0;
}
function res() {
  b = document.getElementById("box").value;
  if (count == 0) {
    if (operator == "+") {
      result = eval(a) + eval(b);
    } else if (operator == "-") {
      result = eval(a) - eval(b);
    } else if (operator == "*") {
      result = eval(a) * eval(b);
    } else {
      result = eval(a) / eval(b);
    }
    document.getElementById("box").value = result;
    count = 1;
  } else {
    document.getElementById("eq").disabled;
  }
}

function backspace() {
  content = document.getElementById("box").value;
  sliced = content.length - 1;
  output = content.slice(0, sliced);
  document.getElementById("box").value = output;
}

temp = 0;
function caps() {
  if (temp == 0) {
    temp = 1;
  } else {
    temp = 0;
  }
}

inp = 0;
function numlck() {
  if (inp == 0) {
    inp = 1;
  } else {
    inp = 0;
  }
}

n = 0;
function shift1() {
  if (n == 0) {
    n = 1;
  } else {
    n = 0;
  }
}
