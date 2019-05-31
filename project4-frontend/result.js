class Result {

    constructor(player) {
        this.player = player
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