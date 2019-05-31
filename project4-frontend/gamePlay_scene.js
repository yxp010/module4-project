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
        this.playerStats = {}
        this.saveButton = document.querySelector("#save-button")
        this.allEvents
        this.eventsType = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19']
    }

    hasEvents() {
        let hasAEvent
        this.allEvents.eventsType.forEach(eventType => {
            if (this.allEvents.events.hasOwnProperty(eventType)) {
                hasAEvent = true
            }
        }) 
        return !!hasAEvent
    }

    saveButtonEvent() {
        this.saveButton.addEventListener('click', (e) => {
            e.preventDefault()
            this.allEvents = this.playerStats.events
            delete this.playerStats.events
            debugger
            fetch(this.baseUrl + `/characters/${this.playerStats.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(this.playerStats)
            })//end fetch

            if (this.hasEvents) {

                for (const eventType in this.allEvents) {
                    for (let i = 0; i < this.allEvents[eventType]; i++) {
                        fetch(this.baseUrl + '/event_characters', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                            body: JSON.stringify({
                                event_id: parseInt(eventType),
                                character_id: this.playerStats.id
                            })
                        })
                        .then(() => {
                            if ((this.allEvents[eventType] - 1) == 0) {
                                delete this.allEvents[eventType]
                            } else {
                                this.allEvents[eventType] -= 1
                            }
                        })
                      }
                }
            }
        })
    }

    preload() {
        this.fetchPlayerData()
        this.load.setBaseURL('http://localhost:8888/');
        // roads
        this.load.image("upLeftRoad", 'assets/map_blocks/top_left_road.png')
        this.load.image("upRightRoad", 'assets/map_blocks/top_right_road.png')
        // this.load.image("downroad", 'assets/downroad.png')
        // background
        this.load.image("background", 'assets/end_bg.jpg')

        //sky 
        this.load.image("sun", 'assets/map_blocks/sun_2.png')
        this.load.image("moon", 'assets/map_blocks/moon.png')

        // home
        this.load.image("home", 'assets/home.jpg')
        this.load.image("empty_room", 'assets/empty_room.jpg');
        this.load.image('singleBed', 'assets/bed.jpeg')

        // buildings
        this.load.image("charles' music shop", 'assets/buildings/charles_music.png')
        this.load.image("ryan's lab", 'assets/buildings/ryan_lab.png')
        this.load.image("nathan's donutshop", 'assets/buildings/nathan_donut.png')
        this.load.image("chris' vape shop", 'assets/buildings/chris_vape.png')
        this.load.image("justin's gym", 'assets/buildings/justin_gym.png')
        this.load.image("kevin_luis_game", 'assets/buildings/kevin_luis_game.png')
        this.load.image("minh's magic shop", 'assets/buildings/minh_magic.png')
        this.load.image("niki's computer shop", 'assets/buildings/nick_computer.png')
        this.load.image("pratikshya's dancing studio", 'assets/buildings/pratikshya_dance.png')
        this.load.image("ryan's lab", 'assets/buildings/ryan_lab.png')
        this.load.image("sam's club", 'assets/buildings/sam_club.png')
        this.load.image("tom's soccer wagers", 'assets/buildings/tom_gamble.png')

        // map
        this.load.image("city_map", 'assets/city_map.png');

        //character
        this.load.spritesheet('dude', 'assets/dude.png', {
            frameWidth: 32,
            frameHeight: 48
        });
    }

    create() {
        this.add.image(512, 433, 'city_map');

        
        // roads
        this.blocks = this.physics.add.staticGroup();
        this.blocks.create(245, 345, 'upLeftRoad')
        this.blocks.create(900, 345, 'upRightRoad')

        // sky
        this.sun = this.blocks.create(0, 100, 'sun')
        this.sun.x = -(this.sun.width / 2)
        this.sun.orginalX = this.sun.x

        this.moon = this.blocks.create(0, 100, 'moon')
        this.moon.x = -(this.moon.width / 2)
        this.moon.orginalX = this.moon.x
        // this.blocks.create(512, 433, 'downroad')
        //buildings
        this.buildings = this.physics.add.staticGroup();
        this.buildings.create(600, 358, "nathan's donutshop")
        this.buildings.create(120, 402, "charles' music shop")
        this.buildings.create(908, 392, "sam's club")

        // character
        this.player = this.physics.add.sprite(750, 300, 'dude');
        this.playerStats.minute = 450
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
        this.physics.add.collider(this.player, this.blocks);
        this.physics.add.collider(this.player, this.buildings, this.triggerEvent, null, this);
        this.saveButtonEvent()
    }

    update() {
        this.changeSkyColor()

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
            this.eventTriggerTimes = 0
            this.player.anims.play('right', true);
        } else {
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
                        if (building.texture.key === 'home') {
                            this.scene.start('homeScene')
                        } else {
                            let newBuilding = new Building(building.texture.key, this.playerStats) 
                            let popWindow = new PopupWindow(newBuilding)
                            popWindow.renderWindow()  
                        }   
                    }
                })
            }) 
        }   
    }

    changeSkyColor() {

        if (this.playerStats.timeSpent == 0) {
            this.physics.resume()
            this.addTime(3600)
        } else {
            this.addTime(1)
            this.physics.pause()
        }

        this.setSky(this.playerStats.minute)
    }

    addTime(ratio) {
        this.counter += 1
        if (this.counter % ratio == 0) {
            if (this.playerStats.timeSpent > 0) {
                this.playerStats.timeSpent -= 1
            }
            this.playerStats.minute += 1
        }
        if (this.playerStats.minute > 1440) {
            this.playerStats.minute = this.playerStats.minute - 1440
            this.playerStats.day += 1
            console.log("new day")
            if (this.playerStats.day == 2) {
                let popUp = document.querySelector(".modal-content")
                popUp.style.display = "none"
                this.saveButtonEvent()
                this.scene.start("endGame")   
            }
        }
    }

    fetchPlayerData() {
        fetch(this.baseUrl + '/characters')
            .then(res => res.json())
            .then(obj => {
                this.playerStats = obj[obj.length - 1]
            })
    }

    setSky(minute) {
        let hexColor
        this.setSun(minute)
        this.setMoon(minute)
        // from 8:30 p.m. to 6 a.m. is 'Night' color background
        if (minute > 1230 || minute <= 360) {
            this.cameras.main.setBackgroundColor(this.night)
        }
        // from 6 a.m to 7 a.m. is sun rise  
        else if (minute > 360 && minute <= 420) {
            hexColor = Phaser.Display.Color.Interpolate.ColorWithColor(this.night, this.day, 60, minute - 360)
            this.cameras.main.setBackgroundColor(hexColor)
        }
        // from 7 a.m to 7:30 p.m. is 'Day' color background
        else if (minute > 420 && minute <= 1170) {
            this.cameras.main.setBackgroundColor(this.day)
        }
        // from 7:30 p.m to 8:30 p.m. is sun set
        else if (minute > 1170 && minute <= 1230) {
            hexColor = Phaser.Display.Color.Interpolate.ColorWithColor(this.day, this.night, 60, minute - 1170)
            this.cameras.main.setBackgroundColor(hexColor)
        }
    }

    setSun(minute) {
        if (minute > 360 && minute < 1200) {
            this.sun.x = this.sun.orginalX + (1024 + this.sun.width) / (1200 - 360) * (minute - 360)
        } else {
            this.sun.x = -(this.sun.width / 2)
        }
    }

    setMoon(minute) {
        if (minute > 1200 || minute < 390) {
            if (minute > 1200) {
                this.moon.x = this.moon.orginalX + (1024 + this.moon.width) / (1440 - 1200 + 360) * (minute - 1200)
            } else {
                this.moon.x = this.moon.orginalX + (1024 + this.moon.width) / (1440 - 1200 + 360) * (240 + minute)
            }
        }
    }

}