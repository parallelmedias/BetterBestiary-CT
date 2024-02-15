import { PREFIX, chat, data } from "./utils/Utils";
import config from "./config";

// Commands
import "./features/commands/hidePlayers"
import "./features/commands/warpParty"
import "./features/commands/blockList"

// Misc
import "./features/misc/chatFeatures"
import "./features/misc/farmingAngle"
import "./features/misc/dropTracker"
import "./features/misc/monolithWaypoints"
import "./features/misc/pestBeacon"
import "./features/misc/giftsInIce"
// import "./features/misc/levelup"

// Spiders Den
import "./features/islands/theSpidersDen/spidersDen"
import "./features/islands/theSpidersDen/keeperWaypoints"
import "./features/islands/theCrimsonIsle"
import "./features/islands/theDeepCaverns"
import "./features/islands/theDwarvenMines"
import "./features/islands/theFarmingIslands"
import "./features/islands/theHub"
import "./features/islands/thePark"
import "./features/islands/theEnd"

// Fishing

register("command", () => config.openGUI()).setName("bb")

if(data.firstTime){
    chat(`${PREFIX} &aUse /bb for config menu`)
    data.firstTime = false
    data.save()
}


