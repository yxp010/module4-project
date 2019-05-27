document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = "http://localhost:3000"
    const CHARACTOR_URL = `${BASE_URL}/charactors`
    const newChaButton = document.getElementById('create_charactor_button')
    const allChars = document.getElementById('all-chars')

    // debugger
    allChars.addEventListener('click', (e) => {
        e.preventDefault()
        // const name = e.target[0]
        fetch(CHARACTOR_URL)
        .then(resp => resp.json())
        .then(obj => {
            console.log(obj)
        })
    })
    newChaButton.addEventListener('click', (e) => {
        e.preventDefault()
        // const name = e.target[0]
        fetch(CHARACTOR_URL, {
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

    




})