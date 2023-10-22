import { PREFIX, checkForParty } from "../../utils/Utils";
import settings from "../../config";

register("chat", (e) => {
    if (!settings.vanquisherAlerts) {
        var formattedMessage = ChatLib.getChatMessage(e, true);
    // TODO: check if player is in a party, if not, dont show the message
    // if(checkForParty()){
    //     if(formattedMessage.includes("&r&aA &r&cVanquisher &r&ais spawning nearby!&r")){	
    //         setTimeout(() => {
    //             ChatLib.command("pc x: " + Math.round(Player.getX()) + ", y: " + Math.round(Player.getY()) + ", z: " + Math.round(Player.getZ())+ `${PREFIX} | Vanquisher Spawned!`)
    //         }, 300);           
    //     }
    // }

    if(formattedMessage.includes("&r&aA &r&cVanquisher &r&ais spawning nearby!&r")){	
        setTimeout(() => {
            ChatLib.command("pc x: " + Math.round(Player.getX()) + ", y: " + Math.round(Player.getY()) + ", z: " + Math.round(Player.getZ())+ `${PREFIX} | Vanquisher Spawned!`)
        }, 300);           
    }
    };
    
})