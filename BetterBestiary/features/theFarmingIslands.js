import RenderLibV2 from "../../RenderLibV2";
import settings from "../config"
import { isInTab } from "../utils/Utils";

register("renderWorld", () => {
    if (!World.isLoaded()) return

    let entities = World.getAllEntities();

    if (settings.hitboxMasterToggle) {

        if (isInTab("Farming Islands")) {

            entities.forEach(entity => {

                // Cow
                if (settings.cowHitboxes) {
                    if (entity.getClassName() === "EntityCow") {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY()), entity.getRenderZ(), entity.getWidth(), entity.getHeight(), 0, 9, 120, 102, false)
                    }
                }
                // Chicken
                if (settings.chickenHitboxes) {
                    if (entity.getClassName() === "EntityChicken") {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY()), entity.getRenderZ(), entity.getWidth(), entity.getHeight(), 0, 9, 120, 102, false)
                    }
                }
                // Pig
                if (settings.pigHitboxes) {
                    if (entity.getClassName() === "EntityPig") {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY()), entity.getRenderZ(), entity.getWidth(), entity.getHeight(), 0, 9, 120, 102, false)
                    }
                }
                // Sheep
                if (settings.sheepHitboxes) {
                    if (entity.getClassName() === "EntitySheep") {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY()), entity.getRenderZ(), entity.getWidth(), entity.getHeight(), 0, 9, 120, 102, false)
                    }
                }
                // Rabbit
                if (settings.rabbitHitboxes) {
                    if (entity.getClassName() === "EntityRabbit") {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY()), entity.getRenderZ(), entity.getWidth(), entity.getHeight(), 0, 9, 120, 102, false)
                    }
                }
                // Mushroom Cow
                if (settings.mushroomCowHitboxes) {
                    if (entity.getClassName() === "EntityMooshroom") {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY()), entity.getRenderZ(), entity.getWidth(), entity.getHeight(), 0, 9, 120, 102, false)
                    }
                }
            })
        }
    }
})