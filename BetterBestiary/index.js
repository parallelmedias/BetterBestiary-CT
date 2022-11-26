import "./features/chat"
import "./features/hide"
import "./features/hitbox"
import "./features/spiderDen"
import "./features/warp"
import "./features/zombieVillager"
import "./features/headlessHorsemen"
import { help } from "./commands/help"
import settings from "./settings"
import { PREFIX } from "./utils/utils"
import constants from "./utils/constants"

// register("command", () => settings.openGUI()).setName("BetterBestiary").setAliases("BB");
// register("command", () => help()).setName("help").setAliases("BB");

register("command", (arg, arg2, arg3) => {
    if (arg == undefined) {settings.openGUI()}
    switch(arg.toLowerCase())
    {
        case "setkey":
            setkey(arg2)
            break
        case "help":
            help()
            break
        case "hide":
            hide()
            break
        case "warp":
            warp(arg2)
            break
        case "avoid":
            avoid(arg2)
            break
        default:
            settings.openGUI()
    }
}).setTabCompletions((args) => {
    let output = [],
     commands = ["setkey", "help", "hide", "warp", "avoid"]
    
    if(args[0].length == 0 || args[0] == undefined)
        output = commands
    else
    {
        for(let i = 0; i < commands.length; i++)
        {
            for(let j = 0; j < args[0].length; j++)
            {
                if(commands[i][j] != args[0][j])
                    break
                else if(j == args[0].length - 1)
                    output.push(commands[i])
            }
        }
    }
    return output
}).setName("bb", true).setAliases(["betterbestiary"])

register("step", () => {
    // First Start
    if (constants.data.first_time) {
        constants.data.first_time = false
        constants.data.save()
        ChatLib.chat("------------------")
        ChatLib.chat(PREFIX + "&aWelcome! Please set your API key with /api new")
        // ChatLib.chat(ChatLib.getCenteredText(`${PREFIX}&7Version: &b${constants.version}`))
        ChatLib.chat(PREFIX + "&aOr set your api key with /bb setkey (key") 
        ChatLib.chat(PREFIX + "&aRun /bb help for a list of commands")
        ChatLib.chat("------------------")
    }
    if (constants.data.api_key == undefined || constants.data.api_key == "") return
}).setFps(1)