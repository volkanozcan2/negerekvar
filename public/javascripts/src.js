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
    container = new PIXI.particles.ParticleContainer(10000, {
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

    for (var i = 0; i < 200; i++) {
        let emoji = new PIXI.Sprite(emos[~~(Math.random() * emos.length)]);
        emoji.x = Math.random() * innerWidth;
        emoji.y = Math.random() * innerHeight;
        emoji.scale.set(1.5);
        emoji.rotation = Math.random() * 2 * Math.PI;
        emoji.angle = Math.random() * 2 * Math.PI;
        emoji.anchor.set(.5);
        emoji.vel = { x: 2 * Math.random() * Math.cos(emoji.angle), y: 2 * Math.random() * Math.sin(emoji.angle) };
        container.addChild(emoji);
    }
    app.ticker.add(() => {
        if (isAdding) {
            for (var a = 0; a < 5; a++) {
                let emoji = new PIXI.Sprite(emos[~~(Math.random() * emos.length)]);
                emoji.x = mousePos.x;
                emoji.y = mousePos.y;
                emoji.scale.set(.5);
                emoji.rotation = Math.random() * 2 * Math.PI;
                emoji.angle = Math.random() * 2 * Math.PI;
                emoji.anchor.set(.5);
                emoji.vel = { x: Math.random() * Math.cos(emoji.angle), y: Math.random() * Math.sin(emoji.angle) };
                container.addChild(emoji);

            }
        }
        for (let i of container.children) {
            i.position.x += i.vel.x;
            i.position.y += i.vel.y;
            (i.position.x > innerWidth) && (i.position.x = 0);
            (i.position.x < 0) && (i.position.x = innerWidth);
            (i.position.y > innerHeight) && (i.position.y = 0);
            (i.position.y < 0) && (i.position.y = innerHeight);


        }
    });

}

function resize() {
    app.renderer.resize(innerWidth, innerHeight);
}
