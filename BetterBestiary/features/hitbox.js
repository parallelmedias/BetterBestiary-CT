import settings from "../settings";
import constants from "../utils/constants";

register("renderWorld", (partialTicks) => {

    let entities = World.getAllEntities();
    if(settings.hitboxToggle) {
        entities.forEach(entity => {

            let x = Math.round(entity.getX());
            let y = Math.round(entity.getY());

            ///////////////////////// Trevor Mobs /////////////////////////
            if (entity.getClassName() === "EntityArmorStand") {
                ["trackable", "untrackable", "undetected"].forEach(rarity => {
                    if (entity.getName().toLowerCase().includes(rarity)) {
                        drawBox(entity, 0, 0, 255, 50.0, 1, -1, partialTicks);
                    };
                });
                []
            };
            ///////////////////////// Endangered /////////////////////////
            if (entity.getClassName() === "EntityArmorStand") {
                ["endangered"].forEach(rarity => {
                    if (entity.getName().toLowerCase().includes(rarity)) {
                        drawBox(entity, 137, 50, 183, 50.0, 5, 5, partialTicks);
                    };
                });
                []
            };
            ///////////////////////// Elusive /////////////////////////
            if (entity.getClassName() === "EntityArmorStand") {
                ["elusive"].forEach(rarity => {
                    if (entity.getName().toLowerCase().includes(rarity)) {
                        drawBox(entity, 255, 255, 0, 50.0, 5, 5, partialTicks);
                    };
                });
                []
            };
            ///////////////////////// Rain Slime /////////////////////////
            if (entity.getClassName() === "EntityArmorStand") {
                ["Sneaky Creeper"].forEach(rarity => {
                    if (entity.getName().toLowerCase().includes(rarity)) {
                        drawBox(entity, 255, 0, 0, 50.0, 5, 5, partialTicks);
                    };
                });
                []
            };
            ///////////////////////// Zombie Villager /////////////////////////
            if (entity.getClassName() === "EntityArmorStand") {
                ["villager"].forEach(rarity => {
                    if (entity.getName().toLowerCase().includes(rarity)) {
                        drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                    };
                });
                []
            };
            // if (entity.getClassName() === "EntityCreeper") {
            //     drawBox(entity, 255, 0, 0, 50.0, 1, 2, partialTicks);
            // };
        });
    }
});