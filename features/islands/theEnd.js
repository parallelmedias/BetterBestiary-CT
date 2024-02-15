import settings from "../../config"
import { isAreaInTab, EntityArmorStand, isEntity } from "../../utils/Utils";

register("renderWorld", () => {
    if(!World.isLoaded()) return
    
    mobs = World.getAllEntitiesOfType(EntityArmorStand)

    if (settings.hitboxMasterToggle) {

        if (isAreaInTab("The End")) {

            mobs.forEach(entity => {

                // Enderman
                if (settings.endermanHitboxes) {
                    if (isEntity(entity, "enderman")) {
                        drawEspBox(entity, 1, 3, 0, 9, 120, 102, false)
                    }
                }
                // Endermite
                if (settings.endermiteHitboxes) {
                    if (isEntity(entity, "endermite")) {
                        drawEspBox(entity, 1, 1, 0, 9, 120, 102, false)
                    }
                }
                // Obsidian Defender
                if (settings.obsidianDefenderHitboxes) {
                    if (isEntity(entity, "obsidian defender")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Watcher
                if (settings.watcherHitboxes) {
                    if (isEntity(entity, "watcher")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Zealot
                if (settings.zealotHitboxes) {
                    if (isEntity(entity, "zealot")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
            })
        }
    }
})