var canvas;
var context;
var box;
var score = 0;
var timer = 10;
var interval = 1000;

class Box
{
  create() {
    this.random_position();
    this.height = 50;
    this.width = 50;
    this.color = 'white';
  }

  show() {
    context.save();

    context.fillStyle = this.color;

    context.beginPath();
    context.rect( this.x, this.y, this.height, this.width)

    context.closePath();
    context.fill();

    context.restore();
  }

  hits(event) {
    if (event.offsetX > this.x && event.offsetX < this.x + this.width
     && event.offsetY > this.y && event.offsetY < this.y + this.height )
    {
      return true;
    }
  }

  random_position() {
    this.x = Math.floor((Math.random() * ((canvas.width - 48) - 48)));
    this.y = Math.floor((Math.random() * ((canvas.height - 48) - 48)));
  }
}

function load() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  context.fillRect( 0, 0, canvas.width, canvas.height ) ;
  newbox();

  timer = 10;
  score = 0;

  setInterval(countdown, interval);
  function countdown(){
    document.getElementById('timer').innerHTML = timer;
    if (timer==0) {
    alert("Time's up! Your score: " + score);
    timer = "time's up!";
   
  }
    if (timer == "time's up!") {
       canvas.removeEventListener("click", capture);
    context.clearRect(0, 0, canvas.width, canvas.height);
    }
  else{
    timer--;
    }
  }
}

function newbox(){
    box = new Box();
    box.create();
    box.show();
}

function capture(event) {
    if (box.hits(event))
    {
      score ++;
      document.getElementById('score').innerHTML = score;
      box.random_position();
      canvas = document.getElementById("canvas");
      context = canvas.getContext("2d");
      context.fillRect( 0, 0, canvas.width, canvas.height ) ;
      newbox()
    }
}