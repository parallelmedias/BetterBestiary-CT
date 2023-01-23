import Settings from "./settings";
import { fetchDiscord } from "./commands/fetchDiscord";
import { help } from "./commands/help";
import { setkey } from "./commands/setkey";
import { update } from "./commands/update";
import { warping } from "./commands/warping";
import { hidePlayers } from "./features/hidePlayers"; 

register("command", (...args) => {
    if (args[0] == undefined) {Settings.openGUI(); return}
    switch(args[0].toString().toLowerCase())
    {
        case "setkey":
            setkey(args[1])
            break
        case "help":
            help()
            break
        case "warping":
            warping()
            break
        case "hideplayers":
            hidePlayers()
            break
        case "discord":
            fetchDiscord(args)
            break
        case "update":
            // This should update mod from most recent release through chattriggers
            update()
            break
        case "settings":
            Settings.openGUI()
            break
        default:
            Settings.openGUI()
    }
}).setTabCompletions((args) => {
    let output = [],
        commands = ["help"]
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
}).setName("bb").setAliases(["betterbestiary"])