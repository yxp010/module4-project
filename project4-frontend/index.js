document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = "http://localhost:3000"
    const CHARACTER_URL = `${BASE_URL}/characters`
    const newChaButton = document.getElementById('create_character_button')
    const allChars = document.getElementById('all-chars')
    var config = {
        type: Phaser.AUTO,
        width: 1920,
        height: 1080,
        physics: {
            default: 'arcade',
        },
        scene: [CreateScene, GamePlayScene]
    };
    let game = new Phaser.Game(config);

    allChars.addEventListener('click', (e) => {
        e.preventDefault()
        fetch(CHARACTER_URL)
        .then(resp => resp.json())
        .then(obj => {
            console.log(obj)
        })
    })
    newChaButton.addEventListener('click', (e) => {
        e.preventDefault()
        fetch(CHARACTER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: 'piao',
                type: 'lazy'
            })
        })
    })

    let modal = document.getElementById("myModal");

    let span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
    modal.style.display = "none";
    }
})