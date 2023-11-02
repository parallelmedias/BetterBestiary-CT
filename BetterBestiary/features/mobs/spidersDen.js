import settings from "../../config"
import { PREFIX, drawBox } from "../../utils/Utils"

// Hitboxes

register("renderWorld", (partialTicks) => {


    let entities = World.getAllEntities();
    if (settings.hitboxMasterToggle) {
        entities.forEach(entity => {

            let x = Math.round(entity.getX());
            let y = Math.round(entity.getY());

            // Broodmother
            if (settings.broodmotherHitbox) {
                if (entity.getClassName() === "EntitySpider") {
                    ["broodmother"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, entity.getWidth(), entity.getHeight(), partialTicks);
                        };
                    });
                    []
                };
            }
            // Gravel Skeleton
            if (settings.gravelSkeletonHitbox) {
                if (entity.getClassName() === "EntitySkeleton") {
                    ["gravel"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, entity.getWidth(), entity.getHeight(), partialTicks);
                        };
                    });
                    []
                };
            }
            // // Arachne
            // if (settings.arachneHitbox) {
            //     if (entity.getClassName() === "EntityArmorStand") {
            //         ["Arachne Keeper", "Arachne's Brood", "Arachne"].forEach(rarity => {
            //             if (entity.getName().toLowerCase().includes(rarity)) {
            //                 drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
            //             };
            //         });
            //         []
            //     };
            // }
            // Arachne's Keeper 
            // EntityCaveSpider
            if (settings.arachneKeeperHitbox) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["keeper"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -1, partialTicks);
                        };
                    });
                    []
                }
            }

            // Arachne's Brood
            // Silverfish
            if (settings.silverfishHitbox) {
                if (entity.getClassName() === "EntitySilverfish") {
                    ["silverfish"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, entity.getWidth(), entity.getHeight(), partialTicks);
                        };
                    });
                    []
                };
            }
            // Slime
            if (settings.slimeHitbox) {
                if (entity.getClassName() === "EntitySlime") {
                    ["slime"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            // drawbow that uses the entities height and width to draw the box
                            drawBox(entity, 255, 0, 0, 5.0, entity.getWidth(), entity.getHeight(), partialTicks);
                        };
                    });
                    []
                }
            }
            // Splitter
            if (settings.splitterHitbox) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["splitter"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -1, partialTicks);
                        };
                    });
                    []
                };
            }
            // Dasher
            if (settings.dasherHitbox) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["dasher"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -1, partialTicks);
                        };
                    });
                    []
                };w
            }
            // Weaver - check
            if (settings.weaverHitbox) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["weaver"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -1, partialTicks);
                        };
                    });
                    []
                };
            }
            // Voracious
            if (settings.voraciousHitbox) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["voracious"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -1, partialTicks);
                        };
                    });
                    []
                };
            }
            // Jockey
            if (settings.jockeyHitbox) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["jockey"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -1, partialTicks);
                        };
                    });
                    []
                };
            }
        })
    }
});