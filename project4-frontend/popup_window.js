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
            default:
        }
    }
    
    // We work
    renderWework() {

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

    //
    renderCharlesMusicShop() {
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