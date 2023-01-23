import settings from "../Settings";
import { checkInSpidersDen } from "../utils/helperFunctions";

// Arachne Alerts
register("chat", (e) => {
    if (settings.arachneAlerts) {
        var formattedMessage = ChatLib.getChatMessage(e, true);
            if (formattedMessage.includes("[BOSS] Arachne&r&f: So it is time") || formattedMessage.includes("Something is awakening!")) {
                ChatLib.chat("&c&lArachne is nearby!")
                Client.showTitle("&c&lArachne!", "", 0, 50, 0);
                cancel(e)
            } else if (formattedMessage.includes("[BOSS] Arachne&r&f:")) {
                cancel(e)
            }
        }
    }
)

// Arachne Chat
register("chat", (e) => {
    if (settings.arachneChat) {
        var formattedMessage = ChatLib.getChatMessage(e, true);
            if (formattedMessage.includes("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")){
                cancel(e)
            }
            if(formattedMessage.includes("&lARACHNE DOWN!"))
                {cancel(e)
            }
            if (formattedMessage.includes("&e[NPC] &bShaggy"))
                {cancel(e)
            }
            if(formattedMessage.includes("&r&7dealt the final blow."))
                {cancel(e)
            }
            if(formattedMessage.includes("Damager - "))
                {cancel(e)
            } 
        }
    }
)
register("chat", (event) => cancel(event)).setCriteria(/.+ Damager - .+/)