
// function setup() {
//     createCanvas(480, 120);   //createCanvas() function sets up background for code to run within and takes 2 params- width & height 
//     }
//     function draw() {
//     if (mouseIsPressed) {
//     fill(0);                    // when mouse button is pressed, the circle changes color to black 
//     } else {
//     fill(255);
//     }
//     ellipse(mouseX, mouseY, 80, 80);
//     };







var s = function (p) {

    p.setup = function () {
        p.createCanvas(480, 120);
    };

    p.draw = function () {
        // p.ellipse(p.mouseX, p.mouseY, 80, 80);
        // };
        // p.mouseIsPressed = function () {
        if (p.mouseIsPressed) {
            p.fill(0);                    // when mouse button is pressed, the circle changes color to black 
        } else {
            p.fill(255);
        }
        p.ellipse(p.mouseX, p.mouseY, 80, 80);
    };

}
new p5(s);


new p5(s);
