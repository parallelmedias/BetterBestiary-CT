import RenderLibV2 from "../../RenderLibV2";
import settings from "../config"
import { isInTab, EntityArmorStand } from "../utils/Utils";

register("renderWorld", () => {
    if (!World.isLoaded()) return

    mobs = World.getAllEntitiesOfType(EntityArmorStand);
    let entities = World.getAllEntities();

    if (settings.hitboxMasterToggle) {

        if (isInTab("Deep Caverns")) {

            mobs.forEach(entity => {

                // Lapis Zombie
                if (settings.lapisZombieHitboxes) {
                    if (entity.getName().toLowerCase().includes("lapis")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Redstone Pigman
                if (settings.redstonePigmanHitboxes) {
                    if (entity.getName().toLowerCase().includes("redstone pigman")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }

                // Miner Zombie
                if (settings.minerZombieHitboxes) {
                    if (entity.getName().toLowerCase().includes("miner zombie")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Miner Skeleton
                if (settings.minerSkeletonHitboxes) {
                    if (entity.getName().toLowerCase().includes("miner skeleton")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
            })

            // Emerald Slime - Uses true EntitySlime so can't go with mob(ArmorStand)
            entities.forEach(entity => {
                if (settings.emeraldSlimeHitboxes) {
                    if (entity.getClassName() === "EntitySlime") {
                        if (entity.getName().toLowerCase().includes("slime")) {
                            RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY()), entity.getRenderZ(), Math.round(entity.getWidth()), Math.round(entity.getHeight()), 0, 9, 120, 102, false)
                        }
                    }
                }
            })
        }
    }
})