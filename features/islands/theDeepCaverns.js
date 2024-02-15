import settings from "../../config"
import { isAreaInTab, EntityArmorStand, isEntity, drawEspBox } from "../../utils/Utils";

register("renderWorld", () => {
    if (!World.isLoaded()) return

    mobs = World.getAllEntitiesOfType(EntityArmorStand);
    entities = World.getAllEntities();

    if (settings.hitboxMasterToggle) {

        if (isAreaInTab("Deep Caverns")) {

            mobs.forEach(entity => {

                // Lapis Zombie
                if (settings.lapisZombieHitboxes) {
                    if (isEntity(entity, "lapis zombie")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Redstone Pigman
                if (settings.redstonePigmanHitboxes) {
                    if (isEntity(entity, "redstone pigman")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Miner Zombie
                if (settings.minerZombieHitboxes) {
                    if (isEntity(entity, "miner zombie")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Miner Skeleton
                if (settings.minerSkeletonHitboxes) {
                    if (isEntity(entity, "miner skeleton")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
            })

            // Emerald Slime - Uses true EntitySlime so can't go with mob(ArmorStand)
            entities.forEach(entity => {
                if (settings.emeraldSlimeHitboxes) {
                    if (entity.getClassName() === "EntitySlime") {
                        if (entity.getName().toLowerCase().includes("slime")) {
                            drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                        }
                    }
                    if (entity.getClassName() === "EntityCreeper") {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
            })
        }
    }
})