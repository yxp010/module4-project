class EndGame extends Phaser.Scene {
    constructor() {
        super("endGame")
        this.baseUrl = "http://localhost:3000"
        this.cursors
        this.playerStats = {}
        this.testText
        this.endText
        this.fetchPlayerData()
        //this.bg = null
        //this.preloaderBar = null;

    }


    preload() {

        // this.fetchPlayerData()
        this.load.setBaseURL('http://localhost:8888/')
        //this.add.image(0,0, "sheet", 'assets/end_bg.jpg').setOrigin(0)
        //this.load.image('sheet', 'assets/end_bg.jpg')
        this.load.spritesheet('dude', 'assets/dude.png', {
            frameWidth: 32,
            frameHeight: 48
        });

    }


    create() {
        // this.add.image(700, 600, 'background');
        // this.bg = this.add.tileSprite(0,0, innerWidth, window.innerHeight, "background")
        let result = new Result(this.playerStats)

        let text = result.calculate()
        

        this.testText = this.add.text(32, 1090, text, {
            wordWrap: {
                width: 510
            }
        })

        this.endText = this.add.text(250, 1090 + this.testText.height + 540, "End", {
            align: 'center',
            fontSize: '64px'

        })

        //this.bg = this.add.tileSprite(0, 0, 800, 480, 'sheet', 'assets/end_bg.jpg') //.setOrigin(0);
        this.player = this.physics.add.sprite(700, 750, 'dude');
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

        // this.bg.tilePositionY += 1
        //this.player.x += 1
        this.player.anims.play('right', true);


        if (this.endText.y != 540) {
            this.testText.y -= 1
            this.endText.y -= 1
        }

    }

    fetchPlayerData() {
        fetch(this.baseUrl + '/characters')
            .then(res => res.json())
            .then(obj => {
                this.playerStats = obj[obj.length - 1]
                // debugger
            })
    }

}