import settings from "../../config";

// Remove Boss Messages
register("chat", (e) => {
    // in theory this should work, test
    // var formattedMessage = ChatLib.getChatMessage(e, true);
    { cancel(e) }
}).setCriteria("[BOSS] ${*}");

// Precursor Eyes Chat - try with using setCriteria
// register("chat", (e) => {
//     var formattedMessage = ChatLib.getChatMessage(e, true);
//     if (formattedMessage.includes("Eye Beam")) { cancel(e) }
// })
register("chat", (e) => {
    { cancel(e) }
}).setCriteria("Eye Beam").setContains();

// Horseman Chat
// TODO: if player Horseman not maxed, operate
// TODO: if is maxed, dont show anything in chat
register("chat", (e) => {
    var formattedMessage = ChatLib.getChatMessage(e, true);
    if (formattedMessage.includes("has spawned the &r&6Headless Horseman boss &r&ein the &r&2Wilderness")) {
        ChatLib.chat("&c&lHorseman at Wilderness!")
        Client.showTitle("&c&lHorseman!", "Wilderness", 0, 50, 0);
        { cancel(e) }
    }
    if (formattedMessage.includes("has spawned the &r&6Headless Horseman boss &r&ein the &r&cGraveyard")) {
        ChatLib.chat("&c&lHorseman at Graveyard!")
        Client.showTitle("&c&lHorseman!", "Graveyard", 0, 50, 0);
        { cancel(e) }
    }
    if (formattedMessage.includes("HORSEMAN HORSE DOWN!")) { cancel(e) }
    if (formattedMessage.includes("DEBUFF! &fYou were splashed by &cBat")) { cancel(e) }
})

// Dragon Chat Cancels
// TODO: grab the dragon type and use it in the displays
register("chat", (e) => {
    var formattedMessage = ChatLib.getChatMessage(e, true);
    if (formattedMessage.includes("Dragon&r&d&l has spawned!")) {
        Client.showTitle("&c&lDragon!", "", 0, 50, 0);
        { cancel(e) }
    }
    if (formattedMessage.includes("&r&dused &r&eLightning Strike")) { cancel(e) }
    if (formattedMessage.includes("&r&dused &r&eFireball")) { cancel(e) }
    if (formattedMessage.includes("&r&dused &r&eDragon Breath")) { cancel(e) }
    if (formattedMessage.includes("&r&dThe Dragon Egg has spawned!")) { cancel(e) }
    if (formattedMessage.includes("&r&d&lThe Dragon's Gate ${*}")) { cancel(e) }
    if (formattedMessage.includes("&r&ddestroyed an &r&5Ender Crystal")) { cancel(e) }
    if (formattedMessage.includes("&r&5Your Sleeping Eyes ${*}")) { cancel(e) }
})

// Auto Guild Welcome
register ("chat", (player) => {
    if (Settings.guildWelcome === true) {
        ChatLib.command("gc Whalecum " + player + "!");
    }
}).setCriteria("[${*}] ${player} joined the guild!");

// Bridge Bot
register("chat", (bot, player, message, event) => {
    if (bot.toLowerCase() != settings.botName.toLowerCase()) return;
    cancel(event);
    ChatLib.chat(`&2Guild >&r ${settings.bridgeNameFormat} ${player}&r: ${message}`);
  }).setCriteria("Guild > [${*}] ${bot} [${*}]: ${player}: ${message}");

// Level Up Alert
register ("chat", (level) => {
    if (settings.levelAlerts === true) {
        ChatLib.say("Skyblock level up! I reached Skyblock Level " + level + "!");
    }
}).setCriteria("Level {*} ➡ [{level}]").setContains();