function move() {
    var progress = document.getElementById("progress");
    var width = 1;
    var bar = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(bar);
      } else {
        width++;
        progress.style.width = width + "%";
      }
    }
  }

