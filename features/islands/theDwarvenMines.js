import settings from "../../config"
import { PREFIX, isAreaInTab, EntityArmorStand, isEntity } from "../../utils/Utils";

// Alerts
register("chat", (e) => {
    var formattedMessage = ChatLib.getChatMessage(e, true);
    if (settings.goldenGoblinAlert) {
        if (formattedMessage.includes("A Golden Goblin has spawned ")) {
            Client.showTitle("&c&lGolden Goblin!", `${PREFIX}`, 0, 50, 0);
        }
    }
    if (settings.diamondGoblinAlert) {
        if (formattedMessage.includes("Diamond Goblin has spawned ")) {
            Client.showTitle("&b&lDiamond Goblin!", `${PREFIX}`, 0, 50, 0);
        }
    }
    if (settings.powderGhastAlert) {
        var location = formattedMessage.substring(formattedMessage.indexOf("near the") + 9, formattedMessage.indexOf("!"));
        if (formattedMessage.includes("Powder Ghast")) {
            Client.showTitle("&c&lPowder Ghast!", location, 0, 50, 0);
        }
    }

});

register("renderWorld", () => {
    if(!World.isLoaded()) return
    
    mobs = World.getAllEntitiesOfType(EntityArmorStand)

    if (settings.hitboxMasterToggle) {

        if (isAreaInTab("Dwarven Mines")) {

            mobs.forEach(entity => {

                // Golden Goblin
                if (settings.goldenGoblinHitboxes) {
                    if (isEntity(entity, "golden goblin")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Diamond Goblin
                if (settings.diamondGoblinHitboxes) {
                    if (isEntity(entity, "diamond goblin")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Powder Ghast
                if (settings.powderGhastHitboxes) {
                    if (isEntity(entity, "powder ghast")) {
                        drawEspBox(entity, 3, 3, 0, 9, 120, 102, false)
                    }
                }
                // Ice Walker
                if (settings.iceWalkerHitboxes) {
                    if (isEntity(entity, "ice walker")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Goblin
                if (settings.goblinHitboxes) {
                    // Goblin, Knifethrower, Fireslinger
                    if (isEntity(entity, "goblin") || isEntity(entity, "knifethrower") || isEntity(entity, "fireslinger")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Treasure Hoarder
                if (settings.treasureHoarderHitboxes) {
                    if (isEntity(entity, "treasure hoarder")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Star Sentry
                if (settings.starSentryHitboxes) {
                    if (isEntity(entity, "star sentry")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
            })
        }
    }
})


