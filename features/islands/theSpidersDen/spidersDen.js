import RenderLibV2 from "../../../../RenderLibV2";
import settings from "../../../config"
import { PREFIX, data, isInTab, EntityArmorStand, isEntity, drawEspBox, isAreaInTab, broodmotherGui } from "../../../utils/Utils";

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

register("step", () => {
    if (isInTab("Awakening")) {
        Client.showTitle("&c&lAwakening!", "", 0, 50, 0);
    }
    if (isInTab("Imminent")) {
        Client.showTitle("&c&lImminent!", "", 0, 50, 0);
    }
    if (isInTab("Alive")) {
        Client.showTitle("&c&lBroodmother!", "", 0, 50, 0);
    }
})

// Broodmother Alerts
register("chat", (e) => {
    if (settings.broodmotherAlerts) {

        let entities = World.getAllEntities();

        entities.forEach(entity => {
            if (isEntity(entity, "broodmother")) {
                ChatLib.chat("&c&lBroodmother is nearby!")
                Client.showTitle("&c&lBroodmother!", "", 0, 50, 0);
                { cancel(e) }
            }
            // if (entity.getClassName() === "EntityArmorStand") {
            //     ["broodmother"].forEach(rarity => {
            //         if (entity.getName().toLowerCase().includes(rarity)) {
            //             ChatLib.chat("&c&lBroodmother is Awake!")
            //             Client.showTitle("&c&lBroodmother!", "", 0, 50, 0);
            //             { cancel(e) }
            //         }
            //     });
            // }
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

        if (isAreaInTab("Den")) {

            mobs.forEach(entity => {
                // Arachne
                if (settings.arachneHitboxes) {
                    if (entity.getName().toLowerCase().includes("arachne") && !entity.getName().toLowerCase().includes("Fragment") ) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 1, 0, 9, 120, 102, false)
                    }
                }
                // Arachne's Brood
                if (settings.arachnesBroodHitboxes) {
                    // if (entity.getName().toLowerCase().includes("brood")) {
                    if (isEntity(entity, "brood")) {
                        drawEspBox(entity, 1, -1, 0, 9, 120, 102, false)
                    }
                }
                // Arachne's Keeper
                if (settings.arachnesKeeperHitboxes) {
                    if (isEntity(entity, "keeper")) {
                        drawEspBox(entity, 1, -1, 0, 9, 120, 102, false)
                    }
                }
                // Broodmother
                if (settings.broodmotherHitboxes) {
                    if (isEntity(entity, "broodmother")) {
                        drawEspBox(entity, 1, -1, 0, 9, 120, 102, false)
                    }
                }
                // Dasher Spider
                if (settings.dasherSpiderHitboxes) {
                    if (isEntity(entity, "dasher")) {
                        drawEspBox(entity, 1, -1, 0, 9, 120, 102, false)
                    }
                }
                // Gravel Skeleton
                if (settings.gravelSkeletonHitboxes) {
                    if (isEntity(entity, "gravel")) {
                        drawEspBox(entity, 1, -2, 0, 9, 120, 102, false)
                    }
                }
                // Rain Slime
                if (settings.rainSlimeHitboxes) {
                    if (isEntity(entity, "rain")) {
                        drawEspBox(entity, 3, -3, 0, 9, 120, 102, false)
                    }
                }
                // Toxic Slime
                if (settings.toxicSlimeHitboxes) {
                    if (isEntity(entity, "toxic")) {
                        drawEspBox(entity, 3, -3, 0, 9, 120, 102, false)
                    }
                }
                // Spider Jockey
                if (settings.spiderJockeyHitboxes) {
                    if (isEntity(entity, "spider jockey")) {
                        drawEspBox(entity, 1, -1, 0, 9, 120, 102, false)
                    }
                }
                // Splitter Spider
                if (settings.splitterSpiderHitboxes) {
                    if (isEntity(entity, "splitter")) {
                        drawEspBox(entity, 1, -1, 0, 9, 120, 102, false)
                    }
                }
                // Voracious Spider
                if (settings.voraciousSpiderHitboxes) {
                    if (isEntity(entity, "voracious")) {
                        drawEspBox(entity, 1, -1, 0, 9, 120, 102, false)
                    }
                }
                // Weaver Spider
                if (settings.weaverSpiderHitboxes) {
                    if (isEntity(entity, "weaver")) {
                        drawEspBox(entity, 1, -1, 0, 9, 120, 102, false)
                    }
                }

                // Silverfish
                if (settings.silverfishHitboxes) {
                    if (entity.getName().toLowerCase().includes("silverfish")) {
                        drawEspBox(entity, 0.5, 0.5, 0, 9, 120, 102, false)
                    }
                }
            })
        }
    }
})
