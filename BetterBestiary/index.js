import { PREFIX, chat, data } from "./utils/Utils"
import config from "./config"

// Commands
import "./features/commands/hidePlayers"
import "./features/commands/warpParty"

// Dungeons

// Fishing

// Misc
import "./features/misc/chatFilters"
import "./features/misc/nickHider"
import "./features/misc/farmingAngle"

// Mobs
import "./features/mobs/deepCaverns"
import "./features/mobs/hubMobs"
import "./features/mobs/Vanquisher"
import "./features/mobs/headlessHorsemen"
import "./features/mobs/dwarvenMines"
import "./features/mobs/spidersDen"

// Spiders Den

register("command", () => config.openGUI()).setName("bb")

if(data.firstTime){
    chat(`${PREFIX} &aUse /bb for config menu`)
    data.firstTime = false
    data.save()
}

