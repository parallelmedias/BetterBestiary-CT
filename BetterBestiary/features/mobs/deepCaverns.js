import settings from "../../config"
import { drawBox, isPlayerAt } from "../../utils/Utils"

register("renderWorld", (partialTicks) => {
    
    let entities = World.getAllEntities();
    if(settings.hitboxMasterToggle) {
        if (isPlayerAt("deep caverns")) {
            entities.forEach(entity => {

                let x = Math.round(entity.getX());
                let y = Math.round(entity.getY());

                ///////////////////////// Lapis Zombie /////////////////////////
                if(settings.lapisZombieHitbox) {
                    if (entity.getClassName() === "EntityArmorStand"){
                        ["zombie"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)){
                                drawBox(entity, 255, 0, 0, 2.0, 1, -2, partialTicks);
                            }
                        })
                    }
                }
                ///////////////////////// Miner Zombie /////////////////////////
                if(settings.minerZombieHitbox) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["miner zombie"].forEach(rarity => {
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
                        ["miner skeleton"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                            };
                        });
                        []
                    };
                };
                ///////////////////////// Redstone Pigman //////////////////////
                if(settings.redstonePigmanHitbox) {
                    if (entity.getClassName() === "EntityPigZombie") {
                        ["pigman"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, entity.getWidth(), entity.getHeight(), partialTicks);
                            };
                        });
                        []
                    };
                };
                ///////////////////////// Emerald Slime ////////////////////////
                if(settings.emeraldSlimeHitbox) {
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
            });
        }
    }
});