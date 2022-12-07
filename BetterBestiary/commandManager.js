import { help } from "./commands/help";
import { warping } from "./commands/warping";
import { setkey } from "./utils/apiNew";
import { getBestiaryTier } from "./utils/getBestiaryTier";
import settings from "./settings";

register("command", (...args) => {
    if (args[0] == undefined) {
        settings.openGUI();
        return
    }
    switch (args[0].toLowerCase()) {
        case "setkey":
            setkey(args)
            break
        case "help":
            help()
            break
        case "warping":
            warping()
            break
        case "bestiary":
            getBestiaryTier()
            break
        default:
            settings.openGUI();
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