import settings from "../../config";
import { PREFIX } from "../../utils/Utils";

register("step", () => {
    if (settings.headlessHorsemen){
        let score = Scoreboard.getLines()
        score.map(e => {
            if(e.toString().includes("Graveyard") || e.toString().includes("Wilderness")){
                if(e.toString().includes("6:00pm")){
                    ChatLib.command("pc Good Evening!")
                    ChatLib.command("ac Good Evening!")
                    Client.showTitle("&6&lGood Evening!", PREFIX, 0, 50, 0);
                } else if(e.toString().includes("5:00am")){
                    ChatLib.command("pc Good Morning!")
                    ChatLib.command("ac Good Morning!")
                    Client.showTitle("&6&lGood Morning!", PREFIX, 0, 50, 0);
                }
            }
        })
    }
}).setFps(1)

register("renderWorld", (partialTicks) => {

    let entities = World.getAllEntities();
    if (settings.hitboxMasterToggle) {
        entities.forEach(entity => {

            let x = Math.round(entity.getX());
            let y = Math.round(entity.getY());

            // Fear
                if (entity.getClassName() === "EntityArmorStand") {
                    ["fear"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                        };
                    });
                    []
                };
        })
    }
});