import settings from "../../config"
import { PREFIX, drawBox } from "../../utils/Utils"

// Find the Powder Ghast near the Cliffside Veins!
// Create an alert for when the Powder Ghast spawns and create an alert that shows Ghast and its Location
register("chat", (e) => {
    if (settings.powderGhastAlerts){
        var formattedMessage = ChatLib.getChatMessage(e, true);
        var location = formattedMessage.substring(formattedMessage.indexOf("near the") + 9, formattedMessage.indexOf("!"));
        if (formattedMessage.includes("Powder Ghast")) {
            // ChatLib.chat(`${PREFIX} &aPowder Ghast at &e${location}`)
            Client.showTitle("&c&lPowder Ghast!", location, 0, 50, 0);
        }
    }
    
});
// A Golden Goblin has spawned from the earth!
// Create an alert for when the Golden Goblin spawns
register("chat", (e) => {
    if (settings.goldenGoblinAlerts){
        var formattedMessage = ChatLib.getChatMessage(e, true);
        if (formattedMessage.includes("Golden Goblin has spawned ")) {
            // ChatLib.chat(`${PREFIX} &aGolden Goblin has spawned!`)
            Client.showTitle("&c&lGolden Goblin!", `${PREFIX}`, 0, 50, 0);
        }
    }
    
});

register("renderWorld", (partialTicks) => {

    let entities = World.getAllEntities();
    // Powder Ghasts
    if(settings.powderGhastHitbox) {
        entities.forEach(entity => {

            let x = Math.round(entity.getX());
            let y = Math.round(entity.getY());
            
            if (entity.getClassName() === "EntityGhast") {
                drawBox(entity, 255, 0, 0, 50.0, 5, 5, partialTicks);
            };

        });
    }
    // Golden Goblins
    if(settings.goldenGoblinHitbox) {
        entities.forEach(entity => {

            let x = Math.round(entity.getX());
            let y = Math.round(entity.getY());
            
            if (entity.getClassName() === "EntityArmorStand") {
                ["Golden"].forEach(rarity => {
                    if (entity.getName().toLowerCase().includes(rarity)) {
                        drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                    };
                });
                []
            };

        });
    }
    // Miner Zombie and Skeleton
    entities.forEach(entity => {
        let x = Math.round(entity.getX());
        let y = Math.round(entity.getY());
        if (entity.getClassName() === "EntitySkeleton") {
            ["Miner"].forEach(rarity => {
                if (entity.getName().toLowerCase().includes(rarity)) {
                    drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                };
            });
            []
        }
    });
});