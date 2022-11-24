/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />
import "./features/hide"
import "./features/warp"
import "./features/chat"
import "./features/hitbox"
import { PREFIX } from "./utils/utils"

register("step", () => {
    let scor = Scoreboard.getLines()
    scor.map(e => {
        if(e.toString().includes("Graveyard") || e.toString().includes("Wilderness")){
            if(e.toString().includes("6:00pm")){
                ChatLib.command("pc Good Evening!")
                ChatLib.command("ac Good Evening!")
                Client.showTitle("&6&lGood Evening!", PREFIX, 0, 50, 0);
            }else if(e.toString().includes("5:00am")){
                ChatLib.command("pc Good Morning!")
                ChatLib.command("ac Good Morning!")
                Client.showTitle("&6&lGood Morning!", PREFIX, 0, 50, 0);
            }
        }else if(e.toString().includes("8:00pm")){
            Client.showTitle("&6&lZombie Villagers!", PREFIX, 0, 50, 0);
        }
    })
}).setFps(1)