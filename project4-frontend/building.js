class Building {
    constructor(name, player) {
        this.name = name
        this.player = player
        this.gameTimes = 0
        this.player.events = {}
    }

    storeEvent(eventType) {
        if (!!this.player.events[`${eventType}`]) {
            this.player.events[`${eventType}`] += 1
        } else {
            this.player.events[`${eventType}`] = 1
        }
    }

    weworkEvent() {
        this.storeEvent(1)
        // debugger
        // alert('a')
        console.log('a')
        // this.player.physics.pause()
        // this.player.x = this.player.x + 50
        // this.player.physics.resume()
    }
//donut shop methods
    buyDonut() {
        this.storeEvent(2)
        this.player.gold -= 2
        this.player.happiness += 5
        this.player.health -= 5
        
        this.player.timeSpent += 180
        this.player.minute += 60
        this.showPlayerStats(this.player)
        return "You feel rush of happiness. Was it worth it?"
    }

//Magic Shop Methods
    buyPack() {
        this.storeEvent(3)
        this.player.gold -= 3
        let randomNum = Math.floor((Math.random() * 10) + 1)
       
        if (randomNum <= 5) {
            this.player.happiness --
            this.player.gold ++
            this.showPlayerStats(this.player)
            return "Not bad. I'm sure the next pack will be better!"
        }
        else if (randomNum > 5 && randomNum <=8) {
            this.player.happiness += 2
            this.player.gold += 3
            this.showPlayerStats(this.player)
            return "Hey that's a pretty good card! Now you have enough to buy another pack!"
        }
        else {
            this.player.happiness += 5
            this.player.gold += 6
            this.showPlayerStats(this.player)
            return "Woah! A mythic rare! I think you're ready to buy a box!"
        }
    }

    buyBox() {
        this.storeEvent(4)
        this.player.gold -= 100
        let randomNum = Math.floor((Math.random() * 10) + 1)
        if (randomNum <= 5) {
            this.player.happiness += 5
            this.player.gold += 50
            this.showPlayerStats(this.player)
            return "Minh: Hmm, unlucky. Might want to try a different box."
        }
        else if (randomNum > 5 && randomNum <=8) {
            this.player.happiness += 10
            this.player.gold += 100
            this.showPlayerStats(this.player)
            return "Minh: Can't go wrong with buying in bulk"
        }
        else {
            this.player.happiness += 20
            this.player.gold += 250
            this.showPlayerStats(this.player)
            return "Minh: I told you those boxes are worth the investment"
        }

    }

//ryan's lab methods
    riskyExperiment() {
        // debugger
        this.storeEvent(5)
        this.player.gold -=1000
        let randomNum = Math.floor((Math.random() * 5) + 1)
        switch(randomNum) {
            case 1:
                this.player.health -= 40;
                this.player.happiness -= 40;
                this.player.social -= 20;
                this.showPlayerStats(this.player)
                return "Ryan: Hmm... Not what I thought would happen there... It seems the experiment has left you horribly disfigured."
            case 2:
                this.player.creativity +=40
                this.player.social +=40
                this.player.coding_ability -= 30
                this.showPlayerStats(this.player)
                return "Ryan: Well, half of the experiment was a success!"

            case 3: 
                this.player.creativity -= 40
                this.player.social -= 40
                this.player.coding_ability += 30
                this.showPlayerStats(this.player)
                return "Ryan: A small price to pay for greatness!"
            case 4: 
                this.player.health =+20
                this.player.energy +=50
                this.player.happiness += 20
                this.showPlayerStats(this.player)
                return "Ryan: Wow. Honestly I'm suprised that went as well as it did."
            case 5:
                this.player.creativity += 5
                this.player.social += 5
                this.player.happiness += 5
                this.player.coding_ability += 5
                this.player.health += 5
                this.player.energy += 5
                this.showPlayerStats(this.player)
                return "Ryan: I've made some minor improvements."
        }
    }

    //Charles' music shop methods

    musicLesson() {
        this.storeEvent(6)
        this.player.gold -= 150
        this.player.creativity += 10
        this.player.happiness += 3
        this.player.energy -= 10
        this.showPlayerStats(this.player)
    }

    //Sam's club Methods

    getLit() {
        this.storeEvent(7)
        this.player.gold -= 100
        this.player.coding_ability -= 2
        this.player.social += 10
        this.player.happiness += 10
        this.player.energy -= 20
        this.showPlayerStats(this.player)
        return "You're not sure how, but 3 hours have past. You check your phone and find a strange phone number. Text?"
    }

    dialNumber() {
        this.storeEvent(8)
        let randomNum = Math.floor((Math.random() * 5) + 1)
        let successChance = randomNum * (this.player.social/100)

        if (successChance >= 1) {
            this.player.happiness +=10
            this.showPlayerStats(this.player)
            return "You made a new friend"
        }
        else {
            this.player.happiness -= 10
            this.showPlayerStats(this.player)
            return "You got ghosted...it might not even be a real number"
        }
    }

//tom's soccer Wagers

    makeRiskyBet(bet) {
        this.storeEvent(9)
        if (bet > this.player.gold) {
            return "Tom: Sorry..I gotta see the money upfront."
        } else {
            let randomNum = Math.floor((Math.random() * 10) + 1)
            if (randomNum <= 7) {
                this.player.happiness -= 5
                this.player.gold -= bet
                return "Tom: Ouch..."
            }
            else {
                this.player.gold *= 5
                this.player.happiness += 30
                return "Tom: Nice payout"
            }
        }
        

    }



    //Work Methods

    applyForJob() {
       let totalNum = (this.player.coding_ability * 3) + this.player.happiness + this.player.creativity + this.player.social + this.player.energy

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
        this.storeEvent(10)
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
        this.showPlayerStats(this.player)
        return event
    }

    nikkiBuildComputer() {
        this.storeEvent(11)
        let event
        if (this.player.gold < 500) {
            event = "Nikki: Sorry, this is not a charity!"
        } else {
            this.player.gold -= 500
            this.player.code_ability += 20
            event = 'Nikki: You got a super NickBook for your coding!'
        }
        return event
    }

    shawnPetStore() {
        this.storeEvent(12)
        let pool = Building.possibilityPool(10)
        this.player.gold -= 50
        let num = Building.randomDraw(pool)
        let event
        if (this.player.health < 20) {
            if (num <= 7) {
                this.player.health -= 10
                this.player.happiness = 0
                event = 'You are scratched by a dog hair :('
            } else {
                this.player.happiness += 30
                event = 'You kissed by a corgi'
            }
        } else {
            if (num <= 1) {
                this.player.happiness = 100
                event = "You are the King of Corgi!"
            } else if(num > 1 && num <= 9) {
                this.player.happiness += 20
                this.player.gold += 50
                event = 'Corgi makes your day!'
            }
        }
        this.showPlayerStats(this.player)
        return event
    }

    playPokemonWLuis() {
        this.storeEvent(13)
        let pool = Building.possibilityPool(10)
        let num = Building.randomDraw(pool)
        this.player.gold -= 10
        this.player.energy -= 10
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
        this.showPlayerStats(this.player)
        return event
    }

    playFifaWKevin() {
        this.storeEvent(14)
        let pool = Building.possibilityPool(10)
        let num = Building.randomDraw(pool)
        this.player.gold -= 10
        this.player.energy -= 10
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
        this.showPlayerStats(this.player)
        return event
    }

    learnSEWVidhi() {
        this.storeEvent(15)
        let event
        let pool = Building.possibilityPool(10)
        let num = Building.randomDraw(pool)
        this.player.energy -= 30
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
        this.showPlayerStats(this.player)
        return event
    }

    learnAttendanceWScott() {
        this.storeEvent(16)
        let event
        let pool = Building.possibilityPool(10)
        let num = Building.randomDraw(pool)
        this.player.energy -= 30
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
        this.showPlayerStats(this.player)
        return event
    }

    danceWPratikshya() {
        this.storeEvent(17)
        let event
        let pool = Building.possibilityPool(10)
        let num = Building.randomDraw(pool)
        this.player.gold -= 30
        this.player.energy -= 20
        if(num < 3) {
            this.player.happiness += 20
            this.player.creativity += 20
            this.player.social += 30
            event = {
                'text': "WOW, nice!",
                'video': 'https://www.youtube.com/watch?v=x6VSYAOnf5M'
            }
        } else if(num <= 9 ) {
            this.player.happiness += 15
            this.player.creativity += 15
            this.player.social += 20
            event = {
                'text': "Come and dance!",
                'video': 'https://www.youtube.com/watch?v=x6VSYAOnf5M'
            }
        } else {
            this.player.health = 10
            this.player.energy -= 10
            this.player.happiness += 10
            this.player.creativity += 50
            this.player.social += 50
            event = {
                'text': "You learnt some new moves and enjoy dancing very much, but hurt your ankle :'",
                'video': 'https://www.youtube.com/watch?v=x6VSYAOnf5M'
            }
        }
        this.showPlayerStats(this.player)
        return event
    }

    askACigFromChris() {
        this.storeEvent(18)
        let pool = Building.possibilityPool(10)
        let num = Building.randomDraw(pool)
        this.player.gold -= 10
        let event
        if(num <= 3) {
            this.player.happiness += 10
            this.player.energy += 20
            event = 'You feel very relax!'
        } else if(num <= 4) {
            this.player.happiness += 30
            this.player.energy += 40
            event = "You took a nap at Chris' coach..." 
        } else {
            this.player.happiness += 15
            this.player.energy += 5
            this.player.gold += 10
            event = "You feel a bit dizzy and asked refund from Chris..."
        }
        this.showPlayerStats(this.player)
        return event
    }

    sleep() {
        this.storeEvent(19)
        let pool = Building.possibilityPool(100)
        let num = Building.randomDraw(pool)
        let event
        if(num <= 3) {
            this.player.happiness += 0
            this.player.energy += 0
            event = 'You saw your body laying on the bed... Game over... sh*t happens'
        } else if(num <= 80) {
            this.player.happiness += 50
            this.player.energy += 100
            event = "Your dream('get up') comes true... " 
        } else {
            this.player.happiness += 20
            this.player.energy += 50
            this.player.coding_ability += 10
            event = "You dreamt about coding all night..."
        }
        this.showPlayerStats(this.player)
        return event
    }

    showPlayerStats(player) {   
        let psDiv = document.getElementById('playerStats')
        psDiv.innerHTML = ""
        // debugger
        let playerStats1 = document.createElement('p')
        let playerStats2 = document.createElement('p')

        playerStats1.innerText = `Gold: ${player.gold}  Energy: ${player.energy}  Health: ${player.health}  Coding Ability: ${player.coding_ability}`
        console.log(`${player.minute}`)
        playerStats2.innerText = `Happiness: ${player.happiness} Creativity: ${player.creativity}  Social: ${player.social}`
        psDiv.append(playerStats1, playerStats2)
        document.body.append(psDiv)
    }
}