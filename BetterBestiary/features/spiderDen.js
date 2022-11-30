import settings from "../settings";

//// Arachne Alerts ////
register("chat", (e) => {
    if (settings.arachneAlerts) {
        var formattedMessage = ChatLib.getChatMessage(e, true);
            if (formattedMessage.includes("Arachne")) {if (formattedMessage.includes("[BOSS] Arachne&r&f: So it is time") || formattedMessage.includes("Something is awakening!")) {
                ChatLib.chat("&c&lArachne is nearby!")
                Client.showTitle("&c&lArachne!", "", 0, 50, 0);
                {cancel(e)}}
            }
    }
})

//// Arachne Chat ////
register("chat", (e) => {
    var formattedMessage = ChatLib.getChatMessage(e, true);
        // Works
        if(formattedMessage.includes("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬"))
            {cancel(e)}
        if(formattedMessage.includes("&lARACHNE DOWN!"))
            {cancel(e)}
        if (formattedMessage.includes("&e[NPC] &bShaggy"))
            {cancel(e)}
        if(formattedMessage.includes("&r&7dealt the final blow."))
            {cancel(e)}
})

register("chat", (event) => cancel(event)).setCriteria(/[NPC] Shaggy.+/)
register("chat", (event) => cancel(event)).setCriteria(/.+ARACHNE DOWN!/)
register("chat", (event) => cancel(event)).setCriteria(/▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬/)
register("chat", (event) => cancel(event)).setCriteria(/.+ dealt the final blow./)
register("chat", (event) => cancel(event)).setCriteria(/.+ Damager - .+/)