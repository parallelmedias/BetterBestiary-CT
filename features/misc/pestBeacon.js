import { isAreaInTab, EntityArmorStand } from "../../utils/Utils";
import RenderLibV2 from "../../../RenderLibV2";

register("renderWorld", () => {
    if (!World.isLoaded()) return

    if (isAreaInTab("Garden")) {
        pests = World.getAllEntitiesOfType(EntityArmorStand)
        
        pests.forEach(entity => {
            // Beetle
            if (entity.getName().toLowerCase().includes("beetle")) {
                RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
            }
            // Cket
            if (entity.getName().toLowerCase().includes("cricket")) {
                RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
            }
            // Ehworm
            if (entity.getName().toLowerCase().includes("earthworm")) {
                RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
            }
            // Fly
            if (entity.getName().toLowerCase().includes("fly")) {
                RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
            }
            // Locust
            if (entity.getName().toLowerCase().includes("locust")) {
                RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
            }
            // Mite
            if (entity.getName().toLowerCase().includes("mite")) {
                RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
            }
            // Mosquito
            if (entity.getName().toLowerCase().includes("mosquito")) {
                RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
            }
            // Moth
            if (entity.getName().toLowerCase().includes("moth")) {
                RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 1, 0, 9, 120, 102, false)
            }
            // Rat
            if (entity.getName().toLowerCase().includes("rat")) {
                RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
            }
            // Slug
            if (entity.getName().toLowerCase().includes("slug")) {
                RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 1), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
            }
        // §cൠ Mosquito§r §a600§c❤ - this is the format of the mosquito entity
        // §cൠ - this is the symbol before each pest
        })
    }
})