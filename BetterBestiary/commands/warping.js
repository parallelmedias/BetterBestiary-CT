import settings from "../settings";
import constants from "../utils/constants";
const PREFIX = constants.PREFIX;

let warpEnabled = false;

export function warping() {
    warpEnabled = !warpEnabled;
    !warpEnabled ?ChatLib.chat(`${PREFIX}&e&lWarping Disabled.`) :ChatLib.chat(`${PREFIX}&e&lWarping Enabled.`)
    !warpEnabled ?Client.showTitle("&e&lWarping Disabled.", "", 0, 50, 0) :Client.showTitle("&e&lWarping Enabled.", "", 0, 50, 0)
}

// Default warping command
register("chat", (msg) => {
    if(!warpEnabled) return
    if(msg == "!warp") {
        setTimeout(() => {
            ChatLib.command("p warp")
        }, 1000);
    }
}).setChatCriteria("Party > ${*}: ${msg}")

// Dragon Lobby warping
register("chat", (e) => {
    if(!warpEnabled && !settings.autoDragonParty) return
    var formattedMessage = ChatLib.getChatMessage(e, true);
    if (formattedMessage.includes("Dragon&r&d&l has spawned!")) {
        setTimeout(() => {
            ChatLib.command("p warp")
        }, 1000);
    }
}).setCriteria("Dragon&r&d&l has spawned!")

// Arachne Lobby warping
register("chat", (e) => {
    if(!warpEnabled && !settings.autoArachneParty) return
    var formattedMessage = ChatLib.getChatMessage(e, true);
    if (formattedMessage.includes("Arachne") 
    || formattedMessage.includes("[BOSS] Arachne&r&f: So it is time") 
    || formattedMessage.includes("Something is awakening!")) {
        setTimeout(() => {
            ChatLib.command("p warp")
        }, 1000);
    }
}).setCriteria("[BOSS] Arachne&r&f: So it is time!")

// Headless Horseman Lobby warping
register("chat", (e) => {
    if(!warpEnabled && !settings.autoHorseParty) return
    var formattedMessage = ChatLib.getChatMessage(e, true);
    if (formattedMessage.includes("has spawned the &r&6Headless Horseman boss &r&ein the &r&2Wilderness") 
    || formattedMessage.includes("has spawned the &r&6Headless Horseman boss &r&ein the &r&cGraveyard")) {
        setTimeout(() => {
            ChatLib.command("p warp")
        }, 1000);
    }
}).setCriteria("Headless Horseman&r&d&l has spawned!")


