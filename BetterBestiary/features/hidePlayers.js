import constants from "../utils/constants";
import settings from "../settings";
const PREFIX = constants.PREFIX;

let hidePlayer = false
let user = Player.getName()
const EntityPlayer = Java.type("net.minecraft.entity.player.EntityPlayer")

export function hidePlayers() {
    hidePlayer = !hidePlayer;
    !hidePlayer ?ChatLib.chat(`${PREFIX}&e&lPlayer Hiding Disabled.`) :ChatLib.chat(`${PREFIX}&e&lPlayer Hiding Enabled.`)
    !hidePlayer ?Client.showTitle("&e&lPlayer Hiding Disabled.", "", 0, 50, 0) :Client.showTitle("&e&lPlayer Hiding Enabled.", "", 0, 50, 0)
}

register("command", () => {
    hidePlayer = !hidePlayer
    !hidePlayer ?ChatLib.chat(`${PREFIX}&e&lPlayer Hiding Disabled.`) :ChatLib.chat(`${PREFIX}&e&lPlayer Hiding Enabled.`)
    !hidePlayer ?Client.showTitle("&e&lPlayer Hiding Disabled.", "", 0, 50, 0) :Client.showTitle("&e&lPlayer Hiding Enabled.", "", 0, 50, 0)
}).setName("hp")

register("renderEntity", (entity, pos, pt, event) => {
    if(!hidePlayer) return
    if (entity.getEntity() instanceof EntityPlayer) {
      let entity_name = entity.getName()
      if(entity_name !== user){
        cancel(event)
      }
    }
})

// Auto Hide in Spider's Den
register("renderEntity", (entity, pos, pt, event) => {
    if(settings.autoHideSpider) {
        let scoreBoard = Scoreboard.getLines()
        scoreBoard.map(e => {
            if (e.toString().includes("Spider") || e.toString().includes("Arachne")) {
                if (entity.getEntity() instanceof EntityPlayer) {
                    let entity_name = entity.getName()
                    if(entity_name !== user){
                        cancel(event)
                    }
                }
            }
        })
    }
})
// Auto Hide in End Island
register("renderEntity", (entity, pos, pt, event) => {
    if(settings.autoHideEnd) {
        let scoreBoard = Scoreboard.getLines()
        scoreBoard.map(e => {
            if (e.toString().includes("The End")) {
                if (entity.getEntity() instanceof EntityPlayer) {
                    let entity_name = entity.getName()
                    if(entity_name !== user){
                        cancel(event)
                    }
                }
            }
        })
    }
})
// Auto Hide in Sepulture
register("renderEntity", (entity, pos, pt, event) => {
    if(settings.autoHideSep) {
        let scoreBoard = Scoreboard.getLines()
        scoreBoard.map(e => {
            if (e.toString().includes("Void")) {
                if (entity.getEntity() instanceof EntityPlayer) {
                    let entity_name = entity.getName()
                    if(entity_name !== user){
                        cancel(event)
                    }
                }
            }
        })
    }
})

// Auto Hide in Dragon's Nest
register("renderEntity", (entity, pos, pt, event) => {
    if(settings.autoHideDragon) {
        let scoreBoard = Scoreboard.getLines()
        scoreBoard.map(e => {
            if (e.toString().includes("Dragon's Nest") && (dragonAlive() == true)) {
                if (entity.getEntity() instanceof EntityPlayer) {
                    let entity_name = entity.getName()
                    if(entity_name !== user){
                        cancel(event)
                    }
                }
            }
        })
    }
})