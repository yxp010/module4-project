class PopupWindow {

    constructor(building) {
        this.building = building
        this.popupWindow = document.getElementById('myModal')
        this.container = document.getElementById('popup-window-content')
    }

    renderWindow() {
        this.container.innerHTML = ''
        this.popupWindow.style.display = 'block'
        switch(this.building.name) {
            case "nathan's donutshop":
                this.renderDonutShop()
                break
            case "wework":
                this.renderWework()
                break
            case "minh's magic shop":
                this.renderMagicShop()
                break
            case "ryan's lab":
                this.renderRyanLab()
                break
            case "charles' music shop":
                this.renderCharlesMusicShop()
                break
            case 'singleBed':
                this.renderBed()
                break
            case "sam's club":
                this.renderSamsClub()
                break
            case "tom's soccer wagers": 
                this.renderTomSoccer()
                break
            case "niki's computer shop": 
                this.renderNikiShop()
                break
            case "justin's gym": 
                this.renderJustinGym()
                break
            case "shawn's pets store":
                this.renderShawnPetStore()
                break
            case "kevin_luis_game":
                this.renderKevinLuisGame()
                break
            case "pratikshya's dancing studio":
                this.renderPratikshyaStudio()
                break
            case "chris' vape shop":
                this.askACigFromChris()
                break
            default:
        }
    }
    
    // We work
    renderWework() {
        let message = document.createElement('p')
        message.innerText = "Vidhi and Scott: Welcome to flatiron."
        let button1 = document.createElement('button')
        button1.innerText = "Take the lesson with Vidhi"
        button1.addEventListener('click', () => {
            message.innerText = this.building.learnSEWVidhi()
        })
        let button2 = document.createElement('button')
        button2.innerText = "Do attendance"
        button2.addEventListener('click', () => {
            message.innerText = this.building.learnAttendanceWScott()
        })
        this.container.append(message, button1, button2, this.leaveButton())
    }

    // Donut Shop
    renderDonutShop() {
        let buyButton = document.createElement('button')
        let message = document.createElement('p')
        buyButton.innerText = 'Buy a donut'
        buyButton.addEventListener('click', () => {
            message.innerText = this.building.buyDonut()
        })
        this.container.append(message, buyButton, this.leaveButton())
    }

    // Magic Shop

    renderMagicShop() {
        let buyPackBtn = document.createElement('button')
        let buyBoxBtn = document.createElement('button')
        let message = document.createElement('p')
        buyPackBtn.innerText = 'Buy a pack'
        buyBoxBtn.innerText = 'Buy a box'
        buyPackBtn.addEventListener('click', () => {
            message.innerText = this.building.buyPack()
        })
        buyBoxBtn.addEventListener('click', () => {
            message.innerText = this.building.buyBox()
        })
        this.container.append(message, buyPackBtn, buyBoxBtn, this.leaveButton())
    }

    // Ryan's Lab

    renderRyanLab() {
        let riskyExperimentBtn = document.createElement('button')
        riskyExperimentBtn.innerText = 'Try the risky experiment'
        let message = document.createElement('p')
        riskyExperimentBtn.addEventListener('click', () => {
            message.innerText = this.building.riskyExperiment()
        })
        this.container.append(message, riskyExperimentBtn, this.leaveButton())
    }

    //Charles' music shop
    renderCharlesMusicShop() {
        let button = document.createElement('button')
        button.innerText = 'Take music lesson'
        let message = document.createElement('p')
        button.addEventListener('click', () => {
            message.innerText = this.building.musicLesson()
        })
        this.container.append(message, button, this.leaveButton())
    }

    //Sam's club
    renderSamsClub() {
        let button1 = document.createElement('button')
        button1.innerText = 'Get lit'
        let button2 = document.createElement('button')
        button2.innerText = 'Dial number'
        let message = document.createElement('p')
        button1.addEventListener('click', () => {
            message.innerText = this.building.getLit()
        })
        button2.addEventListener('click', () => {
            message.innerText = this.building.dialNumber()
        })
        this.container.append(message, button1, button2, this.leaveButton())
    }

    //tom's soccer Wagers
    renderTomSoccer() {
        let form = document.createElement('form')
        let text = document.createElement('input')
        text.type = 'number'
        let button = document.createElement('input')
        button.type = 'submit'
        button.value = 'Bet'
        form.append(text, button)
        let message = document.createElement('p')
        message.innerText = 'Tom: How much do you want to bet on the game? I hear Man U is pretty favored..'
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            let input = parseInt(e.target[0].value)
            if (input <= 0) {
                message.innerText = "I don't do loans..Sorry"
            } else {
                message.innerText = this.building.makeRiskyBet(input)
            }
        })
        this.container.append(message, form, this.leaveButton())
    }

    // Justin's gym
    renderJustinGym() {
        let message = document.createElement('p')
        message.innerText = 'Justin: Welcome to my gym.'
        let button = document.createElement('button')
        button.innerText = "Start to work out"
        button.addEventListener('click', () => {
            message.innerText = this.building.justinGymEvent()
        })
        this.container.append(message, button, this.leaveButton())
    }

    // Niki's computer shop
    renderNikiShop() {
        let message = document.createElement('p')
        message.innerText = 'Nikki: Welcome to my shop.'
        let button = document.createElement('button')
        button.innerText = "Buy a brand new NickBook 2019"
        button.addEventListener('click', () => {
            message.innerText = this.building.nikkiBuildComputer()
        })
        this.container.append(message, button, this.leaveButton())
    }

    // Shawn's pets store
    renderShawnPetStore() {
        let message = document.createElement('p')
        message.innerText = 'Shawn: Welcome to my shop.'
        let button = document.createElement('button')
        button.innerText = "Look around"
        button.addEventListener('click', () => {
            message.innerText = this.building.shawnPetStore()
        })
        this.container.append(message, button, this.leaveButton())
    }

    // Kevin Fifa 
    renderKevinLuisGame() {
        let message = document.createElement('p')
        message.innerText = "Kevin and Luis: let's play some games."
        let button1 = document.createElement('button')
        button1.innerText = "Play Fifa with Kevin"
        button1.addEventListener('click', () => {
            message.innerText = this.building.playFifaWKevin()
        })
        let button2 = document.createElement('button')
        button2.innerText = "Play pokemon with Luis"
        button2.addEventListener('click', () => {
            message.innerText = this.building.playPokemonWLuis()
        })
        this.container.append(message, button1, button2, this.leaveButton())
    }

    renderPratikshyaStudio() {
        let message = document.createElement('p')
        message.innerText = "Pratikshya: welcome to my dancing studio.)"
        let button = document.createElement('button')
        button.innerText = "Learn dancing"
        button.addEventListener('click', () => {
            message.innerText = this.building.danceWPratikshya().text
        })
        this.container.append(message, button, this.leaveButton())
    }

    renderBed() {
        let sleepButton = document.createElement('button')
        sleepButton.innerText = 'Sleep'
        let message = document.createElement('p')
        message.innerText = "This doesn't feel like a donut..."
        sleepButton.addEventListener('click', () => {
            message.innerText = this.building.sleep()
        })
        this.container.append(message, sleepButton, this.leaveButton())
    }


    // leave button for each window
    leaveButton() {
        let leaveButton = document.createElement('button')
        leaveButton.innerText = 'Leave'
        leaveButton.addEventListener('click', (e) => {
            this.popupWindow.style.display = 'none'
        })
        return leaveButton
    }
}