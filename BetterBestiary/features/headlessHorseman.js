import constants from "../utils/constants";
import settings from "../settings";

const PREFIX = constants.PREFIX;

register("step", () => {
    if (settings.headlessHorsemen) {
        let scoreBoard = Scoreboard.getLines()
        scoreBoard.map(e => {
            if (e.toString().includes("Graveyard") || e.toString().includes("Wilderness")) {
                if (e.toString().includes("6:00pm")) {
                    ChatLib.command("pc Good Evening!")
                    ChatLib.chat(`${PREFIX}&e&lHeadless Horseman is spawning in 5 minutes!`)
                    ChatLib.chat(`${PREFIX}&e&lWarping to the lobby!`)
                    ChatLib.command("p warp")
                }
                if (e.toString().includes("5:00am")) {
                    ChatLib.command("pc Good Morning!")
                    ChatLib.chat(`${PREFIX}&e&lHeadless Horseman will return at 6:00pm!`)
                }
            }
        })
    }
}).setFps(1);

// Horseman Chat
register("chat", (e) => {
    if (settings.horsemanChat) {
        var formattedMessage = ChatLib.getChatMessage(e, true);
        if (formattedMessage.includes("has spawned the &r&6Headless Horseman boss &r&ein the &r&2Wilderness")) {
            ChatLib.chat("&c&lHorseman at Wilderness!")
            Client.showTitle("&c&lHorseman!", "Wilderness", 0, 50, 0);
            {cancel(e)}
        }
        if (formattedMessage.includes("has spawned the &r&6Headless Horseman boss &r&ein the &r&cGraveyard")) {
            ChatLib.chat("&c&lHorseman at Graveyard!")
            Client.showTitle("&c&lHorseman!", "Graveyard", 0, 50, 0);
            {cancel(e)}
        }
        if(formattedMessage.includes("HORSEMAN HORSE DOWN!"))
            {cancel(e)
            }
        if(formattedMessage.includes("DEBUFF! &fYou were splashed by &cBat"))
            {cancel(e)
        }
    }
})
