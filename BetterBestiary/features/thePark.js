import RenderLibV2 from "../../RenderLibV2";
import settings from "../config"
import { isInTab, EntityArmorStand } from "../utils/Utils";

// Hitboxes
register("renderWorld", () => {
    if(!World.isLoaded()) return
    
    mobs = World.getAllEntitiesOfType(EntityArmorStand)

    if (settings.hitboxMasterToggle) {

        if (isInTab("Park")) {

            mobs.forEach(entity => {

                // Pack Spirit
                if (settings.packSpiritHitboxes) {
                    if (entity.getName().toLowerCase().includes("pack spirit")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Howling Spirit
                if (settings.howlingSpiritHitboxes) {
                    if (entity.getName().toLowerCase().includes("howling spirit")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Soul of the Alpha
                if (settings.soulOfTheAlphaHitboxes) {
                    if (entity.getName().toLowerCase().includes("soul of the alpha")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
            })
        }
    }
})