import settings from "../../config"
import { PREFIX, drawBox, isPlayerAt } from "../../utils/Utils"

register("chat", (e) => {
    if (settings.powderGhastAlerts) {
        var formattedMessage = ChatLib.getChatMessage(e, true);
        var location = formattedMessage.substring(formattedMessage.indexOf("near the") + 9, formattedMessage.indexOf("!"));
        if (formattedMessage.includes("Powder Ghast")) {
            Client.showTitle("&c&lPowder Ghast!", location, 0, 50, 0);
        }
    }

});

register("chat", (e) => {
    if (settings.goldenGoblinAlerts) {
        var formattedMessage = ChatLib.getChatMessage(e, true);
        if (formattedMessage.includes("Golden Goblin has spawned ")) {
            Client.showTitle("&c&lGolden Goblin!", `${PREFIX}`, 0, 50, 0);
        }
    }

});

register("renderWorld", (partialTicks) => {

    let entities = World.getAllEntities();
    if (settings.hitboxMasterToggle) {
        if (isPlayerAt("dwarven mines")) {
            entities.forEach(entity => {

                let x = Math.round(entity.getX());
                let y = Math.round(entity.getY());

                // Powder Ghasts
                if (settings.powderGhastHitboxes) {
                    if (entity.getClassName() === "EntityGhast") {
                        drawBox(entity, 255, 0, 0, 50.0, 5, 5, partialTicks);
                    };
                };
                // Golden Goblins
                if (settings.goldenGoblinHitboxes) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["golden"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                            };
                        });
                        []
                    };
                };
                // Diamond Goblins
                if (settings.diamondGoblinHitboxes) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["diamond"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                            };
                        });
                        []
                    };
                };
                // Ice Walkers
                if (settings.iceWalkerHitboxes) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["walker"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                            };
                        });
                        []
                    };
                };
                // Goblins
                if (entity.getClassName() === "EntityArmorStand") {
                    ["goblin"].forEach(rarity => {
                        if (entity.getName().toLowerCase().includes(rarity)) {
                            drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                        };
                    });
                    []
                };
                // Star Senty
                if (settings.starSentryHitboxes) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["sentry"].forEach(rarity => {
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
}
);

// Dragon Egg In View Alert

