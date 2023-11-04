import RenderLibV2 from "../../RenderLibV2";
import settings from "../config"
import { PREFIX, isInTab, EntityArmorStand, isInScoreboard } from "../utils/Utils";

// Zombie Villager Alert Timer
register("step", () => {
    if (settings.zombieVillagerAlert) {
        if (isInScoreboard("8:00pm")) {
            Client.showTitle("&6&lZombie Villagers!", PREFIX, 0, 50, 0);
        }
    }
}).setFps(5)

// Hitboxes
register("renderWorld", () => {
    if(!World.isLoaded()) return
    
    mobs = World.getAllEntitiesOfType(EntityArmorStand)

    if (settings.hitboxMasterToggle) {

        if (isInTab("Hub")) {

            mobs.forEach(entity => {

                // Graveyard Zombie
                if (settings.graveyardZombieHitboxes) {
                    if (entity.getName().toLowerCase().includes("graveyard")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }

                // Zombie Villager
                if (settings.zombieVillagerHitboxes) {
                    if (entity.getName().toLowerCase().includes("villager")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }

                // Crypt Ghoul
                if (settings.cryptGhoulHitboxes) {
                    if (entity.getName().toLowerCase().includes("crypt")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Golden Ghoul
                if (settings.goldenGhoulHitboxes) {
                    if (entity.getName().toLowerCase().includes("golden")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Old Wolf
                if (settings.oldWolfHitboxes) {
                    if (entity.getName().toLowerCase().includes("old wolf")) {
                        RenderLibV2.drawEspBox(entity.getRenderX(), Math.round(entity.getRenderY() - 2), entity.getRenderZ(), 1, 2, 0, 9, 120, 102, false)
                    }
                }

            })
        }
    }
})