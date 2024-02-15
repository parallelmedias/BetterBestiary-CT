import { PREFIX } from "../../utils/Utils";

let warpEnabled = false

export function warping() {
    warpEnabled = !warpEnabled
    !warpEnabled ?ChatLib.chat(`${PREFIX}&e&lWarping Disabled.`) :ChatLib.chat(`${PREFIX}&e&lWarping Enabled.`)
}

register("chat", (msg) => {
    if(!warpEnabled) return
    if (msg == "!warp") {
        setTimeout(ChatLib.command("p warp"), 1000)
    }
}).setCriteria("Party > ${*}: ${msg}")

register("command", () => {
    warping()
}).setName("warpEnable").setAliases(["we"])

