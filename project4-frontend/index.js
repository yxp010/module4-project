document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = "http://localhost:3000"
    const CHARACTER_URL = `${BASE_URL}/characters`
    const newChaButton = document.getElementById('create_character_button')
    const allChars = document.getElementById('all-chars')
    var config = {
        type: Phaser.AUTO,
        // width:800,
        // height: 600,
        physics: {
            default: 'arcade',
        },
        scale: {
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 1024,
            height: 768,
        },
        scene: [CreateScene, GamePlayScene, HomeScene, EndGame]
    };
    let game = new Phaser.Game(config);
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.refresh();
    allChars.addEventListener('click', (e) => {
        e.preventDefault()
        fetch(CHARACTER_URL)
        .then(resp => resp.json())
        .then(obj => {
            console.log(obj)
        })
    })//end allchars event listener

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
        })//end fetch
        .then(resp => resp.json())
        .then(obj => {
            currentPlayer = obj
        })
    })//end newChaButton event listener

    let modal = document.getElementById("myModal");

    let span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
    modal.style.display = "none";
    }
    
})