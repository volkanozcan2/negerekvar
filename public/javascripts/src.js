$(document).ready(onReady);
let shader = `
    void main(){
        gl_FragColor = vec4(1.0,.0,.0,1.0);
    }`;
var simpleShader = new PIXI.AbstractFilter('', shader);
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
    eventPos = { x: 0, y: 0 };

class mover extends PIXI.Sprite {
    constructor(t, x = Math.random() * innerWidth, y = Math.random() * innerHeight) {
        super();
        this.texture = t;
        this.x = x;
        this.y = y;
        this.rotation = Math.random() * 2 * Math.PI;
        this.angle = Math.random() * 2 * Math.PI;
        this.anchor.set(.5);
        this.vel = { x: 2 * Math.random() * Math.cos(this.angle), y: 2 * Math.random() * Math.sin(this.angle) };
        this.scale.set(.5 + Math.random() * .5);

        return this;
    }
    move() {
        this.position.x += this.vel.x;
        this.position.y += this.vel.y;
    }
    hitCheck() {
        (this.position.x > innerWidth) && (this.vel.x *= -1);
        (this.position.x < 0) && (this.vel.x *= -1);
        (this.position.y > innerHeight) && (this.vel.y *= -1);
        (this.position.y < 0) && (this.vel.y *= -1);
    }
}


function onReady() {
    app = new PIXI.Application(innerWidth, innerHeight, opts);
    $("#myContainer").append(app.view);

    container = new PIXI.Container();
    // container = new PIXI.particles.ParticleContainer(25000, {
    //     scale: false,
    //     position: true,
    //     rotation: false,
    //     uvs: false,
    //     alpha: false
    // });
    container.interactive = true;
    container.buttonMode = true;
    app.stage.addChild(container);
    container.hitArea = new PIXI.Rectangle(0, 0, app.renderer.width, app.renderer.height);
    container.on('pointerdown', (event) => {
        isAdding = !isAdding;
    })
    container.on('pointerup', (event) => {
        isAdding = !isAdding;
    })
    container.on('pointerupoutside', (event) => {
        isAdding = !isAdding;
    })
    container.on('pointermove', (event) => {
        eventPos.x = event.data.global.x;
        eventPos.y = event.data.global.y;

    });

    function test(event) {
        console.log(event.data.global);
        container.addChild(new mover(emos[~~(Math.random() * emos.length)], event.data.global.x, event.data.global.y));
    }
    for (let i = 0; i < 49; i++) {
        emos.push(new PIXI.Texture(bText.baseTexture, new PIXI.math.Rectangle(i * 64, 0, 64, 64)))
    }
    for (var i = 0; i < 0; i++) {
        let a = new mover(emos[~~(Math.random() * emos.length)]);
        container.addChild(a)
    }
    app.ticker.add(() => {
        if (isAdding) {
            for (var a = 0; a < 1; a++) {
                let a = new mover(emos[~~(Math.random() * emos.length)], eventPos.x, eventPos.y);
                container.addChild(a)
            }
        }
        for (let i of container.children) {
            i.move();
            i.hitCheck();
        }
        $("#debug").text(~~app.ticker.FPS + " : " + container.children.length);
    });

}

function resize() {
    app.renderer.resize(innerWidth, innerHeight);
    container.hitArea.width = innerWidth;
    container.hitArea.height = innerHeight;

}