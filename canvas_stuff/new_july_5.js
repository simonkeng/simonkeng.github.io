///////////////////
//  Boilerplate

// select the canvas from our html
var canvas = document.querySelector('canvas');
var aud = document.querySelector('audio');

// get canvas to take up the
// full width and height of browser window
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

///////////////////



// start mitis song when you land on page
// aud.play();
// turn this back on soon ^

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 1000;

var colorArray1 = ['#F2F4F7', '#E43A19', '#020205'];
var colorArray2 = ['#17283B', '#F2E3CF', '#BE8E57', '#0E1E33'];
var colorArray3 = ['#239D60', '#A3DE83', '#F7F39A'];
var colorArray4 = ['#FFFFFF', '#F95F62', 'DC304B', '#1F2D3D'];
var colorArray4 = ['#004000', '#017F00', '#01BF00', '#02FF00', '#ADD96C',
                   '#E0F2C4', '#F2F2F2', '#80BF21', '#1E6813'];


/////////////////// EVENT LISTENER FOR MOUSE MOVEMENT
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse);
})

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

/////////////////// CREATE CIRCLE OBJECT

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray4[Math.floor(Math.random() * colorArray4.length)];

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
        } else if (this.radius > this.minRadius){
            this.radius -= 1;
        }

        this.draw();

    }
}

var circleArray = [];

function init() {
    circleArray = [];
    //////////////////////// GENERATE ALL THE CIRCLES
    for (var i = 0; i < 300; i++) {
        var radius = Math.random() * 11 + 3;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 5;
        var dy = (Math.random() - 0.5) * 5;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

///////////////////// MAKE IT ALL HAPPEN ON SCREEN

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}

init();
animate();
