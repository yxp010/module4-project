class CreateScene extends Phaser.Scene {

    constructor () {
        super("createPlayer")
        this.baseUrl = "http://localhost:3000"
    }

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
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            let name = e.target[0].value
            let type = e.target[1].value
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