function adjustLine(x, y, length, angle, color, id) {
  var delta = 90 - angle;
  var line = document.getElementById(id);
  var styles = 'border: 1px solid ' + color + ";"
             + 'width: ' + length + 'px; '
             + 'height: 0px; '
             + 'transform: rotate(' + angle + 'deg); '  
             + 'position: absolute; '
             + 'top: ' + y + 'px; '
             + 'left: ' + x + 'px; ';
  line.setAttribute('style', styles);  
}

function adjustGradient(angle, id) {
  var gradient_box = document.getElementById(id);
  gradient_box.style.background = 'linear-gradient('
                                + angle + 'deg,'
                                + 'red 0%,'
                                + '#ff9a9e 50%,'
                                + '#ff9a9e 50%,'
                                + 'orange 100%)';
}

adjustLine(-150, 100, 600, 45, "black", "gradient-line");
adjustLine(-150, 100, 600, 135, "lightgray", "perpendicular-line");
adjustGradient(45, "js-gradient");

var angle_form = document.getElementById("angle");
var ang = document.getElementById("ang");
angle_form.oninput = function() {
  var angle = angle_form.value ? parseInt(angle_form.value) : 45;
  adjustLine(-150, 100, 600, angle, "black", "gradient-line");
  adjustLine(-150, 100, 600, angle + 90, "lightgray", "perpendicular-line");
  adjustGradient(angle, "js-gradient");
  ang.textContent = angle;
}