document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = "http://localhost:3000"
    const CHARACTER_URL = `${BASE_URL}/characters`
    const newChaButton = document.getElementById('create_character_button')
    const allChars = document.getElementById('all-chars')
    var config = {
        type: Phaser.AUTO,
        width: 1920,
        height: 1080,
        physics: {
            default: 'arcade',
            arcade: {
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    let currentPlayer
    let eventTriggerTimes = 0
    let cursors
    let player
    let buildings 
    let game = new Phaser.Game(config);

    function preload () {
        this.load.setBaseURL('http://localhost:8888/');

        this.load.image("city_map", 'assets/test_map.png');
        this.load.image("Ryan's Laboratory", 'assets/test_building.png')
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }

    function create ()
    {
        this.add.image(960, 540, 'city_map');
        buildings = this.physics.add.staticGroup();
        buildings.create(200, 700, "Ryan's Laboratory")
        // buildings.create(800, 799, 'wework')
        player = this.physics.add.sprite(500, 750, 'dude');
        player.setCollideWorldBounds(true);
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
        cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(player, buildings, triggerEvent, null, this);
        // logo.setVelocity(100, 200);
        // logo.setBounce(1, 1);
        // logo.setCollideWorldBounds(true);

        // emitter.startFollow(logo);
    }
    // debugger
    allChars.addEventListener('click', (e) => {
        e.preventDefault()
        // const name = e.target[0]
        fetch(CHARACTER_URL)
        .then(resp => resp.json())
        .then(obj => {
            console.log(obj)
        })
    })
    newChaButton.addEventListener('click', (e) => {
        e.preventDefault()
        // const name = e.target[0]
        fetch(CHARACTER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: 'piao',
                type: 'lazy'
            })
        })
        .then(resp => resp.json())
        .then(obj => {
            currentPlayer = obj
        })
    })

    function update() {
        if (cursors.left.isDown) {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown) {
            player.setVelocityX(160);
            eventTriggerTimes = 0
            player.anims.play('right', true);
        }
        else {
            player.setVelocityX(0);
            player.anims.play('turn');
        }

    }

    function triggerEvent(player, building) {
        eventTriggerTimes += 1
        // player.x = player.x + 50
        // debugger
            if (eventTriggerTimes <= 1) {
                fetch(`${BASE_URL}/buildings`)
            .then(resp => resp.json())
            .then(collection => {
                // debugger
                collection.forEach(b => {
                    // use building.texture.key to get 'img name'
                    // debugger
                    if (b.name === building.texture.key) {
                        // debugger
                        let newBuilding = new Building(building.texture.key, currentPlayer)          
                        newBuilding.triggerEvent()         
                        return
                    }
                })
            }) 
        }
        
    }
})