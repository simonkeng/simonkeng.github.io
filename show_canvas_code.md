## Canvas Experiment

### What is this?

Countless mind-boggling canvas animations on [codepen](https://codepen.io/) inspired these canvas projects. I learned everything from [this series](https://youtu.be/EO6OkltgudE) of videos by [Chris Courses](https://www.youtube.com/channel/UC9Yp2yz6-pwhQuPlIDV_mjA). I highly recommend starting with his videos, especially if you are new to JavaScript. 


## ameebo.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Canvas Lab</title>
</head>
<body>
    <canvas></canvas>
    <script src="canvas.js"></script>
</body>
</html>
```


## canvas.js

```javascript
///////////////////
//  Boilerplate

// select the canvas from our html
var canvas = document.querySelector('canvas');

// get canvas to take up the
// full width and height of browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
///////////////////

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
        // c.fill();
    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 700; i++) {
    var radius = 7;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

// var circle = new Circle(200, 200, 10, 10, 50);

// animate function
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    // circle.update();

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();

```
