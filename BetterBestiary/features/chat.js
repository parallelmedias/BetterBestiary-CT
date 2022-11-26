import { PREFIX } from "../utils/utils";

//// Remove Boss Messages ////
register("chat", (e) => {
    cancel(e)
}).setCriteria("[BOSS] ${*}")
//// Precursor Eye Messages ////
register("chat", (e) => {
    var formattedMessage = ChatLib.getChatMessage(e, true);
        if(formattedMessage.includes("Eye Beam"))
        {cancel(e)}
})
//// Horseman Chat ////
register("chat", (e) => {
    var formattedMessage = ChatLib.getChatMessage(e, true);
        if (formattedMessage.includes("has spawned the &r&6Headless Horseman boss &r&ein the &r&2Wilderness")) {
            ChatLib.chat("&c&lHorseman at Wilderness!")
            Client.showTitle("&c&lHorseman!", "Wilderness", 0, 50, 0);
            {cancel(e)}}
        if (formattedMessage.includes("has spawned the &r&6Headless Horseman boss &r&ein the &r&cGraveyard")) {
            ChatLib.chat("&c&lHorseman at Graveyard!")
            Client.showTitle("&c&lHorseman!", "Graveyard", 0, 50, 0);
            {cancel(e)}}
        if(formattedMessage.includes("HORSEMAN HORSE DOWN!"))
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
        if(formattedMessage.includes("DEBUFF! &fYou were splashed by &cBat"))
            {cancel(e)}
})
///// Dragon Chat ////
register("chat", (e) => {
    var formattedMessage = ChatLib.getChatMessage(e, true);
        if (formattedMessage.includes("Dragon&r&d&l has spawned!")) {
            Client.showTitle("&c&lDragon!", "", 0, 50, 0);
            {cancel(e)}}
        if(formattedMessage.includes("&r&dused &r&eLightning Strike"))
            {cancel(e)}
        if(formattedMessage.includes("&r&dused &r&eFireball"))
            {cancel(e)}
        if(formattedMessage.includes("&r&dused &r&eDragon Breath"))
            {cancel(e)}
        if(formattedMessage.includes("&r&dThe Dragon Egg has spawned!"))
            {cancel(e)}
        if(formattedMessage.includes("&r&d&lThe Dragon's Gate ${*}"))
            {cancel(e)}
        if(formattedMessage.includes("&r&ddestroyed an &r&5Ender Crystal"))
            {cancel(e)}
        if(formattedMessage.includes("&r&5Your Sleeping Eyes ${*}"))
            {cancel(e)}
})
//// Vanquisher Notifications ////
register("chat", (e) => {
    var formattedMessage = ChatLib.getChatMessage(e, true);
    if(formattedMessage.includes("&r&aA &r&cVanquisher &r&ais spawning nearby!&r")){	
        setTimeout(() => {
            ChatLib.command("pc x: " + Math.round(Player.getX()) + ", y: " + Math.round(Player.getY()) + ", z: " + Math.round(Player.getZ())+ `${PREFIX} | Vanquisher Spawned!`)
        }, 300);           
    }
})