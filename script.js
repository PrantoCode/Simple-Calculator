let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (clk of buttons) {
  clk.addEventListener("click", (i) => {
    btnTxt = i.target.innerText;
    if (btnTxt == "=") {
      screenValue = eval(screenValue);
      screen.value = screenValue;
      // screen.value = "It's " + screenValue;
    } else if (btnTxt == "C") {
      screenValue = "";
      screenValue2 = screenValue;
      screenValue3 = screenValue2.replace("*","x");
      screen.value = screenValue3;
    } else if (btnTxt == "X") {
      btnTxt = "*";
      screenValue += btnTxt;
      screenValue2 = screenValue;
      screenValue3 = screenValue2.replace("*","x");
      screen.value = screenValue3;
    } else {
      screenValue += btnTxt;
      screenValue2 = screenValue;
      screenValue3 = screenValue2.replace("*","x");
      screen.value = screenValue3;
    }
  });
}