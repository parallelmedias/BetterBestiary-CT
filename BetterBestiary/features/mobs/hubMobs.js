import { PREFIX, drawBox } from "../../utils/Utils";
import settings from "../../config";

// Zombie Villager Alert drawn on screen
register("step", () => {
    if (settings.zombieVillagerAlerts){
        let score = Scoreboard.getLines()
        score.map(e => {
            if(e.toString().includes("8:00pm")){
                Client.showTitle("&6&lZombie Villagers!", PREFIX, 0, 50, 0);
            }
        })
    }
}).setFps(1)

// Zombie Villager hitbox
register("renderWorld", (partialTicks) => {

    let entities = World.getAllEntities();
    if(settings.hitboxMasterToggle) {
        entities.forEach(entity => {

            let x = Math.round(entity.getX());
            let y = Math.round(entity.getY());

            if (settings.zombieVillagerHitboxes) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["villager"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                        };
                    });
                    []
                };
            }

            if (settings.graveyardZombieHitboxes) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["zombie"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                        };
                    });
                    []
                };
            }
            
        })
    }
});
