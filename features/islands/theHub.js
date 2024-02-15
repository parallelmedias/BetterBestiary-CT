import settings from "../../config"
import { PREFIX, isAreaInTab, EntityArmorStand, isInScoreboard, isEntity, drawEspBox } from "../../utils/Utils";

// Zombie Villager Alert Timer
register("step", () => {
    if (settings.zombieVillagerAlert) {
        if (isInScoreboard("8:00pm")) {
            Client.showTitle("&6&lZombie Villagers!", PREFIX, 0, 50, 0);
        }
    }
}).setFps(5)

// Headless Horsemen Alerts
register("step", () => {
    if (settings.headlessHorsemenPartyAlerts){
        if (isInScoreboard("6:00pm")){
            ChatLib.command("pc Headless Horsemen!")
            ChatLib.command("ac Headless Horsemen!")
            Client.showTitle("&6&lHeadless Horsemen!", PREFIX, 0, 50, 0);
        }
        if (isInScoreboard("5:00am")){
            ChatLib.command("pc Good Morning!")
            ChatLib.command("ac Good Morning!")
            Client.showTitle("&6&lGood Morning!", PREFIX, 0, 50, 0);
        }

    }
}).setFps(1)

// Hitboxes
register("renderWorld", () => {
    if(!World.isLoaded()) return
    
    mobs = World.getAllEntitiesOfType(EntityArmorStand)

    if (settings.hitboxMasterToggle) {

        if (isAreaInTab("Hub")) {

            mobs.forEach(entity => {

                // Headless Horsemen
                if (settings.headlessHorsemenHitboxes) {
                    if (isEntity(entity, "headless horseman")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Graveyard Zombie
                if (settings.graveyardZombieHitboxes) {
                    if (isEntity(entity, "graveyard")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }

                // Zombie Villager
                if (settings.zombieVillagerHitboxes) {
                    if (isEntity(entity, "villager")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }

                // Crypt Ghoul
                if (settings.cryptGhoulHitboxes) {
                    if (isEntity(entity, "crypt ghoul")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)

                    }
                }
                // Golden Ghoul
                if (settings.goldenGhoulHitboxes) {
                    if (isEntity(entity, "golden ghoul")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }
                // Old Wolf
                if (settings.oldWolfHitboxes) {
                    if (isEntity(entity, "old wolf")) {
                        drawEspBox(entity, 1, 2, 0, 9, 120, 102, false)
                    }
                }

            })
        }
    }
})