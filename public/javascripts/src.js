let opts = {
    transparent: false,
    backgroundColor: 0x49DCB1,
    resolution: 1,
    antialias: 0,
    autoResize: true,
    forceCanvas: false,
    clearBeforeRender: true
};
var app = new PIXI.Application(innerWidth, innerHeight, opts);

let _width = app.renderer.width;
let _height = app.renderer.height;
var container = new PIXI.particles.ParticleContainer(20000, {
    scale: true,
    position: true,
    rotation: true,
    uvs: true,
    alpha: true
});
container.interactive = true;
var basicText = new PIXI.Text('Basic text in pixi', { fontFamily: 'Arial', fontSize: 24, fill: 0xffffff, align: 'center', dropShadow: true, fontWeight: "bolder", dropShadowDistance: 2 });
basicText.x = 10;
basicText.y = 0;
let isAdding = false;
var mousePos = {
    x: 0,
    y: 0
}

app.stage.addChild(container);
app.stage.addChild(basicText);

$("#myContainer").append(app.view);
window.onresize = resize;

function resize() {
    app.renderer.resize(innerWidth, innerHeight);
    _width = app.renderer.width;
    _height = app.renderer.height;
}
document.addEventListener('touchstart', onTouchStart, true)
document.addEventListener('touchstart', onTouchMove, true)
document.addEventListener('touchend', onTouchEnd, true)
document.addEventListener('mousedown', onMouseDown, true)
document.addEventListener('mousemove', onMouseMove, true)
document.addEventListener('mouseup', onMouseUp, true)

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

class emo extends PIXI.Sprite {
    constructor(x = Math.random() * app.renderer.width, y = Math.random() * app.renderer.height) {
        super(PIXI.Texture.fromImage('images/spritesheet.png'));
        this.anchor.set(.5);
        this.scale.set(.25 + Math.random() * .3);
        this.x = x;
        this.y = y;
        this.angle = Math.random() * 2 * Math.PI;
        this.vel = { x: Math.cos(this.angle), y: Math.sin(this.angle) };
        this.r = Math.random() * .01;
    }
    where() {
        this.x = (this.x > _width + 10) ? 0 : this.x;
        this.x = (this.x < -10) ? _width : this.x;
        this.y = (this.y > _height + 10) ? 0 : this.y;
        this.y = (this.y < -10) ? _height : this.y;
    }
    update() {
        this.x += this.vel.x;
        this.y += this.vel.y;
        this.rotation += this.r;
    }
}
for (var a = 0; a < 10; a++) {
    container.addChild(new emo());
}
app.ticker.add(() => {
    basicText.text = container.children.length + " : " + app.ticker.FPS;
    if (isAdding) {
        for (var a = 0; a < 20; a++) {

            container.addChild(new emo(mousePos.x, mousePos.y));
        }
    }
    for (let i of container.children) {
        i.update();
        i.where();
    }
});