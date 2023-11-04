import RenderLibV2 from "../../../RenderLibV2";
import settings from "../../config"
import { isInTab, EntityArmorStand } from "../../utils/Utils";

//// Arachne Alerts ////
register("chat", (e) => {
    if (settings.arachneAlerts) {
        var formattedMessage = ChatLib.getChatMessage(e, true);
        if (formattedMessage.includes("Arachne")) {
            if (formattedMessage.includes("[BOSS] Arachne&r&f: So it is time") || formattedMessage.includes("Something is awakening!")) {
                ChatLib.chat("&c&lArachne is nearby!")
                Client.showTitle("&c&lArachne!", "", 0, 50, 0);
                { cancel(e) }
            }
        }
    }
})
// Broodmother Alerts
register("chat", (e) => {
    if (settings.broodmotherAlerts) {

        let entities = World.getAllEntities();

        entities.forEach(entity => {
            if (entity.getClassName() === "EntityArmorStand") {
                ["broodmother"].forEach(rarity => {
                    if (entity.getName().toLowerCase().includes(rarity)) {
                        ChatLib.chat("&c&lBroodmother is Awake!")
                        Client.showTitle("&c&lBroodmother!", "", 0, 50, 0);
                        { cancel(e) }
                    }
                });
            }
        })
    }
})

// Arachne Cow Head Check


// Shaggy Spam Remover
register("chat", (event) => cancel(event)).setCriteria(/[NPC] Shaggy.+/)
register("chat", (event) => cancel(event)).setCriteria(/.+ARACHNE DOWN!/)
register("chat", (event) => cancel(event)).setCriteria(/▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬/)
register("chat", (event) => cancel(event)).setCriteria(/.+ dealt the final blow./)
register("chat", (event) => cancel(event)).setCriteria(/.+ Damager - .+/)

// Hitboxes
register("renderWorld", () => {
    if (!World.isLoaded()) return

    mobs = World.getAllEntitiesOfType(EntityArmorStand);
    entities = World.getAllEntities();

    if (settings.hitboxMasterToggle) {

        if (isInTab("Den")) {

            mobs.forEach(entity => {
                // Arachne
                if (settings.arachneHitboxes) {
                    if (entity.getName().toLowerCase().includes("arachne") && !entity.getName().toLowerCase().includes("Fragment") ) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 1, 0, 9, 120, 102, false)
                    }
                }
                // Arachne's Brood
                if (settings.arachnesBroodHitboxes) {
                    if (entity.getName().toLowerCase().includes("brood")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 1, 0, 9, 120, 102, false)
                    }
                }
                // Arachne's Keeper
                if (settings.arachnesKeeperHitboxes) {
                    if (entity.getName().toLowerCase().includes("keeper")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 1, 0, 9, 120, 102, false)
                    }
                }
                // Broodmother
                if (settings.broodmotherHitboxes) {
                    if (entity.getName().toLowerCase().includes("broodmother")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 1, 0, 9, 120, 102, false)
                    }
                }
                // Dasher Spider
                if (settings.dasherSpiderHitboxes) {
                    if (entity.getName().toLowerCase().includes("dasher")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 1, 0, 9, 120, 102, false)
                    }
                }
                // Gravel Skeleton
                if (settings.gravelSkeletonHitboxes) {
                    if (entity.getName().toLowerCase().includes("gravel")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Rain Slime
                if (settings.rainSlimeHitboxes) {
                    if (entity.getName().toLowerCase().includes("rain")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 3, 2, 0, 9, 120, 102, false)
                    }
                }
                // Toxic Slime
                if (settings.toxicSlimeHitboxes) {
                    if (entity.getName().toLowerCase().includes("toxic")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 3, 2, 0, 25, 120, 102, false)
                    }
                }
                // Spider Jockey
                if (settings.spiderJockeyHitboxes) {
                    if (entity.getName().toLowerCase().includes("jockey")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 25, 120, 102, false)
                    }
                }
                // Splitter Spider
                if (settings.splitterSpiderHitboxes) {
                    if (entity.getName().toLowerCase().includes("splitter")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 1, 0, 9, 120, 102, false)
                    }
                }
                // Voracious Spider
                if (settings.voraciousSpiderHitboxes) {
                    if (entity.getName().toLowerCase().includes("voracious")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 1, 0, 9, 120, 102, false)
                    }
                }
                // Weaver Spider
                if (settings.weaverSpiderHitboxes) {
                    if (entity.getName().toLowerCase().includes("weaver")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 1, 0, 9, 120, 102, false)
                    }
                }

                // Silverfish
                if (settings.silverfishHitboxes) {
                    if (entity.getName().toLowerCase().includes("silverfish")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY()), entity.getRenderZ(), 0.5, 0.5, 0, 9, 120, 102, false)
                    }
                }
            })
        }
    }
})
