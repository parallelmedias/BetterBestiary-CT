import RenderLibV2 from "../../RenderLibV2";
import settings from "../config"
import { PREFIX, isInTab, EntityArmorStand } from "../utils/Utils";

// Alerts
register("chat", (e) => {
    var formattedMessage = ChatLib.getChatMessage(e, true);
    if (settings.goldenGoblinAlert) {
        if (formattedMessage.includes("Golden Goblin has spawned ")) {
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

        if (isInTab("Dwarven Mines")) {

            mobs.forEach(entity => {

                // Golden Goblin
                if (settings.goldenGoblinHitboxes) {
                    if (entity.getName().toLowerCase().includes("golden goblin")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Diamond Goblin
                if (settings.diamondGoblinHitboxes) {
                    if (entity.getName().toLowerCase().includes("diamond goblin")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Powder Ghast
                if (settings.powderGhastHitboxes) {
                    if (entity.getName().toLowerCase().includes("powder ghast")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), -5, 5, 0, 9, 120, 102, false)
                    }
                }
                // Ice Walker
                if (settings.iceWalkerHitboxes) {
                    if (entity.getName().toLowerCase().includes("ice walker")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Goblin
                if (settings.goblinHitboxes) {
                    // Goblin, Knifethrower, Fireslinger
                    if (entity.getName().toLowerCase().includes("goblin") || entity.getName().toLowerCase().includes("knifethrower") || entity.getName().toLowerCase().includes("fireslinger")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Treasure Hoarder
                if (settings.treasureHoarderHitboxes) {
                    if (entity.getName().toLowerCase().includes("Treasure Hoarder")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Star Sentry
                if (settings.starSentryHitboxes) {
                    if (entity.getName().toLowerCase().includes("star sentry")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
            })
        }
    }
})


