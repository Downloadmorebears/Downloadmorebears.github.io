// License: see COPYING

var progress = document.getElementById("progress");

var clicked = false;
var percent = 0;

document.getElementById("download").onclick = function () {
  if (!clicked) {
    clicked = true;
    progress.innerHTML = String(percent) + "% complete ";
    window.setInterval(function () {
      percent += 1;
      progress.innerHTML = String(percent) + "% complete ";
      if (percent === 100) {
        window.alert("Your download is complete");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
            if (percent === 1000) {
        window.alert("You can stop now");
      }
            if (percent === 1000) {
        window.alert("You can stop now");
      }
            if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }

      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 1000) {
        window.alert("You can stop now");
      }
      if (percent === 9001) {
        window.alert("IT'S OVER 9000!");
      }
    }, 100);
  } else {
    percent += 1;
  }
};
