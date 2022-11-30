import { PREFIX, SYMBOL} from "../utils/constants"

export function help() {
    ChatLib.chat(`&6--------------${PREFIX}--------------`)
    helpCommand("", "Opens the Better Bestiary GUI", "")
    helpCommand("help", "This menu.", "")
    helpCommand("info", "Gives you module information.", "")
    helpCommand("setkey", "Sets API key (can also use /api new)", "(key)")
    ChatLib.chat(ChatLib.getCenteredText("&6&lCommands"))
    helpCommand("warping", "Enables or disables warping party with !warp", "[toggle]")
    helpCommand("hp", "Hides players in your lobby.", "[toggle]")
    ChatLib.chat(ChatLib.getCenteredText("&6&lMiscellaneous"))
    helpCommand("avoid", "Avoids certain players.", "(ign)")
    ChatLib.chat("&6------------------------------------------")
}
// Thanks Stylla and NinJune
function helpCommand(command, desc, usage) {
    ChatLib.chat(new TextComponent(`&c${SYMBOL} &6/bb ${command} => &b${desc}`).setHoverValue(`${"/bb " + command + " " + usage}`))
}