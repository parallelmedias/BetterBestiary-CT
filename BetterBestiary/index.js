import { PREFIX, chat, data } from "./utils/Utils"
import config from "./config"

// Commands
import "./features/commands/hidePlayers"
import "./features/commands/warpParty"

// Misc
import "./features/misc/chatFilters"
import "./features/misc/farmingAngle"
import "./features/misc/dropTracker"
import "./features/misc/monolithWaypoints"

// Spiders Den
import "./features/spidersDen/spidersDen"
import "./features/spidersDen/keeperWaypoints"

import "./features/dragonFeatures"
import "./features/headlessHorsemen"
import "./features/theCrimsonIsle"
import "./features/theDeepCaverns"
import "./features/theDwarvenMines"
import "./features/theFarmingIslands"
import "./features/theHub"
import "./features/thePark"

register("command", () => config.openGUI()).setName("bb")

if(data.firstTime){
    chat(`${PREFIX} &aUse /bb for config menu`)
    data.firstTime = false
    data.save()
}

