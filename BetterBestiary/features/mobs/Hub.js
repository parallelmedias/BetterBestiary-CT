import settings from "../../config"
import { PREFIX, drawBox, isPlayerAt} from "../../utils/Utils"

// Zombie Villager Alert Timer
register("step", () => {
    if (settings.zombieVillagerAlert){
        let score = Scoreboard.getLines()
        score.map(e => {
            if(e.toString().includes("8:00pm")){
                Client.showTitle("&6&lZombie Villagers!", PREFIX, 0, 50, 0);
            }
        })
    }
}).setFps(1)

register("renderWorld", (partialTicks) => {
    
    let entities = World.getAllEntities();
    if(settings.hitboxMasterToggle) {
        if(isPlayerAt("Hub")){
            entities.forEach(entity => {

                let x = Math.round(entity.getX());
                let y = Math.round(entity.getY());
    
                // Crypt Ghoul
                if(settings.cryptGhoulHitboxes) {
                    if (entity.getClassName() === "EntityArmorStand"){
                        ["Crypt"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)){
                                drawBox(entity, 255, 0, 0, 2.0, 1, -2, partialTicks);
                            }
                        })
                    }
                }
    
                // Golden Ghoul
                if(settings.goldenGhoulHitboxes) {
                    if (entity.getClassName() === "EntityArmorStand"){
                        ["Golden"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)){
                                drawBox(entity, 255, 0, 0, 2.0, 1, -2, partialTicks);
                            }
                        })
                    }
                }
    
                // Old Wolf
                if(settings.oldWolfHitboxes) {
                    if (entity.getClassName() === "EntityArmorStand"){
                        ["old wolf"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)){
                                drawBox(entity, 255, 0, 0, 2.0, 1, -2, partialTicks);
                            }
                        })
                    }
                }
    
                // Zombie Villager
                if(settings.zombieVillagerHitboxes) {
                    if (entity.getClassName() === "EntityArmorStand"){
                        ["villager"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)){
                                drawBox(entity, 255, 0, 0, 2.0, 1, -2, partialTicks);
                            }
                        })
                    }
                }

                // Graveyard Zombie
                if (settings.graveyardZombieHitboxes) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["graveyard"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                            };
                        });
                        []
                    };
                }
    
            });
        }
    }
});