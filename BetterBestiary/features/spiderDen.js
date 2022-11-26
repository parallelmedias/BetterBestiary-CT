import { PREFIX } from "../utils/utils";
import settings from "../settings";

////  Arachne Chat ////
register("chat", (e) => {
    if (settings.arachneChat){
        var formattedMessage = ChatLib.getChatMessage(e, true);
            if (formattedMessage.includes("[BOSS] Arachne&r&f: So it is time") || formattedMessage.includes("Something is awakening!")) {
                ChatLib.chat("&c&lArachne is nearby!")
                Client.showTitle("&c&lArachne!", "", 0, 50, 0);
                {cancel(e)}}
            if(formattedMessage.includes("ARACHNE DOWN!"))
                {cancel(e)}
            if(formattedMessage.includes("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬"))
                {cancel(e)}
            if(formattedMessage.includes("3rd Damager ${*}"))
                {cancel(e)}
            if(formattedMessage.includes("2nd Damager ${*}"))
                {cancel(e)}
            if(formattedMessage.includes("1st Damager ${*}"))
                {cancel(e)}
            if(formattedMessage.includes("dealt the final blow"))
                {cancel(e)}
    }
}) 