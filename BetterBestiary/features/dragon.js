import settings from "../settings";

// Dragon Alert
register("chat", (e) => {
    if (settings.dragonAlerts) {
        var formattedMessage = ChatLib.getChatMessage(e, true);
        if (formattedMessage.includes("Dragon&r&d&l has spawned!")) {
            Client.showTitle("&c&lDragon!", "", 0, 50, 0);
            {cancel(e)}
        }
    }
})

// Dragon Chat
register("chat", (e) => {
    if (settings.enderDragonChat) {
        var formattedMessage = ChatLib.getChatMessage(e, true);
        if(formattedMessage.includes("&r&dused &r&eLightning Strike"))
            {cancel(e)
        }
        if(formattedMessage.includes("&r&dused &r&eFireball"))
            {cancel(e)
        }
        if(formattedMessage.includes("&r&dused &r&eDragon Breath"))
            {cancel(e)
        }
        if(formattedMessage.includes("&r&dThe Dragon Egg has spawned!"))
            {cancel(e)
        }
        if(formattedMessage.includes("&r&d&lThe Dragon's Gate ${*}"))
            {cancel(e)
        }
        if(formattedMessage.includes("&r&ddestroyed an &r&5Ender Crystal"))
            {cancel(e)
        }
        if(formattedMessage.includes("&r&5Your Sleeping Eyes ${*}"))
            {cancel(e)
        }
    }
})

// Ender Crystal Waypoints
