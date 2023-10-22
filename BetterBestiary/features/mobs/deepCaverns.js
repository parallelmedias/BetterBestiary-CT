import settings from "../../config"
import { PREFIX, drawBox } from "../../utils/Utils"

register("renderWorld", (partialTicks) => {
    

    let entities = World.getAllEntities();
    if(settings.hitboxMasterToggle) {
        entities.forEach(entity => {

            let x = Math.round(entity.getX());
            let y = Math.round(entity.getY());


            ///////////////////////// Miner Zombie /////////////////////////
            if(settings.minerZombieHitbox) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["zombie"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                        };
                    });
                    []
                };
            };
            ///////////////////////// Miner Skeleton ///////////////////////
            if(settings.minerSkeletonHitbox) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["skeleton"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                        };
                    });
                    []
                };
            };
            ///////////////////////// Redstone Pigman //////////////////////
            if(settings.redstonePigmanHitbox) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["pigman"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                        };
                    });
                    []
                };
            };
            ///////////////////////// Emerald Slime ////////////////////////
            if(settings.emeraldSlimeHitbox) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["slime"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            // redo drawbox so the height is the same as the width
                            drawBox(entity, 255, 0, 0, 3.0, 2, -2, partialTicks);

                        };
                    });
                    []
                };
            }
            ///////////////////////// Sneaky Creeper /////////////////////////
            // does not work since they are simply particles instead of the creeper ig?
            // if (entity.getClassName() === "EntityArmorStand") {
            //     ["creeper"].forEach(rarity => {
            //         if (entity.getName().toLowerCase().includes(rarity)) {
            //             drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
            //         };
            //     });
            //     []
            // };
        });
    }
});