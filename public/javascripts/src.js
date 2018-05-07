$(document).ready(onReady)
window.onresize = resize;
let opts = {
        transparent: false,
        backgroundColor: 0x49DCB1,
        resolution: 1,
        antialias: 0,
        autoResize: true,
        forceCanvas: false,
        clearBeforeRender: true
    },
    app,
    emos = [],
    bText = new PIXI.Texture.fromImage("images/spritesheet2.png"),
    container, isAdding = false,
    mousePos = { x: 0, y: 0 };
document.addEventListener('touchstart', onTouchStart, true)
document.addEventListener('touchstart', onTouchMove, true)
document.addEventListener('touchend', onTouchEnd, true)
document.addEventListener('mousedown', onMouseDown, true)
document.addEventListener('mousemove', onMouseMove, true)
document.addEventListener('mouseup', onMouseUp, true)
class mover extends PIXI.Sprite {
    constructor(t, x = Math.random() * innerWidth, y = Math.random() * innerHeight) {
        super();
        this.texture = t;
        this.x = x;
        this.y = y;
        this.scale.set(.5 + Math.random() * .5);
        this.rotation = Math.random() * 2 * Math.PI;
        this.angle = Math.random() * 2 * Math.PI;
        this.anchor.set(.5);
        this.vel = { x: 2 * Math.random() * Math.cos(this.angle), y: 2 * Math.random() * Math.sin(this.angle) };
        return this;
    }
}

function updateMousePos(event) {
    mousePos.x = event.clientX
    mousePos.y = event.clientY
}

function onTouchStart(event) {
    isAdding = true
    updateMousePos(event)
}

function onTouchMove(event) {
    if (isAdding) updateMousePos(event)
}

function onTouchEnd(event) {
    isAdding = false
}

function onMouseDown(event) {
    isAdding = true
    updateMousePos(event)
}

function onMouseMove(event) {
    if (isAdding) updateMousePos(event)
}

function onMouseUp(event) {
    isAdding = false
}

function onReady() {
    app = new PIXI.Application(innerWidth, innerHeight, opts);
    $("#myContainer").append(app.view);

    // let container = new PIXI.Container();
    container = new PIXI.particles.ParticleContainer(25000, {
        scale: false,
        position: true,
        rotation: false,
        uvs: false,
        alpha: false
    });
    container.interactive = true;

    app.stage.addChild(container);
    for (let i = 0; i < 49; i++) {
        emos.push(new PIXI.Texture(bText.baseTexture, new PIXI.math.Rectangle(i * 64, 0, 64, 64)))
    }

    for (var i = 0; i < 501; i++) {
        let emoji = new PIXI.Sprite(emos[~~(Math.random() * emos.length)]);
        emoji.x = Math.random() * innerWidth;
        emoji.y = Math.random() * innerHeight;
<<<<<<< HEAD
        emoji.scale.set(.5 + Math.random() * .5);
=======
        emoji.scale.set(1.5);
>>>>>>> aabd4fa14a2cf01b498034e89209be65a1288771
        emoji.rotation = Math.random() * 2 * Math.PI;
        emoji.angle = Math.random() * 2 * Math.PI;
        emoji.anchor.set(.5);
        emoji.vel = { x: 2 * Math.random() * Math.cos(emoji.angle), y: 2 * Math.random() * Math.sin(emoji.angle) };
        container.addChild(emoji);
    }
    app.ticker.add(() => {
        if (isAdding) {
            for (var a = 0; a < 1; a++) {
                let a = new mover(emos[~~(Math.random() * emos.length)], mousePos.x, mousePos.y);
                container.addChild(a)
            }
        }
        for (let i of container.children) {
            i.position.x += i.vel.x;
            i.position.y += i.vel.y;
            (i.position.x > innerWidth) && (i.vel.x *= -1);
            (i.position.x < 0) && (i.vel.x = -1);
            (i.position.y > innerHeight) && (i.vel.y *= -1);
            (i.position.y < 0) && (i.vel.y *= -1);
        }
        $("#debug").text(~~app.ticker.FPS + " : " + container.children.length);
    });

}

function resize() {
    app.renderer.resize(innerWidth, innerHeight);
}
