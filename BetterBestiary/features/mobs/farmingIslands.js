import { PREFIX, drawBox } from "../../utils/Utils";
import settings from "../../config";

register("renderWorld", (partialTicks) => {

    let entities = World.getAllEntities();
    if (settings.hitboxMasterToggle) {
        entities.forEach(entity => {

            let x = Math.round(entity.getX());
            let y = Math.round(entity.getY());

            // Sheep
            if (settings.sheepHitboxes) {
                if (entity.getClassName() === "EntitySheep") {
                    drawBox(entity, 255, 0, 0, 5.0, 1, 1.25, partialTicks);
                };
            }
            // Rabbit
            if (settings.rabbitHitboxes) {
                if (entity.getClassName() === "EntityRabbit") {
                    drawBox(entity, 255, 0, 0, 5.0, 1, 1, partialTicks);
                };
            }
            // Chicken
            if (settings.chickenHitboxes) {
                if (entity.getClassName() === "EntityChicken") {
                    drawBox(entity, 255, 0, 0, 5.0, 1, 1, partialTicks);
                };
            }
            // Cow
            if (settings.cowHitboxes) {
                if (entity.getClassName() === "EntityCow") {
                    drawBox(entity, 255, 0, 0, 5.0, 1, 1, partialTicks);
                };
            }
            // Pig
            if (settings.pigHitboxes) {
                if (entity.getClassName() === "EntityPig") {
                    drawBox(entity, 255, 0, 0, 5.0, 1, 1, partialTicks);
                };
            }
            // Mushroom Cow
            if (settings.mushroomCowHitboxes) {
                if (entity.getClassName() === "EntityMooshroom") {
                    drawBox(entity, 200, 200, 25, 5.0, 1, 1, partialTicks);
                };
            }
        });
    }
});
