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
import "./features/mobs/Hub"
import "./features/mobs/Vanquisher"
import "./features/mobs/headlessHorsemen"
import "./features/mobs/dwarvenMines"
import "./features/mobs/spidersDen"

// Spiders Den
import "./features/mobs/spidersDen/hitboxes"
import "./features/mobs/spidersDen/alerts"
import "./features/mobs/spidersDen/timers"
import "./features/mobs/spidersDen/waypoints"

register("command", () => config.openGUI()).setName("bb")

if(data.firstTime){
    chat(`${PREFIX} &aUse /bb for config menu`)
    data.firstTime = false
    data.save()
}

