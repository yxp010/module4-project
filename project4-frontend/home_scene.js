class HomeScene extends Phaser.Scene {
    constructor() {
        super('homeScene')
        this.baseUrl = "http://localhost:3000"
        this.buildings
        this.playerStats = {}
    }

    preload() {
        this.fetchPlayerData()
        this.load.setBaseURL('http://localhost:8888/');
        this.load.image("empty_room", 'assets/empty_room.jpg');
        this.load.image('singleBed', 'assets/bed.jpeg')
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
        // super.preload()
    }

    create() {
        this.add.image(960, 400, 'empty_room');
        this.buildings = this.physics.add.staticGroup();
        this.buildings.create(200, 700, "singleBed")
        // this.buildings.create(1000, 700, "home")
        this.player = this.physics.add.sprite(500, 750, 'dude');
        this.playerStats.minute = 360
        this.player.setCollideWorldBounds(true);
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });
    
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, this.buildings, this.triggerEvent, null, this);
    }

    update() {
        
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
            this.eventTriggerTimes = 0
            this.player.anims.play('right', true);
        }
        else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }
        // super.update()
    }

    triggerEvent(player, building) {
        this.eventTriggerTimes += 1
        if (this.eventTriggerTimes <= 1) {
            fetch(`${this.baseUrl}/buildings`)
            .then(resp => resp.json())
            .then(collection => {
                collection.forEach(b => {
                    if (b.name == 'singlebed') {
                        let newBuilding = new Building(b.name, this.playerStats)     
                        let popWindow = new PopupWindow(newBuilding)
                        popWindow.renderWindow()
                    }
                })
            }) 
        }   
    }

    fetchPlayerData() {
        fetch(this.baseUrl + '/characters')
        .then(res => res.json())
        .then(obj => {
            this.playerStats = obj[obj.length-1]
        })
    }
}