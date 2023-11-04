import settings from "../config";
import renderBeaconBeam from "../../BeaconBeam";
import { PREFIX, isInScoreboard, EntityArmorStand } from "../utils/Utils";

// Headless Horsemen Alerts
register("step", () => {
    if (settings.headlessHorsemenPartyAlerts){
        if (isInScoreboard("6:00pm")){
            ChatLib.command("pc Headless Horsemen!")
            ChatLib.command("ac Headless Horsemen!")
            Client.showTitle("&6&lHeadless Horsemen!", PREFIX, 0, 50, 0);
        }
        if (isInScoreboard("5:00am")){
            ChatLib.command("pc Good Morning!")
            ChatLib.command("ac Good Morning!")
            Client.showTitle("&6&lGood Morning!", PREFIX, 0, 50, 0);
        }

    }
}).setFps(1)

register("renderWorld", () => {
    horseman = World.getAllEntitiesOfType(EntityArmorStand) == "Headless Horseman"

    // if horseman is true, create a beacon beam at the horseman's location
    if (horseman){
        renderBeaconBeam(entity.getRenderX(), entity.getRenderY(), entity.getRenderZ(), 255, 0, 0, 0.75, true)
    }
})

