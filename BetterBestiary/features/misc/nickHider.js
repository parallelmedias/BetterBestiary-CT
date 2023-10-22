import settings from "../../config"

let username = Player.getName()

// nick hider. Should change the players name to a name set in config
register("chat", (event) => {
    if(settings.nickHiderToggle) {
        if(event.includes(username)) {
            event.cancel = true
            let message = event.message
            message = message.replace(username, settings.nickHider)
            chat(message)
        }
    }
}).setCriteria("&r&7[&r&r&7] &r&r&7" + username + "&r&r&7: &r&f%message%")
