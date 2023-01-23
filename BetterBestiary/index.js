import constants from "./utils/constants"
import "./commandManager"
import "./commands/fetchDiscord"
import "./commands/setKey"
import "./commands/update"
import "./commands/help"
import "./commands/warping"
import "./features/hidePlayers"
import "./features/arachne"
import "./features/dragon"
import "./features/headlessHorseman"
import "./features/zombVillager"
import "./features/hitbox"
PREFIX = constants.PREFIX
version = constants.version

register("gameLoad", () => {
    // This is called when the game loads
    if (constants.data.api_key == undefined) {
        // This is called when the player has no API key set
        ChatLib.chat(`${constants.PREFIX}&eNo api key set!`)
        ChatLib.chat(`${constants.PREFIX}&ePlease set your api key with &b/bb setkey (key)`)
    }
})

// Get API key if saved in chat
register("chat", (message) => {
    if (message == "Your new API key is ") {
        // This is called when the player gets a new API key
        constants.data.api_key = message
        constants.data.save()
        ChatLib.chat(`${constants.PREFIX}&aSuccsessfully set api key!`)
    }
})

// First Time Loading Check
register("step", () => {
    // First Start
    if (constants.data.first_time) {
        constants.data.first_time = false
        constants.data.save()
        ChatLib.chat("")
        ChatLib.chat(ChatLib.getCenteredText(`${PREFIX}&7Version: &b${version}`))
        ChatLib.chat(PREFIX + "&aWelcome! Please set your API key with /api new")
        ChatLib.chat(PREFIX + "&aRun /bb help for a list of commands")
        ChatLib.chat("")
    }
    if (constants.data.api_key == undefined || constants.data.api_key == "") return
}).setFps(1)



// Remove Boss Messages ////
register("chat", (e) => {
    cancel(e)
}).setCriteria("[BOSS] ${*}")
//// Precursor Eye Messages ////
register("chat", (e) => {
    var formattedMessage = ChatLib.getChatMessage(e, true);
        if(formattedMessage.includes("Eye Beam")) {
            cancel(e)
        }
})

