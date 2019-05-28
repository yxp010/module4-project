class Building {
    constructor(name, player) {
        this.name = name
        this.player = player
    }

    triggerEvent() {
        // debugger
        switch(this.name) {
            case 'wework':
            this.weworkEvent()
            case "nathan's donutshop":
            break
        }
    }

    weworkEvent() {
        // debugger
        // alert('a')
        console.log('a')
        // this.player.physics.pause()
        // this.player.x = this.player.x + 50
        // this.player.physics.resume()
    }

    
    
}