function test() {
    return false;
}
const ball = "data:image/png;base64,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"

Object.defineProperty(PIXI.Application.prototype, 'rw', {
    get: function() { return Math.random() * this.renderer.width; }
});
Object.defineProperty(PIXI.Application.prototype, 'rh', {
    get: function() { return Math.random() * this.renderer.height; }
});
Object.defineProperty(PIXI.Application.prototype, 'cw', {
    get: function() { return .5 * this.renderer.width; }
});
Object.defineProperty(PIXI.Application.prototype, 'ch', {
    get: function() { return .5 * this.renderer.height; }
});
Object.assign(PIXI.Sprite.prototype, {
    acc: new PIXI.ObservablePoint(test, window, 0, 0),
    vel: new PIXI.ObservablePoint(test, window, 0, 0),

    k: .1,

    interactive: false,
    buttonMode: false

});

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
const mouse = { x: null, y: null };
let container = new PIXI.Container();
container.interactive = true;
app.stage.addChild(container);
$("#myContainer").append(app.view);
window.onresize = resize;
let pressed = 0;

function resize() {
    app.renderer.resize(innerWidth, innerHeight);
    _width = app.renderer.width;
    _height = app.renderer.height;
}
let cvs = document.getElementsByTagName("canvas")[0];
cvs.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});
cvs.addEventListener("mousedown", (e) => {
    pressed = true;
});
cvs.addEventListener("mouseup", (e) => {
    pressed = false;
});
Object.assign(Number.prototype, {
    map: function(inmin = 0, inmax = 1517, outmin = 0, outmax = 360) {
        return (this.valueOf() - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
    },
    toDegree: function() {
        return this.valueOf() * (180 / Math.PI);
    },
    toRadians: function() {
        return this.valueOf() * (Math.PI / 180);
    }
});
Object.assign(PIXI.ObservablePoint.prototype, {

    add: function(o) {
        this.set(this.x += o.x, this.y += o.y);
    },
    radd: function(o) {
        return new PIXI.ObservablePoint(test, window, this.x + o.x, this.y + o.y);
    },
    sub: function(o) {
        this.set(this.x -= o.x, this.y -= o.y);

    },
    rsub: function(o) {
        return new PIXI.ObservablePoint(test, window, this.x - o.x, this.y - o.y);
    },
    mult: function(o) {
        this.x *= o;
        this.y *= o;
    },
    rmult: function(o) {
        return new PIXI.ObservablePoint(test, window, this.x * o, this.y * o);
    },
    getAngle() {
        //in radians
        return Math.atan2(this.y, this.x);
    },
    getLenght() {
        return Math.hypot(this.x, this.y);
    },
    setLength(l) {
        let angle = this.getAngle();
        this.set(Math.cos(angle) * l, Math.sin(angle) * l);
    },
    setAngle(a) {
        //in radians;
        this.set(Math.cos(a) * this.getLenght(), Math.sin(a) * this.getLenght());
    }

});
class spring extends PIXI.Sprite {
    constructor(x, y) {
        super(PIXI.Texture.fromImage(ball));
        this.x = app.rw;
        this.y = app.rh;
        this.friction = .9
        this.t = new PIXI.ObservablePoint(test, window, x, y);
        this.scale.set(.5 + Math.random() * .5);
        this.anchor.set(.5);
    }
    update() {
        this.d = this.t.rsub(this.position);
        this.d.mult(this.k);
        this.vel.add(this.d);
        this.position.add(this.vel);
        this.vel.mult(this.friction);
    }
}
let arr = [];
for (var a = 0; a < 100; a++) {
    let bu = new spring(app.rw, app.rh);
    container.addChild(bu);
    arr.push(bu);
}

app.ticker.add(() => {
    for (var i = 0; i < arr.length; i++) {
        let bu = arr[i];
        bu.update();
    }
});