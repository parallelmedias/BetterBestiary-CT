import settings from "../settings";
import { drawBox } from "../utils/utils";
import { PREFIX } from "../utils/utils";
import settings from "../settings";

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
                ["Rain Slime"].forEach(rarity => {
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
            ///////////////////////// Arachne's Keeper /////////////////////////
            if (Scoreboard.getLines().some(e => e.toString().includes("Spider's") || e.toString().includes("Arac") || e.toString().includes("Spider"))) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["Keeper"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -1, partialTicks);
                        };
                    });
                    []
                };
            };
            ///////////////////////// BroodMother /////////////////////////
            if (Scoreboard.getLines().some(e => e.toString().includes("Spider's"))) {
                if (entity.getClassName() === "EntityArmorStand") {
                    ["BroodMother"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            Client.showTitle("&6&lBrood Mother!", PREFIX, 0, 50, 0);
                            drawBox(entity, 255, 0, 0, 5.0, 1, -1, partialTicks);
                        };
                    });
                    []
                };
            }
        });
    }
});