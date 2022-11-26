import axios from "../../axios"
import constants from "./constants"

const PREFIX = constants.PREFIX,
    VERSION = constants.VERSION

register("worldLoad", () => {
    axios.get(`https://chattriggers.com/api/modules/1393`)
    .then(res => {
        let ctVersionArray = (res.data.releases[0].releaseVersion).split('.'),
            currentVersionArray = VERSION.split('.'),
            newVersion = false

        for(let i = ctVersionArray.length; i >= 0; i--)
        {
            if (ctVersionArray[i] > currentVersionArray[i])
                newVersion = true
            else if (currentVersionArray[i] > ctVersionArray[i])
                newVersion = false
        }

        if(newVersion)
        {
            ChatLib.chat(`${PREFIX}&eYou are using an outdated version of Better Bestiary!`)
            new TextComponent(`${PREFIX}&eClick &3here&e to update!`)
            .setClickAction("run_command")
            .setClickValue(`/ct load`)
            .chat()
            ChatLib.chat("")
        }
    })
    
})

export default ""