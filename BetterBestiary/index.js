import { PREFIX, chat, data } from "./utils/Utils"
import config from "./config"

// Commands
import "./features/commands/hidePlayers"
import "./features/commands/warpParty"

// Misc
import "./features/misc/chatFilters"
import "./features/misc/farmingAngle"
import "./features/misc/dropTracker"

// Mobs
import "./features/mobs/deepCaverns"
import "./features/mobs/Hub"
import "./features/mobs/Vanquisher"
import "./features/mobs/headlessHorsemen"
import "./features/mobs/dwarvenMines"
import "./features/mobs/spidersDen"
import "./features/mobs/farmingIslands"

// Spiders Den

register("command", () => config.openGUI()).setName("bb")

if(data.firstTime){
    chat(`${PREFIX} &aUse /bb for config menu`)
    data.firstTime = false
    data.save()
}

