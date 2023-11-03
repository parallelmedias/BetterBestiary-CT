import { PREFIX, isPlayerAt, drawBox } from "../../utils/Utils";
import settings from "../../config";

register("chat", (e) => {
    if (!settings.vanquisherAlerts) {
        var formattedMessage = ChatLib.getChatMessage(e, true);
        // TODO: check if player is in a party, if not, dont show the message

        if (formattedMessage.includes("&r&aA &r&cVanquisher &r&ais spawning nearby!&r")) {
            setTimeout(() => {
                ChatLib.command("pc x: " + Math.round(Player.getX()) + ", y: " + Math.round(Player.getY()) + ", z: " + Math.round(Player.getZ()) + `${PREFIX} | Vanquisher Spawned!`)
            }, 300);
        }
    };

})


// Ghast Alert
register("step", () => {
    if (settings.crimsonGhastAlert){
        let score = Scoreboard.getLines()
        score.map(e => {
            if(e.toString().includes("9:00pm")){
                Client.showTitle("&6&lCrimson Ghast!", PREFIX, 0, 50, 0);
            }
        })
    }
}).setFps(1)


register("renderWorld", (partialTicks) => {

    let entities = World.getAllEntities();

    if (settings.hitboxMasterToggle) {
        if (isPlayerAt("crimson")) {
            entities.forEach(entity => {

                let x = Math.round(entity.getX());
                let y = Math.round(entity.getY());

                // Vanquisher
                if (settings.vanquisherHitbox) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["vanquisher"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                            };
                        });
                        []
                    };
                };

                // Wither Spectre - armor stand
                if (settings.witherSpectreHitbox) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["wither spectre"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, 1, -1.75, partialTicks);
                            };
                        });
                    };
                }
                // bezal - upside down blaze / armor stand
                if (settings.bezalHitbox) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["bezal"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                            };
                        });
                    };
                }
                // blaze
                if (settings.blazeHitbox) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["blaze"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                            };
                        });
                    };
                }
                // mutated blaze
                if (settings.mutatedBlazeHitbox) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["mutated blaze"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                            };
                        });
                    };
                }
                // wither skeleton - is a wither skeleton
                if (settings.witherSkeletonHitbox) {
                    // This also addresses Spectre's - Fixed
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["wither skeleton"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, 1, -2.25, partialTicks);
                            };
                        });
                    };

                }
                // magma cube - is a magma cube - hitbox is a bit off
                if (settings.magmaCubeHitbox) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["magma cube"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, 1.5, -2, partialTicks);
                            };
                        });
                    };
                }
                // pack magma cube
                if (settings.packMagmaCubeHitbox) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["pack magma cube"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, 1.5, -2, partialTicks);
                            };
                        });
                    };
                }
                // Flaming spider - armor stand
                if (settings.flamingSpiderHitbox) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["flaming spider"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                            };
                        });
                    };
                }
                // magma cube rider - pigman on a magma, prob armor stand
                if (settings.magmaCubeRiderHitbox) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["magma cube rider"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 0, 5.0, 1, -2, partialTicks);
                            };
                        });
                    };
                }
                // ghast
                if (settings.ghastHitbox) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["ghast"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 255, 5.0, 1, -2, partialTicks);
                            };
                        });
                    };
                }
                // mushroom bull - armor stand or mooshroomcow
                if (settings.mushroomBullHitbox) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["mushroom bull"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 255, 5.0, 1, -2, partialTicks);
                            };
                        });
                    };
                }
                // flare - Pointless
                if (settings.flareHitbox) {
                    if (entity.getClassName() === "EntityArmorStand") {
                        ["flare"].forEach(rarity => {
                            if (entity.getName().toLowerCase().includes(rarity)) {
                                drawBox(entity, 255, 0, 255, 5.0, 1, -5, partialTicks);
                            };
                        });
                    };
                }
                // Bat
                if (entity.getClassName() === "EntityBat") {
                    drawBox(entity, 255, 0, 255, 5.0, entity.getWidth(), entity.getHeight(), partialTicks);
                }
                // kada knight - pigman on a chicken or armorstand
                if (settings.kadaKnightHitbox) {
                    if (entity.getClassName() === "EntityChicken") {
                        drawBox(entity, 255, 0, 255, 5.0, entity.getWidth(), entity.getHeight(), partialTicks);
                    }
                }
            }
            )
        }
    }
}
)