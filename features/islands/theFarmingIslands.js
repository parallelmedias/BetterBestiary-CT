import settings from "../../config"
import { drawEspBox, isAreaInTab } from "../../utils/Utils";

// Hitboxes
register("renderWorld", () => {
    if (!World.isLoaded()) return

    let entities = World.getAllEntities();

    if (settings.hitboxMasterToggle) {

        if (isAreaInTab("Farming Islands")) {

            entities.forEach(entity => {

                // Cow
                if (settings.cowHitboxes) {
                    if (entity.getClassName() === "EntityCow") {
                        drawEspBox(entity, entity.getWidth(), entity.getHeight(), 0, 102, 0, 1, false)
                    }
                }
                // Chicken
                if (settings.chickenHitboxes) {
                    if (entity.getClassName() === "EntityChicken") {
                        drawEspBox(entity, entity.getWidth(), entity.getHeight(), 0, 102, 0, 1, false)
                    }
                }
                // Pig
                if (settings.pigHitboxes) {
                    if (entity.getClassName() === "EntityPig") {
                        drawEspBox(entity, entity.getWidth(), entity.getHeight(), 0, 102, 0, 1, false)
                    }
                }
                // Sheep
                if (settings.sheepHitboxes) {
                    if (entity.getClassName() === "EntitySheep") {
                        drawEspBox(entity, entity.getWidth(), entity.getHeight(), 0, 102, 0, 1, false)
                    }
                }
                // Rabbit
                if (settings.rabbitHitboxes) {
                    if (entity.getClassName() === "EntityRabbit") {
                        drawEspBox(entity, entity.getWidth(), entity.getHeight(), 0, 102, 0, 1, false)
                    }
                }
                // Mushroom Cow
                if (settings.mushroomCowHitboxes) {
                    if (entity.getClassName() === "EntityMooshroom") {
                        drawEspBox(entity, entity.getWidth(), entity.getHeight(), 0, 102, 0, 1, false)
                    }
                }
            })
        }
    }
})