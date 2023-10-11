const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let totalparticle = 100;

class Particle {
    constructor() {
        this.x = Math.random() * (500 - 0) + 0;
        this.y = Math.random() * (500 - 0) + 0;
        this.r = 10;


    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 360);
        c.fillStyle = "white";
        c.fill();

    }
    move() {
        this.x += Math.random() * (1 - - 1) + -1;
        this.y += Math.random() * (1 - - 1) + -1;
    }
}
const particleArr = [];
for (let i = 0; i < totalparticle; i++) {
    const particleObj = new Particle();
    particleArr.push(particleObj)
}



function animate() {

    c.clearRect(0, 0, 500, 500);
    for (let i = 0; i < totalparticle; i++) {
        particleArr[i].draw();
        particleArr[i].move();
    }

    requestAnimationFrame(animate);



}
animate();