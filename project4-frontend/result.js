class Result {
    
    constructor(player) {
        this.player = player
        this.all_events = {}
    }

    statsDisplay() {
        
    }

    calculate() {
        let total = 0
        total += this.player.gold * 0.5
        total += this.player.coding_ability * 3
        total += this.player.health * 2
        total += this.player.energy
        total += this.player.happiness * 2
        total += this.player.creativity * 2
        total += this.player.social

        return this.returnResultString(total)
        
    }

    summarize() {
        fetch(`http://localhost:3000/:id/events`)
        .then(resp => resp.json())
        .then(events => {
            events.forEach(event => {
                this.classifyEvent(event)
            });
            this.produceResult() //Array
        })
    }

    produceResult() {
        let result = []
        for (const event in this.all_events) {
            result.push(event + `${this.all_events[event]}`)
        }
        return result
    }

    classifyEvent(event) {
        switch(event.id) {
            case 1:
                this.storeEvent('Time of you spent in at wework: ', 60)
                break
            case 2:
                this.storeEvent('Amount of donuts bought: ', 1)
                break
            case 3:
                this.storeEvent('Amount of Magic Card Pack bought: ', 1)
                break  
            case 4:
                this.storeEvent('Amount of Magic Card Box bought: ', 1)
                break
            case 5:
                this.storeEvent("Times of Ryan's lab: ", 1)
                break
            case 6:
                this.storeEvent('Time of you spent in Charles music lesson: ', 120)
                break
            case 7:
                this.storeEvent("Time of you spent in Sam's Club: ", 1)
                break
            case 8:
                this.storeEvent("Times of you try to find a partner in club: ", 1)
                break 
            case 9:
                this.storeEvent("Amount of Gambling in Tom's 12bet.com website: ", 1)
                break
            case 10:
                this.storeEvent("Amount of Justin's gym you went: ", 1)
                break
            case 11: 
                this.storeEvent("Amount of NickBook you bought: ", 1)
                break
            case 12:
                this.storeEvent("Time of you spent on at Shawn's pet store: ", 60)
                break
            case 13:
                this.storeEvent("Time of you spent on playing pokemon with Luis: ", 60)
                break
            case 14:
                this.storeEvent("Time of you spent on playing Fifa with Kevin: ", 60)
                break
            case 15:
                this.storeEvent("Time of you spent on learning coding with Vidhi: ", 120)    
                break
            case 16:
                this.storeEvent("Amount of time attandance you did: ", 1)    
                break
            case 17:
                this.storeEvent("Time of you spent on learning dance in Pratikshya's dancing studio: ", 90)
                break
            case 18:
                this.storeEvent("Amount of cigaret you get from Chris: ", 1)
                break
            case 19:
                this.storeEvent("Time of you spent on sleeping: ", 420)
                break
        }
    }

    storeEvent(eventType, value) {
        if (!!this.all_events[`${eventType}`]) {
            this.all_events[`${eventType}`] += value
        } else {
            this.all_events[`${eventType}`] = value
        }
    }

    //different level of result string
    get noJob() {
        return  `Unfortunately you have not been hired yet. Don't give up, though! Keep working hard, and maybe spend a little less time at Sam's Club...`
    }

    get tonyStarkIntern() {
        return `You landed a job as an intern at Stark Industries. Hopefully your new ideas can keep Tony Stark alive!`
    }

    get magicMountain() {
        return `Local entrepreneur, Minh Ha, took notice of your resourcefullness and coding abilities. He hired you on as a junior developer for his projects.`
    }

    get donutJob() {
        return `Your knowledge of both coding and donuts caught the attention of local donut shop owner, Nathan Richardson. Lately his system has been exploited by customers for free donuts. He hired you on a 3 month contract to fix the backend.`
    }

    get discoverAliens() {
        return `You created an app which can pinpoint extraterrestrial life. You reached out to the aliens to see if any of them are hiring, but they haven't responded yet.`
    }

    get elonMuskOffer() {
        return `You recieved an offer from Elon Musk to join his SpaceX team. However, you turned it down to work on your startup. It's an app that makes other apps!`
    }
    get facebook() {
        return `You've been selected by Mark Zuckerberg to be his personal assistant. He plans to mentor you and groom you into the future CEO of Facebook! Just kidding... you mostly just get him coffee when he asks for it.`
    }

    //help method for returning string based on total points
    returnResultString(total) {
        if (total < 2000) {
            return this.noJob
        }
        if (total >= 2000) {
            return this.tonyStarkIntern()
        }
        if (total >= 3000) {
            return this.magicMountain()
        }
        if (total >= 4000) {
            return this.donutJob()
        }
        if (total >= 5000) {
            return this.discoverAliens()
        }
        if (total >= 6000) {
            return this.elonMuskOffer()
        }
        if (total >= 7000) {
            return this.facebook()
        }
    }
}