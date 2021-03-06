
var s = function (p) {

    p.setup = function () {
        p.createCanvas(1000, 160);         //createCanvas() function sets up background for code to run within and takes 2 params- width & height
    };

    p.draw = function () {
        if (p.mouseIsPressed) {
            p.fill(0);                    // when mouse button is pressed, the circle changes color to black 
        } else {
            p.fill(255);
        }
        p.ellipse(p.mouseX, p.mouseY, 80, 80);
    };
}
new p5(s);
// used 'Instance Mode' here so that multiple canvases could be added to the same webpage


var t = function (u) {

    u.setup = function () {
        u.createCanvas(1000, 160);
        u.fill(0, 102);
        u.noStroke();
    }
    u.draw = function () {
        u.ellipse(u.mouseX, u.mouseY, 9, 9);
    }
}
new p5(t)
// each time the code in the draw() block is run, a new circle is drawn to the canvas


var a = function (b) {
    b.setup = function () {
        b.createCanvas(1000, 160);
    }
    b.draw = function () {
        b.translate(b.mouseX, b.mouseY);       // 'x' parameter specifies left/right translation; 'y' specifies up/down translation
        b.scale(b.mouseX / 60.0);              // the scale() function is increasing the size of the rectangle by expanding its veritces 
        b.rect(-15, -15, 30, 30);
    }
}
new p5(a)


var angle = 0.0;
function setup() {
createCanvas(1000, 160);
// background(204);
}
function draw() {
translate(mouseX, mouseY);
rotate(angle);                          // continuously rotates the rect(angle)
rect(-15, -15, 30, 30);
angle += 0.1;
}




