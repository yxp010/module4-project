class EndGame extends Phaser.Scene {
    constructor() {
        super("endGame")
        this.baseUrl = "http://localhost:3000"
        this.cursors
        this.playerStats = {}
        
    }

    create() {
        this.add.image(960, 400, 'background');
        this.player = this.physics.add.sprite(500, 750, 'dude');
        this.player.setCollideWorldBounds(true);
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', {
                start: 0,
                end: 3
            }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{
                key: 'dude',
                frame: 4
            }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', {
                start: 5,
                end: 8
            }),
            frameRate: 10,
            repeat: -1
        });
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        
    }

    fetchPlayerData() {
        fetch(this.baseUrl + '/characters')
            .then(res => res.json())
            .then(obj => {
                this.playerStats = obj[obj.length - 1]
            })
    }

}