import settings from "../../config"
import { PREFIX, drawBox, isPlayerAt } from "../../utils/Utils"

//// Arachne Alerts ////
register("chat", (e) => {
    if (settings.arachneAlerts) {
        var formattedMessage = ChatLib.getChatMessage(e, true);
        if (formattedMessage.includes("Arachne")) {
            if (formattedMessage.includes("[BOSS] Arachne&r&f: So it is time") || formattedMessage.includes("Something is awakening!")) {
                ChatLib.chat("&c&lArachne is nearby!")
                Client.showTitle("&c&lArachne!", "", 0, 50, 0);
                { cancel(e) }
            }
        }
    }
})
// Broodmother Alerts
register("chat", (e) => {
    if (settings.broodmotherAlerts) {
        
        let entities = World.getAllEntities();

        entities.forEach(entity => {
            if (entity.getClassName() === "EntityArmorStand") {
                ["broodmother"].forEach(rarity => {
                    if (entity.getName().toLowerCase().includes(rarity)) {
                        ChatLib.chat("&c&lBroodmother is Awake!")
                        Client.showTitle("&c&lBroodmother!", "", 0, 50, 0);
                        { cancel(e) }
                    }
                });
            }
        })
    }
})

// Arachne Cow Head Check


// Shaggy Spam Remover
register("chat", (event) => cancel(event)).setCriteria(/[NPC] Shaggy.+/)
register("chat", (event) => cancel(event)).setCriteria(/.+ARACHNE DOWN!/)
register("chat", (event) => cancel(event)).setCriteria(/▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬/)
register("chat", (event) => cancel(event)).setCriteria(/.+ dealt the final blow./)
register("chat", (event) => cancel(event)).setCriteria(/.+ Damager - .+/)

// Hitboxes
register("renderWorld", (partialTicks) => {

    let entities = World.getAllEntities();
    if (settings.hitboxMasterToggle) {
        if (isPlayerAt("spider", "den")) {
            entities.forEach(entity => {

                let x = Math.round(entity.getX());
                let y = Math.round(entity.getY());

                // Broodmother
                if (settings.broodmotherHitbox) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["broodmother"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, 1, 0.5, partialTicks);
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
                    };
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

    }
});