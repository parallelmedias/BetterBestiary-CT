import {EntityArmorStand, isAreaInTab} from "../../utils/Utils";
import RenderLibV2 from "../../../RenderLibV2";

const Waypoints = [[41, 79, 81],[76, 76, 55],[91, 76, 38],[78, 77, 40],[82, 78, 26],[61, 78, 92],[94, 77, 42],[63, 76, 95],[103, 74, 98],[50, 80, 88],[35, 80, 71],[45, 79, 70],[79, 80, 73],[50, 76, 52],[95, 76, 58],[98, 78, 75],[55, 79, 34],[64, 78, 28],[58, 79, 89],[90, 77, 46],[60, 76, 51],[45, 79, 49],[89, 77, 84],[92, 74, 108],[75, 82, 20],[47, 77, 65],[97, 80, 77],[42, 77, 58],[51, 76, 52],[55, 80, 38],[63, 76, 52],[52, 75, 45],[73, 79, 52],[66, 81, 28],[78, 74, 99],[104, 78, 68],[39, 80, 73],[43, 79, 73],[36, 80, 80],[95, 76, 59],[97, 75, 70],[97, 81, 77],[46, 80, 84],[32, 80, 74],[43, 77, 50],[50, 79, 34],[90, 77, 38],[98, 77, 76],[73, 76, 31],[91, 77, 27]];

let isInGlacialCave = false;

register('step', () => {
    if(!World.isLoaded()) return;
    const scoreboardLines = Scoreboard.getLines().map(line => ChatLib.removeFormatting(line).replace(/[^a-zA-Z ]/g, '').trim());
    if (scoreboardLines.includes('Glacial Cave')) {
        isInGlacialCave = true;
    } else {
        isInGlacialCave = false;
    }
}).setDelay(1);

register('renderWorld', () => {

    if (isAreaInTab("Jerry")) {

        if (isInGlacialCave && World.isLoaded()) {

            gifts = World.getAllEntitiesOfType(EntityArmorStand);
            
            // look for armorstands at the waypoints
            gifts.forEach(gift => {
                const giftX = gift.getRenderX();
                const giftZ = gift.getRenderZ();

                Waypoints.forEach(waypoint => {
                    const waypointX = waypoint[0] + 0.5;
                    const waypointZ = waypoint[2] + 0.5;

                    if (giftX === waypointX && giftZ === waypointZ) {
                        RenderLibV2.drawInnerEspBox(giftX, gift.getRenderY()+1.5, giftZ, 1, 1, 1, 0, 0, 0.2, true);
                    }
                });
    }
            );
        }
    }
});