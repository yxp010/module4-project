class GamePlayScene extends Phaser.Scene {

    constructor() {
        super("playGame")
        this.baseUrl = "http://localhost:3000"
        this.eventTriggerTimes = 0
        this.cursors
        this.buildings 
        this.counter = 0
        this.day = new Phaser.Display.Color(48, 165, 255);
        this.night = new Phaser.Display.Color(6, 22, 43);
    }

    preload() {
        this.load.setBaseURL('http://localhost:8888/');
        this.load.image("city_map", 'assets/test_map.png');
        this.load.image("nathan's donutshop", 'assets/test_building.png')
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }

    create()  {       
        this.add.image(960, 400, 'city_map');
        this.buildings = this.physics.add.staticGroup();
        this.buildings.create(200, 700, "nathan's donutshop")
        this.player = this.physics.add.sprite(500, 750, 'dude');
        this.player.minute = 800
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
        this.changeSkyColor()
        
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

    }

    triggerEvent(player, building) {
        this.eventTriggerTimes += 1
        if (this.eventTriggerTimes <= 1) {
            fetch(`${this.baseUrl}/buildings`)
            .then(resp => resp.json())
            .then(collection => {
                collection.forEach(b => {
                    if (b.name === building.texture.key) {
                        let newBuilding = new Building(building.texture.key, player)     
                        let popWindow = new PopupWindow(newBuilding)
                        popWindow.renderWindow()         
                    }
                })
            }) 
        }
        
    }

    changeSkyColor() {
        this.counter += 1
        if (this.counter % 360 == 0) {
            this.player.minute += 1
        }
        if (this.player.minute > 1440) {
            this.player.minute = this.player.minute - 1440
        }
        let hexColor 

        // from 8:30 p.m. to 6 a.m. is 'Night' color background
        if (this.player.minute > 1230 || this.player.minute <= 360) {
            this.cameras.main.setBackgroundColor(this.night)
        } 
        // from 6 a.m to 7 a.m. is sun rise  
          else if (this.player.minute > 360 && this.player.minute <= 420) {
            hexColor = Phaser.Display.Color.Interpolate.ColorWithColor(this.night, this.day, 60, this.player.minute - 360)
            this.cameras.main.setBackgroundColor(hexColor)
        } 
        // from 7 a.m to 7:30 p.m. is 'Day' color background
          else if (this.player.minute > 420 && this.player.minute <= 1170) {
            this.cameras.main.setBackgroundColor(this.day)
        } 
        // from 7:30 p.m to 8:30 p.m. is sun set
          else if (this.player.minute > 1170 && this.player.minute <= 1230) {
            hexColor = Phaser.Display.Color.Interpolate.ColorWithColor(this.day, this.night, 60, this.player.minute - 1170)
            this.cameras.main.setBackgroundColor(hexColor)
        }
    }
}