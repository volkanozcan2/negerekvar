window.onresize = resize;

let opts = {
        transparent: true,
        resolution: 1,
        antialias: 0,
        autoResize: true,
        forceCanvas: false,
        clearBeforeRender: true
    },
    app, fc = false,
    emos = [],
    bText = new PIXI.Texture.fromImage("images/spritesheet2.png"),
    container, isAdding = false,
    eventPos = { x: 0, y: 0 },
    counter = 0;

app = new PIXI.Application(innerWidth, innerHeight, opts);
$("#myContainer").append(app.view);

container = new PIXI.Container(opts);
// container = new PIXI.particles.ParticleContainer(25000, {
//     scale: false,
//     position: true,
//     rotation: false,
//     uvs: false,
//     alpha: false
// });
app.stage.interactive = true;
app.stage.buttonMode = true;
app.stage.addChild(container);
app.stage.hitArea = new PIXI.Rectangle(0, 0, app.renderer.width, app.renderer.height);
app.stage.on('pointerdown', (event) => {
    isAdding = !isAdding;
});
app.stage.on('pointerup', (event) => {
    isAdding = !isAdding;
});
app.stage.on('pointerupoutside', (event) => {
    isAdding = !isAdding;
});
app.stage.on('pointermove', (event) => {
    eventPos.x = event.data.global.x;
    eventPos.y = event.data.global.y;

});
// let filter = new PIXI.filters.OldFilmFilter();
// let filter2 = new PIXI.filters.DropShadowFilter();
// let filter3 = new PIXI.filters.GlitchFilter();
// filter3.fillMode = "LOOP";
// app.stage.filters = [filter];

for (let i = 0; i < 49; i++) {
    emos.push(new PIXI.Texture(bText.baseTexture, new PIXI.math.Rectangle(i * 64, 0, 64, 64)))
}
for (var i = 0; i < 1000; i++) {
    let a = new mover(emos[~~(Math.random() * emos.length)]);
    container.addChild(a)
}
app.ticker.add(() => {

    if (isAdding) {
        for (var i = 0; i < 3; i++) {
            container.addChild(new mover(emos[~~(Math.random() * emos.length)], eventPos.x, eventPos.y));
        }
    }
    for (var i = 0, len = container.children.length; i < len; i++) {
        container.children[i].move();
        container.children[i].hitCheck();
    }
    $("#fps").text(~~app.ticker.FPS);
    $("#count").text(container.children.length);

});



function resize() {
    app.renderer.resize(innerWidth, innerHeight);
    container.hitArea.width = innerWidth;
    container.hitArea.height = innerHeight;


}