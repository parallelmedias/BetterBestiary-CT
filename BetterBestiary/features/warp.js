import { PREFIX } from "../utils/utils";

let warpEnabled = false

register("command", () => {
    warpEnabled = !warpEnabled
    !warpEnabled ?ChatLib.chat(`${PREFIX}&e&lWarping Disabled.`) :ChatLib.chat(`${PREFIX}&e&lWarping Enabled.`)
    !warpEnabled ?Client.showTitle("&e&lWarping Disabled.", "", 0, 50, 0) :Client.showTitle("&e&lWarping Enabled.", "", 0, 50, 0)
}).setName("warping");

register("chat", (msg) => {
    if(!warpEnabled) return
    if (msg == "!warp") {
        setTimeout(ChatLib.command("p warp"), 1000)
    }
}).setCriteria("Party > ${*}: ${msg}")