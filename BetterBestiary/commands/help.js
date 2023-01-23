const PREFIX = "☭"

export function help()
{
    ChatLib.chat("&b--------------[ &a&lBBReloaded &b]--------------")
    ChatLib.chat("&7(Hover over command to see usage.)")
    ChatLib.chat(ChatLib.getCenteredText("&a&lInfo"))
    helpCommand("", "Gets Bestiary of specified user", "(username)")
    helpCommand("help", "This menu.", "")
    helpCommand("update", "Updates the mod.", "")
    ChatLib.chat(ChatLib.getCenteredText("&a&lSettings"))
    helpCommand("settings", "Opens settings.", "")
    helpCommand("setkey", "Sets API key (can also use /api new)", "(key)")
    // helpCommand("reload", "Reloads the gui.", "")
    // helpCommand("track", "Sets tracked mob for bestiary tracker.", "(mob)")
    // ChatLib.chat(ChatLib.getCenteredText("&a&lWaypoints"))
    // helpCommand("keepers", "Sets up waypoints for arachne keepers.", "[toggle]")
    // helpCommand("slimes", "Sets up waypoints for Rain Slimes", "[toggle]")
    ChatLib.chat(ChatLib.getCenteredText("&a&lMiscellaneous"))
    ChatLib.chat(`&a${PREFIX} /fetchdiscord (username) => &bGets discord of username (if linked)`)
    ChatLib.chat("&b--------------------------------------------")
}

export function helpCommand(command, desc, usage)
{  
    ChatLib.chat(new TextComponent(`&a${PREFIX} /bb ${command} => &b${desc}`).setHoverValue(`${"/bb " + command + " " + usage}`))
}