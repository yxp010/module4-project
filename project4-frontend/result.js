class Result {
    
    constructor(player) {
        this.player = player
        this.all_events = {}
    }


    static calculate(player) {
        
    }

    summarize() {
        fetch(`http://localhost:3000/:id/events`)
        .then(resp => resp.json())
        .then(events => {
            events.forEach(event => {
                this.classifyEvents(event)
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

    classifyEvents(event) {
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
}