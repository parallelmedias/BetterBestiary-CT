import settings from "../../config"
import { PREFIX, drawBox } from "../../utils/Utils"

// Hitboxes

register("renderWorld", (partialTicks) => {


    let entities = World.getAllEntities();
    if (settings.hitboxMasterToggle) {
        entities.forEach(entity => {

            let x = Math.round(entity.getX());
            let y = Math.round(entity.getY());

            // Gravel Skeleton
            if (settings.gravelSkeletonHitbox) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["gravel"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                        };
                    });
                    []
                };
            }
            // Silverfish
            if (settings.silverfishHitbox) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["silverfish"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                        };
                    });
                    []
                };
            }
            // Arachne
            if (settings.arachneHitbox) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["Arachne Keeper", "Arachne's Brood", "Arachne"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                        };
                    });
                    []
                };
            }
            // Broodmother
            if (settings.broodmotherHitbox) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["Broodmother"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                        };
                    });
                    []
                };
            }
        }
        )
    }
});