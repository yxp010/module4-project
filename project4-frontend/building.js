class Building {
    constructor(name, player) {
        this.name = name
        this.player = player
        this.gameTimes = 0
    }

    triggerEvent() {
        // debugger
        switch (this.name) {
            case 'wework':
                this.weworkEvent()
            case "nathan's donutshop":
                break
        }
    }

    weworkEvent() {
        // debugger
        // alert('a')
        console.log('a')
        // this.player.physics.pause()
        // this.player.x = this.player.x + 50
        // this.player.physics.resume()
    }

    static possibilityPool(n) {
        let pool = []
        for (let i = 0; i < n; i++) {
            pool.push(i)
        }
        return pool
    }

    static randomDraw(array) {
        let num = array[Math.floor(Math.random() * array.length)]
        return num
    }

    justinGymEvent() {
        let pool = Building.possibilityPool(100)
        this.player.gold = this.player.gold - 30
        let num = Building.randomDraw(pool)
        let event
        if (this.player.energy < 20) {
            if (num <= 65) {
                this.player.health = this.player.health - 10
                this.player.happiness = 0
                event = 'You hurt your arm while streching!'
                console.log(event)
            } else {
                this.player.health = this.player.health + 20
                this.player.happiness = this.player.happiness + 20
                event = 'You had fun with Justin!'
                console.log(event)
            }
        } else if(this.player.energy < 40) {
            if (num < 20) {
                this.player.health = this.player.health - 10
                this.player.happiness = 0
                event = 'You hurt your arm while streching!'
                console.log(event)
            } else {
                this.player.health = this.player.health + 20
                this.player.happiness = this.player.happiness + 20
                event = 'You had fun with Justin!'
                console.log(event)
            }
        } else {
            this.player.health = this.player.health + 20
            this.player.happiness = this.player.happiness + 20
            event = 'You had fun with Justin!'
            console.log(event)
        }
        return event
    }

    nikkiBuildComputer() {
        this.player.gold -= 500
        this.player.code_ability += 20
        console.log('You got a super NickBook for your coding!')
        let event = 'You got a super NickBook for your coding!'
        return event
    }

    shawnPetStore() {
        let pool = Building.possibilityPool(10)
        this.player.gold -= 50
        let num = Building.randomDraw(pool)
        let event
        if (this.player.health < 20) {
            if (num <= 7) {
                this.player.health -= 10
                this.player.happiness = 0
                event = 'You are scratched by a dog hair :('
                console.log(event)
            } else {
                this.player.happiness += 30
                event = 'You kissed by a corgi'
                console.log(event)
            }
        } else {
            if (num <= 1) {
                this.player.happiness = 100
                event = "You are the King of Corgi!"
                console.log(event)
            } else if(num > 1 && num <= 9) {
                this.player.happiness += 20
                this.player.gold += 50
                event = 'Corgi makes your day!'
                console.log(event)
            }
        }
        return event
    }

    playPokemonWLuis() {
        let pool = Building.possibilityPool(10)
        let num = Building.randomDraw(pool)
        this.player.gold -= 10
        this.gameTimes += 1
        let event
        if(this.gameTimes > 2) {
            this.player.coding_ability -= 10
            this.player.social += 2
            this.player.happiness += 5
            this.player.creativity += 3
            event = 'You lost a pikachu to Luis!'
        } else if(num <= 1) {
            this.player.happiness += 30
            this.player.social += 30
            this.player.creativity += 30
            this.player.gold += 20
            event = 'You caught a Mewtwo!!'
        } else {
            this.player.happiness += 15
            this.player.social += 15
            this.player.creativity += 15
            event = 'You caught a Vaporeon!'
        }
        return event
    }

    playFifaWKevin() {
        let pool = Building.possibilityPool(10)
        let num = Building.randomDraw(pool)
        this.player.gold -= 10
        this.gameTimes += 1
        let event
        if(this.gameTimes > 2) {
            this.player.coding_ability -= 10
            this.player.social += 5
            this.player.happiness += 5
            this.player.creativity += 5
            event = 'You lost 0-6 to Kevin!'
        } else if(num <= 1) {
            this.player.happiness += 30
            this.player.social += 30
            this.player.creativity += 30
            this.player.gold += 20
            event = 'You won with 10-0!!!'
        } else {
            this.player.happiness += 15
            this.player.social += 15
            this.player.creativity += 15
            event = "Kevin:'Good Game!'"
        }
        return event
    }

    learnSEWVidhi() {
        let event
        let pool = Building.possibilityPool(10)
        let num = Building.randomDraw(pool)
        if(num <= 3) {
            this.player.coding_ability += 7
            event = "Vidhi:'On scale of 1 to 5, show me how do you feel about it.'"
        } else if(num <= 8 ) {
            this.player.coding_ability += 10
            event = "Vidhi:'Know? Don't know? Thumb up? Thumb Down?'"
        } else {
            this.player.coding_ability += 5
            event = "Vidhi:'Oh sh*t! I just deleted it...'"
        }
        return event
    }

    learnAttendanceWScott() {
        let event
        let pool = Building.possibilityPool(10)
        let num = Building.randomDraw(pool)
        if(num <= 3) {
            this.player.coding_ability += 7
            event = "Scott:'The Atten-Dancer :penguin-dance:'"
        } else if(num <= 8 ) {
            this.player.coding_ability += 10
            event = "Scott:'in the spirit of OO and DRY, I'm going to `inherit` Charles's `atten-dance-party` for today.'"
        } else {
            this.player.coding_ability += 5
            event = "Scott:'Attendance!!!'"
        }
        return event
    }

    danceWPratikshya() {
        let event
        let pool = Building.possibilityPool(10)
        let num = Building.randomDraw(pool)
        this.player.gold -= 30
        if(num < 3) {
            this.player.happiness += 20
            this.player.creativity += 20
            this.player.social += 30
            event = "Scott:'The Atten-Dancer :penguin-dance:'"
        } else if(num <= 9 ) {
            this.player.happiness += 15
            this.player.creativity += 15
            this.player.social += 20
            event = "Scott:'in the spirit of OO and DRY, I'm going to `inherit` Charles's `atten-dance-party` for today.'"
        } else {
            this.player.health = 10
            this.player.happiness += 10
            this.player.creativity += 50
            this.player.social += 50
            event = "You hurt your ankel whi"
        }
        return event
    }


    applyForJobs() {

    }

}