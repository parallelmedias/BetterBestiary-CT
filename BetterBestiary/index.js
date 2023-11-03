import { PREFIX, chat, data } from "./utils/Utils"
import config from "./config"

// Commands
import "./features/commands/hidePlayers"
import "./features/commands/warpParty"

// Misc
import "./features/misc/chatFilters"
import "./features/misc/farmingAngle"
import "./features/misc/dropTracker"

// Crimson Isle
import "./features/crimsonIsle/crimsonIsle"

// Mobs
import "./features/mobs/deepCaverns"
import "./features/mobs/Hub"
import "./features/mobs/dwarvenMines"
import "./features/mobs/farmingIslands"

// Spiders Den
import "./features/spidersDen/spidersDen"

// Spooky Mobs
import "./features/spookymobs/headlessHorsemen"

// The End
import "./features/theEnd/dragonFeatures"

register("command", () => config.openGUI()).setName("bb")

if(data.firstTime){
    chat(`${PREFIX} &aUse /bb for config menu`)
    data.firstTime = false
    data.save()
}

