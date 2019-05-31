class CreateScene extends Phaser.Scene {

    constructor () {
        super("createPlayer")
        this.baseUrl = "http://localhost:3000"
        this.div = document.createElement('div')

        
    }

    renderStats(gold, ca, h, en, ha, cre, so) {
        
        this.div.innerHTML = ""
        let popUp = document.querySelector("#popup-window-content")
        
        let pGold = document.createElement('p')
        pGold.innerText = `Gold: ${gold}`
        let pCoding = document.createElement('p')
        pCoding.innerText = `Coding Ability: ${ca}`
        let pHealth = document.createElement('p')
        pHealth.innerText = `Health: ${h}`
        let pEnergy = document.createElement('p')
        pEnergy.innerText = `Energy: ${en}`
        let pHappiness = document.createElement('p')
        pHappiness.innerText = `Happiness: ${ha}`
        let pCreativity = document.createElement('p')
        pCreativity.innerText = `Creativity: ${cre}`
        let pSocial = document.createElement('p')
        pSocial.innerText = `Social: ${so}`

        this.div.append(pGold, pCoding, pHealth, pEnergy, pHappiness, pCreativity, pSocial)
        popUp.append(this.div)

    }

    // renderLazyStats() {
    //     console.log("Lazy")
    //     let popUp = document.querySelector("#popup-window-content")
    //     let div = document.createElement('div')
    //     let pGold = document.createElement('p')
    //     pGold.innerText = "Gold: 2000"
    //     let pCoding = document.createElement('p')
    //     pCoding.innerText = "Coding Ability: 20"
    //     let pHealth = document.createElement('p')
    //     pHealth.innerText = "Health: 50"
    //     let pEnergy = document.createElement('p')
    //     pEnergy.innerText = "Energy: 20"
    //     let pHappiness = document.createElement('p')
    //     pHappiness.innerText = "Happiness: 40"
    //     let pCreativity = document.createElement('p')
    //     pCreativity.innerText = "Creativity: 80"
    //     let pSocial = document.createElement('p')
    //     pSocial.innerText = "Social: 30"

    //     div.append(pGold, pCoding, pHealth, pEnergy, pHappiness, pCreativity, pSocial)
    //     popUp.append(div)

    // }

  

    create() {
        let popupWindow = document.getElementById('myModal')
        popupWindow.style.display = 'block'
        let container = document.getElementById('popup-window-content')
        document.querySelector('.close').remove()
        container.innerHTML = ''
        let form = document.createElement('form')
        form.id = 'create_character'
        let input = document.createElement('input')
        input.type = 'text'
        let select = document.createElement('select')
        let option1 = document.createElement('option')
        option1.value = 'lazy'
        option1.innerText = 'Lazy'
        let option2 = document.createElement('option')
        option2.value = 'intelligent'
        option2.innerText = 'intelligent'
        select.append(option1, option2)
        let button = document.createElement('input')
        button.type = 'submit'
        form.append(input, select, button)
        container.append(form)
        form.addEventListener('change', (e) => {
            e.preventDefault()
            
            let name = e.target.value
            switch(name) {
                case "lazy":
                    this.renderStats(2000, 20, 50, 20, 40, 80, 30)
                    // this.renderLazyStats()
                    break
                case "intelligent":
                    this.renderStats(2000, 40, 50, 40, 30, 40, 20)
                    break
                default:
            }
           
            
        })
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            
            let name = e.target[0].value
            let type = e.target[1].value
            // debugger
            fetch(`${this.baseUrl}/characters`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    type: type
                })
            })
            .then(() => {
                form.reset()
                popupWindow.style.display = 'none'
                this.scene.start('playGame')
            })
        })
    }
}