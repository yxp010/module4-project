class Building {
    constructor(name, player) {
        this.name = name
        this.player = player
    }

    // triggerEvent() {
    //     // debugger
    //     switch(this.name) {
    //         case 'wework':
    //             this.weworkEvent()
    //         case "nathan's donutshop":
    //             this.nathanDonutShop()
    //         case "Minh's magic shop":
    //             this.minhMagicShop()
    //         case "Ryan's Laboratory":
    //             this.ryanLab()
    //         break
    //     }
    // }

    weworkEvent() {
        // debugger
        // alert('a')
        console.log('a')
        // this.player.physics.pause()
        // this.player.x = this.player.x + 50
        // this.player.physics.resume()
    }
//donut shop methods
    buyDonut() {
        this.player.gold -= 2
        this.player.happiness += 5
        this.player.health -= 5
        return "You feel rush of happiness. Was it worth it?"

    }

//Magic Shop Methods
    buyPack() {
        this.player.gold -= 3
        let randomNum = Math.floor((Math.random() * 10) + 1)
       
        if (randomNum <= 5) {
            this.player.happiness --
            this.player.gold ++
            return "Not bad. I'm sure the next pack will be better!"
        }
        else if (randomNum > 5 && randomNum <=8) {
            this.player.happiness += 2
            this.player.gold += 3
            return "Hey that's a pretty good card! Now you have enough to buy another pack!"
        }
        else {
            this.player.happiness += 5
            this.player.gold += 6
            return "Woah! A mythic rare! I think you're ready to buy a box!"
        }
    }

    buyBox() {
        this.player.gold -= 100
        let randomNum = Math.floor((Math.random() * 10) + 1)
        if (randomNum <= 5) {
            this.player.happiness += 5
            this.player.gold += 50
            return "Minh: Hmm, unlucky. Might want to try a different box."
        }
        else if (randomNum > 5 && randomNum <=8) {
            this.player.happiness += 10
            this.player.gold += 100
            return "Minh: Can't go wrong with buying in bulk"
        }
        else {
            this.player.happiness += 20
            this.player.gold += 250
            return "Minh: I told you those boxes are worth the investment"
        }

    }

//ryan's lab methods
    riskyExperiment() {
        // debugger
        this.player.gold -=1000
        let randomNum = Math.floor((Math.random() * 5) + 1)
        switch(randomNum) {
            case 1:
                this.player.health -= 40;
                this.player.happiness -= 40;
                this.player.social -= 20;
                return "Ryan: Hmm... Not what I thought would happen there... It seems the experiment has left you horribly disfigured."
            case 2:
                this.player.creativity +=40
                this.player.social +=40
                this.player.coding_ability -= 30
                return "Ryan: Well, half of the experiment was a success!"

            case 3: 
                this.player.creativity -= 40
                this.player.social -= 40
                this.player.coding_ability += 30
                return "Ryan: A small price to pay for greatness!"
            case 4: 
                this.player.health =+20
                this.player.energy +=50
                this.player.happiness += 20
                return "Ryan: Wow. Honestly I'm suprised that went as well as it did."
            case 5:
                this.player.creativity += 5
                this.player.social += 5
                this.player.happiness += 5
                this.player.coding_ability += 5
                this.player.health += 5
                this.player.energy += 5
                return "Ryan: I've made some minor improvements."
            break
        }
    }

    //Charles' music shop methods

    musicLesson() {
        this.player.gold -= 150
        this.player.creativity += 10
        this.player.happiness += 3
        this.player.energy -= 10
    }

    //Sam's club Methods

    getLit() {
        this.player.gold -= 100
        this.player.coding_ability -= 2
        this.player.social += 10
        this.player.happiness += 10
        this.player.energy -= 20
        return "You're not sure how, but 3 hours have past. You check your phone and find a strange phone number. Text?"
    }

    dialNumber() {
        let randomNum = Math.floor((Math.random() * 5) + 1)
        let successChance = randomNum * (this.player.social/100)

        if (successChance >= 1) {
            this.player.happiness +=10
            return "You made a new friend"
        }
        else {
            this.player.happiness -= 10
            return "You got ghosted...it might not even be a real number"
        }
    }

//tom's soccer Wagers

    makeRiskyBet(bet) {
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



    //Work Methods

    applyForJob() {
       let totalNum = (this.player.coding_ability * 3) + this.player.happiness + this.player.creativity + this.player.social + this.player.energy

    }

    //








    
    
}