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