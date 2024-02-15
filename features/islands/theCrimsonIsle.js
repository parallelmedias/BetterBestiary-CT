import { PREFIX, isInScoreboard, isAreaInTab, EntityArmorStand, isEntity, drawEspBox} from "../../utils/Utils";
import settings from "../../config";

register("chat", (e) => {
    // Vanquisher Alerts
    if (settings.vanquisherAlerts) {
        var formattedMessage = ChatLib.getChatMessage(e, true);
        if (formattedMessage.includes("&r&aA &r&cVanquisher &r&ais spawning nearby!&r")) {
            setTimeout(() => {
                ChatLib.command("ac x: " + Math.round(Player.getX()) + ", y: " + Math.round(Player.getY()) + ", z: " + Math.round(Player.getZ()) + `${PREFIX} | Vanquisher Spawned!`)
            }, 300);
        }
    };
})

// Ghast Alert
register("step", () => {
    if (settings.crimsonGhastAlert) {
        if (isInScoreboard("9:00pm")) {
            Client.showTitle("&6&lCrimson Ghast!", PREFIX, 0, 50, 0);
        }
    }
}).setFps(5)

// Bladesoul test This works
// register("renderWorld", () => {
//     blade = World.getAllEntitiesOfType(EntityArmorStand);

//     blade.forEach(blade => {
//         if (blade.getName().toLowerCase().includes("bladesoul")) {
//             RenderLibV2.drawEspBox(blade.getRenderX(), Math.round(blade.getRenderY() - 1), blade.getRenderZ(), 1, 1, 0, 9, 120, 102, false)
//             Client.showTitle("&6&lBladesoul!", PREFIX, 0, 50, 0);
//         }
//     })
// })

register("renderWorld", () => {

    entities = World.getAllEntitiesOfType(EntityArmorStand);

    if (settings.hitboxMasterToggle) {

        if (isAreaInTab("Crimson Isle")) {
            
            entities.forEach(entity => {
                // Vanquisher
                if (settings.vanquisherHitboxes) {
                    if (isEntity(entity, "vanquisher")) {
                        Client.showTitle("&6&lVanq!", PREFIX, 0, 50, 0);
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                        ChatLib.chat("x: " + Math.round(entity.getRenderX()) + ", y: " + Math.round(entity.getRenderY()) + ", z: " + Math.round(entity.getRenderZ()))
                    }
                }
                // Wither Spectre
                if (settings.witherSpectreHitboxes) {
                    if (entity.getName().toLowerCase().includes("wither spectre")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Bezal
                if (settings.bezalHitboxes) {
                    if (isEntity(entity, "bezal")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // blaze
                if (settings.blazeHitboxes) {
                    if (isEntity(entity, "blaze")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // mutated blaze
                if (settings.mutatedBlazeHitboxes) {
                    if (isEntity(entity, "mutated blaze")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // wither skeleton
                if (settings.witherSkeletonHitboxes) {
                    if (isEntity(entity, "wither skeleton")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // magma cube
                if (settings.magmaCubeHitboxes) {
                    if (isEntity(entity, "magma cube")) {
                        drawEspBox(entity, 2, 2, 0, 9, 120, 102, false)
                    }
                }
                // pack magma cube
                if (settings.packMagmaCubeHitboxes) {
                    if (isEntity(entity, "pack magma cube")) {
                        drawEspBox(entity, 2, 2, 0, 9, 120, 102, false)
                    }
                }
                // Flaming spider
                if (settings.flamingSpiderHitboxes) {
                    if (isEntity(entity, "flaming spider")) {
                        drawEspBox(entity, 1, 1, 0, 9, 120, 102, false)
                    }
                }
                // magma cube rider
                if (settings.magmaCubeRiderHitboxes) {
                    if (isEntity(entity, "magma cube rider")) {
                        drawEspBox(entity, 2, 2, 0, 9, 120, 102, false)
                    }
                }
                // ghast
                if (settings.crimsonGhastHitboxes) {
                    if (isEntity(entity, "ghast")) {
                        drawEspBox(entity, 2, 2, 0, 9, 120, 102, false)
                    }
                }
                // mushroom bull
                if (settings.mushroomBullHitboxes) {
                    if (isEntity(entity, "mushroom bull")) {
                        drawEspBox(entity, 1, 1.5, 0, 9, 120, 102, false)
                    }
                }
                // flare - Pointless
                if (settings.flareHitboxes) {
                    if (isEntity(entity, "flare")) {
                        drawEspBox(entity, 1, 3, 0, 9, 120, 102, false)
                    }
                }
                // Bat - Is a bat not an armor stand
                
                // kada knight
                if (settings.kadaKnightHitboxes) {
                    if (isEntity(entity, "kada knight")) {
                        // RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 2, 2, 0, 9, 120, 102, false)
                        drawEspBox(entity, 1, 1, 0, 9, 120, 102, false)
                    }
                }
            }
            )
        }
    }
}
)