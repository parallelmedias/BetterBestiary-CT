import { PREFIX, isInScoreboard, isInTab, EntityArmorStand } from "../utils/Utils";
import settings from "../config";
import RenderLibV2 from "../../RenderLibV2";

register("chat", (e) => {
    if (settings.vanquisherAlerts) {
        var formattedMessage = ChatLib.getChatMessage(e, true);
        if (formattedMessage.includes("&r&aA &r&cVanquisher &r&ais spawning nearby!&r")) {
            setTimeout(() => {
                ChatLib.command("pc x: " + Math.round(Player.getX()) + ", y: " + Math.round(Player.getY()) + ", z: " + Math.round(Player.getZ()) + `${PREFIX} | Vanquisher Spawned!`)
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

register("renderWorld", () => {

    mobs = World.getAllEntitiesOfType(EntityArmorStand);

    if (settings.hitboxMasterToggle) {

        if (isInTab("Crimson Isle")) {
            entities.forEach(entity => {

                // Vanquisher
                if (settings.vanquisherHitboxes) {
                    if (entity.getName().toLowerCase().includes("vanquisher")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Wither Spectre
                if (settings.witherSpectreHitboxes) {
                    if (entity.getName().toLowerCase().includes("wither spectre")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Bezal
                if (settings.bezalHitboxes) {
                    if (entity.getName().toLowerCase().includes("bezal")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // blaze
                if (settings.blazeHitboxes) {
                    if (entity.getName().toLowerCase().includes("blaze")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // mutated blaze
                if (settings.mutatedBlazeHitboxes) {
                    if (entity.getName().toLowerCase().includes("mutated blaze")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // wither skeleton
                if (settings.witherSkeletonHitboxes) {
                    if (entity.getName().toLowerCase().includes("wither skeleton")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // magma cube
                if (settings.magmaCubeHitboxes) {
                    if (entity.getName().toLowerCase().includes("magma cube")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 2, 2, 0, 9, 120, 102, false)
                    }
                }
                // pack magma cube
                if (settings.packMagmaCubeHitboxes) {
                    if (entity.getName().toLowerCase().includes("pack magma cube")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 2, 2, 0, 9, 120, 102, false)
                    }
                }
                // Flaming spider
                if (settings.flamingSpiderHitboxes) {
                    if (entity.getName().toLowerCase().includes("flaming spider")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 2, 2, 0, 9, 120, 102, false)
                    }
                }
                // magma cube rider
                if (settings.magmaCubeRiderHitboxes) {
                    if (entity.getName().toLowerCase().includes("magma cube rider")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 2, 2, 0, 9, 120, 102, false)
                    }
                }
                // ghast
                if (settings.crimsonGhastHitboxes) {
                    if (entity.getName().toLowerCase().includes("ghast")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 5, 5, 0, 9, 120, 102, false)
                    }
                }
                // mushroom bull
                if (settings.mushroomBullHitboxes) {
                    if (entity.getName().toLowerCase().includes("mushroom bull")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 2, 2, 0, 9, 120, 102, false)
                    }
                }
                // flare - Pointless
                if (settings.flareHitboxes) {
                    if (entity.getName().toLowerCase().includes("flare")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 2, 2, 0, 9, 120, 102, false)
                    }
                }
                // Bat - Is a bat not an armor stand
                
                // kada knight
                if (settings.kadaKnightHitboxes) {
                    if (entity.getName().toLowerCase().includes("kada knight")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 2, 2, 0, 9, 120, 102, false)
                    }
                }
            }
            )
        }
    }
}
)