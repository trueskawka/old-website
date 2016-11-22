var letters = [];

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);

  for (var i = 0; i < width / 34; i++) {
    l = [];
    for (var j= 0; j < height / 32; j++) {
      console.log(getRandomCharacter());
      letter = new Letter(
        i * 34,
        j * 32,
        int(random(0,25)),
        int(random(0,255)),
        int(random(0,50)),
        int(random(25,100)),
        int(random(2,4)),
        getRandomCharacter()
        );
      l.push(letter)
    }
    letters.push(l);
  }

  textSize(32);
  background(0);
}

function draw() {
  background(0,25);
  letters.forEach(function(l) {
    l.forEach(function(letter) {
      letter.render();
      letter.move();
    });
  });
}

function Letter(x, y, r, g, b, opacity, speed, letter) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.g = g;
  this.b = b;

  this.opacity = opacity;
  this.speed = speed;
  this.letter = letter

  this.render = function() {
    fill(this.r, this.g, this.b, this.opacity);
    text(this.letter, this.x, this.y);
  }

  this.move = function() {
    this.y += this.speed;
    if (this.y >= height) {
      this.y = 0;
    }
  }
}

function getRandomCharacter() {
  return String.fromCharCode(
    0x0400 + int(random(255))
  );
}
