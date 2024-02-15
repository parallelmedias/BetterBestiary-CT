import settings from "../../config"
import { isAreaInTab, EntityArmorStand, isEntity } from "../../utils/Utils";

// Hitboxes
register("renderWorld", () => {
    if(!World.isLoaded()) return
    
    mobs = World.getAllEntitiesOfType(EntityArmorStand)

    if (settings.hitboxMasterToggle) {

        if (isAreaInTab("Park")) {

            mobs.forEach(entity => {

                // Pack Spirit
                if (settings.packSpiritHitboxes) {
                    if (isEntity(entity, "pack spirit")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Howling Spirit
                if (settings.howlingSpiritHitboxes) {
                    if (isEntity(entity, "howling spirit")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Soul of the Alpha
                if (settings.soulOfTheAlphaHitboxes) {
                    if (isEntity(entity, "soul of the alpha")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
            })
        }
    }
})