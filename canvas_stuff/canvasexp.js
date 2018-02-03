///////////////////
//  Boilerplate

// select the canvas from our html
var canvas = document.querySelector('canvas');
var aud = document.querySelector('audio');

// get canvas to take up the
// full width and height of browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

///////////////////



// start mitis song when you land on page
// aud.play();
// turn this back on soon ^

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 70;
var minRadius = 4;

var colorArray = [
    '#ECFEFF',
    // '#00B7C2',
    '#128494',
    '#4EF037',
];

//////////////////////////// EVENT LISTENER FOR MOUSE MOVEMENT
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse);
})



///////////////////////////// CREATE CIRCLE OBJECT

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // c.strokeStyle = 'blue';
        // c.lineWidth=50;
        // c.stroke();
        c.fillStyle = this.color
        c.fill();
    }

    this.update = function() {
        // velocity & wall bouncing code
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50
            && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > minRadius){
            this.radius -= 1;
        }

        this.draw();

    }
}


//////////////////////// GENERATE ALL THE CIRCLES

var circleArray = [];

for (var i = 0; i < 400; i++) {
    var radius = 20;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;
    circleArray.push(new Circle(x, y, dx, dy, radius));

}


///////////////////// MAKE IT ALL HAPPEN ON SCREEN

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}
animate();
