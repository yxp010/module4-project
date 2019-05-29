class PopupWindow {

    constructor(building) {
        this.building = building
        this.popupWindow = document.getElementById('myModal')
        this.container = document.getElementById('popup-window-content')
    }

    renderWindow() {
        this.popupWindow.style.display = 'block'
        switch(this.building.name) {
            case "nathan's donutshop":
                this.renderDonutShop()
                break
            case "wework":
                break
            case 'bed':
                this.renderBed()
            default:
        }
    }
    
    // We work
    renderWework() {

    }

    // Donut Shop
    renderDonutShop() {
        this.container.innerHTML = ''
        let buyButton = document.createElement('button')
        let leaveButton = document.createElement('button')
        let message = document.createElement('p')
        buyButton.innerText = 'Buy a donut'
        leaveButton.innerText = 'Leave'
        buyButton.addEventListener('click', () => {
            message.innerText = this.building.buyDonut()
        })
        leaveButton.addEventListener('click', (e) => {
            this.popupWindow.style.display = 'none'
        })
        this.container.append(buyButton, leaveButton)
    }

    renderBed() {
        this.container.innerHTML = ''
        let sleepButton = document.createElement('button')
        let message = document.createElement('p')
        let leaveButton = document.createElement('button')
        sleepButton.addEventListener('click', () => {
            message.innerText = this.building.sleep()
        })
        leaveButton.addEventListener('click', (e) => {
            this.popupWindow.style.display = 'none'
        })
        this.container.append(sleepButton, leaveButton)
    }
}